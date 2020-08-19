import * as ko from "knockout";
import "ojs/ojknockout";

export = class Root {
  static init(): void {
    function _init(): void {}
    // if running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
    // event before executing any code that might interact with Cordova APIs or plugins.
    if (document.body.classList.contains('oj-hybrid')) {
      document.addEventListener('deviceready', _init);
    } else {
      _init();
    }
  }
}