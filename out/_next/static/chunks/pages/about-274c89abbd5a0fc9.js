(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7913:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(2199),c=n(1587),l=n(7215);function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(o?"%"+o:"")]=!0}}var d=a.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,h=e.children,y=e.prefetch,b=e.passHref,g=e.replace,m=e.shallow,E=e.scroll,_=e.locale,j=e.onClick,O=e.onMouseEnter,k=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,d&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var w,M=!1!==y,x=c.useRouter(),C=a.default.useMemo((function(){var e=u.resolveHref(x,p,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:v?u.resolveHref(x,v):o||n}}),[x,p,v]),L=C.href,R=C.as,I=a.default.useRef(L),N=a.default.useRef(R);d&&(w=a.default.Children.only(n));var P=d?w&&"object"===typeof w&&w.ref:t,H=l.useIntersection({rootMargin:"200px"}),U=r(H,3),B=U[0],K=U[1],S=U[2],T=a.default.useCallback((function(e){N.current===R&&I.current===L||(S(),N.current=R,I.current=L),B(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[R,P,L,S,B]);a.default.useEffect((function(){var e=K&&M&&u.isLocalURL(L),t="undefined"!==typeof _?_:x&&x.locale,n=i[L+"%"+R+(t?"%"+t:"")];e&&!n&&s(x,L,R,{locale:t})}),[R,L,K,_,M,x]);var D={ref:T,onClick:function(e){d||"function"!==typeof j||j(e),d&&w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}))}(e,x,L,R,g,m,E,_)},onMouseEnter:function(e){d||"function"!==typeof O||O(e),d&&w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),u.isLocalURL(L)&&s(x,L,R,{priority:!0})}};if(!d||b||"a"===w.type&&!("href"in w.props)){var A="undefined"!==typeof _?_:x&&x.locale,X=x&&x.isLocaleDomain&&u.getDomainLocale(R,A,x&&x.locales,x&&x.domainLocales);D.href=X||u.addBasePath(u.addLocale(R,A,x&&x.defaultLocale))}return d?a.default.cloneElement(w,D):a.default.createElement("a",Object.assign({},k,D),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),y=r(h,2),b=y[0],g=y[1],m=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),f||p||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:n}))}),[f,b,n,p]),E=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!u&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[m,p,E]};var o=n(7294),a=n(8065),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4660:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(1664),o=n.n(r),a=n(5893);function u(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"About us"}),(0,a.jsxs)("div",{children:["Back to"," ",(0,a.jsx)(o(),{href:"/",as:"/Next-gh-page-example/",children:(0,a.jsx)("a",{children:"Home"})})]})]})}},512:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4660)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=512,e(e.s=t);var t}));var t=e.O();_N_E=t}]);