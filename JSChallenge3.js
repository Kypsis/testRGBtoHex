/* Write a function that converts HEX to RGB. Then Make that function autodect 
the formats so that if you enter HEX color format it returns RGB and if you 
enter RGB color format it returns HEX. Bonus: Release this tool as a npm package. */

module.exports = function convertHexOrRgb(rOrHex, g, b) {
  if (rOrHex && g && b) {
    return rgbToHex(rOrHex, g, b);
  } else {
    return hexToRgb(rOrHex);
  }
}

const rgbToHex = (r, g, b) =>
  "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16))
    .join(",");