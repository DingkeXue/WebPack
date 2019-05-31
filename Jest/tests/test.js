const fab = require('../src/main');

test("fab", () => {
    expect(fab(3)).toBe(2);
});

test("fab4", () => {
    expect(fab(4)).toBe(3);
});