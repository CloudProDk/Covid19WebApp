declare var twemoji: {
  parse(str: string, options?: { folder: string, ext: string }): string;
  convert: {
    toCodePoint(str: string, options?: { folder: string, ext: string }): string;
  }
}