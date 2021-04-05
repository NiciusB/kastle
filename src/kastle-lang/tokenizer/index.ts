// Tokenizer based on https://github.com/ElijahKotyluk/ts-tokenizer

import Lexer from './lexer'

export { ILexer, default as Lexer } from './lexer'
export { IRule, default as Rule } from './rule'
export { IState, default as State } from './state'
export { IToken, default as Token } from './token'

export function tokenizeProgram(program: string) {
	const lexer = new Lexer()

	lexer.addRule('start_comment', /#/)
	lexer.addRule('new_line', /\n/)
	lexer.addRule('integer', /[0-9]+/)
	lexer.addRule('string', /\w+/)
	lexer.addRule('variable_start', /\$/)

	lexer.setInput(program)
	while (lexer.scan()) {
		// Scan all
	}

	return lexer.state
}
