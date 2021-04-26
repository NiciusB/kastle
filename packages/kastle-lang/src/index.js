import { Parser } from 'ts-jison'

// a grammar in JSON
const grammar = {
	lex: {
		rules: [
			['\\s+', '/* skip whitespace */'],
			['[a-f0-9]+', "return 'HEX';"],
		],
	},

	bnf: {
		hex_strings: ['hex_strings HEX', 'HEX'],
	},
}

// `grammar` can also be a string that uses jison's grammar format
const parser = new Parser(grammar)

// generate source, ready to be written to disk
const parserSource = parser.generate()

console.log(parserSource)

// you can also use the parser directly from memory

// returns true
parser.parse('adfe34bc e82a')

// throws lexical error
parser.parse('adfe34bc zxg')
