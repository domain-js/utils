import * as crypto from "crypto";
import * as _ from "lodash";

/** 随机字符串字典 */
const RAND_STR_DICT = {
  normal: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  strong:
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&’()*+,-./:;<=>?@[]^_`{|}~",
};

/** 计算给定字符串的md5值 */
export const md5 = (str: string) => {
  const hash = crypto.createHash("md5");
  return hash.update(str).digest().toString("hex");
};

/* 生成随机字符串 */
export const randStr = (len: number, type = "normal") => {
  const dict = type === "strong" || type === "normal" ? RAND_STR_DICT[type] : type;
  const { length } = dict;

  /** 随机字符串的长度不能等于 0 或者负数 */
  len |= 0;
  len = Math.max(len, 3);

  return _.range(len)
    .map(() => dict[Math.floor(Math.random() * length)])
    .join("");
};

/** 将字符串里的换行，制表符替换为普通空格 */
export const nt2space = (value: string) => {
  if (typeof value !== "string") return value;
  return value.replace(/(\\[ntrfv]|\s)+/g, " ").trim();
};

/** 首字符大写 */
export const ucfirst = (value: string) => {
  if (typeof value !== "string") return value;
  return value[0].toUpperCase() + value.substring(1);
};

export const lcfirst = (value: string) => {
  if (typeof value !== "string") return value;
  return value[0].toLowerCase() + value.substring(1);
};

/** 睡眠等待 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** 深度冻结一个对象，防止被不小心篡改 */
export const deepFreeze = (object: any) => {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  for (const name of propNames) {
    const value = object[name];

    object[name] = value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
};

/** try catch 包裹执行, 记录错误日志 */
export const tryCatchLog =
  <T extends (...args: any[]) => any, L extends (...args: any[]) => any>(fn: T, errorLog: L) =>
  async (...args: Parameters<T>): Promise<ReturnType<T> | Error> => {
    try {
      const res = await fn(...args);
      return res;
    } catch (e) {
      errorLog(e);
      return e as Error;
    }
  };

/** 判断某个时间是否已过期，基于当前时间 */
export const inExpired = (time: Date, life: number) => {
  const now = (Date.now() / 1000) | 0;

  return time.valueOf() < now - life;
};

type Params = { [K: string]: string };

/** 修改指定url上添加一些参数 */
export const modifiyURL = (address: string, adds: Params, removes?: string[]) => {
  const obj = new URL(address);

  if (_.isObject(adds)) {
    for (const key of Object.keys(adds)) {
      obj.searchParams.append(key, adds[key]);
    }
  }

  if (Array.isArray(removes)) {
    for (const key of removes) obj.searchParams.delete(key);
  }

  return obj.toString();
};

export const isTest = () => process.env.NODE_ENV === "test";

export const isProd = () => process.env.NODE_ENV === "production";
