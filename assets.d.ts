/* eslint-disable no-unused-vars */
interface SxComponent {
  sx?: import('theme-ui').ThemeUIStyleObject;
}

type SVGProps = JSX.IntrinsicElements['svg'] & import('theme-ui').SxProp;
type SVGComponent = React.FC<SVGProps>;

declare module '*.svg' {
  const asset: SVGComponent;
  export default asset;
}
