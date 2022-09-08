/**
 * 运行环境检测器
 */

/**
 * 是否是Electron应用
 * 
 * @see {@link https://github.com/electron/electron/issues/2288#issuecomment-337858978}
 */
const isElectron = window.navigator.userAgent.toLowerCase().includes('electron');

/**
 * 是否是Windows操作系统
 * 
 * @see {@link https://en.wikipedia.org/wiki/Windows_NT}
 */
const isWindows = window.navigator.userAgent.toLowerCase().includes('windows nt');

/**
 * 是否是MacOS操作系统
 * 
 * @see {@link https://en.wikipedia.org/wiki/Macintosh}
 */
const isMacOS = window.navigator.userAgent.toLowerCase().includes('macintosh');

export {
  isElectron,
  isWindows,
  isMacOS,
};