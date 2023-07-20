import html from "html-literal";
import * as views from "./views";

// export default (state) => html`
//   ${views["Home"]()}, ${views["Bio"]()} ${views["Pizza"]()} ${views["Order"]()}
// `;
export default state => html`${views[state.view](state)}`;
