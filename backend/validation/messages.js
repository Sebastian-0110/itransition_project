const messages = {
    maxLength: (field, max) => `${field} cannot exceed ${max} characters`,
    required: (field) => `${field} is required`,
    invalidFormat: (field) => `${field} has an invalid format`,
}

module.exports = messages;