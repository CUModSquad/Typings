declare module 'react-pan-zoom-element' {
  export { PanZoomElement };

  class PanZoomElement extends React.Component<PanZoomProps, {}> {}

  export interface PanZoomProps {
    width: number;
    height: number;
  }
}

