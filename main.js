import "css/main-entry";
import controller from "src/controller";

controller(document.body);
if (module.hot) {
  module.hot.accept();
}
