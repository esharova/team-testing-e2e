describe('получение ипотеки', () => {
    it('Кирилл и Лена хотят ипотеку', async () => {
        await page.goto('http://localhost:3000');
        const button = await page.waitForXPath('//*[text()="Хочу ипотеку"]');
        await button.click();
        await page.waitForXPath('//*[text()="Ждёмс..."]');
        await page.waitForXPath('//*[text()="SUCCESS"]');
    });
});
