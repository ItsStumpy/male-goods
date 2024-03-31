import path from "path"
import fs from "fs"

// interface for server info
export interface IServerInfo {
	smtp: {
		host: string, port: number,
		auth: {
			user: string, pass: string
		}
	},
	imap: {
		host: string, port: number,
		auth: {
			user: string, pass: string
		}
	}
}

// configured server info
export let serverInfo: IServerInfo

// read serverInfo.json
const rawInfo: string = fs.readFileSync(path.join(__dirname, "../serverInfo.json"))
serverInfo = JSON.parse(rawInfo)