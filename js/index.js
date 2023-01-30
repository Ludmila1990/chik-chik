import { initService } from "./modules/initService.js";
import { initSlider } from "./modules/initSlider.js";
import { initReserve } from "./modules/initReserve.js";

const init = () => {
  initSlider();
  initService();
  initReserve();
};

window.addEventListener('DOMContentLoaded', init);