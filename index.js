import Navigo from "navigo";
import {capitalize} from "lodash";
import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state){
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
}

router
.on({
  "/": () => render(store.Home),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    if (store.hasOwnProperty(view)) {
      render(store[view]);
    } else {
      render(store.Viewnotfound);
      console.log(`View ${view} not defined`);
    }
  },
})
.resolve();