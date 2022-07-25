import { assert, } from 'chai';
import { checkEmail, checkIDCardNo, checkMobile, checkNumberPlate, checkPositiveRN2Exp, checkPositiveRN3Exp, checkStrongPassword, } from '@/lib/validator';

suite('validator.ts', function () {
  /**
   * 邮箱地址测试
   * @description 邮箱测试用例参考自chromium
   * @see {@link https://cs.chromium.org/chromium/src/third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&sq=package:chromium&dr}
   */
  suite('#checkEmail()', function () {
    test('Should return true', function () {
      assert.equal(checkEmail('something@something.com'), true);
      assert.equal(checkEmail('someone@localhost.localdomain'), true);
      assert.equal(checkEmail('someone@127.0.0.1'), true);
      assert.equal(checkEmail('a@b.b'), true);
      assert.equal(checkEmail('a/b@domain.com'), true);
      assert.equal(checkEmail('{}@domain.com'), true);
      assert.equal(checkEmail('m*\'!%@something.sa'), true);
      assert.equal(checkEmail('tu!!7n7.ad##0!!!@company.ca'), true);
      assert.equal(checkEmail('%@com.com'), true);
      assert.equal(checkEmail('!#$%&\'*+/=?^_`{|}~.-@com.com'), true);
      assert.equal(checkEmail('.wooly@example.com'), true);
      assert.equal(checkEmail('wo..oly@example.com'), true);
      assert.equal(checkEmail('someone@do-ma-in.com'), true);
      assert.equal(checkEmail('somebody@example'), true);
    });
    test('Should return false', function () {
      assert.equal(checkEmail('invalid:email@example.com'), false);
      assert.equal(checkEmail('@somewhere.com'), false);
      assert.equal(checkEmail('example.com'), false);
      assert.equal(checkEmail('@@example.com'), false);
      assert.equal(checkEmail('a space@example.com'), false);
      assert.equal(checkEmail('something@ex..ample.com'), false);
      assert.equal(checkEmail('a\b@c'), false);
      assert.equal(checkEmail('someone@somewhere.com.'), false);
      assert.equal(checkEmail('""test\blah""@example.com'), false);
      assert.equal(checkEmail('"testblah"@example.com'), false);
      assert.equal(checkEmail('someone@somewhere.com@'), false);
      assert.equal(checkEmail('someone@somewhere_com'), false);
      assert.equal(checkEmail('someone@some:where.com'), false);
      assert.equal(checkEmail('.'), false);
      assert.equal(checkEmail('F/s/f/a@feo+re.com'), false);
      assert.equal(checkEmail('some+long+email+address@some+host-weird-/looking.com'), false);
      assert.equal(checkEmail('a @p.com'), false);
      assert.equal(checkEmail('a\u0020@p.com'), false);
      assert.equal(checkEmail('a\u0009@p.com'), false);
      assert.equal(checkEmail('a\u000B@p.com'), false);
      assert.equal(checkEmail('a\u000C@p.com'), false);
      assert.equal(checkEmail('a\u2003@p.com'), false);
      assert.equal(checkEmail('a\u3000@p.com'), false);
      assert.equal(checkEmail('ddjk-s-jk@asl-.com'), false);
      assert.equal(checkEmail('someone@do-.com'), false);
      assert.equal(checkEmail('somebody@-p.com'), false);
      assert.equal(checkEmail('somebody@-.com'), false);
    });
  });

  /**
   * 车牌号码测试
   */
  suite('#checkNumberPlate()', function () {
    test('Should return true', function () {
      assert.equal(checkNumberPlate('川A123AB'), true);
      assert.equal(checkNumberPlate('川A2222学'), true);
      assert.equal(checkNumberPlate('川AF12345'), true);
      assert.equal(checkNumberPlate('川A12345D'), true);
    });
    test('Should return false', function () {
      assert.equal(checkNumberPlate('川A123456'), false);
      assert.equal(checkNumberPlate('川A2222i'), false);
      assert.equal(checkNumberPlate('川AL12345'), false);
      assert.equal(checkNumberPlate('川AD123456'), false);
    });
  });

  /**
   * 手机号码测试
   */
  suite('#checkMobile()', function () {
    test('Should return true', function () {
      assert.equal(checkMobile('13012345678'), true);
      assert.equal(checkMobile('+8613687654321'), true);
      assert.equal(checkMobile('18600000000'), true);
      assert.equal(checkMobile('11111111111'), true);
    });
    test('Should return false', function () {
      assert.equal(checkMobile('130123456781'), false);
      assert.equal(checkMobile('8613687654321'), false);
      assert.equal(checkMobile('+0013512345678'), false);
      assert.equal(checkMobile('13O00000000'), false);
    });
  });

  /**
   * 身份证号码测试
   */
  suite('#checkIDCardNo()', function () {
    test('Should return true', function () {
      assert.equal(checkIDCardNo('11010519491231002X'), true);
      // 日期码不符, 未精确校验
      assert.equal(checkIDCardNo('110105199902310026'), true);
      // 地址码不符, 未精确校验
      assert.equal(checkIDCardNo('16010519491231002X'), true);
      // 校验码不符, 未精确校验
      assert.equal(checkIDCardNo('110105194912310021'), true);
    });
    test('Should return false', function () {
      // 地址码不能以0开始
      assert.equal(checkIDCardNo('01010519491231002X'), false);
      // 年份码没有1849
      assert.equal(checkIDCardNo('11010518491231002X'), false);
      // 月份码没有13
      assert.equal(checkIDCardNo('11010519491331002X'), false);
      // 日期码没有32
      assert.equal(checkIDCardNo('11010519491232002X'), false);
      // 校验码没有a
      assert.equal(checkIDCardNo('11010519491232002a'), false);
    });
  });

  /**
   * 强密码测试
   */
  suite('#checkStrongPassword()', function () {
    test('Should return true', function () {
      assert.equal(checkStrongPassword('!qa@ws#ed%tG123'), true);
      assert.equal(checkStrongPassword('12345!qA'), true);
      assert.equal(checkStrongPassword('abcd!123E'), true);
      assert.equal(checkStrongPassword('QWERasdf1234%^&*'), true);
    });
    test('Should return false', function () {
      // 4位
      assert.equal(checkStrongPassword('!1qA'), false);
      // 18位
      assert.equal(checkStrongPassword('123qweQWE~!@#$%^&*'), false);
      // 纯数字
      assert.equal(checkStrongPassword('12345678'), false);
      // 纯大写字母
      assert.equal(checkStrongPassword('QWERTYUIOP'), false);
      // 纯小写字母
      assert.equal(checkStrongPassword('qwertyuiop'), false);
      // 纯特殊字符
      assert.equal(checkStrongPassword('~!@#$%^&*'), false);
      // 数字+大写字母
      assert.equal(checkStrongPassword('12345QWERT'), false);
      // 数字+小字母
      assert.equal(checkStrongPassword('12345qwert'), false);
      // 数字+特殊字符
      assert.equal(checkStrongPassword('12345~!@#$%^&*'), false);
      // 大写字母+小写字母
      assert.equal(checkStrongPassword('QWERTqwert'), false);
      // 大写字母+特殊字符
      assert.equal(checkStrongPassword('QWERT!@#$%^&*'), false);
      // 小写字母+特殊字符
      assert.equal(checkStrongPassword('qwert!@#$%^&*'), false);
      // 数字+大写字母+小写字母
      assert.equal(checkStrongPassword('12345QWERTqwert'), false);
      // 数字+大写字母+特殊字符
      assert.equal(checkStrongPassword('12345QWERT!@#$%'), false);
      // 大写字母+小写字母+特殊字符
      assert.equal(checkStrongPassword('QWERTqwert!@#$%'), false);
    });
  });

  /**
   * 正有理数测试(至多2位小数)
   */
  suite('#checkPositiveRN2Exp()', function () {
    test('Should return true', function () {
      assert.equal(checkPositiveRN2Exp('123'), true);
      assert.equal(checkPositiveRN2Exp('1234567890'), true);
      assert.equal(checkPositiveRN2Exp('123.4'), true);
      assert.equal(checkPositiveRN2Exp('123.0'), true);
      assert.equal(checkPositiveRN2Exp('123.00'), true);
      assert.equal(checkPositiveRN2Exp('123.04'), true);
      assert.equal(checkPositiveRN2Exp('123.45'), true);
      assert.equal(checkPositiveRN2Exp('0.00'), true);
      assert.equal(checkPositiveRN2Exp('0.12'), true);
      assert.equal(checkPositiveRN2Exp('00.12'), true);
    });
    test('Should return false', function () {
      assert.equal(checkPositiveRN2Exp('123.'), false);
      assert.equal(checkPositiveRN2Exp('.'), false);
      assert.equal(checkPositiveRN2Exp('.1'), false);
      assert.equal(checkPositiveRN2Exp('0.000'), false);
      assert.equal(checkPositiveRN2Exp('123.456'), false);
    });
  });

  /**
   * 正有理数测试(至多3位小数)
   */
  suite('#checkPositiveRN3Exp()', function () {
    test('Should return true', function () {
      assert.equal(checkPositiveRN3Exp('123'), true);
      assert.equal(checkPositiveRN3Exp('1234567890'), true);
      assert.equal(checkPositiveRN3Exp('123.4'), true);
      assert.equal(checkPositiveRN3Exp('123.0'), true);
      assert.equal(checkPositiveRN3Exp('123.00'), true);
      assert.equal(checkPositiveRN3Exp('123.04'), true);
      assert.equal(checkPositiveRN3Exp('123.456'), true);
      assert.equal(checkPositiveRN3Exp('0.000'), true);
      assert.equal(checkPositiveRN3Exp('0.123'), true);
      assert.equal(checkPositiveRN3Exp('00.123'), true);
    });
    test('Should return false', function () {
      assert.equal(checkPositiveRN3Exp('123.'), false);
      assert.equal(checkPositiveRN3Exp('.'), false);
      assert.equal(checkPositiveRN3Exp('.1'), false);
      assert.equal(checkPositiveRN3Exp('0.0000'), false);
      assert.equal(checkPositiveRN3Exp('123.4567'), false);
    });
  });
});