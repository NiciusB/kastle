export interface IToken {
	length: number
	type: string
	value: string
}

export default class Token implements IToken {
	public length: number
	public type: string
	public value: string

	constructor(type: string, length: number, value: string) {
		this.length = length
		this.type = type
		this.value = value
	}
}
