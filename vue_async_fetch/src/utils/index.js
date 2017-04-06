import local from './local';



export const userStorage = (payload) => {
  local.set(
      'accessToken',
      payload.access_token_info.access_token,
      payload.access_token_info.expires_in * 1000
    );

  local.set(
      'refreshToken',
      payload.refresh_token_info.refresh_token,
      payload.refresh_token_info.expires_in * 1000
    );

  if(payload.user_info){
    local.set('userInfo', payload.user_info);
  }

  return payload;
};

/**
 * 展平 promise action 常用的属性，减少模板代码
 * @param fn
 * @returns reducer
 * @example
 * before:
 * [LOGIN] : (state, action) => {
 *   const { meta = {}, payload, error } = action;
 *   const { sequence = {}, params, json } = meta;
 *   return {
 *     ...state,
 *     pending: sequence.type === 'start',
 *     userInfo: (!error && sequence.type === 'next') ? payload.user_info : {}
 *   }
 * }
 * after:
 * [LOGIN] : promiseReducer(({ state, payload, error, type }) => ({
 *   ...state,
 *   pending: type === 'start',
 *   userInfo: (!error && type === 'next') ? payload.user_info : {}
 * }))
 */
export const promiseReducer = fn => (state, action) => {
  const { meta = {}, payload, error } = action;
  const { sequence = {}, params, json } = meta;

  return fn({
    state,
    action,
    payload,
    error,
    meta,
    sequence,
    params,
    json,
    type: sequence.type,
  });
};

/**
 * 把平对象转换成 url param 的形式
 *
 * @param {object} params
 * @returns {string}
 */
export const param = params =>
  Object.entries(params)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&');

/**
 * 百分比
 *
 * @param {number} total
 * @param {number} sub
 * @returns {string}
 */
export const percent = (total, sub) => {
  if (!total) {
    return '0%';
  }
  return `${+((sub / total) * 100).toFixed(2)}%`;
};

/**
 * 扩展名
 * @param fileName {string}
 * @returns {string}
 */
export const fileExt = (fileName) => {
  let result = '';
  fileName.replace(/\.([^\.]+)$/, (all, ext) => {
    result = ext;
  });
  return result.toLowerCase();
};

/**
 * 支持传参的 _.result 增强版 目前不支持多层级的 path
 *
 * @param {object} obj
 * @param {string} path
 * @param {*} defaultResult
 * @param rest 剩下的参数会传给 obj 上对应的方法
 * @returns {*}
 */
export const result = (obj, path, defaultResult, ...rest) => {
  if (!(path in obj)) {
    return defaultResult;
  }

  const value = obj[path];

  if (typeof value === 'function') {
    return value(...rest);
  }

  return value;
};

const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;

export const dateTime = (number) => {
  const date = new Date(number - timezoneOffset);
  return date.toISOString().slice(0, 19).replace('T', ' ');
};
