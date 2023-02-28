type Point = {
  x: number,
  y: number
}
// TODO make coord and Point unubiqoutos or whatever the word is
type BBox = { x: number, y: number, width: number, height: number };
type Listeners = {
  onDragEnter: (el: SVGSVGElement, point: Point) => void,
  onDragLeave: () => void,
  onDrop: (el: SVGSVGElement, dropZone: SVGSVGElement, coord: Point) => void,
  onDragHover: (el: SVGSVGElement, coord: Point) => void
}

type DropTarget = {
  el: SVGSVGElement,
  bbox: BBox,
  listeners: Partial<Listeners>
}
