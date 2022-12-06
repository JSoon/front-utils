import { suite, test, assert, } from 'vitest';
import { checkEmail, checkIDCardNo, checkIPv4, checkIPv6, checkMobile, checkNumberPlate, checkNumberString, checkPositiveRN2Exp, checkPositiveRN3Exp, checkStrongPassword, checkURL, } from '@/lib/validator';

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

  /**
   * 数字字符串测试
   */
  suite('#checkNumberString()', function () {
    test('Should return true', function () {
      assert.equal(checkNumberString('1234567890'), true);
      assert.equal(checkNumberString('0000'), true);
      assert.equal(checkNumberString(''), true);
      assert.equal(checkNumberString('', 0), true);
      assert.equal(checkNumberString('12345', 0), true);
      assert.equal(checkNumberString('', 5), true);
      assert.equal(checkNumberString('123', 5), true);
      assert.equal(checkNumberString('12345', 5), true);
    });
    test('Should return false', function () {
      assert.equal(checkNumberString('~!@#$'), false);
      assert.equal(checkNumberString('123.'), false);
      assert.equal(checkNumberString('123a'), false);
      assert.equal(checkNumberString('123!@#'), false);
      assert.equal(checkNumberString('123!@#', 6), false);
      assert.equal(checkNumberString('0000', 3), false);
      assert.equal(checkNumberString('1234567', 6), false);
    });
  });

  /**
   * IPv4地址测试
   */
  suite('#checkIPv4()', function () {
    test('Should return true', function () {
      assert.equal(checkIPv4('253.123.61.198'), true);
      assert.equal(checkIPv4('128.145.158.124'), true);
      assert.equal(checkIPv4('215.97.240.181'), true);
      assert.equal(checkIPv4('145.55.47.96'), true);
      assert.equal(checkIPv4('31.70.79.103'), true);
      assert.equal(checkIPv4('137.84.34.158'), true);
      assert.equal(checkIPv4('253.123.61.198'), true);
      assert.equal(checkIPv4('128.145.158.124'), true);
      assert.equal(checkIPv4('137.84.34.158'), true);
      assert.equal(checkIPv4('13.124.3.5'), true);
      assert.equal(checkIPv4('128.145.158.124'), true);
      assert.equal(checkIPv4('230.222.192.224'), true);
    });
    test('Should return false', function () {
      assert.equal(checkIPv4('102'), false);
      assert.equal(checkIPv4('102.52'), false);
      assert.equal(checkIPv4('0.0.0'), false);
      assert.equal(checkIPv4('a.b.c'), false);
      assert.equal(checkIPv4('a.b.c.100'), false);
      assert.equal(checkIPv4('12.34.56.oops'), false);
      assert.equal(checkIPv4('256.0.0.0'), false);
      assert.equal(checkIPv4('100.20.21.256'), false);
      assert.equal(checkIPv4('345.0.24.6'), false);
      assert.equal(checkIPv4('192.300.24.6'), false);
      assert.equal(checkIPv4('256.255.255.255'), false);
    });
  });

  /**
   * IPv6地址测试
   */
  suite('#checkIPv6()', function () {
    test('Should return true', function () {
      assert.equal(checkIPv6('91a7:742d:805d:03a7:f413:b182:7de9:adea'), true);
      assert.equal(checkIPv6('b371:497d:b9aa:9847:956a:f779:0a5e:2ff3'), true);
      assert.equal(checkIPv6('084b:b66c:1479:524c:052b:2acd:6084:48a7'), true);
      assert.equal(checkIPv6('668f:9385:afa0:bcdd:9f39:2f06:c22c:431a'), true);
      assert.equal(checkIPv6('d53e:eef9:b0ef:c0d1:508a:d493:8a5d:a73d'), true);
      assert.equal(checkIPv6('f784:9ded:c511:2fde:a3ad:c1d6:baf8:e906'), true);
      assert.equal(checkIPv6('7835:0883:aa11:686a:98bd:b3bf:ccb7:f970'), true);
      assert.equal(checkIPv6('4921:9e36:c31d:2da6:0d76:88ac:3176:1fc8'), true);
      assert.equal(checkIPv6('630c:a1de:4421:5710:6eb6:11f4:175b:9413'), true);
      assert.equal(checkIPv6('92ca:97e8:1f43:e49d:2300:45ae:ed40:7c13'), true);
      assert.equal(checkIPv6('::ffff:808:808'), true);
      assert.equal(checkIPv6('0:0:0:0:0:ffff:0808:0808'), true);
    });
    test('Should return false', function () {
      assert.equal(checkIPv6('230.222.192.224'), false);
      assert.equal(checkIPv6('::::'), false);
      assert.equal(checkIPv6('1:2:3:4:5'), false);
    });
  });

  /**
   * URL地址测试
   */
  suite('#checkURL()', function () {
    test('Should return true', function () {
      assert.equal(checkURL('http://foo.com/blah_blah'), true);
      assert.equal(checkURL('http://foo.com/blah_blah/'), true);
      assert.equal(checkURL('http://foo.com/blah_blah_(wikipedia)'), true);
      assert.equal(checkURL('http://foo.com/blah_blah_(wikipedia)_(again)'), true);
      assert.equal(checkURL('http://www.example.com/wpstyle/?p=364'), true);
      assert.equal(checkURL('https://www.example.com/foo/?bar=baz&inga=42&quux'), true);
      assert.equal(checkURL('http://userid:password@example.com:8080'), true);
      assert.equal(checkURL('http://userid:password@example.com:8080/'), true);
      assert.equal(checkURL('http://userid@example.com'), true);
      assert.equal(checkURL('http://userid@example.com/'), true);
      assert.equal(checkURL('http://userid@example.com:8080'), true);
      assert.equal(checkURL('http://userid@example.com:8080/'), true);
      assert.equal(checkURL('http://userid:password@example.com'), true);
      assert.equal(checkURL('http://userid:password@example.com/'), true);
      assert.equal(checkURL('http://142.42.1.1/'), true);
      assert.equal(checkURL('http://142.42.1.1:8080/'), true);
      assert.equal(checkURL('http://foo.com/blah_(wikipedia)#cite-1'), true);
      assert.equal(checkURL('http://foo.com/blah_(wikipedia)_blah#cite-1'), true);
      assert.equal(checkURL('http://foo.com/(something)?after=parens'), true);
      assert.equal(checkURL('http://code.google.com/events/#&product=browser'), true);
      assert.equal(checkURL('http://j.mp'), true);
      assert.equal(checkURL('http://foo.bar/?q=Test%20URL-encoded%20stuff'), true);
      assert.equal(checkURL('http://1337.net'), true);
      assert.equal(checkURL('http://a.b-c.de'), true);
      assert.equal(checkURL('http://223.255.255.254'), true);
      assert.equal(checkURL('foo.com'), true);
      assert.equal(checkURL('a@b.cc'), true);
      assert.equal(checkURL('soon~.xyz'), true);
    });
    test('Should return false', function () {
      assert.equal(checkURL('http://'), false);
      assert.equal(checkURL('http://.'), false);
      assert.equal(checkURL('http://..'), false);
      assert.equal(checkURL('http://../'), false);
      assert.equal(checkURL('http://?'), false);
      assert.equal(checkURL('http://??'), false);
      assert.equal(checkURL('http://??/'), false);
      assert.equal(checkURL('http://#'), false);
      assert.equal(checkURL('http://##'), false);
      assert.equal(checkURL('http://##/'), false);
      assert.equal(checkURL('http://foo.bar?q=Spaces should be encoded'), false);
      assert.equal(checkURL('//'), false);
      assert.equal(checkURL('//a'), false);
      assert.equal(checkURL('///a'), false);
      assert.equal(checkURL('///'), false);
      assert.equal(checkURL('http:///a'), false);
      assert.equal(checkURL('rdar://1234'), false);
      assert.equal(checkURL('h://test'), false);
      assert.equal(checkURL('http:// shouldfail.com'), false);
      assert.equal(checkURL(':// should fail'), false);
      assert.equal(checkURL('http://foo.bar/foo(bar)baz quux'), false);
      assert.equal(checkURL('ftps://foo.bar/'), false);
      assert.equal(checkURL('http://✪df.ws/123'), false);
      assert.equal(checkURL('http://➡.ws/䨹'), false);
      assert.equal(checkURL('http://⌘.ws'), false);
      assert.equal(checkURL('http://⌘.ws/'), false);
      assert.equal(checkURL('http://foo.com/unicode_(✪)_in_parens'), false);
      assert.equal(checkURL('http://☺.damowmow.com/'), false);
      assert.equal(checkURL('ftp://foo.bar/baz'), false);
      assert.equal(checkURL('http://مثال.إختبار'), false);
      assert.equal(checkURL('http://例子.测试'), false);
      assert.equal(checkURL('http://उदाहरण.परीक्षा'), false);
      assert.equal(checkURL('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com'), false);
    });
  });
});