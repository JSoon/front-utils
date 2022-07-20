import { formatDatetime, formatThousandSeparator, } from '@/lib/formatter';
import { assert, } from 'chai';

suite('formatter.ts', function () {
  /**
   * 日期时间格式化测试
   */
   suite('#formatDatetime()', function () {
    test('Should be equal', function () {
      assert.equal(formatDatetime({
        datetime: new Date('2022'),
        format: 'YYYY',
      }), '2022');
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
      }), '2022-07-10 22:00:10');
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
        format: 'DD/MM/YYYY HH:mm:ss',
      }), '10/07/2022 22:00:10');
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10'),
        format: 'YYYY/MM-DD',
      }), '2022/07-10');
      assert.equal(formatDatetime({
        datetime: new Date(2022, 6, 18),
      }), '2022-07-18 00:00:00');
      assert.equal(formatDatetime({
        datetime: 'abc',
      }), 'Invalid Date');
    });
  });

  /**
   * 数字千分位表示法
   */
   suite('#formatThousandSeparator()', function () {
    test('Should be equal', function () {
      assert.equal(formatThousandSeparator(), '0');
      assert.equal(formatThousandSeparator(1000), '1,000');
      assert.equal(formatThousandSeparator(1000000), '1,000,000');
      assert.equal(formatThousandSeparator(1000000000), '1,000,000,000');
      assert.equal(formatThousandSeparator(123456789.01), '123,456,789.01');
      assert.equal(formatThousandSeparator(-123456789.01), '-123,456,789.01');
      assert.equal(formatThousandSeparator(123456789.234), '123,456,789.23');
      assert.equal(formatThousandSeparator(123456789.235), '123,456,789.24');
      assert.equal(formatThousandSeparator(123456789.23446, { maximumFractionDigits: 3, }), '123,456,789.234');
      assert.equal(formatThousandSeparator(123456789.23456, { maximumFractionDigits: 3, }), '123,456,789.235');
      assert.equal(formatThousandSeparator(123456789, { style: 'currency', currency: 'CNY', currencyDisplay: 'narrowSymbol', }), '¥123,456,789.00');
      assert.equal(formatThousandSeparator(123456789, { style: 'currency', currency: 'CNY', currencyDisplay: 'narrowSymbol', notation: 'compact', }), '¥1.23亿');
      assert.equal(formatThousandSeparator(Number.MIN_SAFE_INTEGER - 1), 'Out of Range');
      assert.equal(formatThousandSeparator(Number.MAX_SAFE_INTEGER + 1), 'Out of Range');
      assert.equal(formatThousandSeparator('abc'), 'Invalid Number');
    });
  });
});