import { assert } from 'chai'
import { checkEmail, checkNumberPlate } from '../lib/validator'

suite('validator.ts', function () {
  /**
   * 邮箱地址测试
   * @description 邮箱测试用例参考自chromium
   * @see {@link https://cs.chromium.org/chromium/src/third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&sq=package:chromium&dr}
   */
  suite('#checkEmail()', function () {
    test('Should return true', function () {
      assert.equal(checkEmail('something@something.com'), true)
      assert.equal(checkEmail('someone@localhost.localdomain'), true)
      assert.equal(checkEmail('someone@127.0.0.1'), true)
      assert.equal(checkEmail('a@b.b'), true)
      assert.equal(checkEmail('a/b@domain.com'), true)
      assert.equal(checkEmail('{}@domain.com'), true)
      assert.equal(checkEmail('m*\'!%@something.sa'), true)
      assert.equal(checkEmail('tu!!7n7.ad##0!!!@company.ca'), true)
      assert.equal(checkEmail('%@com.com'), true)
      assert.equal(checkEmail('!#$%&\'*+/=?^_`{|}~.-@com.com'), true)
      assert.equal(checkEmail('.wooly@example.com'), true)
      assert.equal(checkEmail('wo..oly@example.com'), true)
      assert.equal(checkEmail('someone@do-ma-in.com'), true)
      assert.equal(checkEmail('somebody@example'), true)
    })
    test('Should return false', function () {
      assert.equal(checkEmail('invalid:email@example.com'), false)
      assert.equal(checkEmail('@somewhere.com'), false)
      assert.equal(checkEmail('example.com'), false)
      assert.equal(checkEmail('@@example.com'), false)
      assert.equal(checkEmail('a space@example.com'), false)
      assert.equal(checkEmail('something@ex..ample.com'), false)
      assert.equal(checkEmail('a\b@c'), false)
      assert.equal(checkEmail('someone@somewhere.com.'), false)
      assert.equal(checkEmail('""test\blah""@example.com'), false)
      assert.equal(checkEmail('"testblah"@example.com'), false)
      assert.equal(checkEmail('someone@somewhere.com@'), false)
      assert.equal(checkEmail('someone@somewhere_com'), false)
      assert.equal(checkEmail('someone@some:where.com'), false)
      assert.equal(checkEmail('.'), false)
      assert.equal(checkEmail('F/s/f/a@feo+re.com'), false)
      assert.equal(checkEmail('some+long+email+address@some+host-weird-/looking.com'), false)
      assert.equal(checkEmail('a @p.com'), false)
      assert.equal(checkEmail('a\u0020@p.com'), false)
      assert.equal(checkEmail('a\u0009@p.com'), false)
      assert.equal(checkEmail('a\u000B@p.com'), false)
      assert.equal(checkEmail('a\u000C@p.com'), false)
      assert.equal(checkEmail('a\u2003@p.com'), false)
      assert.equal(checkEmail('a\u3000@p.com'), false)
      assert.equal(checkEmail('ddjk-s-jk@asl-.com'), false)
      assert.equal(checkEmail('someone@do-.com'), false)
      assert.equal(checkEmail('somebody@-p.com'), false)
      assert.equal(checkEmail('somebody@-.com'), false)
    })
  })

  /**
   * 车牌号码测试
   */
  suite('#checkNumberPlate()', function () {
    test('Should return true', function () {
      assert.equal(checkNumberPlate('川A123AB'), true)
      assert.equal(checkNumberPlate('川A2222学'), true)
      assert.equal(checkNumberPlate('川AF12345'), true)
      assert.equal(checkNumberPlate('川A12345D'), true)
    })
    test('Should return false', function () {
      assert.equal(checkNumberPlate('川A123456'), false)
      assert.equal(checkNumberPlate('川A2222i'), false)
      assert.equal(checkNumberPlate('川AL12345'), false)
      assert.equal(checkNumberPlate('川AD123456'), false)
    })
  })
})