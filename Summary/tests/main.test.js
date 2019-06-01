const sum = require('../src/js/main');

// 测试项
test("sum(1, 2)", () => {
   expect(sum(1, 2)).toBe(3);
});