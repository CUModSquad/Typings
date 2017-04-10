declare module 'react-draggable' {
  export {
    Draggable,
    DraggableCore
  }

  export type DraggableEventHandler = (e: Event, data: any) => void | false;
  export type DraggableData = {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
  }

  export interface DraggableProps {
    allowAnyClick: boolean;
    axis: string;
    bounds: { left: number, top: number, rigth: number, bottom: number };
    cancel: string;
    defaultClassName: string;
    defaultClassNameDragging: string;
    defaultClassNameDragged: string;
    defaultPosition: { x: number, y: number };
    disabled: boolean;
    grid: [number, number];
    handle: string;
    offsetParent: HTMLElement;
    onMouseDown: (e: MouseEvent) => void;
    onStart: DraggableEventHandler;
    onDrag: DraggableEventHandler;
    onStop: DraggableEventHandler;
    position: { x: number, y: number };
    zIndex?: number;
  }

  class Draggable extends React.Component<Partial<DraggableProps>, {}> {};
  class DraggableCore extends React.Component<Partial<DraggableProps>, {}> {};
}