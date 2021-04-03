import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.castle.games/graphql')

export default {
	login,
}

async function login(username: string, password: string): Promise<string> {
	const userId = await client
		.request(
			`
  query x($who: String!) {
    userForLoginInput(who: $who) {
      userId
    }
  }
`,
			{
				who: username,
			}
		)
		.then((res) => res.userForLoginInput.userId)

	return await client
		.request(
			`
  mutation x($userId: ID, $password: String!) {
    login(userId: $userId, password: $password) {
      token
    }
  }
`,
			{
				userId,
				password,
			}
		)
		.then((res) => res.login.token)
}
