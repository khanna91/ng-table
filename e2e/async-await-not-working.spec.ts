import { browser, by, element } from 'protractor';

describe('async/await support', () => {
    it('not working', async function() : Promise<any> {
        browser.get('es5/index.html');
        const rows = element.all(by.repeater('user in $data'));

        // this works because we're NOT using async/await
        rows.count().then((val: number) => {
            if (val > 0) {
                expect(rows.get(0).isPresent()).toBe(true);
            }
        });
        
        // the following (commented out code) is equivalent to the above, but fails to compile
        // with the error "operand for 'await' does not have a valid callable 'then' member"

        // if ((await rows.count()) > 0) {
        //     expect(rows.get(0).isPresent()).toBe(true);
        // }
    });
});