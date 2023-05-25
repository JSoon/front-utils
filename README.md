# front-utils

工具类函数: 与业务无关, 包括且不限于: 公共方法, 正则表达式等工具类API.

## Contents

- [front-utils](#front-utils)
  - [Contents](#contents)
  - [Installation](#installation)
    - [配置仓库地址到 `.npmrc` 或者 `.yarnrc` 安装](#配置仓库地址到-npmrc-或者-yarnrc-安装)
    - [命令行直接安装](#命令行直接安装)
  - [Usage](#usage)
    - [Browser](#browser)
    - [ES Module](#es-module)
  - [API](#api)
    - [enums](#enums)
      - [FileExtMimeMap](#fileextmimemap)
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
      - [validator.checkNumberString()](#validatorchecknumberstring)
      - [validator.checkIPv4()](#validatorcheckipv4)
      - [validator.checkIPv6()](#validatorcheckipv6)
      - [validator.checkURL()](#validatorcheckurl)
    - [formatter](#formatter)
      - [formatter.formatDatetime()](#formatterformatdatetime)
      - [formatter.formatThousandSeparator()](#formatterformatthousandseparator)
    - [getter](#getter)
      - [getter.getFileExtension()](#gettergetfileextension)
      - [getter.getMimeByFileExtension()](#gettergetmimebyfileextension)
      - [getter.getFlatObjectArray()](#gettergetflatobjectarray)
    - [detector](#detector)
      - [detector.isElectron](#detectoriselectron)
      - [detector.isWindows](#detectoriswindows)
      - [detector.isMacOS](#detectorismacos)
  - [Test](#test)
  - [Compabilities](#compabilities)
    - [Runtime Environment](#runtime-environment)
    - [Browser Support](#browser-support)
  - [Changelog](#changelog)

## Installation

### 配置仓库地址到 `.npmrc` 或者 `.yarnrc` 安装

> 推荐通过这种方式进行安装.

```bash
# .npmrc / .yarnrc
@financial-freedom:registry=https://registry.npmmirror.com
```

再执行命令行:

```bash
# pnpm
pnpm add @financial-freedom/front-utils

# yarn
yarn add @financial-freedom/front-utils

# npm
npm i @financial-freedom/front-utils
```

### 命令行直接安装

```bash
# pnpm
pnpm add --registry https://registry.npmmirror.com @financial-freedom/front-utils

# yarn
yarn add --registry https://registry.npmmirror.com @financial-freedom/front-utils

# npm
npm i --registry https://registry.npmmirror.com @financial-freedom/front-utils
```

## Usage

### Browser

```html
<script src="path/to/dist/front_utils.umd.js"></script>

<script>
  front_utils.validator.checkEmail('a.b@qq.com');
</script>
```

### ES Module

```js
import * as front_utils from '@financial-freedom/front-utils'

front_utils.validator.checkEmail('a.b@qq.com');
```

或者，

```js
import { validator } from '@financial-freedom/front-utils'

validator.checkEmail('a.b@qq.com');
```

## API

### enums

常量枚举

#### FileExtMimeMap
- Example
```js
enums.FileExtMimeMap['jpg']; // image/jpeg
enums.FileExtMimeMap['ppt']; // application/vnd.ms-powerpoint
```

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

#### validator.checkNumberString()
- Type
```js
/**
 * 校验是否是数字字符串
 * @param numberString 数字字符串
 * @param maxLength 最大长度
 */
function checkNumberString(numberString: string, maxLength?: number): boolean;
```
- Example
```js
checkNumberString('1234567890'); // true
checkNumberString('12345', 5); // true
checkNumberString('123.'); // false
```

#### validator.checkIPv4()
- Type
```js
/**
 * 校验是否是ipv4地址
 * @param ipAddress IP地址字符串
 */
function checkIPv4(ipAddress: string): boolean;
```
- Example
```js
checkIPv4('253.123.61.198'); // true
checkIPv4('128.145.158.124'); // true
checkIPv4('a.b.c.100'); // false
```

#### validator.checkIPv6()
- Type
```js
/**
 * 校验是否是ipv6地址
 * @param ipAddress IP地址字符串
 */
function checkIPv6(ipAddress: string): boolean;
```
- Example
```js
checkIPv6('91a7:742d:805d:03a7:f413:b182:7de9:adea'); // true
checkIPv6('::ffff:808:808'); // true
checkIPv6('230.222.192.224'); // false
```

#### validator.checkURL()
- Type
```js
/**
 * 校验是否是URL地址
 * @param url URL地址字符串
 */
function checkURL(url: string): boolean;
```
- Example
```js
checkURL('http://foo.com/blah_blah'); // true
checkURL('http://142.42.1.1/'); // true
checkURL('foo.com'); // true
checkURL('http://../'); // false
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
function getFileExtension(filePath: string): string;
```
- Example
```js
getter.getFileExtension('file.name.with.dots.txt'); // txt
getter.getFileExtension('file-with-no-extention'); // undefined
```

#### getter.getMimeByFileExtension()
- Type
```js
/**
 * 获取文件MIME类型
 * @param ext 文件后缀名
 * @returns   MIME
 */
function getMimeByFileExtension(ext: string): string;
```
- Example
```js
getter.getMimeByFileExtension('pptx'); // application/vnd.openxmlformats-officedocument.presentationml.presentation
getter.getMimeByFileExtension('graffle'); // undefined
```

#### getter.getFlatObjectArray()
- Type
```js
/**
 * 将嵌套结构对象数组，转换为单层结构对象数组
 * @param nestedArray 嵌套对象数组
 * @param key         需要转换的对象属性名称
 * @example
 * [
 *    {
 *       name: 'foo',
 *       age: 10,
 *       children: [{
 *         name: 'bar',
 *         age: 20
 *       }]
 *    },
 *    {
 *       name: 'zoo',
 *       age: 12
 *    }
 * ]
 * 转换为:
 * [
 *    {
 *       name: 'foo',
 *       age: 10
 *    },
 *    {
 *       name: 'bar',
 *       age: 20
 *    },
 *    {
 *       name: 'zoo',
 *       age: 12
 *    }
 * ]
 * @see {@link https://www.techighness.com/post/javascript-flatten-deeply-nested-array-of-objects-into-single-level-array/}
 */
function getFlatObjectArray(nestedArray: Record<string, any>[], key?: string): any[];
```
- Example
```js
getFlatObjectArray([
  { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }], },
  { name: 'Lisa', age: 26, }
]); // [{ name: 'Jisoo', age: 28, }, { name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }, { name: 'Lisa', age: 26, }]
```

### detector

运行环境检测器

#### detector.isElectron
- Type
```js
/**
 * 是否是Electron应用
 *
 * @see {@link https://github.com/electron/electron/issues/2288#issuecomment-337858978}
 */
const isElectron: boolean;
```

#### detector.isWindows
- Type
```js
/**
 * 是否是Windows操作系统
 *
 * @see {@link https://en.wikipedia.org/wiki/Windows_NT}
 */
const isWindows: boolean;
```

#### detector.isMacOS
- Type
```js
/**
 * 是否是MacOS操作系统
 *
 * @see {@link https://en.wikipedia.org/wiki/Macintosh}
 */
const isMacOS: boolean;
```

## Test

```bash
# 单元测试
pnpm run test

# 覆盖性测试
pnpm run coverage
```

## Compabilities

兼容性

### Runtime Environment

```
All
```

### Browser Support

[浏览器兼容性](https://github.com/JSoon/front-utils/blob/master/.browserslistrc)

```browserslist
# 完整格式请参考 https://github.com/browserslist/browserslist
defaults
ie >= 10
```

## Changelog

[更新日志](https://github.com/JSoon/front-utils/tags)