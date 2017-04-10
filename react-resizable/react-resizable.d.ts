declare module 'react-resizable' {
  export {
    Resizable,
    ResizableBox
  }

  export interface ResizableProps {
    children: any;
    width: number;
    height: number;
    handleSize: [number, number];
    lockAspectRatio: boolean;
    axis: 'both' | 'x' | 'y' | 'none';
    minConstraints: [number, number];
    maxConstraints: [number, number];
    onResizeStop: (e: any, r: any) => void;
    onResizeStart: (e: any, r: any) => void;
    onResize: (e: any, r: any) => void;
    draggableOpts: Object
  }

  class Resizable extends React.Component<Partial<ResizableProps>, {}> {}
  class ResizableBox extends React.Component<Partial<ResizableProps>, {}> {}
}