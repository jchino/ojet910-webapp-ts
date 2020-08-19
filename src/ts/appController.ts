import ModuleRouterAdapter = require("ojs/ojmodulerouter-adapter");
import KnockoutRouterAdapter = require("ojs/ojknockoutrouteradapter");
import CoreRouter = require("ojs/ojcorerouter");
import UrlAdapter = require("ojs/ojurlparamadapter");

interface CoreRouterDetail {
  label: string;
}

class RootViewModel {
  moduleAdapter: ModuleRouterAdapter<CoreRouterDetail>;
  selection: KnockoutRouterAdapter<CoreRouterDetail>;

  constructor() {
    // Router Setup
    const navData = [
      { path: "", redirect: "home" },
      { path: "home", detail: { label: "Home" } }
    ];
    const router = new CoreRouter(navData, {
      urlAdapter: new UrlAdapter()
    });
    router.sync();
    this.moduleAdapter = new ModuleRouterAdapter(router);
    this.selection = new KnockoutRouterAdapter(router);
  }
}

export default new RootViewModel();