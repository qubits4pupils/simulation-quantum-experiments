export function getPosition(svgEl: SVGElement): Point {
  return (svgEl as SVGSVGElement).getBBox()
}

// export function putSvgTo(el: SVGElement, point: { x: number, y: number }) {
//   if (el.tagName === 'circle') {
//     el.setAttribute('cx', String(point.x));
//     el.setAttribute('cy', String(point.y));
//   } else {
//     el.setAttribute('x', String(point.x));
//     el.setAttribute('y', String(point.y));
//   }
// }

export function putSvgToTranslate(el: SVGSVGElement, point: Point) {
  el.transform.baseVal.getItem(0).setTranslate(point.x, point.y);
}

/**
 * */
export function moveElementAlongPath(el: SVGSVGElement, getPointAtAlpha: (alpha: number) => Point, duration: number) {
  const fps = 60;
  const totalUpdates = fps * duration;
  let i = 0;

  const interval = setInterval(() => {
    const point = getPointAtAlpha(i / totalUpdates);
    putSvgToTranslate(el, point);
    i++;
    if (i == totalUpdates) {
      clearInterval(interval);
    }
  }, 1000 / fps)
}

/**
* */
export function moveElementAlongPathElement(el: SVGSVGElement, path: SVGPathElement, duration: number) {
  const totalLength = path.getTotalLength();

  function getPointAtAlpha(alpha: number) {
    return path.getPointAtLength(totalLength * alpha);
  }

  moveElementAlongPath(el, getPointAtAlpha, duration);
}

/**
 * */
export function moveElementAlongPathElementAtSpeed(el: SVGSVGElement, path: SVGPathElement, speed: number) {
  const totalLength = path.getTotalLength();
  const duration = totalLength / speed;

  function getPointAtAlpha(alpha: number) {
    return path.getPointAtLength(totalLength * alpha);
  }

  moveElementAlongPath(el, getPointAtAlpha, duration);
}

/**
 * */
export function moveToPosition(el: SVGSVGElement, position: Point, duration: number) {
  const initPosition = getPosition(el);
  const offset = {
    x: position.x - initPosition.x,
    y: position.y - initPosition.y
  }

  console.log('offset=', offset);

  function getPointAtAlpha(alpha: number) {
    const newPos = {
      x: initPosition.x + offset.x * alpha,
      y: initPosition.y + offset.y * alpha
    };
    console.log('alpha=', alpha, 'pos=', newPos)
    return newPos;
  }

  moveElementAlongPath(el, getPointAtAlpha, duration);
}
