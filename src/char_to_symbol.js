exports.char_to_symbol = (c) => {
  if (typeof c == 'string') c = c.charCodeAt(0);

  if (c >= 'a'.charCodeAt(0) && c <= 'z'.charCodeAt(0)) {
    return c - 'a'.charCodeAt(0) + 6;
  }

  if (c >= '1'.charCodeAt(0) && c <= '5'.charCodeAt(0)) {
    return c - '1'.charCodeAt(0) + 1;
  }

  return 0;
};
