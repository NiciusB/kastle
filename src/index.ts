import dotenv from 'dotenv'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './castle-api/generated/api'
dotenv.config()

const client = new GraphQLClient('https://api.castle.games/graphql')
const api = getSdk(client)

async function main() {
	if (!process.env.CASTLE_USERNAME || !process.env.CASTLE_PASSWORD) {
		throw new Error(
			'.env not configured correctly, missing username or password'
		)
	}

	const userId = await api
		.userForLoginInput({ who: process.env.CASTLE_USERNAME })
		.then((r) => r.userForLoginInput?.userId)
	const token = await api
		.login({
			userId,
			password: process.env.CASTLE_PASSWORD,
		})
		.then((r) => r.login?.token)

	if (!token) {
		throw new Error('Token not found')
	}

	client.setHeader('X-Auth-Token', token)

	const decks = await api.getMyDecks()
	console.log(JSON.stringify(decks, null, 2))
}
main()
