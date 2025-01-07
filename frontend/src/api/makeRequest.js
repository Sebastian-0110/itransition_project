import { errorOccurred, getData, unsuccessfulResponse } from "src/api/utils.js";

const makeRequest = async (fetchCallingFunction) => {
	try {
		const result = await fetchCallingFunction();

		const data = await getData(result);
		if (!result.ok) return unsuccessfulResponse(result, data);
		return { success: true, data };

	} catch (error) {
		return errorOccurred(error);
	}
}

export default makeRequest;