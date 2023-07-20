const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@theme/schema',
		'@pages/home',
		'@ui/brand',
		'@ui/header',
		'@supabase/client',
		'@ux/parallax',
	],
}

module.exports = withBundleAnalyzer(nextConfig)
