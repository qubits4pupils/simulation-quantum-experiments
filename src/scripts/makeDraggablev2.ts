import {putSvgToTranslate} from "@/scripts/svgAnimation";
import {addTranslate} from "@/scripts/positioning";

export function getMousePosition(svg: SVGSVGElement, evt: MouseEvent | TouchEvent): { x: number, y: number } {
  const CTM = svg.getScreenCTM()!;
  let mouseEvt;
  if(evt instanceof MouseEvent) mouseEvt = evt;
  else{
    if(evt.touches.length !== 0) mouseEvt = evt.touches[0];
    else mouseEvt = evt.changedTouches[0]; // TouchEnd event doesnt use touches, only changedTouches
  }
  // console.log('mouseEvt=', mouseEvt);
  return {
    x: (mouseEvt.clientX - CTM.e) / CTM.a,
    y: (mouseEvt.clientY - CTM.f) / CTM.d
  };
}

const dropTargets: DropTarget[] = [];

export function makeDropTarget(svgRoot: SVGSVGElement, el: SVGSVGElement, listeners: Partial<Listeners>) {
  dropTargets.push({
    el: el,
    bbox: (el as SVGSVGElement).getBBox(),
    listeners
  })
}

function isInBBox(position: Point, bbox: BBox) {
  return position.x >= bbox.x && position.y >= bbox.y &&
    position.x <= bbox.x + bbox.width && position.y <= bbox.y + bbox.height;
}

// https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/
export function makeDraggable(svgRoot: SVGSVGElement, el: SVGSVGElement, dragTargetClass: string, onNoDrop?: (coord: Point) => void) {
  let selectedElement: SVGSVGElement | null = null;
  let currentlyHovered: DropTarget[] = [];

  function updateOnHover(point: Point, selectedElement: SVGSVGElement, dragTargetClass: string) {
    const result = [];
    for (const dropTarget of dropTargets) {
      const isOverBox = isInBBox(point, dropTarget.bbox);
      const isTarget = dropTarget.el.classList.contains(dragTargetClass);
      // on Hover
      if (isOverBox && isTarget) {
        if (!currentlyHovered.includes(dropTarget)) {
          if (dropTarget.listeners.onDragEnter)
            dropTarget.listeners.onDragEnter(selectedElement, point);
        }
        if (dropTarget.listeners.onDragHover)
          dropTarget.listeners.onDragHover(selectedElement!, point);
        result.push(dropTarget);
      } else if (currentlyHovered.includes(dropTarget)) {
        if (dropTarget.listeners.onDragLeave)
          dropTarget.listeners.onDragLeave(/*TODO*/);
      }
    }

    currentlyHovered = result;
  }

  function startDrag(evt: MouseEvent | TouchEvent) {
    console.debug('startDrag called')
    if (!el.classList.contains('disabled')) {
      selectedElement = el;
      el.style.cursor = 'grabbing';
    }
  }

  function drag(evt: MouseEvent | TouchEvent) {
    if (selectedElement) {
      evt.preventDefault();
      const coord = getMousePosition(svgRoot, evt);
      putSvgToTranslate(selectedElement, coord);
      updateOnHover(coord, selectedElement, dragTargetClass);
    }
  }

  function endDrag(evt: MouseEvent | TouchEvent) {
    if(selectedElement == null) return;
    console.debug('endDrag called')
    const coord = getMousePosition(svgRoot, evt);
    const dropCandidates = dropTargets.filter(dt => {
      return currentlyHovered.includes(dt)
    });
    if (dropCandidates.length) {
      dropCandidates.forEach(dc => {
        if (dc.listeners.onDrop) dc.listeners.onDrop!(selectedElement!, dc.el, coord)
      })
    } else if (onNoDrop) {
      onNoDrop(coord);
    }
    el.style.cursor = '';
    selectedElement = null;
    currentlyHovered = [];
  }

  el.addEventListener('mousedown', (ev) => {
    if (ev.which === 1)
      startDrag(ev)
  });
  svgRoot.addEventListener('mousemove', drag);
  svgRoot.addEventListener('mouseup', (ev) => {
    if (ev.which === 1)
      endDrag(ev)
  });
  svgRoot.addEventListener('mouseleave', (ev) => {
    if (selectedElement) {
      endDrag(ev);
    }
  });

  el.addEventListener('touchstart', startDrag);
  el.addEventListener('touchmove', drag);
  el.addEventListener('touchend', (ev)=>{
    endDrag(ev);
  });
  el.addEventListener('touchleave', (ev)=>{
    endDrag(ev as any);
  });
  el.addEventListener('touchcancel', (ev)=>{
    endDrag(ev);
  });
}

export function makeDropZoneDropTarget(svgRoot: SVGSVGElement, zone: SVGSVGElement, dragTargetClass: string) {
  // console.log('making drop zone drop targets, root=', svgRoot, 'zone=', zone)
  let ghostElement: SVGSVGElement | null = null;
  let ghostElementBB: BBox | null = null;
  const zoneBB = (zone as SVGSVGElement).getBBox();
  const zoneX = zoneBB.x + zoneBB.width / 2;
  const zoneY = zoneBB.y + zoneBB.height / 2;
  zone.classList.add(dragTargetClass);

  makeDropTarget(
    svgRoot,
    zone,
    {
      onDragEnter: (el: SVGSVGElement, point: Point) => {
        console.debug('basedropzone: drag entered!')
        ghostElement = (el.cloneNode(true) as SVGSVGElement);
        ghostElement.setAttribute('opacity', '0.5');
        addTranslate(svgRoot, ghostElement);
        ghostElementBB = (ghostElement as SVGSVGElement).getBBox();
        putSvgToTranslate(ghostElement, {
          x: zoneX,
          y: zoneY
        })
        // console.log('attempting to insert on parent first the second as sibling before third', svgRoot, ghostElement, el)
        svgRoot.insertBefore(ghostElement, el);
      },
      onDragLeave: () => {
        console.debug('basedropzone: drag left!')
        svgRoot.removeChild(ghostElement!);
      },
      onDrop: (el: SVGSVGElement, dropZone, point) => {
        console.debug('basedropzone: drop!');
        (el as any).currentPosition = dropZone.id;
        putSvgToTranslate(el!, {
          x: zoneX,
          y: zoneY
        })
        svgRoot.removeChild(ghostElement!);
      },
      // onDragHover: (el: SVGElement, point: Point) => {
      //   console.log('DragHover, el=', el, 'ghostelement=', ghostElement)
      //   putSvgToTranslate(ghostElement!, {
      //     x: point.x,
      //     y: zoneY
      //   })
      // }
    }
  );
}


