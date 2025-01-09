function errorHandler(err, req, res, next) {
	console.log(err.stack);

	if (err.name) {
		return res.status(err.statusCode).json({ name: err.name, message: err.message });
	}

	return res.status(500).json({ message: "Internal Server Error" });
}

module.exports = errorHandler;