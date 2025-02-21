lconst {defineConfig} = require('@vue/cli-service')

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const publicPath = process.env.NODE_ENV === "production" ? `/${repoName}/` : "/";

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/",
    outputDir: 'docs'
})
