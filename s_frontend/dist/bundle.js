!function(p){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],i=0,l=[];i<n.length;i++)r=n[i],a[r]&&l.push(a[r][0]),a[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(p[t]=o[t]);for(s&&s(e);l.length;)l.shift()();return f.push.apply(f,u||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var r=f[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(f.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},a={0:0},f=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return p[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=p,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;f.push([2,1]),c()}({10:function(e,t,r){},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(4),u=r(9);r(10);var i=document.querySelector("#root");o.render(n.createElement(u.App,{name:"ExampleProperty"}),i)},9:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return u.createElement(u.Fragment,null,u.createElement("h1",null,"Hello Be-Kind Team"),u.createElement("p",null,"Param: ",this.props.name))},t}(u.Component);t.App=i}});
//# sourceMappingURL=bundle.js.map