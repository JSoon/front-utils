/**
 * 获取函数
 */
/**
 * 获取文件后缀名
 * @param filePath  文件路径
 * @returns         文件后缀名, 如: jpg, ppt, etc. 若未获取到, 则返回 undefined
 */
export declare function getFileExtension(filePath: string): string;
/**
 * 获取文件MIME类型
 * @param ext 文件后缀名
 * @returns   MIME
 */
export declare function getMimeByFileExtension(ext: string): string;
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
export declare function getFlatObjectArray(nestedArray: Record<string, any>[], key?: string): any[];
//# sourceMappingURL=getter.d.ts.map