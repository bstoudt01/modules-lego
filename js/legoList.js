import { legoDetail } from './legoDom.js';

const makeLegoList = (legosData) => {
  const legoDisplay = document.getElementById("lego-display");

  legosData.LegoColorss.forEach((lego) => {
    let legoBlock = legoDetail(lego);
    legoDisplay.innerHTML += legoBlock;
  });
};

export default makeLegoList;