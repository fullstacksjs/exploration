/** @param {Parameters<import('@svgr/babel-plugin-transform-svg-component').Template>['0']['jsx']} jsx */
const getJsxAttributeValue = (jsx) => (name) =>
  jsx.openingElement.attributes.find((att) => att.name.name === name)?.value
    ?.value;

/** @type {import('@svgr/babel-plugin-transform-svg-component').Template} */
const themeUISvgTemplate = (
  { jsx, imports, exports, componentName },
  { tpl },
) => {
  const getAttributeValue = getJsxAttributeValue(jsx);
  const viewBox = getAttributeValue('viewBox');
  const viewBoxProp = viewBox ? `viewBox: '${viewBox}',` : '';
  const props = `{ ${viewBoxProp} ...props }`;

  return tpl`
  import { jsx } from 'theme-ui';
  ${imports}
  const ${componentName} = (props) => jsx(
      'svg',
      ${props},
      ${jsx.children}
  );
  ${exports}
  `;
};

module.exports = themeUISvgTemplate;
