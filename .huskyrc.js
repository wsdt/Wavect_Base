const tasks = t => t.join(' && ')

module.exports = {
	hooks: {
		"pre-commit": tasks([
			"cd s_backend/s_b_core/",
			"yarn start prettier",
			"echo '## BACKEND DONE ##'",
			"cd ../../s_frontend/s_web/",
			"yarn start prettier",
			"echo '## WEB DONE ##'",
			"cd ../s_mobile/",
			"yarn start prettier",
			"echo '## MOBILE DONE ##'",
		])
	},
}