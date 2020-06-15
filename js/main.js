console.log("Everything is Awesome!");

import loadLegos from './legoData.js';
import makeLegoList from './legoList.js';

const startTheShow = () => {
  loadLegos()
    .then((result) => {
      console.log("yeah", result);
      makeLegoList(result);
    })
}

document.querySelector("#bt-start").addEventListener("click", startTheShow);