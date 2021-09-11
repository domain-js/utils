# @domain.js/logger

[![Build status](https://travis-ci.com/domain-js/logger.svg?branch=master)](https://travis-ci.org/domain-js/logger)
[![codecov](https://codecov.io/gh/domain-js/logger/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/logger)

# Installation
<pre>npm i @domain.js/logger --save</pre>

# cnf
专属配置名称 `logger`
| 名称 | 类型 | 必填 | 默认值 | 描述 | 样例 |
| ---- | ---- | ---- | ------ | ---- | ---- |
| errorLogPath | string | `是` | `无` | 错误日志记录的路径 | ./storage/logs |
| infoLogPath | string | `是` | `无` | 常规日志记录的路径 | ./storage/logs |
| clientId | string | `是` | `无` | 进程ID, 在多进程的情况下区分不同的进程 | 'api-dev-001' |
| ignoreErrors | [string | number] | `否` | `无` | 要忽略的错误码 | [20001, 'notAllowed'] |

# deps
| 模块名 | 别名 | 用到的方法 | 描述 |
| ------ | ---- | ---------- | ---- |
| _ | None | memoize | lodash |


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| error | 记录错误日志 | logger.error(Error('has some error')) |
| info | 记录常规日志 | logger.info('info')) |
| logger | 自动包装一个函数，记录其执行 log | logger.logger(fn, 'Test fn', true)) |
