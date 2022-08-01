# rtfc-utils

工具类函数: 与业务无关，包括且不限于：公共方法、正则表达式等工具类API。

## Contents

- [rtfc-utils](#rtfc-utils)
  - [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Browser](#browser)
    - [ES Module](#es-module)
  - [API](#api)
    - [regexp](#regexp)
      - [regexp.emailExp](#regexpemailexp)
      - [regexp.normalPlateRegExp](#regexpnormalplateregexp)
      - [regexp.newEnergyPlateRegExp](#regexpnewenergyplateregexp)
      - [regexp.mobileRegExp](#regexpmobileregexp)
      - [regexp.IDCardNoRegExp](#regexpidcardnoregexp)
      - [regexp.strongPasswordExp](#regexpstrongpasswordexp)
      - [regexp.positiveRN2DExp](#regexppositivern2dexp)
      - [regexp.positiveRN3DExp](#regexppositivern3dexp)
      - [regexp.fileExtExp](#regexpfileextexp)
    - [validator](#validator)
      - [validator.checkEmail()](#validatorcheckemail)
      - [validator.checkNumberPlate()](#validatorchecknumberplate)
      - [validator.checkMobile()](#validatorcheckmobile)
      - [validator.checkIDCardNo()](#validatorcheckidcardno)
      - [validator.checkStrongPassword()](#validatorcheckstrongpassword)
      - [validator.checkPositiveRN2Exp()](#validatorcheckpositivern2exp)
      - [validator.checkPositiveRN3Exp()](#validatorcheckpositivern3exp)
    - [formatter](#formatter)
      - [formatter.formatDatetime()](#formatterformatdatetime)
      - [formatter.formatThousandSeparator()](#formatterformatthousandseparator)
    - [getter](#getter)
      - [getter.getFileExtension()](#gettergetfileextension)
  - [Test](#test)
  - [Compabilities](#compabilities)
    - [Runtime Environment](#runtime-environment)
    - [Browser Support](#browser-support)
  - [Changelog](#changelog)

## Installation

```bash
# pnpm
pnpm add --registry http://10.0.60.84:4873 @front-utils/rtfc-utils

# yarn
yarn add --registry http://10.0.60.84:4873 @front-utils/rtfc-utils

# npm
npm i --registry http://10.0.60.84:4873 @front-utils/rtfc-utils
```

## Usage

### Browser

```html
<script src="path/to/dist/rtfc_utils.umd.js"></script>

<script>
  rtfc_utils.validator.checkEmail('a.b@qq.com');
</script>
```

### ES Module

```js
import * as rtfcUtils from '@front-utils/rtfc-utils'

rtfcUtils.validator.checkEmail('a.b@qq.com');
```

或者，

```js
import { validator } from '@front-utils/rtfc-utils'

validator.checkEmail('a.b@qq.com');
```

## API

### regexp

正则表达式

#### regexp.emailExp
- Example
```js
regexp.emailExp.test('a.b@qq.com');
```

#### regexp.normalPlateRegExp
- Example
```js
regexp.normalPlateRegExp.test('川ALC351');
```

#### regexp.newEnergyPlateRegExp
- Example
```js
regexp.newEnergyPlateRegExp.test('川AD12345');
```

#### regexp.mobileRegExp
- Example
```js
regexp.mobileRegExp.test('13012345678');
```

#### regexp.IDCardNoRegExp
- Example
```js
regexp.IDCardNoRegExp.test('11010519491231002X');
```

#### regexp.strongPasswordExp
- Example
```js
regexp.strongPasswordExp.test('!qa@ws#ed%tG123');
```

#### regexp.positiveRN2DExp
- Example
```js
regexp.positiveRN2DExp.test('1.23');
```

#### regexp.positiveRN3DExp
- Example
```js
regexp.positiveRN3DExp.test('1.234');
```

#### regexp.fileExtExp
- Example
```js
regexp.fileExtExp.exec('file.jpg')[1]; // jpg
```

### validator

验证器函数

#### validator.checkEmail()
- Type
```js
/**
 * 校验电子邮箱地址是否合法
 * @param email 电子邮箱地址
 */
function checkEmail(email: string): boolean;
```
- Example
```js
validator.checkEmail('a.b@qq.com'); // true
```

#### validator.checkNumberPlate()
- Type
```js
/**
 * 校验车牌号码是否合法
 * @param numberPlate 车牌号码
 */
function checkNumberPlate(numberPlate: string): boolean;
```
- Example
```js
validator.checkNumberPlate('川ALC351'); // true
validator.checkNumberPlate('川A123456'); // false
```

#### validator.checkMobile()
- Type
```js
/**
 * 校验手机号码是否合法
 * @param mobile 手机号码
 */
function checkMobile(mobile: string): boolean;
```
- Example
```js
validator.checkMobile('+8613687654321'); // true
```

#### validator.checkIDCardNo()
- Type
```js
/**
 * 校验身份证号码是否合法
 * @param idCardNo 身份证号码
 */
function checkIDCardNo(idCardNo: string): boolean;
```
- Example
```js
validator.checkIDCardNo('11010519491231002X'); // true
validator.checkIDCardNo('01010519491231002X'); // false
```

#### validator.checkStrongPassword()
- Type
```js
/**
 * 校验是否为强密码
 * @param password 密码
 */
function checkStrongPassword(password: string): boolean;
```
- Example
```js
validator.checkStrongPassword('!qa@ws#ed%tG123'); // true
validator.checkStrongPassword('123qweQWE~!@#$%^&*'); // false
validator.checkStrongPassword('12345678'); // false
```

#### validator.checkPositiveRN2Exp()
- Type
```js
/**
 * 校验是否为正有理数(最多2位小数)
 * @param numberString 数字字符串
 */
function checkPositiveRN2Exp(numberString: string): boolean;
```
- Example
```js
validator.checkPositiveRN2Exp('123.45'); // true
validator.checkPositiveRN2Exp('123.456'); // false
```

#### validator.checkPositiveRN3Exp()
- Type
```js
/**
 * 校验是否为正有理数(最多3位小数)
 * @param numberString 数字字符串
 */
function checkPositiveRN3Exp(numberString: string): boolean;
```
- Example
```js
validator.checkPositiveRN3Exp('123.456'); // true
validator.checkPositiveRN3Exp('123.4567'); // false
```

### formatter

格式化函数

#### formatter.formatDatetime()
- Type
```js
/**
 * 日期时间格式化
 * @param datetime  日期时间值
 * @param format    日期时间格式
 * @returns 格式化日期字符串, 默认: YYYY-MM-DD HH:mm:ss
 * 
 * @see {@link https://day.js.org/docs/en/display/format#list-of-all-available-formats}
 */
function formatDatetime({ datetime, format, }?: {
    datetime?: dayjs.ConfigType;
    format?: string;
}): string;
```
- Example
```js
// 2022-07-10 22:00:10
formatter.formatDatetime({
  datetime: new Date('2022/07/10 22:00:10'),
  format: 'YYYY-MM-DD HH:mm:ss',
});
// 2022-07-18 00:00:00
formatter.formatDatetime({
  datetime: new Date(2022, 6, 18),
});
```

#### formatter.formatThousandSeparator()
- Type
```js
/**
 * 数字千分位表示法
 *
 * @description 由于本质上调用的是 Number.prototype.toLocaleString(), 所以 toLocaleString 支持的格式化都能实现
 *
 * @param number  数字或数字字符串
 * @param options 格式化配置
 * @returns 格式化千分位数字, 如: 1,234,567
 *
 * @see {@link https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html}
 * @see {@link https://stackoverflow.com/a/17663871/2630689}
 */
function formatThousandSeparator(number?: number | string, options?: Intl.NumberFormatOptions): string;
```
- Example
```js
formatter.formatThousandSeparator(123456789.01); // 123,456,789.01
formatter.formatThousandSeparator(123456789.23456, { maximumFractionDigits: 3, }); // 123,456,789.235
```

### getter

获取函数

#### getter.getFileExtension()
- Type
```js
/**
 * 获取文件后缀名
 * @param filePath  文件路径
 * @returns         文件后缀名, 如: jpg, ppt, etc. 若未获取到, 则返回 undefined
 */
function getFileExtension(filePath: string | undefined | null): string;
```
- Example
```js
getter.getFileExtension('file.name.with.dots.txt'); // txt
getter.getFileExtension('file-with-no-extention'); // undefined
```

## Test

```bash
# 单元测试
pnpm test

# 打开测试报告
pnpm reporter
```

## Compabilities

兼容性

### Runtime Environment

```
All
```

### Browser Support

[浏览器兼容性](https://gitlab.jwell56.com/front-utils/rtfc-utils/blob/master/.browserslistrc)

```browserslist
# 完整格式请参考 https://github.com/browserslist/browserslist
defaults
ie >= 10
```

## Changelog

[更新日志](https://gitlab.jwell56.com/front-utils/rtfc-utils/tags)