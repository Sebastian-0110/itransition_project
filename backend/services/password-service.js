const argon2 = require("argon2");


async function generatePasswordHash(password) {
	return await argon2.hash(password);
}

async function comparePasswordHash(hash, password) {
	return await argon2.verify(hash, password);
}

module.exports =  { generatePasswordHash, comparePasswordHash };