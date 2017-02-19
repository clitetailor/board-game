export default function toClassName(object) {
	return Object.keys(object).filter(item => object[item] === true).join(' ');
}