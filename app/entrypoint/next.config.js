/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		"@theme/schema",
		"@pages/home",
	]
}

module.exports = nextConfig
