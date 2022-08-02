/**
 * 获取函数
 */

import { FileExtMimeMap, } from './enums';
import { fileExtExp, } from './regexp';

/**
 * 获取文件后缀名
 * @param filePath  文件路径 
 * @returns         文件后缀名, 如: jpg, ppt, etc. 若未获取到, 则返回 undefined
 */
export function getFileExtension (filePath: string) {
  return fileExtExp.exec(String(filePath))?.[1];
}

/**
 * 获取文件MIME类型
 * @param ext 文件后缀名
 * @returns   MIME
 */
export function getMimeByFileExtension (ext: string) {
  return FileExtMimeMap[ext];
}