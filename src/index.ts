import dotenv from 'dotenv'
import castleApi, { setCastleApiUserToken } from './castle-api'
dotenv.config()

async function main() {
	if (!process.env.CASTLE_USERNAME || !process.env.CASTLE_PASSWORD) {
		throw new Error(
			'.env not configured correctly, missing username or password'
		)
	}

	const userId = await castleApi
		.userForLoginInput({ who: process.env.CASTLE_USERNAME })
		.then((r) => r.userForLoginInput?.userId)
	const token = await castleApi
		.login({
			userId,
			password: process.env.CASTLE_PASSWORD,
		})
		.then((r) => r.login?.token)

	if (!token) {
		throw new Error('Token not found')
	}

	setCastleApiUserToken(token)

	const decks = await castleApi.getMyDecks()
	console.log(JSON.stringify(decks, null, 2))
}
main()
