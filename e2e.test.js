describe('получение ипотеки', () => {
    reporter.epic("Получение решения от банков");

    it('Кирилл и Лена хотят ипотеку (e2e)', async () => {
        reporter.startStep('Открываем сервис');
        await page.goto('http://localhost:3000');
        reporter.endStep();
        reporter.startStep('Отправка запроса на ипотеку');
        const button = await page.waitForXPath('//*[text()="Хочу ипотеку"]');
        await button.click();
        reporter.endStep();
        reporter.startStep('Обновление информациии о решении');
        await page.waitForXPath('//*[text()="Ждёмс..."]');
        reporter.endStep();
        reporter.startStep('Отображение решения банка');
        await page.waitForXPath('//*[text()="SUCCESS"]');
        reporter.endStep();
    });
});
