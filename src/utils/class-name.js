export function toClassName(object) {
	return Object.keys(object).filter(item => object[item] === true).join(' ');
}

export function removeKeys(props, keys) {
	const newProps = Object.assign({}, props);

	for (const key of keys) {
		delete newProps[key];
	}

	return newProps;
}

export function filterKeys(props, keys) {
	const newProps = {};

	for (const key of keys) {
		newProps[key] = props[key];
	}

	return newProps;
}