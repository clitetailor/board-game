export function toClassName(object) {
	return Object.keys(object).filter(item => object[item] === true).join(' ');
}

export function removeKeys(props: any, keys: string[]) {
	const newProps = Object.assign({ }, props);

	for (const key of keys) {
		delete newProps[key];
	}

	return newProps;
}

export function filterKeys(props: any, keys: string[]) {
	const newProps: any = {};

	for (const key of keys) {
		newProps[key] = props[key];
	}

	return newProps;
}