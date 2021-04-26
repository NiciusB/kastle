import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated/api'

const client = new GraphQLClient('https://api.castle.games/graphql')
const castleApi = getSdk(client)

export default castleApi

export function setCastleApiUserToken(token: string) {
	client.setHeader('X-Auth-Token', token)
}
