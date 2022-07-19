import { formatDatetime } from '@/lib/formatter'
import { assert } from 'chai'

suite('formatter.ts', function () {
  /**
   * 日期时间格式化测试
   */
   suite('#formatDatetime()', function () {
    test('Should return true', function () {
      assert.equal(formatDatetime({
        datetime: new Date('2022'),
        format: 'YYYY'
      }), '2022')
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
      }), '2022-07-10 22:00:10')
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
        format: 'DD/MM/YYYY HH:mm:ss'
      }), '10/07/2022 22:00:10')
      assert.equal(formatDatetime({
        datetime: new Date('2022/07/10'),
        format: 'YYYY/MM-DD'
      }), '2022/07-10')
      assert.equal(formatDatetime({
        datetime: new Date(2022, 6, 18)
      }), '2022-07-18 00:00:00')
    })

    test('Should return false', function () {
      assert.notEqual(formatDatetime(), '')
      assert.notEqual(formatDatetime({
        datetime: new Date(),
        format: 'YYYY/MM/DD'
      }), '2022-07-18')
      assert.notEqual(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
      }), '2022/07/10 22:00:10')
      assert.notEqual(formatDatetime({
        datetime: new Date('2022/07/10 22:00:10'),
        format: 'DD/MM/YYYY HH:mm:ss'
      }), '2022/07/10 22:00:10')
      assert.notEqual(formatDatetime({
        datetime: new Date(2022, 7, 18)
      }), '2022-07-18')
    })
  })
})