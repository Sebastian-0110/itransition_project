import { endpoint } from "./utils.js";
import makeRequest from "./makeRequest.js";

async function logout() {
	const fetchCallingFunction = async () => {
		return await fetch(endpoint("/auth/logout"), {
			method: "POST", headers: { "Accept": "application/json" },
		});
	}

	return await makeRequest(fetchCallingFunction);
}

export default logout;