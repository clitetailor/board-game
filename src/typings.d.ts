declare let styles: any;

declare module "*.styl";
declare module "*.jpg";
declare module "*.svg";
declare module "*.html";
declare module "*.css";

declare module "bundle*";

declare module "leroy" {
	export class Leroy {
		add(className: string, force: boolean)

		cls(className: string)

		remove(className, force: boolean)
	}

	export function leroy(styles: any):Leroy;
}

declare module "immu-func/polyfill"