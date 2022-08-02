/**
 * 常量枚举
 */

/**
 * 文件后缀名->MIME映射
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types}
 * @see {@link https://www.iana.org/assignments/media-types/media-types.xhtml}
 */
export const FileExtMimeMap: Record<string, string> = {
  // 图片
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  apng: 'image/apng',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  gif: 'image/gif',
  avif: 'image/avif',
  bmp: 'image/bmp',
  // 音视频
  mp4: 'video/mp4',
  mpeg: 'video/mpeg',
  webm: 'video/webm',
  avi: 'video/x-msvideo',
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  weba: 'audio/webm',
  // 应用
  pdf: 'application/pdf',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  vsd: 'application/vnd.visio',
  zip: 'application/zip',
  '7z': 'application/x-7z-compressed',
  rar: 'application/vnd.rar',
  tar: 'application/x-tar',
  swf: 'application/x-shockwave-flash',
  json: 'application/json',
  // 文本
  txt: 'text/plain',
  xml: 'text/xml',
  htm: 'text/html',
  html: 'text/html',
  js: 'text/javascript',
  mjs: 'text/javascript',
  css: 'text/css',
  csv: 'text/csv',
  ics: 'text/calendar',
};