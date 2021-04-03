import dotenv from 'dotenv'
import castleApi from './castle-api'
import castleApiLogin from './castle-api/castleApiLogin'
dotenv.config()

async function main() {
	await castleApiLogin()

	const decks = await castleApi.getMyDecks()

	const firstDeckId = decks.me?.decks?.[0]?.deckId

	if (!firstDeckId) {
		throw new Error('No firstDeckId')
	}

	const deck = await castleApi.getDeck({ deckId: firstDeckId })

	console.log(JSON.stringify(deck.deck.title, null, 2))
}
main()
