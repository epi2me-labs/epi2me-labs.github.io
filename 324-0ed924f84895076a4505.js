"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2||[]).push([[324],{5258:function(t){!function(e,i,s){let r;(r=s.define)&&r.amd?r([],(function(){return i})):(r=s.modules)?r["FlexSearch".toLowerCase()]=i:t.exports=i}(0,function t(e){function i(t,e){const i=e?e.id:t&&t.id;this.id=i||0===i?i:_++,this.init(t,e),h(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),h(this,"length",(function(){return this.index.length}))}function s(t,e,i,s){return this.u!==this.g&&(this.o=this.o.concat(i),this.u++,s&&this.o.length>=s&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function r(t){const e=j();for(const i in t)if(t.hasOwnProperty(i)){const s=t[i];b(s)?e[i]=s.slice(0):x(s)?e[i]=r(s):e[i]=s}return e}function n(t,e){const i=t.length,s=w(e),r=[];for(let n=0,o=0;n<i;n++){const i=t[n];(s&&e(i)||!s&&!e[i])&&(r[o++]=i)}return r}function o(t,e,i,s,r,n,o,h,c,l){let f;if(i=m(i,o?0:r,h,n,e,c,l),h&&(h=i.page,f=i.next,i=i.result),o)e=this.where(o,null,r,i);else{for(e=i,i=this.l,r=e.length,n=Array(r),o=0;o<r;o++)n[o]=i[e[o]];e=n}return i=e,s&&(w(s)||(A=s.split(":"),1<A.length?s=g:(A=A[0],s=p)),i.sort(s)),i=y(h,f,i),this.cache&&this.j.set(t,i),i}function h(t,e,i){Object.defineProperty(t,e,{get:i})}function c(t){return new RegExp(t,"g")}function l(t,e){for(let i=0;i<e.length;i+=2)t=t.replace(e[i],e[i+1]);return t}function f(t,e,i,s,r,n,o,h){return e[i]?e[i]:(r=r?(h-(o||h/1.5))*n+(o||h/1.5)*r:n,e[i]=r,r>=o&&((t=(t=t[h-(r+.5>>0)])[i]||(t[i]=[]))[t.length]=s),r)}function a(t,e){if(t){const i=Object.keys(t);for(let s=0,r=i.length;s<r;s++){const r=i[s],n=t[r];if(n)for(let i=0,s=n.length;i<s;i++){if(n[i]===e){1===s?delete t[r]:n.splice(i,1);break}x(n[i])&&a(n[i],e)}}}}function u(t){let e="",i="";var s="";for(let r=0;r<t.length;r++){const n=t[r];n!==i&&(r&&"h"===n?(s="a"===s||"e"===s||"i"===s||"o"===s||"u"===s||"y"===s,(("a"===i||"e"===i||"i"===i||"o"===i||"u"===i||"y"===i)&&s||" "===i)&&(e+=n)):e+=n),s=r===t.length-1?"":t[r+1],i=n}return e}function d(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function p(t,e){return(t=t[A])<(e=e[A])?-1:t>e?1:0}function g(t,e){const i=A.length;for(let s=0;s<i;s++)t=t[A[s]],e=e[A[s]];return t<e?-1:t>e?1:0}function y(t,e,i){return t?{page:t,next:e?""+e:null,result:i}:i}function m(t,e,i,s,r,n,o){let h,c=[];if(!0===i){i="0";var l=""}else l=i&&i.split(":");const f=t.length;if(1<f){const b=j(),w=[];let x,O;var a,u=0;let Z;var d=!0;let S,C,P,F,_,E,T=0;if(l&&(2===l.length?(F=l,l=!1):l=_=parseInt(l[0],10)),o){for(x=j();u<f;u++)if("not"===r[u])for(O=t[u],Z=O.length,a=0;a<Z;a++)x["@"+O[a]]=1;else P=u+1;if(k(P))return y(i,h,c);u=0}else C=v(r)&&r;for(;u<f;u++){const v=u===(P||f)-1;if(!C||!u)if((a=C||r&&r[u])&&"and"!==a){if("or"!==a)continue;E=!1}else E=n=!0;if(O=t[u],Z=O.length){if(d){if(!S){S=O;continue}var p=S.length;for(a=0;a<p;a++){var g="@"+(d=S[a]);o&&x[g]||(b[g]=1,n||(c[T++]=d))}S=null,d=!1}for(g=!1,a=0;a<Z;a++){var m="@"+(p=O[a]);const t=n?b[m]||0:u;if(!(!t&&!s||o&&x[m]||!n&&b[m]))if(t===u){if(v){if((!_||--_<T)&&(c[T++]=p,e&&T===e))return y(i,T+(l||0),c)}else b[m]=u+1;g=!0}else s&&((m=w[t]||(w[t]=[]))[m.length]=p)}if(E&&!g&&!s)break}else if(E&&!s)return y(i,h,O)}if(S)if(u=S.length,o)for(a=l?parseInt(l,10):0;a<u;a++)x["@"+(t=S[a])]||(c[T++]=t);else c=S;if(s)for(T=c.length,F?(u=parseInt(F[0],10)+1,a=parseInt(F[1],10)+1):(u=w.length,a=0);u--;)if(p=w[u]){for(Z=p.length;a<Z;a++)if(s=p[a],(!o||!x["@"+s])&&(c[T++]=s,e&&T===e))return y(i,u+":"+a,c);a=0}}else!f||r&&"not"===r[0]||(c=t[0],l&&(l=parseInt(l[0],10)));return e&&(o=c.length,l&&l>o&&(l=0),h=(l=l||0)+e,h<o?c=c.slice(l,h):(h=0,l&&(c=c.slice(l)))),y(i,h,c)}function v(t){return"string"==typeof t}function b(t){return t.constructor===Array}function w(t){return"function"==typeof t}function x(t){return"object"==typeof t}function k(t){return void 0===t}function O(t){const e=Array(t);for(let i=0;i<t;i++)e[i]=j();return e}function j(){return Object.create(null)}function Z(){let t,e;self.onmessage=function(i){if(i=i.data)if(i.search){const s=e.search(i.content,i.threshold?{limit:i.limit,threshold:i.threshold,where:i.where}:i.limit);self.postMessage({id:t,content:i.content,limit:i.limit,result:s})}else i.add?e.add(i.id,i.content):i.update?e.update(i.id,i.content):i.remove?e.remove(i.id):i.clear?e.clear():i.info?((i=e.info()).worker=t,console.log(i)):i.register&&(t=i.id,i.options.cache=!1,i.options.async=!1,i.options.worker=!1,e=new Function(i.register.substring(i.register.indexOf("{")+1,i.register.lastIndexOf("}")))(),e=new e(i.options))}}function S(i,s,r,n){i=e("flexsearch","id"+i,Z,(function(t){(t=t.data)&&t.result&&n(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),s);const o=t.toString();return r.id=s,i.postMessage({register:o,options:r,id:s}),i}const C={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},P={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},F=[];let _=0;const E={},T={};let A;i.create=function(t,e){return new i(t,e)},i.registerMatcher=function(t){for(const e in t)t.hasOwnProperty(e)&&F.push(c(e),t[e]);return this},i.registerEncoder=function(t,e){return M[t]=e.bind(M),this},i.registerLanguage=function(t,e){return E[t]=e.filter,T[t]=e.stemmer,this},i.encode=function(t,e){return M[t](e)},i.prototype.init=function(t,e){if(this.v=[],e){var n=e.preset;t=e}else t||(t=C),n=t.preset;if(e={},v(t)?(e=P[t],t={}):n&&(e=P[n]),n=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var o=parseInt(n,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var h=0;h<o;h++)this.m[h]=S(this.id,h,t,s.bind(this))}if(this.f=t.tokenize||e.f||this.f||C.f,this.split=k(n=t.split)?this.split||C.split:v(n)?c(n):n,this.D=t.rtl||this.D||C.D,this.async="undefined"==typeof Promise||k(n=t.async)?this.async||C.async:n,this.g=k(n=t.worker)?this.g||C.g:n,this.threshold=k(n=t.threshold)?e.threshold||this.threshold||C.threshold:n,this.b=k(n=t.resolution)?n=e.b||this.b||C.b:n,n<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||k(n=t.depth)?e.depth||this.depth||C.depth:n,this.w=(n=k(n=t.encode)?e.encode||C.encode:n)&&M[n]&&M[n].bind(M)||(w(n)?n:this.w||!1),(n=t.matcher)&&this.addMatcher(n),n=(e=t.lang)||t.filter){if(v(n)&&(n=E[n]),b(n)){o=this.w,h=j();for(var l=0;l<n.length;l++){var f=o?o(n[l]):n[l];h[f]=1}n=h}this.filter=n}if(n=e||t.stemmer){var a;for(a in e=v(n)?T[n]:n,o=this.w,h=[],e)e.hasOwnProperty(a)&&(l=o?o(a):a,h.push(c(l+"($|\\W)"),o?o(e[a]):e[a]));this.stemmer=a=h}if(this.a=h=(n=t.doc)?r(n):this.a||C.a,this.i=O(this.b-(this.threshold||0)),this.h=j(),this.c=j(),h){if(this.l=j(),t.doc=null,a=h.index={},e=h.keys=[],o=h.field,l=h.tag,f=h.store,b(h.id)||(h.id=h.id.split(":")),f){var u=j();if(v(f))u[f]=1;else if(b(f))for(let t=0;t<f.length;t++)u[f[t]]=1;else x(f)&&(u=f);h.store=u}if(l){if(this.G=j(),f=j(),o)if(v(o))f[o]=t;else if(b(o))for(u=0;u<o.length;u++)f[o[u]]=t;else x(o)&&(f=o);for(b(l)||(h.tag=l=[l]),o=0;o<l.length;o++)this.G[l[o]]=j();this.I=l,o=f}if(o){let s;for(b(o)||(x(o)?(s=o,h.field=o=Object.keys(o)):h.field=o=[o]),h=0;h<o.length;h++)b(l=o[h])||(s&&(t=s[l]),e[h]=l,o[h]=l.split(":")),a[l]=new i(t)}t.doc=n}return this.B=!0,this.j=!!(this.cache=n=k(n=t.cache)?this.cache||C.cache:n)&&new I(n),this},i.prototype.encode=function(t){return t&&(F.length&&(t=l(t,F)),this.v.length&&(t=l(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=l(t,this.stemmer))),t},i.prototype.addMatcher=function(t){const e=this.v;for(const i in t)t.hasOwnProperty(i)&&e.push(c(i),t[i]);return this},i.prototype.add=function(t,e,i,s,r){if(this.a&&x(t))return this.A("add",t,e);if(e&&v(e)&&(t||0===t)){var o="@"+t;if(this.c[o]&&!s)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[o]=""+this.C,i&&i(),this;if(!r){if(this.async&&"function"!=typeof importScripts){let r=this;return o=new Promise((function(i){setTimeout((function(){r.add(t,e,null,s,!0),r=null,i()}))})),i?(o.then(i),this):o}if(i)return this.add(t,e,null,s,!0),i(),this}if(!(e=this.encode(e)).length)return this;r=w(i=this.f)?i(e):e.split(this.split),this.filter&&(r=n(r,this.filter));const d=j();d._ctx=j();const p=r.length,g=this.threshold,y=this.depth,m=this.b,v=this.i,b=this.D;for(let e=0;e<p;e++){var h=r[e];if(h){var c=h.length,l=(b?e+1:p-e)/p,a="";switch(i){case"reverse":case"both":for(var u=c;--u;)f(v,d,a=h[u]+a,t,b?1:(c-u)/c,l,g,m-1);a="";case"forward":for(u=0;u<c;u++)f(v,d,a+=h[u],t,b?(u+1)/c:1,l,g,m-1);break;case"full":for(u=0;u<c;u++){const e=(b?u+1:c-u)/c;for(let i=c;i>u;i--)f(v,d,a=h.substring(u,i),t,e,l,g,m-1)}break;default:if(c=f(v,d,h,t,1,l,g,m-1),y&&1<p&&c>=g)for(c=d._ctx[h]||(d._ctx[h]=j()),h=this.h[h]||(this.h[h]=O(m-(g||0))),0>(l=e-y)&&(l=0),(a=e+y+1)>p&&(a=p);l<a;l++)l!==e&&f(h,c,r[l],t,0,m-(l<e?e-l:l-e),g,m-1)}}}this.c[o]=1,this.B=!1}return this},i.prototype.A=function(t,e,i){if(b(e)){var s=e.length;if(s--){for(var r=0;r<s;r++)this.A(t,e[r]);return this.A(t,e[s],i)}}else{var n,o=this.a.index,h=this.a.keys,c=this.a.tag;r=this.a.store;var l=this.a.id;s=e;for(var f=0;f<l.length;f++)s=s[l[f]];if("remove"===t&&(delete this.l[s],l=h.length,l--)){for(e=0;e<l;e++)o[h[e]].remove(s);return o[h[l]].remove(s,i)}if(c){for(n=0;n<c.length;n++){var a=c[n],u=e;for(l=a.split(":"),f=0;f<l.length;f++)u=u[l[f]];u="@"+u}n=(n=this.G[a])[u]||(n[u]=[])}for(let r=0,n=(l=this.a.field).length;r<n;r++){for(a=l[r],c=e,u=0;u<a.length;u++)c=c[a[u]];a=o[h[r]],u="add"===t?a.add:a.update,r===n-1?u.call(a,s,c,i):u.call(a,s,c)}if(r){for(i=Object.keys(r),t=j(),o=0;o<i.length;o++)if(r[h=i[o]]){let i,s;for(h=h.split(":"),l=0;l<h.length;l++)i=(i||e)[c=h[l]],s=(s||t)[c]=i}e=t}n&&(n[n.length]=e),this.l[s]=e}return this},i.prototype.update=function(t,e,i){return this.a&&x(t)?this.A("update",t,e):(this.c["@"+t]&&v(e)&&(this.remove(t),this.add(t,e,i,!0)),this)},i.prototype.remove=function(t,e,i){if(this.a&&x(t))return this.A("remove",t,e);var s="@"+t;if(this.c[s]){if(this.g)return this.m[this.c[s]].postMessage({remove:!0,id:t}),delete this.c[s],e&&e(),this;if(!i){if(this.async&&"function"!=typeof importScripts){let i=this;return s=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(s.then(e),this):s}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)a(this.i[e],t);this.depth&&a(this.h,t),delete this.c[s],this.B=!1}return this},i.prototype.search=function(t,e,i,s){if(x(e)){if(b(e))for(var r=0;r<e.length;r++)e[r].query=t;else e.query=t;t=e,e=1e3}else e&&w(e)?(i=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var h=[],c=t;if(x(t)&&!b(t)){i||(i=t.callback)&&(c.callback=null);var l=t.sort,f=t.page;e=t.limit,Z=t.threshold;var a=t.suggest;t=t.query}if(this.a){Z=this.a.index;const n=c.where;var u=c.bool||"or",p=c.field;let d,m,w=u;if(p)b(p)||(p=[p]);else if(b(c)){var g=c;p=[],w=[];for(var y=0;y<c.length;y++)r=(s=c[y]).bool||u,p[y]=s.field,w[y]=r,"not"===r?d=!0:"and"===r&&(m=!0)}else p=this.a.keys;for(u=p.length,y=0;y<u;y++)g&&(c=g[y]),f&&!v(c)&&(c.page=null,c.limit=0),h[y]=Z[p[y]].search(c,0);if(i)return i(o.call(this,t,w,h,l,e,a,n,f,m,d));if(this.async){const i=this;return new Promise((function(s){Promise.all(h).then((function(r){s(o.call(i,t,w,r,l,e,a,n,f,m,d))}))}))}return o.call(this,t,w,h,l,e,a,n,f,m,d)}if(Z||(Z=this.threshold||0),!s){if(this.async&&"function"!=typeof importScripts){let t=this;return Z=new Promise((function(i){setTimeout((function(){i(t.search(c,e,null,!0)),t=null}))})),i?(Z.then(i),this):Z}if(i)return i(this.search(c,e,null,!0)),this}if(!t||!v(t))return h;if(c=t,this.cache)if(this.B){if(i=this.j.get(t))return i}else this.j.clear(),this.B=!0;if(!(c=this.encode(c)).length)return h;i=w(i=this.f)?i(c):c.split(this.split),this.filter&&(i=n(i,this.filter)),g=i.length,s=!0,r=[];var k=j(),O=0;if(1<g&&(this.depth&&"strict"===this.f?u=!0:i.sort(d)),!u||(y=this.h)){const t=this.b;for(;O<g;O++){let e=i[O];if(e){if(u){if(!p)if(y[e])p=e,k[e]=1;else if(!a)return h;if(a&&O===g-1&&!r.length)u=!1,e=p||e,k[e]=0;else if(!p)continue}if(!k[e]){const i=[];let n=!1,o=0;const h=u?y[p]:this.i;if(h){let s;for(let r=0;r<t-Z;r++)(s=h[r]&&h[r][e])&&(i[o++]=s,n=!0)}if(n)p=e,r[r.length]=1<o?i.concat.apply([],i):i[0];else if(!a){s=!1;break}k[e]=1}}}}else s=!1;return s&&(h=m(r,e,f,a)),this.cache&&this.j.set(t,h),h}this.F=i,this.u=0,this.o=[];for(var Z=0;Z<this.g;Z++)this.m[Z].postMessage({search:!0,limit:e,content:t})},i.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},i.prototype.where=function(t,e,i,s){const r=this.l,n=[];let o,h=0;var c;let l;if(x(t)){i||(i=e);var f=Object.keys(t),a=f.length;if(o=!1,1===a&&"id"===f[0])return[r[t.id]];if((c=this.I)&&!s)for(var u=0;u<c.length;u++){var d=c[u],p=t[d];if(!k(p)){if(l=this.G[d]["@"+p],0==--a)return l;f.splice(f.indexOf(d),1),delete t[d];break}}for(c=Array(a),u=0;u<a;u++)c[u]=f[u].split(":")}else{if(w(t)){for(i=(e=s||Object.keys(r)).length,f=0;f<i;f++)t(a=r[e[f]])&&(n[h++]=a);return n}if(k(e))return[r[t]];if("id"===t)return[r[e]];f=[t],a=1,c=[t.split(":")],o=!0}for(u=(s=l||s||Object.keys(r)).length,d=0;d<u;d++){p=l?s[d]:r[s[d]];let u=!0;for(let i=0;i<a;i++){o||(e=t[f[i]]);const s=c[i],r=s.length;let n=p;if(1<r)for(let t=0;t<r;t++)n=n[s[t]];else n=n[s[0]];if(n!==e){u=!1;break}}if(u&&(n[h++]=p,i&&h===i))break}return n},i.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:F.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},i.prototype.clear=function(){return this.destroy().init()},i.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const t=this.a.keys;for(let e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},i.prototype.export=function(t){const e=!t||k(t.serialize)||t.serialize;if(this.a){const e=!t||k(t.doc)||t.doc;var i=!t||k(t.index)||t.index;t=[];let s=0;if(i)for(i=this.a.keys;s<i.length;s++){const e=this.a.index[i[s]];t[s]=[e.i,e.h,Object.keys(e.c)]}e&&(t[s]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},i.prototype.import=function(t,e){(!e||k(e.serialize)||e.serialize)&&(t=JSON.parse(t));const i=j();if(this.a){var s=!e||k(e.doc)||e.doc,r=0;if(!e||k(e.index)||e.index){const s=(e=this.a.keys).length;for(var n=t[0][2];r<n.length;r++)i[n[r]]=1;for(r=0;r<s;r++){n=this.a.index[e[r]];const s=t[r];s&&(n.i=s[0],n.h=s[1],n.c=i)}}s&&(this.l=x(s)?s:t[r])}else{for(s=t[2],r=0;r<s.length;r++)i[s[r]]=1;this.i=t[0],this.h=t[1],this.c=i}};const L=function(){const t=c("\\s+"),e=c("[^a-z0-9 ]"),i=[c("[-/]")," ",e,"",t," "];return function(t){return u(l(t.toLowerCase(),i))}}(),M={icase:function(t){return t.toLowerCase()},simple:function(){const t=c("\\s+"),e=c("[^a-z0-9 ]"),i=c("[-/]"),s=[c("[àáâãäå]"),"a",c("[èéêë]"),"e",c("[ìíîï]"),"i",c("[òóôõöő]"),"o",c("[ùúûüű]"),"u",c("[ýŷÿ]"),"y",c("ñ"),"n",c("[çc]"),"k",c("ß"),"s",c(" & ")," and ",i," ",e,"",t," "];return function(t){return" "===(t=l(t.toLowerCase(),s))?"":t}}(),advanced:function(){const t=c("ae"),e=c("ai"),i=c("ay"),s=c("ey"),r=c("oe"),n=c("ue"),o=c("ie"),h=c("sz"),f=c("zs"),a=c("ck"),d=c("cc"),p=[t,"a",e,"ei",i,"ei",s,"ei",r,"o",n,"u",o,"i",h,"s",f,"s",c("sh"),"s",a,"k",d,"k",c("th"),"t",c("dt"),"t",c("ph"),"f",c("pf"),"f",c("ou"),"o",c("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=l(t,p)),e||1<t.length&&(t=u(t)),t):t}}(),extra:function(){const t=[c("p"),"b",c("z"),"s",c("[cgq]"),"k",c("n"),"m",c("d"),"t",c("[vw]"),"f",c("[aeiouy]"),""];return function(e){if(!e)return e;if(1<(e=this.advanced(e,!0)).length){e=e.split(" ");for(let i=0;i<e.length;i++){const s=e[i];1<s.length&&(e[i]=s[0]+l(s.substring(1),t))}e=u(e=e.join(" "))}return e}}(),balance:L},I=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=j(),this.count=j(),this.index=j(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&k(this.cache[t])){let i=this.s.length;if(i===this.H){i--;const t=this.s[i];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=i,this.s[i]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){const e=this.cache[t];if(this.H&&e){var i=++this.count[t];const e=this.index;let r=e[t];if(0<r){const n=this.s;for(var s=r;this.count[n[--r]]<=i&&-1!==r;);if(r++,r!==s){for(i=s;i>r;i--)s=n[i-1],n[i]=s,e[s]=i;n[r]=t,e[t]=r}}}return e},t}();return i}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(i,s,r,n,o){return r=e?URL.createObjectURL(new Blob(["("+r.toString()+")()"],{type:"text/javascript"})):i+".min.js",t[i+="-"+s]||(t[i]=[]),t[i][o]=new Worker(r),t[i][o].onmessage=n,t[i][o]}}()),this)},5324:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=i(3782),r=i(5773),n=i(141),o=i(7378),h=i(2757),c=i(7228),l=i(7960),f=i(5258),a=i.n(f);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],s=!0,r=!1,n=void 0;try{for(var o,h=t[Symbol.iterator]();!(s=(o=h.next()).done)&&(i.push(o.value),!e||i.length!==e);s=!0);}catch(c){r=!0,n=c}finally{try{s||null==h.return||h.return()}finally{if(r)throw n}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=new Error("FlexSearch index is required. Check that your index exists and is valid."),p=new Error("FlexSearch store is required. Check that your store exists and is valid."),g=i(3109),y=i(8229);var m=(t,e)=>{const{0:i,1:s}=(0,o.useState)(t);return(0,o.useEffect)((()=>{const i=setTimeout((()=>{s(t)}),e);return()=>{clearTimeout(i)}}),[t,e]),i},v=i(4637);var b=()=>(0,o.useLayoutEffect)((()=>{const t=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>document.body.style.overflow=t}),[]),w=i(8911);const x=["searchTerm","setSearchTerm","delay","focus","handleFocus","handleClose"];function k(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?k(Object(i),!0).forEach((function(e){(0,n.Z)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const j=t=>{let{onClick:e}=t;return(0,w.tZ)(o.Fragment,null,(0,w.tZ)(h.xu,{sx:l.Z.overlay,onClick:e}),(0,w.tZ)(h.xu,{sx:l.Z.close},(0,w.tZ)(h.hU,{onClick:e},(0,w.tZ)(c.aHS,null)),(0,w.tZ)(h.xu,{sx:l.Z.esc},"ESC")))},Z=t=>{let{results:e}=t;return b(),(0,w.tZ)(h.xu,{sx:l.Z.resultsWrapper},(0,w.tZ)(h.xu,{sx:l.Z.hitsWrapper},(0,w.tZ)(h.xu,{variant:"lists.cards.fixed.search",sx:l.Z.hitGroup},e.map((t=>{const e=O(O({},t),{},{key:t.id,excerpt:t.description||"This post has no description, the EPI2ME Labs bot is very sad about this."});return(0,w.tZ)(y.Z,(0,r.Z)({variant:"search"},e,{omitCategory:!0,omitFooter:!0,omitMedia:!0}))})))))},S=t=>{let{searchTerm:e,setSearchTerm:i,delay:n,focus:h,handleFocus:c,handleClose:l}=t,f=(0,s.Z)(t,x);return(0,w.tZ)(o.Fragment,null,(0,w.tZ)(v.Z,(0,r.Z)({focus:h,onFocus:c,onChange:t=>i(t.target.value),onKeyDown:t=>{27===t.keyCode&&(t.currentTarget.blur(),l())},isLoaded:!0},f)))};var C=t=>{let{isFocused:e=!1}=t;const{0:i,1:s}=(0,o.useState)(e),r=(0,g.useStaticQuery)("3667468360"),n=r.localSearchPages.index,c=r.localSearchPages.store,{0:l,1:f}=(0,o.useState)(""),y=m(l,500),v=function(t,e,i,s){var r=u((0,o.useState)(null),2),n=r[0],h=r[1];return(0,o.useEffect)((function(){if(!e)throw d;if(!i)throw p}),[e,i]),(0,o.useEffect)((function(){if(e instanceof a())h(e);else{var t=a().create();t.import(e),h(t)}}),[e]),(0,o.useMemo)((function(){return t&&n&&i?n.search(t,s).map((function(t){return i[t]})):[]}),[t,n,i])}(l,n,c),b=()=>s(!1);return(0,w.tZ)(h.xu,null,(0,w.tZ)(h.xu,null,(0,w.tZ)(S,{searchTerm:y,setSearchTerm:f,focus:i,handleFocus:()=>!i&&s(!0),handleClose:b}),i&&(0,w.tZ)(Z,{results:v})),i&&(0,w.tZ)(o.Fragment,null,(0,w.tZ)(j,{onClick:b})))}}}]);
//# sourceMappingURL=324-0ed924f84895076a4505.js.map