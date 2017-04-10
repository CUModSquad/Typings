declare module 'react-animate.css' {
  export interface ReactAnimateProps {
    animationEnter: string;
    animationLeave: string;
    durationEnter: number;
    durationLeave: number;
  }
  class Animate extends React.Component<Partial<ReactAnimateProps>, {}> {}
  export default Animate;
}