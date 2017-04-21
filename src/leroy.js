export class Leroy {
	constructor(styles, value) {
		this.value = value || '';
		this.styles = styles || {};
	}

	add(className, force) {
		if (force) {
			return new Leroy(this.styles,
				this.value
				+ ' '
				+ this.styles[className]);
		}

		return this;
	}

	remove(className, force) {
		if (force) {
			return new Leroy(this.styles,
				this.value
					.split(/\s+/)
					.filter(_className =>
						_className !== this.styles[className])
					.join(' '));
		}

		return this;
	}

	bulk(map) {
		const classString = Object.keys(map)
			.filter(_className => map[_className] === true)
			.map(_className => this.styles[_className])
			.join(' ')

		return Leroy(this.styles, this.value + ' ' + classString);
	}

	cls(classString) {
		return new Leroy(this.styles,
			this.value
			+ ' '
			+ classString.split(/\s+/)
				.map(_className =>
					this.styles[_className])
				.join(' '));
	}

	toggle(map) {
		let nextMap = {};

		const items = this.value.split(/\s+/);

		for (const item of items) {
			nextMap[item] = true;
		}

		for (const item in nextMap) {
			nextMap[this.styles[item]] = map[item];
		}

		return new Leroy(this.styles,
			Object.keys(nextMap)
				.filter(_className =>
					nextMap[_className])
				.join(' '))
	}

	pick(styles) {
		return new Leroy(styles, this.value);
	}

	join(classString) {
		return new Leroy(this.styles,
			this.value
			+ ' '
			+ classString);
	}

	put() {
		return this.value.trim();
	}

	valueOf() {
		return this.value.trim();
	}
}


export function leroy(styles) {
	return new Leroy(styles);
}

export default leroy;