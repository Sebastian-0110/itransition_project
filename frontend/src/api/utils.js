export const unsuccessfulResponse = (result, data) => {
	return {
		success: false,
		error: { status: result.status, message: data.message || "An unknown error occurred" }
	}
}

export const errorOccurred = (error) => {
	return {
		success: false,
		error,
	}
}

export const getData = async (result) => {
	const contentType = result.headers.get("content-type");
	if (contentType?.includes("application/json")) {
		try {
			return await result.json();
		}

		catch (_) {
			return await result.text();
		}
	}

	return await result.text();
}