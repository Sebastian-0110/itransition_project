import { endpoint } from "./utils.js";
import makeRequest from "./makeRequest.js";

async function updateRole(id, role) {
	const fetchCallingFunction = async () => {
		return await fetch(endpoint(`/admin/users/${id}/role`), {
			method: "PATCH",
			body: JSON.stringify({ role }),
			headers: { "Content-Type": "application/json" },
		});
	}

	return await makeRequest(fetchCallingFunction());
}

export default updateRole;