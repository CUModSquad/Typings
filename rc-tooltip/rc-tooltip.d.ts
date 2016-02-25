// Type definitions for rc-tooltip 3.3.2 
// Project: https://github.com/react-component/tooltip
// Definitions by: saddieeiddas <saddie.eiddas@gmail.com>

/// <reference path="../react/react.d.ts" />

declare namespace __RcTooltip {
	class RcTooltip extends __React.Component<RcTooltipProps, any> {
		constructor(props: RcTooltipProps);
	}
	interface RcTooltipProps {
		key?: any;
		overlayClassName?: string;
		trigger?: string[];
		mouseEnterDelay?: number;
		mouseLeaveDelay?: number;
		overlayStyle?: any;
		prefixCls?: string;
		transitionName?: string;
		onVisibleChange?: any;
		visible?: boolean;
		defaultVisible?: boolean;
		placement?: any;
		align?: any;
		overlay?: any;
		arrowContent?: any;
		getTooltipContainer?: any;
		destroyTooltipOnHide?: boolean;
	}
}
declare module "rc-tooltip" {
	export default __RcTooltip.RcTooltip;
}
