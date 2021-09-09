// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\footer\\wheat-flour-s.png":[["wheat-flour-s.fc35858b.png","images/footer/wheat-flour-s.png"],"images/footer/wheat-flour-s.png"],"./..\\images\\background_images\\bgt-m-x1.png":[["bgt-m-x1.4ce58976.png","images/background_images/bgt-m-x1.png"],"images/background_images/bgt-m-x1.png"],"./..\\images\\background_images\\bgb-m-x1.png":[["bgb-m-x1.b1306f03.png","images/background_images/bgb-m-x1.png"],"images/background_images/bgb-m-x1.png"],"./..\\images\\footer\\wheat-flour-s-x2.png":[["wheat-flour-s-x2.88aa0b65.png","images/footer/wheat-flour-s-x2.png"],"images/footer/wheat-flour-s-x2.png"],"./..\\images\\background_images\\bgt-m-x2.png":[["bgt-m-x2.1b62d445.png","images/background_images/bgt-m-x2.png"],"images/background_images/bgt-m-x2.png"],"./..\\images\\background_images\\bgb-m-x2.png":[["bgb-m-x2.c36c0702.png","images/background_images/bgb-m-x2.png"],"images/background_images/bgb-m-x2.png"],"./..\\images\\footer\\wheat-flour-s-x3.png":[["wheat-flour-s-x3.803745c7.png","images/footer/wheat-flour-s-x3.png"],"images/footer/wheat-flour-s-x3.png"],"./..\\images\\background_images\\bgb-m-x3.png":[["bgb-m-x3.5af5ec8b.png","images/background_images/bgb-m-x3.png"],"images/background_images/bgb-m-x3.png"],"./..\\images\\footer\\wheat-flour-m.png":[["wheat-flour-m.d2dc8743.png","images/footer/wheat-flour-m.png"],"images/footer/wheat-flour-m.png"],"./..\\images\\background_images\\bgt-t-x1.png":[["bgt-t-x1.391480ca.png","images/background_images/bgt-t-x1.png"],"images/background_images/bgt-t-x1.png"],"./..\\images\\background_images\\bgb-t-x1.png":[["bgb-t-x1.36419e63.png","images/background_images/bgb-t-x1.png"],"images/background_images/bgb-t-x1.png"],"./..\\images\\footer\\wheat-flour-m-x2.png":[["wheat-flour-m-x2.cfc6020c.png","images/footer/wheat-flour-m-x2.png"],"images/footer/wheat-flour-m-x2.png"],"./..\\images\\background_images\\bgt-t-x2.png":[["bgt-t-x2.abecd3da.png","images/background_images/bgt-t-x2.png"],"images/background_images/bgt-t-x2.png"],"./..\\images\\background_images\\bgb-t-x2.png":[["bgb-t-x2.aabd5312.png","images/background_images/bgb-t-x2.png"],"images/background_images/bgb-t-x2.png"],"./..\\images\\footer\\wheat-flour-m-x3.png":[["wheat-flour-m-x3.441f96c0.png","images/footer/wheat-flour-m-x3.png"],"images/footer/wheat-flour-m-x3.png"],"./..\\images\\background_images\\bgt-t-x3.png":[["bgt-t-x3.9e34d45d.png","images/background_images/bgt-t-x3.png"],"images/background_images/bgt-t-x3.png"],"./..\\images\\background_images\\bgb-t-x3.png":[["bgb-t-x3.b24592ea.png","images/background_images/bgb-t-x3.png"],"images/background_images/bgb-t-x3.png"],"./..\\images\\header\\spoon-1x.png":[["spoon-1x.183ca193.png","images/header/spoon-1x.png"],"images/header/spoon-1x.png"],"./..\\images\\header\\donuts-l-1x.png":[["donuts-l-1x.65083b01.png","images/header/donuts-l-1x.png"],"images/header/donuts-l-1x.png"],"./..\\images\\footer\\wheat-flour-l.png":[["wheat-flour-l.86d4f02f.png","images/footer/wheat-flour-l.png"],"images/footer/wheat-flour-l.png"],"./..\\images\\background_images\\bgt-d-x1.png":[["bgt-d-x1.e176e5dc.png","images/background_images/bgt-d-x1.png"],"images/background_images/bgt-d-x1.png"],"./..\\images\\background_images\\bgb-d-x1.png":[["bgb-d-x1.9a937c8e.png","images/background_images/bgb-d-x1.png"],"images/background_images/bgb-d-x1.png"],"./..\\images\\header\\donuts-l-2x.png":[["donuts-l-2x.2b074218.png","images/header/donuts-l-2x.png"],"images/header/donuts-l-2x.png"],"./..\\images\\footer\\wheat-flour-l-x2.png":[["wheat-flour-l-x2.85876543.png","images/footer/wheat-flour-l-x2.png"],"images/footer/wheat-flour-l-x2.png"],"./..\\images\\background_images\\bgt-d-x2.png":[["bgt-d-x2.4d798876.png","images/background_images/bgt-d-x2.png"],"images/background_images/bgt-d-x2.png"],"./..\\images\\background_images\\bgb-d-x2.png":[["bgb-d-x2.9d3c6d43.png","images/background_images/bgb-d-x2.png"],"images/background_images/bgb-d-x2.png"],"./..\\images\\header\\donuts-l-3x.png":[["donuts-l-3x.cd90cb89.png","images/header/donuts-l-3x.png"],"images/header/donuts-l-3x.png"],"./..\\images\\footer\\wheat-flour-l-x3.png":[["wheat-flour-l-x3.723c6282.png","images/footer/wheat-flour-l-x3.png"],"images/footer/wheat-flour-l-x3.png"],"./..\\images\\background_images\\bgt-d-x3.png":[["bgt-d-x3.e5be817a.png","images/background_images/bgt-d-x3.png"],"images/background_images/bgt-d-x3.png"],"./..\\images\\background_images\\bgb-d-x3.png":[["bgb-d-x3.b071e7e5.png","images/background_images/bgb-d-x3.png"],"images/background_images/bgb-d-x3.png"],"./..\\images\\header\\donuts-s-1x.png":[["donuts-s-1x.ca75f0d1.png","images/header/donuts-s-1x.png"],"images/header/donuts-s-1x.png"],"./..\\images\\header\\donuts-s-2x.png":[["donuts-s-2x.16e205ca.png","images/header/donuts-s-2x.png"],"images/header/donuts-s-2x.png"],"./..\\images\\background_images\\slick-prev.svg":[["slick-prev.be352dea.svg","images/background_images/slick-prev.svg"],"images/background_images/slick-prev.svg"],"./..\\images\\background_images\\slick-next.svg":[["slick-next.9ef04ecc.svg","images/background_images/slick-next.svg"],"images/background_images/slick-next.svg"],"./..\\images\\registration\\tablet_donut4-2.png":[["tablet_donut4-2.9f572f0e.png","images/registration/tablet_donut4-2.png"],"images/registration/tablet_donut4-2.png"],"./..\\images\\registration\\tablet_donut4-2@2x.png":[["tablet_donut4-2@2x.a0b3e4c3.png","images/registration/tablet_donut4-2@2x.png"],"images/registration/tablet_donut4-2@2x.png"],"./..\\images\\registration\\desktop_donut4-2.png":[["desktop_donut4-2.25ceb1cc.png","images/registration/desktop_donut4-2.png"],"images/registration/desktop_donut4-2.png"],"./..\\images\\registration\\desktop_donut4-2@2x.png":[["desktop_donut4-2@2x.61083cda.png","images/registration/desktop_donut4-2@2x.png"],"images/registration/desktop_donut4-2@2x.png"],"./..\\images\\registration\\tablet_kisspng-party-confetti-birthday-idea.png":[["tablet_kisspng-party-confetti-birthday-idea.1ff25f45.png","images/registration/tablet_kisspng-party-confetti-birthday-idea.png"],"images/registration/tablet_kisspng-party-confetti-birthday-idea.png"],"./..\\images\\registration\\tablet_kisspng-party-confetti-birthday-idea@2x.png":[["tablet_kisspng-party-confetti-birthday-idea@2x.8fce1d8f.png","images/registration/tablet_kisspng-party-confetti-birthday-idea@2x.png"],"images/registration/tablet_kisspng-party-confetti-birthday-idea@2x.png"],"./..\\images\\registration\\desktop_kisspng-party-confetti-birthday-idea.png":[["desktop_kisspng-party-confetti-birthday-idea.32aefef3.png","images/registration/desktop_kisspng-party-confetti-birthday-idea.png"],"images/registration/desktop_kisspng-party-confetti-birthday-idea.png"],"./..\\images\\registration\\desktop_kisspng-party-confetti-birthday-idea@2x.png":[["desktop_kisspng-party-confetti-birthday-idea@2x.78fec2fa.png","images/registration/desktop_kisspng-party-confetti-birthday-idea@2x.png"],"images/registration/desktop_kisspng-party-confetti-birthday-idea@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

//скрипт для меню хедера
(function () {
  var openMenuBtnRef = document.querySelector('[data-open-menu-button]');
  var closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
  var menuLinkRef = Array.from(document.querySelectorAll('[data-menu-link]'));
  var mobileMenuRef = document.querySelector('[data-menu]');
  openMenuBtnRef.addEventListener('click', function () {
    mobileMenuRef.classList.add('menu-is-open');
    mobileMenuRef.setAttribute('aria-expanded', true);
    openMenuBtnRef.setAttribute('aria-expanded', false);
  });
  closeMenuBtnRef.addEventListener('click', function () {
    mobileMenuRef.classList.remove('menu-is-open');
    mobileMenuRef.setAttribute('aria-expanded', false);
    closeMenuBtnRef.setAttribute('aria-expanded', true);
  });
  menuLinkRef.forEach(function (linkRef) {
    linkRef.addEventListener('click', function () {
      mobileMenuRef.classList.remove('menu-is-open');
      mobileMenuRef.setAttribute('aria-expanded', false);
    });
  });
})();
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52604" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map