// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import {
  PdButton,
  PProgressbar,
  PIcon,
  PdAvatar,
  PdImage,
  PdDialog,
  PdNotify,
  PdBackToTop,
  PdNav,
  PdRow,
  PdCol,
} from "panda-ui";
import { loadingDirective } from "panda-ui/src/loading/index";

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404",
  enhanceApp({ app }) {
    app.component("PdButton", PdButton);
    app.component("PProgressbar", PProgressbar);
    app.component("PIcon", PIcon);
    app.component("PdAvatar", PdAvatar);
    app.component("PdImage", PdImage);
    app.directive("loading", loadingDirective);
    app.component('PdDialog', PdDialog)
    app.component('PdNotify', PdNotify)
    app.component("PdBackToTop", PdBackToTop);
    app.component("PdRow", PdRow);
    app.component('PdNav', PdNav)
    app.component('PdCol', PdCol)
  },
};
