module.exports = {
    env: {
        es6: true,
        jest: true,
        node: true,
    },
    globals: {
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },
    parserOptions: {
        ecmaVersion: 8
    },
    plugins: [ 'jest']
}
