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
npm i --registry http://10.0.60.84:4873 -S @front-utils/rtfc-utils
```

## Usage

### Browser

```html
<script src="path/to/dist/rtfc_utils.umd.js"></script>

<script>
  rtfc_utils.validator.checkEmail('a.b@qq.com')
</script>
```

### ES Module

```js
import * as rtfcUtils from '@front-utils/rtfc-utils'

rtfcUtils.validator.checkEmail('a.b@qq.com')
```

或者，

```js
import { validator } from '@front-utils/rtfc-utils'

validator.checkEmail('a.b@qq.com')
```

## API

**regexp.emailExp**
```js
regexp.emailExp.test('a.b@qq.com')
```

**regexp.normalPlateRegExp**
```js
regexp.normalPlateRegExp.test('川ALC351')
```

**regexp.newEnergyPlateRegExp**
```js
regexp.newEnergyPlateRegExp.test('川AD12345')
```

**regexp.mobileRegExp**
```js
regexp.mobileRegExp.test('13012345678')
```

**validator.checkEmail**
```js
validator.checkEmail('a.b@qq.com') // true
```

**validator.checkNumberPlate**
```js
validator.checkNumberPlate('川ALC351') // true
validator.checkNumberPlate('川A123456') // false
```

**validator.checkMobile**
```js
validator.checkMobile('+8613687654321') // true
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