const tasks = t => t.join(' && ')

module.exports = {
	hooks: {
		"pre-commit": tasks([
			"echo 'hi'",
		])
	},
}