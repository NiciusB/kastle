import dotenv from 'dotenv'
import castleApi from './castle-api'
import castleApiLogin from './castle-api/castleApiLogin'
dotenv.config()

async function main() {
	await castleApiLogin()

	const decks = await castleApi.getMyDecks()
	console.log(JSON.stringify(decks, null, 2))
}
main()
