import { suite, test, assert, } from 'vitest';
import { getFileExtension,  getFlatObjectArray,  getMimeByFileExtension, } from '@/lib/getter';

suite('getter.ts', function () {
  /**
   * 获取文件后缀名
   */
  suite('#getFileExtension()', function () {
    test('Should be equal', function () {
      assert.equal(getFileExtension(''), undefined);
      assert.equal(getFileExtension('file.name.with.dots.txt'), 'txt');
      assert.equal(getFileExtension('file-with-no-extention'), undefined);
      // NOTE: 获取网络地址文件后缀时, 应先获取URL中的pathname, 再进行文件后缀名获取
      assert.equal(getFileExtension('file.pdf?a=1&b=2'), 'pdf?a=1&b=2');
      assert.equal(getFileExtension('file.pdf?a=1&b=2.5'), '5');
      assert.equal(getFileExtension('http://www.xxx.com/file/name'), 'com/file/name');
    });
  });

  /**
   * 获取文件MIME类型
   */
  suite('#getMimeByFileExtension()', function () {
    test('Should be equal', function () {
      assert.equal(getMimeByFileExtension('txt'), 'text/plain');
      assert.equal(getMimeByFileExtension('json'), 'application/json');
      assert.equal(getMimeByFileExtension('avi'), 'video/x-msvideo');
      assert.equal(getMimeByFileExtension('pptx'), 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
      assert.equal(getMimeByFileExtension('graffle'), undefined);
    });
  });

  /**
   * 嵌套结构对象数组 -> 单层结构对象数组
   */
  suite('#getFlatItems()', function () {
    test('Should be equal', function () {
      assert.deepStrictEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }], },
        { name: 'Lisa', age: 26, }
      ]), [
        { name: 'Jisoo', age: 28, },
        { name: 'Jennie', age: 27, },
        { name: 'Rose', age: 26, },
        { name: 'Lisa', age: 26, }
      ]);
      assert.deepStrictEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }, { name: 'Lisa', age: 26, }], }
      ], 'children'), [
        { name: 'Jisoo', age: 28, },
        { name: 'Jennie', age: 27, },
        { name: 'Rose', age: 26, },
        { name: 'Lisa', age: 26, }
      ]);
      assert.deepStrictEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, children: [{ name: 'Lisa', age: 26, }], }, { name: 'Rose', age: 26, }], }
      ]), [
        { name: 'Jisoo', age: 28, },
        { name: 'Jennie', age: 27, },
        { name: 'Lisa', age: 26, },
        { name: 'Rose', age: 26, }
      ]);
      assert.deepStrictEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, children: [{ name: 'Lisa', age: 26, children: [{ name: 'Rose', age: 26, }], }], }], }
      ]), [
        { name: 'Jisoo', age: 28, },
        { name: 'Jennie', age: 27, },
        { name: 'Lisa', age: 26, },
        { name: 'Rose', age: 26, }
      ]);
    });
    test('Should be not equal', function () {
      assert.notDeepEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }], },
        { name: 'Lisa', age: 26, }
      ]), [
        { name: 'Jisoo', age: 28, },
        { name: 'Lisa', age: 26, },
        { name: 'Jennie', age: 27, },
        { name: 'Rose', age: 26, }
      ]);
      assert.notDeepEqual(getFlatObjectArray([
        { name: 'Jisoo', age: 28, children: [{ name: 'Jennie', age: 27, }, { name: 'Rose', age: 26, }, { name: 'Lisa', age: 26, }], }
      ], 'parents'), [
        { name: 'Jisoo', age: 28, },
        { name: 'Jennie', age: 27, },
        { name: 'Rose', age: 26, },
        { name: 'Lisa', age: 26, }
      ]);
    });
  });
});

