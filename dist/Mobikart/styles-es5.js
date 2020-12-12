(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcStylesScss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/*Global Styling*/\n/* Font styles*/\n/* Font size*/\n/* Colors*/\n/* Padding*/\n/* Height*/\n/* Borders*/\n.cdk-global-overlay-wrapper,\n.cdk-overlay-container {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 8;\n}\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 9;\n}\n.cdk-overlay-backdrop {\n  width: 100%;\n  height: 100%;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288);\n}\n@font-face {\n  font-family: open-sans;\n  src: url('OpenSans-Regular.ttf') format(\"opentype\");\n}\nbody {\n  margin: 0;\n  min-width: 1200px;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-family: \"open-sans\";\n  color: black;\n  font-weight: 500;\n  background-color: #f1f3f6;\n}\n.midContent {\n  min-height: 85vh;\n}\n.mainContent {\n  width: 100%;\n}\ninput {\n  border: none;\n  padding: 10px;\n}\n.btnCart {\n  background-color: #6930ca;\n  color: white;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.btnLogin {\n  background-color: white;\n  color: #6930ca;\n  cursor: pointer;\n  border-radius: 2px;\n}\nmat-card {\n  background-color: white;\n}\n/*Snack Bar custom theme css*/\n.snackBar {\n  background: #6930ca;\n  margin-bottom: 30px !important;\n  max-width: 450px !important;\n}\n.mat-simple-snackbar {\n  font-family: \"open-sans\";\n  font-size: 14px;\n  color: white;\n}\n.productName {\n  color: black;\n  font-size: 18px;\n}\ninput:focus {\n  outline: none;\n}\n::-webkit-scrollbar-track {\n  width: 8px;\n  border-radius: 2px;\n  background-color: white;\n}\n::-webkit-scrollbar {\n  width: 14px;\n  background-color: white;\n}\n::-webkit-scrollbar-thumb {\n  background-color: lightgray;\n}\nmat-dialog-container {\n  padding: 0px !important;\n}\n.loginPanel {\n  min-width: 650px;\n}", "", {
      "version": 3,
      "sources": ["E:\\Mobikart/src\\styles.scss", "E:\\Mobikart/src\\styles\\variables.scss", "E:\\Mobikart/src\\styles\\dialog.scss", "styles.scss"],
      "names": [],
      "mappings": "AAAA,iBAAA;ACAA,eAAA;AAKA,aAAA;AAMA,UAAA;AAcA,WAAA;AAKA,UAAA;AAGA,WAAA;ACjCA;;EAEE,oBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;ACQF;ADLA;EACE,eAAA;EACA,UAAA;ACQF;ADLA;EACE,aAAA;EACA,kBAAA;EACA,UAAA;ACQF;ADNA;EACE,WAAA;EACA,YAAA;ACSF;ADPA;EACE,gCAAA;ACUF;AH/BA;EACE,sBAAA;EACA,mDAAA;AGkCF;AH/BA;EACE,SAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,eCPc;EDQd,wBCbY;EDcZ,YCHmB;EDInB,gBAAA;EACA,yBCEc;AE+BhB;AH5BA;EACE,gBAAA;AG+BF;AH7BA;EACE,WAAA;AGgCF;AH9BA;EACE,YAAA;EACA,aAAA;AGiCF;AH/BA;EACE,yBCpBc;EDqBd,YCnBY;EDoBZ,eAAA;EACA,kBAAA;AGkCF;AH/BA;EACE,uBCzBY;ED0BZ,cC5Bc;ED6Bd,eAAA;EACA,kBAAA;AGkCF;AH/BA;EAGE,uBClCY;AEkEd;AH7BA,6BAAA;AACA;EACE,mBCzCc;ED0Cd,8BAAA;EACA,2BAAA;AGgCF;AH9BA;EACE,wBC1DY;ED2DZ,eAAA;EACA,YAAA;AGiCF;AH9BA;EACE,YAAA;EACA,eCzDa;AE0Ff;AH/BA;EACE,aAAA;AGkCF;AHhCA;EACE,UAAA;EACA,kBAAA;EACA,uBC3DY;AE8Fd;AHhCA;EACE,WAAA;EACA,uBChEY;AEmGd;AHhCA;EACE,2BCjEiB;AEoGnB;AHhCA;EAEE,uBAAA;AGkCF;AHhCA;EACE,gBAAA;AGmCF",
      "file": "styles.scss",
      "sourcesContent": ["/*Global Styling*/\n@import './styles/variables.scss';\n@import './styles/dialog.scss';\n@font-face {\n  font-family: open-sans;\n  src: url(assets/fonts/OpenSans-Regular.ttf) format('opentype');\n}\n\nbody {\n  margin: 0; // Sets the body to full width\n  min-width: 1200px; //For lower resolutions sets scrollbar\n  width: 100%;\n  height: 100%;\n  font-size: $font-size-big;\n  font-family: $font-family;\n  color: $color-font-primary;\n  font-weight: 500;\n  background-color: $color-bg-grey;\n}\n// .baseHeight {\n//   min-height: 89vh;\n// }\n.midContent {\n  min-height: 85vh;\n}\n.mainContent {\n  width: 100%;\n}\ninput {\n  border: none;\n  padding: 10px;\n}\n.btnCart {\n  background-color: $color-primary;\n  color: $color-white;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.btnLogin {\n  background-color: $color-white;\n  color: $color-primary;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\nmat-card {\n  // width: 300px;\n  // height: 400px;\n  background-color: $color-white;\n}\n\n/*Snack Bar custom theme css*/\n.snackBar {\n  background: $color-primary;\n  margin-bottom: 30px !important;\n  max-width: 450px !important;\n}\n.mat-simple-snackbar {\n  font-family: $font-family;\n  font-size: 14px;\n  color: white;\n}\n\n.productName {\n  color: black;\n  font-size: $font-size-xl;\n}\ninput:focus {\n  outline: none;\n}\n::-webkit-scrollbar-track {\n  width: 8px;\n  border-radius: 2px;\n  background-color: $color-white;\n}\n\n::-webkit-scrollbar {\n  width: 14px;\n  background-color: $color-white;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: $color-light-gray;\n}\n\nmat-dialog-container {\n  // background-color: white;\n  padding: 0px !important;\n}\n.loginPanel {\n  min-width: 650px;\n}\n", "/* Font styles*/\r\n$font-family: 'open-sans';\r\n$font-family-bold: 'Roboto, Bold';\r\n$font-family-bold-italic: 'Roboto,Italic';\r\n\r\n/* Font size*/\r\n$font-size-big: 16px;\r\n$font-size-medium: 14px;\r\n$font-size-small: 12px;\r\n$font-size-xl: 18px;\r\n\r\n/* Colors*/\r\n$color-font-primary: black;\r\n$color-primary: #6930ca;\r\n$color-dark-blue: #172337;\r\n$color-white: white;\r\n$color-yellow: #f58c13;\r\n$color-error: #ff0000;\r\n$color-light-gray: lightgray;\r\n$color-bg-grey: #f1f3f6;\r\n$color-warning: #ffde00;\r\n$color-success: #0f4918;\r\n$color-btn-orange: #fb641b;\r\n$color-txt-grey: grey;\r\n$color-txt-green: #388e3c;\r\n/* Padding*/\r\n$size-small: 5px;\r\n$size-medium: 10px;\r\n$size-big: 20px;\r\n\r\n/* Height*/\r\n$navigation-height: 40px;\r\n\r\n/* Borders*/\r\n$border-bottom-bold: 2px solid $color-light-gray;\r\n$border-bottom: 1px solid $color-light-gray;\r\n", ".cdk-global-overlay-wrapper,\r\n.cdk-overlay-container {\r\n  pointer-events: none;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.cdk-overlay-container {\r\n  position: fixed;\r\n  z-index: 8;\r\n}\r\n\r\n.cdk-global-overlay-wrapper {\r\n  display: flex;\r\n  position: absolute;\r\n  z-index: 9;\r\n}\r\n.cdk-overlay-backdrop {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.cdk-overlay-dark-backdrop {\r\n  background: rgba(0, 0, 0, 0.288);\r\n}\r\n", "/*Global Styling*/\n/* Font styles*/\n/* Font size*/\n/* Colors*/\n/* Padding*/\n/* Height*/\n/* Borders*/\n.cdk-global-overlay-wrapper,\n.cdk-overlay-container {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 8;\n}\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 9;\n}\n\n.cdk-overlay-backdrop {\n  width: 100%;\n  height: 100%;\n}\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288);\n}\n\n@font-face {\n  font-family: open-sans;\n  src: url(assets/fonts/OpenSans-Regular.ttf) format(\"opentype\");\n}\nbody {\n  margin: 0;\n  min-width: 1200px;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-family: \"open-sans\";\n  color: black;\n  font-weight: 500;\n  background-color: #f1f3f6;\n}\n\n.midContent {\n  min-height: 85vh;\n}\n\n.mainContent {\n  width: 100%;\n}\n\ninput {\n  border: none;\n  padding: 10px;\n}\n\n.btnCart {\n  background-color: #6930ca;\n  color: white;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.btnLogin {\n  background-color: white;\n  color: #6930ca;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\nmat-card {\n  background-color: white;\n}\n\n/*Snack Bar custom theme css*/\n.snackBar {\n  background: #6930ca;\n  margin-bottom: 30px !important;\n  max-width: 450px !important;\n}\n\n.mat-simple-snackbar {\n  font-family: \"open-sans\";\n  font-size: 14px;\n  color: white;\n}\n\n.productName {\n  color: black;\n  font-size: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n::-webkit-scrollbar-track {\n  width: 8px;\n  border-radius: 2px;\n  background-color: white;\n}\n\n::-webkit-scrollbar {\n  width: 14px;\n  background-color: white;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: lightgray;\n}\n\nmat-dialog-container {\n  padding: 0px !important;\n}\n\n.loginPanel {\n  min-width: 650px;\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.scss":
  /*!*************************!*\
    !*** ./src/styles.scss ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesScss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.scss ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Mobikart\src\styles.scss */
    "./src/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map