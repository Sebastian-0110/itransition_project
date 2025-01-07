import { endpoint } from "./utils.js";
import makeRequest from "./makeRequest.js";

async function fetchAuthState() {
	const fetchCallingFunction = async () => {
		return await fetch(endpoint("/auth/status"), {
			method: "GET",
			headers: { "Accept": "application/json" }
		});
	}

	return makeRequest(fetchCallingFunction);
}


export default fetchAuthState;