declare module 'intro.js-react' {
  // Steps component
  export class Steps extends React.Component<StepsProps, {}> {
  }

  export interface StepInfo {
    element: string;
    intro: string;
    position?: string;
    tooltipClass?: string;
    highlightClass?: string;
  }

  export interface StepsProps {
    enabled?: boolean;
    initialStep: number;
    steps: StepInfo[];
    onExit?: (index: number) => void;
    onStart?: (index: number) => void;
    onChange?: (nextIndex: number, nextElement: string) => void;
    onBeforeChange?: (nextIndex: number) => void;
    onAfterChange?: (index: number, element: string) => void;
    onPreventChange?: (index: number) => void;
    onComplete?: () => void;
    options?: any;
  }

  // Hints component
  export class Hints extends React.Component<HintsProps, {}> {
  }

  export interface HintInfo {
    element: string;
    hint: string;
    hintPosition?: string;
  }

  export interface HintsProps {
    enabled?: boolean;
    hints: HintInfo[];
    onClick?: () => void;
    onClose?: () => void;
    options: any;
  }
}