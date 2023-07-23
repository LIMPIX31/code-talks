const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const workspaces = require('../../.yarn/artifacts/workspaces.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: workspaces,
	experimental: {
		serverActions: true,
	},
}

module.exports = withBundleAnalyzer(nextConfig)
