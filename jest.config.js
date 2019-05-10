module.exports = {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['<rootDir>/configure-allure-reporter.js']
}
