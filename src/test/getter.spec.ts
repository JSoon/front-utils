import { getFileExtension, } from '@/lib/getter';
import { assert, } from 'chai';

suite('getter.ts', function () {
  /**
   * 获取文件后缀名
   */
  suite('#getFileExtension()', function () {
    test('Should be equal', function () {
      assert.equal(getFileExtension(''), undefined);
      assert.equal(getFileExtension(undefined), undefined);
      assert.equal(getFileExtension(null), undefined);
      assert.equal(getFileExtension('file.name.with.dots.txt'), 'txt');
      assert.equal(getFileExtension('file-with-no-extention'), undefined);
      // NOTE: 获取网络地址文件后缀时, 应先获取URL中的pathname, 再进行文件后缀名获取
      assert.equal(getFileExtension('file.pdf?a=1&b=2'), 'pdf?a=1&b=2');
      assert.equal(getFileExtension('file.pdf?a=1&b=2.5'), '5');
      assert.equal(getFileExtension('http://www.xxx.com/file/name'), 'com/file/name');
    });
  });
});