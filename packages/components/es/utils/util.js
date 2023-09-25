const isHtmlEl = (e) => e && e.nodeType === 1;
const isInContainer = (target, container) => {
  if (!target || !container)
    return false;
  const isNotContainer = [window, document, document.documentElement, null, void 0].includes(container);
  const elClientReact = target.getBoundingClientRect();
  let containerClientRect = null;
  if (!isNotContainer) {
    containerClientRect = container.getBoundingClientRect();
  } else {
    containerClientRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elClientReact.top < containerClientRect.bottom && elClientReact.bottom > containerClientRect.top && elClientReact.right > containerClientRect.left && elClientReact.left < containerClientRect.right;
};
const isScroll = (el, isVertical) => {
  const determinedDirection = isVertical === null || isVertical === void 0;
  const overflow = determinedDirection ? getStyle(el, "overflow") : isVertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x");
  return overflow.match(/(scroll|auto)/);
};
const getScrollContainer = (el, isVertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
const throttle = (fn, delay) => {
  var lastTime;
  var timer;
  var delay = delay || 200;
  return function() {
    var args = arguments;
    var nowTime = Date.now();
    if (lastTime && nowTime - lastTime < delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        lastTime = nowTime;
        fn.apply(this, args);
      }, delay);
    } else {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
};
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
const off = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
const getStyle = function(element, styleName) {
  if (!element || !styleName)
    return null;
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const style = element.style[styleName];
    if (style)
      return style;
    const computed = document.defaultView.getComputedStyle(element, "");
    return computed ? computed[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};
export {
  getScrollContainer,
  getStyle,
  isHtmlEl,
  isInContainer,
  isScroll,
  off,
  on,
  throttle
};
