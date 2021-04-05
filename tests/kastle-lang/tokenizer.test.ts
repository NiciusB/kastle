import { tokenizeProgram } from '../../src/kastle-lang/tokenizer'

test('tokenizes empty program', () => {
	const res = tokenizeProgram(``)

	expect(res.tokens).toHaveLength(0)
})

test('tokenizes simple program', () => {
	const res = tokenizeProgram(`
# This is a comment
blueprint1 {
	@Created {
		$a = 1
	}
}
`)

	expect(res.tokens).toHaveLength(2)
	expect(res.tokens[0]).toMatchObject({
		length: 2,
		type: 'numbers',
		value: '12',
	})
	expect(res.tokens[1]).toMatchObject({
		length: 3,
		type: 'numbers',
		value: '343',
	})
})
