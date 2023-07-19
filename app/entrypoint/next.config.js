/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		"@theme/schema",
		"@pages/home",
		"@ui/brand",
		"@ui/header",
	]
}

module.exports = nextConfig
