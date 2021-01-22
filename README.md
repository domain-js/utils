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

[更多直接参考 @open-node/logger](https://github.com/open-node/logger);

# deps
<pre>无</pre>


# Usage
| 功能 | 描述 | 样例 |
| ---- | ---- | ---- |
| error | 记录错误日志 | logger.error(Error('has some error')) |
| info | 记录常规日志 | logger.info('info')) |
| logger | 自动包装一个函数，记录其执行 log | logger.logger(fn, 'Test fn', true)) |

[更多直接参考 @open-node/logger](https://github.com/open-node/logger);
