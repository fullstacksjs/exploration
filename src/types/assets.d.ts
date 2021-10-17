interface SxComponent {
  sx?: import('theme-ui').ThemeUIStyleObject;
}

type SVGProps = JSX.IntrinsicElements['svg'] & import('theme-ui').SxProp;
type SVGComponent = React.FC<SVGProps>;

declare module '*.svg' {
  const url: string;
  export const ReactComponent: SVGComponent;
  export default content;
}

declare module '*.png' {
  const url: string;
  export default url;
}
