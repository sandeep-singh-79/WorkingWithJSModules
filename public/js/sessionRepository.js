const sessionURL = "session.json";

let sessionList = [];

export default function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      sessionList = e.target.response;
      resolve(e.target.response);
    };
    oReq.open("GET", sessionURL, true);
    oReq.responseType = "json";
    oReq.send();
  });
}

export { getSessions as default, sessionURL };
export { sessionTemplate } from "./template.js";
