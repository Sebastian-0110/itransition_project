import { endpoint } from "src/api/api.js";
import { unsuccessfulResponse, errorOccurred, getData } from "./utils.js";


const makeRequest = async () => {
	const result = await fetch(endpoint("/auth/status"), {
		method: "GET",
		headers: { "Accept": "application/json" }
	});

	const data = await getData(result);
	if (!result.ok) return unsuccessfulResponse(result, data);
	return { success: true, data }
}

async function fetchAuthState() {
	try {
		return await makeRequest();
	}

	catch (error) {
		return errorOccurred(error);
	}
}

export default fetchAuthState;