!function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=7)}([function(t,n,r){var e={},i=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),a=null,l=0,d=[],s=r(4);function p(t,n){for(var r=0;r<t.length;r++){var i=t[r],o=e[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(u(i.parts[a],n))}else{var l=[];for(a=0;a<i.parts.length;a++)l.push(u(i.parts[a],n));e[i.id]={id:i.id,refs:1,parts:l}}}}function g(t,n){for(var r=[],e={},i=0;i<t.length;i++){var o=t[i],a=n.base?o[0]+n.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};e[a]?e[a].parts.push(l):r.push(e[a]={id:a,parts:[l]})}return r}function c(t,n){var r=o(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=d[d.length-1];if("top"===t.insertAt)e?e.nextSibling?r.insertBefore(n,e.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),d.push(n);else if("bottom"===t.insertAt)r.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertInto+" "+t.insertAt.before);r.insertBefore(n,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=d.indexOf(t);n>=0&&d.splice(n,1)}function x(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),h(n,t.attrs),c(t,n),n}function h(t,n){Object.keys(n).forEach(function(r){t.setAttribute(r,n[r])})}function u(t,n){var r,e,i,o;if(n.transform&&t.css){if(!(o=n.transform(t.css)))return function(){};t.css=o}if(n.singleton){var d=l++;r=a||(a=x(n)),e=_.bind(null,r,d,!1),i=_.bind(null,r,d,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(n,t.attrs),c(t,n),n}(n),e=function(t,n,r){var e=r.css,i=r.sourceMap,o=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||o)&&(e=s(e));i&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([e],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,r,n),i=function(){f(r),r.href&&URL.revokeObjectURL(r.href)}):(r=x(n),e=function(t,n){var r=n.css,e=n.media;e&&t.setAttribute("media",e);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){f(r)});return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=g(t,n);return p(r,n),function(t){for(var i=[],o=0;o<r.length;o++){var a=r[o];(l=e[a.id]).refs--,i.push(l)}t&&p(g(t,n),n);for(o=0;o<i.length;o++){var l;if(0===(l=i[o]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete e[l.id]}}}};var m=function(){var t=[];return function(n,r){return t[n]=r,t.filter(Boolean).join("\n")}}();function _(t,n,r,e){var i=r?"":e.css;if(t.styleSheet)t.styleSheet.cssText=m(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(e),o=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}return[r].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(e[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&e[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),n.push(a))}},n}},function(t,n,r){(t.exports=r(1)(!1)).push([t.i,"html {\r\n\tfont-size: 13.5px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Montserrat', sans-serif;\r\n\tmargin: 0;\r\n\tcolor: dimgrey;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.js-template {\r\n\tdisplay: none;\r\n}\r\n\r\nsection, article, aside, footer, header, nav {\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n.grid__box {\r\n\tpadding: 0 15px;\r\n\tmax-width: 600px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n\r\n.grid--header {\r\n\tbox-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);\r\n\tposition: relative;/*So the shadow casts on top of the lower element*/\r\n}\r\n\r\n.grid__box--header {\r\n\tpadding: 0;/*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/\r\n}\r\n\r\n\t.header {\r\n\t\tdisplay: flex;\r\n\t\theight: 60px;\r\n\t}\r\n\r\n\t\t.header__l-link {\r\n\t\t\tflex-grow: 1;\r\n\t\t\tdisplay: flex;\r\n\t\t}\r\n\r\n\t\t\t.header__l-link--home {\r\n\t\t\t\tflex-grow: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.header__link {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tpadding: 0 15px;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tcolor: dimgrey;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t}\r\n\r\n\t\t\t\t.header__link--help {\r\n\t\t\t\t\tmargin-right: auto;\r\n\t\t\t\t\tborder-right: 1px solid lightgray;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.header__link--home {\r\n\t\t\t\t\tpadding: 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.header__link--login {\r\n\t\t\t\t\tmargin-left: auto;\r\n\t\t\t\t\tborder-left: 1px solid lightgray;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.header__help-img {\r\n\t\t\t\t\theight: 25px;\r\n\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.header__home-img {\r\n\t\t\t\t\theight: 40px;\r\n\t\t\t\t\twidth: 130px;\r\n\t\t\t\t\tpadding: 0 10px;\r\n\r\n\t\t\t\t\tborder-radius: 10px;\r\n\t\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.header__login-img {\r\n\t\t\t\t\theight: 25px;\r\n\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.header__link-text {\r\n\t\t\t\t\tpadding: 3px 0;\r\n\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t}\r\n\r\n\t\t\t \r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\t\r\n\t/**/\r\n\r\n/**/\r\n\r\n\r\n\r\n.grid--topnav {\r\n\tbackground: rgb(14,153,176);\r\n\tbox-shadow: inset 0 -10px 10px -9px rgba(0,0,0,0.5);\r\n}\r\n\r\n.grid__box--topnav {\r\n\tpadding: 0;/*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/\r\n}\r\n\t.topnav {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t\t.topnav__link {\r\n\t\t\theight: 45px;\r\n\t\t\ttext-decoration: none;\r\n\t\t\tcolor: white;\r\n\t\t\tpadding: 0 15px;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\r\n\t\t.topnav__link--myacount {\r\n\t\t\tfont-size: 0.9rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\r\n\t\t.topnav__button {\r\n\t\t\theight: 45px;\r\n\t\t\tfont-family: 'Montserrat', sans-serif;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tbackground: none;\r\n\t\t\tborder: none;\r\n\t\t\toutline: none;\r\n\t\t}\r\n\r\n\t\t\t.topnav__arrow {\r\n\t\t\t\twidth: 10px;\r\n\t\t\t\tmargin: 2px 0 0 5px;\r\n\t\t\t\tstroke: white;\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n/**/\r\n\r\n\r\n\r\n\r\n\r\n\r\n.brief {\r\n\tpadding: 30px 0 0;\r\n\toverflow: hidden;/*fix margin collapse*/\r\n}\r\n\t.brief__title {\r\n\t\tmargin: 0 0 20px;\r\n\t\tfont-size: 1.6em;\r\n\t\tfont-weight: 800;\r\n\t\tcolor: rgb(49,49,49);\r\n\t}\r\n\t.brief__text {\r\n\t\tmargin: 0 0 18px;\r\n\t\tline-height: 1.8rem;\r\n\t}\r\n/**/\r\n\r\n\r\n.grid--guide-form {\r\n\tbackground: rgb(250,250,250);\r\n\tborder-bottom: 1px solid lightgrey;\r\n}\r\n\r\n\t.guide {\r\n\t\tpadding: 15px 0;\r\n\t}\r\n\t\t\r\n\t\t.guide__title {\r\n\t\t\tmargin: 0 0 15px; \r\n\t\t\tfont-size: 1.4rem;\r\n\t\t\tfont-weight: 800;\r\n\t\t\tcolor: rgb(49,49,49);\r\n\t\t}\r\n\r\n\t\t.guide__subtitle {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.45rem;\r\n\t\t\tfont-size: 1.1rem;\r\n\t\t}\r\n\r\n\t\t.guide__text {\r\n\t\t\tline-height: 1.8rem;\r\n\t\t}\r\n\r\n\t\t.guide-list {\r\n\t\t\tlist-style: none;\r\n\t\t\tpadding: 8px 0px 0px 0px;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\t\t\t.guide-list__item {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\t.guide-list__l-id {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\talign-self: stretch;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.guide-list__number {\r\n\t\t\t\t\t\tborder: 2px solid dimgrey;\r\n\t\t\t\t\t\tborder-radius: 40px;\r\n\t\t\t\t\t\twidth: 50px;\r\n\t\t\t\t\t\theight: 50px;\r\n\t\t\t\t\t\tfont-size: 1.22rem;\r\n\t\t\t\t\t\tfont-weight: 800;\r\n\t\t\t\t\t\tline-height: 1rem;\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t.guide-list__l-break {\r\n\t\t\t\t\t\tflex-grow: 1;\r\n\t\t\t\t\t\tmin-height: 32px;\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t\t\t.guide-list__break {\r\n\t\t\t\t\t\t\tmargin-left: 25px;\r\n\t\t\t\t\t\t\theight: 18px;\r\n\t\t\t\t\t\t\tborder-left: 1px solid dimgray;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**/\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t\t.guide-list__l-text {\r\n\t\t\t\t\tmin-height: 50px;\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t\t}\r\n\t\t\t\t\t.guide-list__text {\r\n\t\t\t\t\t\tline-height: 1.4rem;\r\n\t\t\t\t\t\tpadding-left: 20px;\r\n\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.guide-list__l-text--last {\r\n\t\t\t\t\t\tmargin-bottom: 0px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t/**/\r\n\t\t\t\t\r\n\t\t\t\t.guide-list__strong {\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\r\n\t\t\t/**/\r\n\t\t\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n\t.form {\r\n\t\ttransform: translateY(30px);\r\n\t\tborder: 1.1px solid lightgrey;\r\n\t\tborder-radius: 5px;\r\n\t\tbackground: white;\r\n\t\tbox-shadow: 0px 3px 1px 0px rgba(0,0,0,0.05);\r\n\t\tpadding: 15px 15px 0 15px;\r\n\t}\r\n\r\n\t\t.form__title{\r\n\t\t\tmargin: 0 0 20px 0;\r\n\t\t\tcolor: rgb(49,49,49);\r\n\t\t\tfont-size: 1.4rem;\r\n\t\t\tfont-weight: 800;\r\n\t\t}\r\n\t\t\r\n\t\t.form__brief{\r\n\t\t\tmargin: 0  0 20px 0;\r\n\t\t}\r\n\r\n\t\t.form__l-row {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tpadding-bottom: 15px;\r\n\t\t}\r\n\r\n\t\t\t.form__label {\r\n\t\t\t\tmargin: 0 0 3px 1px;\r\n\t\t\t\tfont-size: 0.75rem;\r\n\t\t\t\tfont-weight: 600;\r\n\t\t\t}\r\n\r\n\t\t\t.form__l-input{\r\n\t\t\t\tposition: relative;\r\n\t\t\t}\r\n\r\n\t\t\t\t.form__input {\r\n\t\t\t\t\tfont-family: 'Montserrat', sans-serif;\r\n\t\t\t\t\tpadding-left: 15px;\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\theight: 40px;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tborder: 1px solid lightgrey;\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.form__input:focus {\r\n\t\t\t\t\t\tborder-color: rgb(222, 158, 32);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t\t.form__arrow {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tright: 15px;\r\n\t\t\t\t\ttop: 15px;\r\n\t\t\t\t\theight: 10px;\r\n\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\tstroke: dimgray;\r\n\t\t\t\t\tpointer-events: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t/**/\r\n\t\t\t\r\n\t\t\t.form__button {\r\n\t\t\t\tfont-family: 'Montserrat', sans-serif;\r\n\t\t\t\tbackground-color:  rgb(16, 202, 121);\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\theight: 45px;\r\n\t\t\t\tborder: 2px solid rgb(61, 177, 128);\r\n\t\t\t\toutline: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tletter-spacing: 0.5px;\r\n\t\t\t\tmargin-top: 5px;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.form__link {\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tfont-weight: 600;\r\n\t\t\t\tcolor: rgb(222, 158, 32);\r\n\t\t\t\talign-self: center;\r\n\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\tmargin-bottom: 3px;\r\n\t\t\t}\r\n\t\t\r\n\t\t/**/ \r\n\t\t\r\n\t\t.form__l-row--double {\r\n\t\t\tflex-direction: row;\r\n\t\t\t\r\n\t\t}\r\n\r\n\t\t\t.form__l-curso {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 60%;\r\n\t\t\t\tpadding-right: 10px;\r\n\t\t\t}\r\n\r\n\t\t\t.form__l-mensa {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\twidth: 40%;\r\n\t\t\t\tpadding-left: 10px;\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\t\r\n\t\r\n\t/**/    \r\n\r\n\r\n/**/\r\n\r\n\r\n.share {\r\n\tpadding: 60px 0 15px 0;\r\n}\r\n\t.share__title {\r\n\t\tfont-size: 1.4rem;\r\n\t\tfont-weight: 800;\r\n\t\tcolor: rgb(49,49,49);\r\n\t\tmargin: 0;\r\n\t}\r\n\r\n\t.share__box {\r\n\t\toverflow: hidden;/*fix margin collapse*/\r\n\t\tpadding-top: 25px;\r\n\t\tpadding-bottom: 20px;\r\n\t}\r\n\r\n\t\t.share__box--first {\r\n\t\t\tborder-bottom: 1px solid lightgrey;\r\n\t\t\tpadding-top: 25px;\r\n\t\t}\r\n\r\n\t\t.share__title2 {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: 1.5rem;\r\n\t\t\tfont-size: 1.1rem;\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n\t\t.share__link-box {\r\n\t\t\tdisplay: inline-flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tmargin-right: 30px;\r\n\t\t\tmargin-top: 20px;\r\n\t\t}\r\n\r\n\t\t\t.share__link-box--last{\r\n\t\t\t\tmargin-right: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.share__title3 {\r\n\t\t\t\tdisplay: inline;\r\n\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.share__l-link{\r\n\t\t\t\tmargin-top: 10px;\r\n\t\t\t}\r\n\t\t\t\t.share__link {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tborder: 1px solid lightgrey;\r\n\t\t\t\t\tborder-radius: 35px;\r\n\t\t\t\t\theight: 45px;\r\n\t\t\t\t\twidth: 45px;\r\n\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.share__link--last {\r\n\t\t\t\t\tmargin-right: 0;\r\n\t\t\t\t}\r\n\t\t\t\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t\t.share__form {\r\n\t\t\tpadding-top: 20px;\r\n\t\t\tmargin-bottom: 10px;\r\n\t\t}\r\n\r\n\t\t\t.share__label {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tline-height: 1.6rem; \r\n\t\t\t}\r\n\r\n\t\t\t.share__l-field {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmargin-top: 5px;\r\n\t\t\t\t\r\n\t\t\t\tborder: 1px solid lightgrey;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\t.share__field {\r\n\t\t\t\t\tfont-family: 'Montserrat', sans-serif;\r\n\t\t\t\t\theight: 40px;\r\n\t\t\t\t\tpadding-left: 15px;\r\n\t\t\t\t\tflex-grow: 1;\r\n\t\t\t\t\tborder: 1px solid white;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.share__field::placeholder {   \r\n\t\t\t\t\t\tcolor: rgb(210, 210, 210);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.share__field:-ms-input-placeholder{\r\n\t\t\t\t\t\tcolor: rgb(210, 210, 210);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.share__field:focus {\r\n\t\t\t\t\t\tborder: 1px solid rgb(222, 158, 32);\r\n\t\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\t\t\t\t\r\n\t\t\t\t.share__text {\r\n\t\t\t\t\tpadding-left: 15px;\r\n\t\t\t\t\tflex-grow: 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.share__button {\r\n\t\t\t\t\tfont-family: 'Montserrat', sans-serif;\r\n\t\t\t\t\tcolor: rgb(222, 158, 32);\r\n\t\t\t\t\tfont-weight: 600;\r\n\t\t\t\t\theight: 40px;\r\n\t\t\t\t\twidth: 72px;\r\n\t\t\t\t\tbackground: rgb(250, 250, 250);\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tborder-left: 1px solid lightgrey;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t}\r\n\r\n\t\t\t/**/\r\n\r\n\t\t\t.share__tip {\r\n\t\t\t\tmargin: 7px 0 0 0;\r\n\t\t\t\tfont-size: 0.75rem;\r\n\t\t\t\tfont-style: italic;\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n/**/\r\n\r\n.grid--contact{\r\n\tbackground: rgb(23, 172, 196);\r\n}\r\n\r\n.grid__box--contact{\r\n\tpadding: 0;/*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/\r\n}\r\n\r\n\t.contact {\r\n\t\tpadding: 0;\r\n\t\tmargin: 0;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tlist-style: none;\r\n\t}\r\n\r\n\t\t.contact__item {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-grow: 1;\r\n\t\t\tflex-shrink: 0;\r\n\t\t}\r\n\r\n\t\t\t.contact__item--phone {\r\n\t\t\t\tflex-grow: 2;\r\n\t\t\t}\r\n\r\n\t\t\t.contact__link {\r\n\t\t\t\tpadding: 0 15px;\r\n\t\t\t\tflex-grow: 1;\r\n\t\t\t\twidth: 70px;\r\n\t\t\t\theight: 70px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tborder-left: 1px solid rgb(19, 163, 189);\r\n\t\t\t}\r\n\r\n\t\t\t\t.contact__link--phone {\r\n\t\t\t\t\tflex-direction: row;\r\n\t\t\t\t\tborder-left: none;\r\n\t\t\t\t\tflex-grow: 1;\r\n\t\t\t\t\twidth: auto;\r\n\t\t\t\t\tpadding-right: 5px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.contact__img {\r\n\t\t\t\t\twidth:  25px;\r\n\t\t\t\t\theight: 25px;\r\n\t\t\t\t\tmargin-bottom: 5px;\r\n\t\t\t\t\tborder: 1px solid white;\r\n\t\t\t\t\tborder-radius: 25px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.contact__img--phone {\r\n\t\t\t\t\t\tmargin: 0 5px 0 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t\t.contact__text {\r\n\t\t\t\t\tfont-size: 0.88rem;\r\n\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.contact__text--phone {\r\n\t\t\t\t\t\ttransform: none;\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tflex-direction: column;   \r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.contact__phone-under-text{\r\n\t\t\t\t\t\t\tfont-size: 0.75rem;\r\n\t\t\t\t\t\t\tfont-style: italic;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**/\r\n\r\n\t\t\t\t\t.contact__text--chat {\r\n\t\t\t\t\t\tfont-style: italic;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.contact__dot {\r\n\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\theight: 0.6rem;\r\n\t\t\t\t\t\twidth: 0.6rem;\r\n\t\t\t\t\t\tborder-radius: 10px;\r\n\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\ttop: 0.2rem;\r\n\t\t\t\t\t\tleft: -0.76rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.contact__dot--phone {\r\n\t\t\t\t\t\t\tbackground: rgb(221,63,78);\r\n\t\t\t\t\t\t\tposition: static;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.contact__dot--chat {\r\n\t\t\t\t\t\t\tbackground: rgb(221,63,78);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.contact__dot--email {\r\n\t\t\t\t\t\t\tbackground: rgb(101, 239, 128);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.contact__dot--info {\r\n\t\t\t\t\t\t\tbackground: rgb(101, 239, 128);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t/**/\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n/**/\r\n\r\n\r\n.grid--botnav {\r\n\tbackground: rgb(5, 134, 155);\r\n}\r\n\r\n\t.botnav {\r\n\t\ttext-align: center;\r\n\t\tmargin: 0;\r\n\t\tpadding: 15px 0;\r\n\t\tfont-size: 0.6rem;\r\n\t\tfont-weight: 400;\r\n\t}\r\n\r\n\t\t.botnav__item {\r\n\t\t\tdisplay: inline;\r\n\t\t}\r\n\r\n\t\t\t.botnav__item::before {\r\n\t\t\t\tcontent: \" \";\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t}\r\n\r\n\t\t\t.botnav__item::after {\r\n\t\t\t\tcontent: \" \";\r\n\t\t\t\twhite-space: normal;\r\n\t\t\t\tbackground: linear-gradient(90deg, white 1px, transparent 1px);\r\n\t\t\t}\r\n\r\n\t\t\t/*.botnav__item--last::after {\r\n\t\t\t\tborder: none;\r\n\t\t\t}*/\r\n\t\t\t  \r\n\t\t\t.botnav__link {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\twhite-space: nowrap; /* here */\r\n\t\t\t\tdisplay: inline-block; /* to allow padding */\r\n\t\t\t\tpadding: 8px 10px 8px 10px;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n/**/\r\n\r\n\r\n\r\n\r\n.grid--last {\r\n\tbackground-color: rgb(0, 111, 138);\r\n\tborder-bottom: 2px solid rgb(9, 120, 147);\r\n}\r\n\r\n\t.l-last {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t.security{\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tpadding: 10px 0;\r\n\t\t}\r\n\r\n\t\t\t.security__img {\r\n\t\t\t\twidth:  40px;\r\n\t\t\t\theight: 25px;\r\n\t\t\t\t/*not using only margin bottom beacuse it may wrap*/\r\n\t\t\t\tmargin: 2.5px 2px; \r\n\t\t\t\tbackground: darkgray;\r\n\t\t\t\tflex-shrink: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.security__img--safe-site {\r\n\t\t\t\twidth:  105px;\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t\t.social {\r\n\t\t\tdisplay: unset;\r\n\t\t}\r\n\r\n\t\t\t.social__list {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tlist-style: none;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\tpadding: 10px 0;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.social__item {\r\n\t\t\t\t\tmargin: 0 15px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.social__img{\r\n\t\t\t\t\t\twidth:  35px;\r\n\t\t\t\t\t\theight: 35px;\r\n\t\t\t\t\t\tbackground: white;\r\n\t\t\t\t\t\tborder-radius: 25px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t\t.info {\r\n\t\t\tcolor: rgba(255,255,255,0.5);\r\n\t\t\tfont-size: 0.85rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 10px 0 0 0;\r\n\t\t}\r\n\r\n\t\t\t.info__heart {\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tvertical-align: middle;\r\n\t\t\t}\r\n\r\n\t\t\t.info__text {\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tmargin-bottom:10px; \r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n/**/\r\n\r\n\r\n@media (max-width: 1015px) {\r\n\t.if-desktop {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1015px) {\r\n\t.if-mobile {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.grid__box{\r\n\t\tmax-width: 1015px;\r\n\t\tmargin: 0 auto;\r\n\t\t\r\n\t}\r\n\r\n\t/*GUIDE-FORM*/\r\n\t.l-guide-form {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t\t.guide, .form {\r\n\t\t\tflex-basis: 50%;\r\n\t\t}\r\n\t\t\r\n\t\t.form {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\tmargin-left: 25px;\r\n\t\t}\r\n\r\n\t/**/\r\n\r\n\t/*SHARE*/\r\n\t.share__title {\r\n\t\tpadding-bottom: 15px;\r\n\t\tborder-bottom: 1px solid lightgrey;\r\n\t}\r\n\r\n\t.share__l-boxes {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t\t.share__box {\r\n\t\t\tflex-basis: 50%;\r\n\t\t}\r\n\r\n\t\t.share__box--first {\r\n\t\t\tborder-bottom: 0;\r\n\t\t}\r\n\t\t\r\n\t\t.share__box--last {\r\n\t\t\tmargin-left: 25px;\r\n\t\t}\r\n\r\n\t/**/\r\n\r\n\r\n\t/*HEADER*/\r\n\t.header-d__l-link {\r\n\t\tflex-basis: 40%;\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t\t.header-d__l-link--left {\r\n\t\t\tmargin-right: auto;\r\n\t\t}\r\n\r\n\t\t.header-d__l-link--right {\r\n\t\t\tmargin-left: auto;\r\n\t\t}\r\n\r\n\t\t.header-d__link {\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tpadding: 0 15px;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\tcolor: dimgrey;\r\n\t\t\ttext-decoration: none;\r\n\t\t}\r\n\r\n\t\t\t.header-d__link--help {\r\n\t\t\t\tborder-right: 1px solid lightgray;\r\n\t\t\t}   \r\n\t\t\t\r\n\t\t\t.header-d__link--login {\r\n\t\t\t\tmargin-left: auto;\r\n\t\t\t} \r\n\r\n\t\t\t.header-d__help-img {\r\n\t\t\t\theight: 25px;\r\n\t\t\t\twidth: 25px;\r\n\t\t\t\tborder-radius: 100%;\r\n\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t}\r\n\r\n\t\t\t.header-d__phone-img {\r\n\t\t\t\theight: 25px;\r\n\t\t\t\twidth: 25px;\r\n\t\t\t\tborder-radius: 100%;\r\n\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.header-d__login-img {\r\n\t\t\t\theight: 25px;\r\n\t\t\t\twidth: 25px;\r\n\t\t\t\tborder-radius: 100%;\r\n\t\t\t\tbackground-color: rgb(222, 158, 32);\r\n\t\t\t}\r\n\r\n\t\t\t.header-d__link-text {\r\n\t\t\t\tpadding: 0 5px;\r\n\t\t\t\tcolor: grey;\r\n\t\t\t}\r\n\r\n\t\t \r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n\r\n\t/*topnav*/\r\n\t.topnav {\r\n\t\twhite-space: nowrap;\r\n\t}\r\n\t\t\r\n\t\t.topnav-d__l-links {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-wrap: wrap;\r\n\t\t}\r\n\r\n\t\t\t.topnav-d__link {\r\n\t\t\t\tdisplay: inline-flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\theight: 45px;\r\n\t\t\t\tpadding: 0 20px;\r\n\t\t\t\ttext-decoration: none;\r\n\t\t\t\tcolor: white;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t}\r\n\r\n\t\t\t.topnav-d__link--active {\r\n\t\t\t\tbackground: rgba(255,255,255,0.2)\r\n\t\t\t}\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n\r\n\t/*contact*/\r\n\t.contact-d {\r\n\t\tpadding: 30px 0;\r\n\t\tmargin: 0;\r\n\t\tdisplay: flex;\r\n\t\tflex-wrap: wrap;\r\n\t\tjustify-content: space-between;\r\n\t\tlist-style: none;\r\n\t}\r\n\r\n\t\t.contact-d__item {\r\n\t\t\tpadding: 0 15px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\r\n\t\t\t.contact-d__img {\r\n\t\t\t\twidth:  35px;\r\n\t\t\t\theight: 35px;\r\n\t\t\t\tmargin-right: 10px;\r\n\t\t\t\tborder: 1px solid rgb(0, 135, 158);\r\n\t\t\t\tborder-radius: 25px;\r\n\t\t\t}\r\n\r\n\t\t\t.contact-d__l-text {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\r\n\t\t\t\t.contact-d__link {\r\n\t\t\t\t\tfont-size: 1.4rem;\r\n\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tmargin-bottom: 2px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.contact-d__under-text{\r\n\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.contact-d__dot {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\theight: 0.5rem;\r\n\t\t\t\t\twidth: 0.5rem;\r\n\t\t\t\t\tborder-radius: 10px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.contact-d__dot--phone {\r\n\t\t\t\t\t\tbackground: rgb(221,63,78);\r\n\t\t\t\t\t\tposition: static;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.contact-d__dot--chat {\r\n\t\t\t\t\t\tbackground: rgb(221,63,78);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.contact-d__dot--email {\r\n\t\t\t\t\t\tbackground: rgb(101, 239, 128);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.contact-d__dot--help {\r\n\t\t\t\t\t\tbackground: rgb(101, 239, 128);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n\r\n\t/*botnav*/\r\n\t.grid--botnav{\r\n\t\tborder-bottom: 2px solid rgb(11, 140, 161);\r\n\t}\r\n\t\r\n\t.botnav-d {\r\n\t\tlist-style: none;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin: 0;\r\n\t\tpadding: 50px 0;\r\n\t}\r\n\r\n\t\t.botnav-d__item-l1 {\r\n\t\t\tdisplay: unset;\r\n\t\t}\r\n\r\n\t\t\t.botnav-d__list {\r\n\t\t\t\tlist-style: none;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.botnav-d__title {\r\n\t\t\t\t\tmargin: 0 0 20px;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\tfont-weight: 600;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.botnav-d__item-l2 {\r\n\t\t\t\t\tdisplay: unset;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.botnav-d__link {\r\n\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t\ttext-decoration: none;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.botnav__link--last {\r\n\t\t\t\t\t\tmargin-bottom: 0;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t/**/\r\n\r\n\t/*media*/\r\n\t.grid-d--media {\r\n\t\tbackground-color: rgb(5, 134, 155);\r\n\t}\r\n\r\n\t\t.media-d {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 40px 0;\r\n\t\t}\r\n\r\n\t\t\t.media-d__box {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\r\n\t\t\t\t.media-d__title {\r\n\t\t\t\t\tmargin: 0 0 30px 0;\r\n\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.media-d__list {\r\n\t\t\t\t\tlist-style: none;\r\n\t\t\t\t\tpadding: 0;\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__link {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tbackground: white;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__link--globo {\r\n\t\t\t\t\t\theight: 35px;\r\n\t\t\t\t\t\twidth: 35px;\r\n\t\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__link--folha, .media-d__link--veja {\r\n\t\t\t\t\t\theight: 35px;\r\n\t\t\t\t\t\twidth: 70px;\r\n\t\t\t\t\t\tmargin-left: 15px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__link--you, .media-d__link--inst, .media-d__link--twi, .media-d__link--fac {\r\n\t\t\t\t\t\theight: 35px;\r\n\t\t\t\t\t\twidth: 35px;\r\n\t\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__link--epoca {\r\n\t\t\t\t\t\theight: 50px;\r\n\t\t\t\t\t\twidth: 70px;\r\n\t\t\t\t\t\tmargin-right: 15px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__img--selo {\r\n\t\t\t\t\t\twidth: 45px;\r\n\t\t\t\t\t\theight: 45px;\r\n\t\t\t\t\t\tbackground-color: rgb(217, 158, 6);\r\n\t\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\t\tmargin-right: 10px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.media-d__text {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\tmax-width: 200px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t\t.media-d__l-content {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t}\r\n\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\t\r\n\t/**/\r\n\r\n\r\n\t/*last*/\r\n\t.grid-d--last {\r\n\t\tbackground-color: rgb(0, 111, 138);\r\n\t}\r\n\r\n\t\t.last-d {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 20px 0;\r\n\t\t}\r\n\r\n\t\t\t.last-d__l-text {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-grow: 1;\r\n\t\t\t\tflex-basis: 33%;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t\t.last-d__text {\r\n\t\t\t\t\tcolor: rgba(255,255,255,0.5);\r\n\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\t.last-d__text--right {\r\n\t\t\t\t\t\tmargin-left: auto;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.last-d__heart {\r\n\t\t\t\t\t\tfont-size: 1rem;\r\n\t\t\t\t\t\tvertical-align: middle;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t/**/\r\n\r\n\t\t\t/**/\r\n\t\t\t\r\n\t\t\t.last-d__security{\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tpadding: 0 10px;\r\n\t\t\t}\r\n\t\t\r\n\t\t\t\t.last-d__img {\r\n\t\t\t\t\twidth:  40px;\r\n\t\t\t\t\theight: 25px;\r\n\t\t\t\t\tmargin-left: 4px;\r\n\t\t\t\t\tbackground: darkgray;\r\n\t\t\t\t\tflex-shrink: 0;\r\n\t\t\t\t}\r\n\t\t\r\n\t\t\t\t.last-d__img--safe-site {\r\n\t\t\t\t\twidth: 105px;\r\n\t\t\t\t\tmargin-left: 0;\r\n\t\t\t\t}\r\n\t\t\r\n\t\t\t/**/\r\n\r\n\t\t/**/\r\n\r\n\t\r\n\r\n\t\r\n\r\n\t/**/\r\n\r\n}",""])},function(t,n,r){var e=r(2);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(0)(e,i);e.locals&&(t.exports=e.locals)},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=n.protocol+"//"+n.host,e=r+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var i,o=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:e+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,n,r){(t.exports=r(1)(!1)).push([t.i,"body {\n  background-color: whitesmoke; }\n",""])},function(t,n,r){var e=r(5);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(0)(e,i);e.locals&&(t.exports=e.locals)},function(t,n,r){r(6),r(3)}]);