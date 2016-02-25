// Type definitions for classnames 2.2.3
// Project: https://github.com/JedWatson/classnames
// Definitions by: saddieeiddas <saddie.eiddas@gmail.com>

declare namespace __ClassNames {
	type ClassValue = string | number | ClassDictionary | ClassArray;
	interface ClassDictionary {
		[id: string]: boolean;
	}
	interface ClassArray extends Array<ClassValue> { }
	interface ClassNamesFn {
		(...classes: ClassValue[]): string;
	}
	var classNames: ClassNamesFn;
}
declare module "classnames" {
	export default __ClassNames.classNames
}
