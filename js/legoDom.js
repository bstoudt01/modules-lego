// Convert HEX to RGB
// Invert the R, G and B components
// Convert each component back to HEX
// Pad each component with zeros and output.
function invertColor(hex) {
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    // throw new Error('Invalid HEX color.');
    return hex;
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
  
}

const name="Brenda's Awesome Lego Builder";
////////////////////

const legoDetail = (lego) => {

  let block = `<section class="block-wrapper" style="background-color:#${lego.ColorHex}">
              <h3>Name: ${lego.LegoName}</h3>
              <div class="block-years">Manufactured ${lego.YearFrom} - ${lego.YearTo}</div>`;

  const link = lego.ColorstreamLinkImage;
  if (link) {
    block = `<a href="${link}" target="_blank" style="color:#${invertColor(lego.ColorHex)}">${block}</a>`;
  }

  return block;
};

const nonLegoDetail = () => {
  console.log("did it work?");
}




//There are two different types of export, named and default.
//You can have multiple named exports per module but only one default export.
export { legoDetail, nonLegoDetail };