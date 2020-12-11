// using IIFE to limit the scope of various items that were previously
// exposed globally.
// However, this approach makes it difficult to bubble the requisite
// items back up the scope.

// default import - can be named anything
import getSessions from "./sessionRepository.js";
// named import
import {sessionTemplate, errorMessage} from "./template.js"

function render() {
    var list = document.querySelector("#sessions");
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
  }

  var data = {
    listItems: [],
  };

  getSessions().then((sessions) => {
    console.log("promises!");
    data.listItems = sessions;
    render();
  });