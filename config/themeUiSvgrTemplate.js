const getJsxAttributeValue = (jsx) => (name) =>
  jsx.openingElement.attributes.find((att) => att.name.name === name)?.value
    ?.value;

function themeUiSvgTemplate(
  { template },
  opts,
  { interfaces, imports, componentName, jsx, exports },
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  const getAttributeValue = getJsxAttributeValue(jsx);
  const viewBox = getAttributeValue('viewBox');
  const viewBoxProp = viewBox ? `viewBox: '${viewBox}',` : '';
  const props = `{ ${viewBoxProp} ...props }`;

  return typeScriptTpl.ast`
  import { jsx } from 'theme-ui';
  ${imports}
  ${interfaces}
  const ${componentName} = (props) => jsx(
      'svg',
      ${props},
      ${jsx.children}
  );
  ${exports}
  `;
}

module.exports = themeUiSvgTemplate;
