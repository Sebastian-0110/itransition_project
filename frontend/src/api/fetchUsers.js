import { endpoint } from "./utils.js";
import makeRequest from "./makeRequest.js";

async function fetchUsers() {
	const fetchCallingFunction = async () => {
		return await fetch(endpoint("/admin/users/"), {
			method: "GET", headers: { "Accept": "application/json" },
		});
	}

	return makeRequest(fetchCallingFunction);
}

export default fetchUsers;