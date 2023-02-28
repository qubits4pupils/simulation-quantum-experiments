// import {putSvgTo} from "~/src/svgAnimation";
//
// export function getMousePosition(svg : SVGSVGElement, evt: MouseEvent): { x: number, y: number } {
//   let CTM = svg.getScreenCTM()!;
//   return {
//     x: (evt.clientX - CTM.e) / CTM.a,
//     y: (evt.clientY - CTM.f) / CTM.d
//   };
// }
//
// // https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/
// export function  makeDraggable(svgRoot: SVGSVGElement, el: SVGElement) {
//   let selectedElement: SVGElement | null = null;
//   let widthOffset = 0;
//   let heightOffset = 0;
//
//   function startDrag(evt: MouseEvent) {
//     console.log('startDrag called')
//     selectedElement = el;
//     widthOffset = (selectedElement as SVGSVGElement).getBBox().width/2
//     heightOffset = (selectedElement as SVGSVGElement).getBBox().height/2
//   }
//
//   function drag(evt: MouseEvent) {
//     // console.log('test123')
//     if (selectedElement) {
//       evt.preventDefault();
//       let coord = getMousePosition(svgRoot, evt);
//       const point = {
//         x: coord.x - widthOffset,
//         y: coord.y - heightOffset
//       };
//       putSvgTo(selectedElement, point)
//     }
//   }
//
//   function endDrag(evt: MouseEvent) {
//     console.log('endDrag called')
//     selectedElement = null;
//   }
//
//   el.addEventListener('mousedown', startDrag);
//   el.addEventListener('mousemove', drag);
//   el.addEventListener('mouseup', endDrag);
//   svgRoot.addEventListener('mouseleave', endDrag);
// }
//
// export function makeDropTarget(svgRoot: SVGSVGElement, el: SVGElement){
//   function onDrop(evt?: any){
//     console.log('onDrop, event=', evt)
//   }
//
//   function onDropHover(evt?: any){
//     console.log('onDropHover, event=', evt)
//   }
//
//   el.addEventListener('drop', onDrop);
//   el.addEventListener('drophover', onDropHover);
//   // el.addEventListener('mouseenter', onDropHover);
//   // el.addEventListener('mouseleave', onDropHover);
// }
