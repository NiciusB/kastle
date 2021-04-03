import dotenv from 'dotenv'
import api from './castle-api'
dotenv.config()

async function main() {
	if (!process.env.CASTLE_USERNAME || !process.env.CASTLE_PASSWORD) {
		throw new Error(
			'.env not configured correctly, missing username or password'
		)
	}

	const token = await api.login(
		process.env.CASTLE_USERNAME,
		process.env.CASTLE_PASSWORD
	)
	console.log(token)
}
main()
