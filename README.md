# @domain.js/utils

[![Build status](https://travis-ci.com/domain-js/utils.svg?branch=master)](https://travis-ci.com/domain-js/utils)
[![codecov](https://codecov.io/gh/domain-js/utils/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/utils)

# Installation
<pre>npm i @domain.js/utils --save</pre>

# Documention 

## Table of contents

### Functions

- [deepFreeze](modules.md#deepfreeze)
- [inExpired](modules.md#inexpired)
- [lcfirst](modules.md#lcfirst)
- [md5](modules.md#md5)
- [modifiyURL](modules.md#modifiyurl)
- [nt2space](modules.md#nt2space)
- [randStr](modules.md#randstr)
- [sleep](modules.md#sleep)
- [tryCatchLog](modules.md#trycatchlog)
- [ucfirst](modules.md#ucfirst)

## Functions

### deepFreeze

▸ `Const` **deepFreeze**(`object`): `any`

深度冻结一个对象，防止被不小心篡改

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`any`

#### Defined in

[index.ts:61](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L61)

___

### inExpired

▸ `Const` **inExpired**(`time`, `life`): `boolean`

判断某个秒级时间戳是否已过期，基于当前时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | 要判断的时间 秒级时间戳 |
| `life` | `number` | 有效期时间长度，单位秒 |

#### Returns

`boolean`

#### Defined in

[index.ts:97](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L97)

___

### lcfirst

▸ `Const` **lcfirst**(`value`): `string`

首字符小写

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[index.ts:55](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L55)

___

### md5

▸ `Const` **md5**(`str`): `string`

计算给定字符串的md5值

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `Object` |
| `str.toString` | () => `string` |

#### Returns

`string`

#### Defined in

[index.ts:11](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L11)

___

### modifiyURL

▸ `Const` **modifiyURL**(`address`, `adds?`, `removes?`): `string`

修改指定url上添加一些参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `adds?` | `Params` |
| `removes?` | `string`[] |

#### Returns

`string`

#### Defined in

[index.ts:105](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L105)

___

### nt2space

▸ `Const` **nt2space**(`value`): `string`

将字符串里的换行，制表符替换为普通空格

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[index.ts:49](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L49)

___

### randStr

▸ **randStr**(`len`, `type`): `string`

生成随机字符串,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | 要生成的随机串长度 |
| `type` | ``"strong"`` | "strong" 强壮型 包括特殊字符 |

#### Returns

`string`

#### Defined in

[index.ts:21](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L21)

▸ **randStr**(`len`, `type`): `string`

生成随机字符串,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | 要生成的随机串长度 |
| `type` | ``"normal"`` | "noraml" 普通型 不包括特殊字符 |

#### Returns

`string`

#### Defined in

[index.ts:27](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L27)

▸ **randStr**(`len`, `type`): `string`

生成随机字符串,

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len` | `number` | 要生成的随机串长度 |
| `type` | `string` | string 自定义随机串字典 |

#### Returns

`string`

#### Defined in

[index.ts:33](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L33)

___

### sleep

▸ `Const` **sleep**(`ms`): `Promise`<`unknown`\>

睡眠等待

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[index.ts:58](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L58)

___

### tryCatchLog

▸ `Const` **tryCatchLog**<`T`, `L`\>(`fn`, `errorLog`): (...`args`: `Parameters`<`T`\>) => `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `Promise`<`void`\> |
| `L` | extends (...`args`: `any`[]) => `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `T` |
| `errorLog` | `L` |

#### Returns

`fn`

▸ (...`args`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`T`\> |

##### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:82](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L82)

___

### ucfirst

▸ `Const` **ucfirst**(`value`): `string`

首字符大写

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[index.ts:52](https://github.com/domain-js/utils/blob/4e9a3a9/src/index.ts#L52)
