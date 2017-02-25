export function toClassName(object) {
	return Object.keys(object).filter(item => object[item] === true).join(' ');
}

export function removeKeys(props, keys) {
	let newProps = Object.assign({}, props);

	for (let key of keys) {
		newProps[key] = undefined;
	}

	return newProps;
}

export function filterKeys(props, keys) {
	let newProps = {};

	for (let key of keys) {
		newProps[key] = props[key];
	}

	return newProps;
}