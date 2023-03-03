export function getSvgCenter(magnet: SVGSVGElement) {
  const bb = magnet.getBBox();
  const pos = getTranslate(magnet);
  return {
    x: pos.x + bb.width / 2,
    y: pos.y + bb.height / 2
  };
}


export function getTranslate(el: SVGSVGElement) {
  const matrix = new WebKitCSSMatrix(window.getComputedStyle(el).transform); // TODO might lead to webkit problems
  return {x: matrix.e, y: matrix.f}
}

(window as any).getTranslate = getTranslate;

export function centerSvgEl(svg: SVGSVGElement, el: SVGSVGElement) {
  const isCentered = el.transform.baseVal.length <= 1; // Note: for some reason the transforms when registered via insertItemBefore will persist while navigating back and forth. This fixes this issue.
  // console.log('length of transforms=', isCentered)
  if(isCentered){
    const bb = el.getBBox();
    const translateCentering = svg.createSVGTransform();
    translateCentering.setTranslate(-bb.x - bb.width / 2, -bb.y - bb.height / 2);
    el.transform.baseVal.insertItemBefore(translateCentering, 9999); // put it in the back
  }
}

export function addTranslate(svg: SVGSVGElement, el: SVGSVGElement) {
  const transforms = el.transform.baseVal;
  // Ensure the first transform is a translate transform
  if ((transforms as any).length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
    const translate = svg.createSVGTransform();
    translate.setTranslate(0, 0);
    el.transform.baseVal.insertItemBefore(translate, 0);
  }
}

export function generateSvgUsingTemplate(svgRoot: SVGSVGElement, templateElement: SVGSVGElement) {
  const clone = (templateElement.cloneNode(true) as SVGSVGElement);
  addTranslate(svgRoot, clone);
  clone.style.visibility = 'visible';
  clone.style.display = ''; // TODO both necessary?
  return clone;
}

export function getCenterOfSVGEl(el: SVGSVGElement) {
  const bb = el.getBBox();
  return {
    x: bb.x + bb.width / 2,
    y: bb.y + bb.height / 2
  };
}
