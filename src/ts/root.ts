import * as ko from "knockout";
import rootViewModel from "./appController";
import "ojs/ojknockout";
import "ojs/ojtoolbar";
import "ojs/ojbutton";
import "ojs/ojmenu";
import "ojs/ojoption";
import "ojs/ojmodule-element";

export = class Root {
  static init(): void {
    function _init(): void {
      ko.applyBindings(rootViewModel, document.getElementById("pageContent"));
    }
    // if running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
    // event before executing any code that might interact with Cordova APIs or plugins.
    if (document.body.classList.contains("oj-hybrid")) {
      document.addEventListener("deviceready", _init);
    }
    else {
      _init();
    }
  }
}