import {
  canUseDOM_default
} from "./chunk-JF6VG5U5.js";
import {
  require_react
} from "./chunk-67XTWVEJ.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/@restart/ui/esm/useWindow.js
var import_react = __toESM(require_react());
var Context = (0, import_react.createContext)(canUseDOM_default ? window : void 0);
var WindowProvider = Context.Provider;
function useWindow() {
  return (0, import_react.useContext)(Context);
}

// node_modules/dom-helpers/esm/contains.js
function contains(context, node) {
  if (context.contains)
    return context.contains(node);
  if (context.compareDocumentPosition)
    return context === node || !!(context.compareDocumentPosition(node) & 16);
}

export {
  contains,
  useWindow
};
//# sourceMappingURL=chunk-3RYVJ4BI.js.map