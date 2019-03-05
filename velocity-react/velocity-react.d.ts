declare module 'velocity-react' {

  export type VelocityComponentProps = {
    children: React.ReactElement<any>;
    animation?: any; // default null
    runOnMount?: boolean; // default false
    targetQuerySelector?: string; // default null
    interruptBehavior?: string; // default 'stop'
  } & Partial<jquery.velocity.Options>;
  export type VelocityComponent = React.Component<VelocityComponentProps, {}>;

  export type VelocityTransitionGroupProps = {
    runOnMount?: boolean;
    enter?: any;
    leave?: any;
    children?: any;
    enterHideStyle?: object;
    enterShowStyle?: object;
  }
  export type VelocityTransitionGroup = React.Component<VelocityTransitionGroupProps, {}>;


}