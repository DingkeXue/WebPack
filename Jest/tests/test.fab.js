const fab = require('../src/main');

test("fab5", () => {
   expect(fab(5)).not.toBe(3);
});