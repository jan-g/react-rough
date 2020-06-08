import e,{memo as t,useContext as r}from"react";import{RoughSVG as n}from"roughjs/bin/svg";import{RoughCanvas as a}from"roughjs/bin/canvas";const c=e.createContext({width:300,height:150,type:"canvas"});function s(e){return null==e||/^[sbn]/.test(typeof e)}c.displayName="RoughContext";const i=({render:t})=>{const{ref:i,config:o,width:l,height:u,type:d}=r(c);return function(t,r){var n,a;"production"!==process.env.NODE_ENV&&function(e){if(!e||!e.length)throw new Error("useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.");if(e.every(s))throw new Error("useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.")}(r),e.useEffect(t,(function e(t,r){var n,a;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array&&(a=t.length)===r.length){for(;a--&&e(t[a],r[a]););return-1===a}if(n===Object){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(a in t)if(!(a in r)||!e(t[a],r[a]))return!1;return!0}}return t!=t&&r!=r}(n=r,(a=e.useRef()).current)||(a.current=n),a.current))}(()=>{const e=i&&i.current;if(e){if("svg"===d){const r=new n(e,o),a=t(r);return e.appendChild(a),()=>{e.removeChild(a)}}{const r=new a(e,o);t(r)}}},[i,o,t,d]),"canvas"===d&&(()=>{if(!l||!u)throw new Error("Canvas should have a defined width and height");const e=i&&i.current,t=e&&e.getContext("2d");t&&t.clearRect(0,0,l,u)})(),null},o=t(({x1:t,y1:r,x2:n,y2:a,...c})=>{const s=e.useCallback(e=>e.line(t,r,n,a,c),[t,r,n,a,c]);return e.createElement(i,{render:e=>s(e)})});o.displayName="Line";const l=t(({x:t,y:r,width:n,height:a,...c})=>{const s=e.useCallback(e=>e.rectangle(t,r,n,a,c),[t,r,n,a,c]);return e.createElement(i,{render:e=>s(e)})});l.displayName="Rectangle";const u=t(({x:t,y:r,width:n,height:a,...c})=>{const s=e.useCallback(e=>e.ellipse(t,r,n,a,c),[t,r,n,a,c]);return e.createElement(i,{render:e=>s(e)})});u.displayName="Ellipse";const d=t(({x:t,y:r,diameter:n,...a})=>{const c=e.useCallback(e=>e.circle(t,r,n,a),[t,r,n,a]);return e.createElement(i,{render:e=>c(e)})});d.displayName="Circle";const h=t(({points:t,...r})=>{const n=e.useCallback(e=>e.linearPath(t,r),[t,r]);return e.createElement(i,{render:e=>n(e)})});h.displayName="LinearPath";const f=t(({points:t,...r})=>{const n=e.useCallback(e=>e.polygon(t,r),[t,r]);return e.createElement(i,{render:e=>n(e)})});f.displayName="Polygon";const p=t(({x:t,y:r,width:n,height:a,start:c,stop:s,closed:o,...l})=>{const u=e.useCallback(e=>e.arc(t,r,n,a,c,s,o,l),[t,r,n,a,c,s,o,l]);return e.createElement(i,{render:e=>u(e)})});p.displayName="Arc";const g=t(({points:t,...r})=>{const n=e.useCallback(e=>e.curve(t,r),[t,r]);return e.createElement(i,{render:e=>n(e)})});g.displayName="Curve";const m=t(({d:t,...r})=>{const n=e.useCallback(e=>e.path(t,r),[t,r]);return e.createElement(i,{render:e=>n(e)})});m.displayName="Path";const y=t(({x:t,y:r,text:n,...a})=>{const c=e.useCallback(e=>e.text(t,r,n,a.size?{size:a.size}:void 0),[t,r,n,a]);return e.createElement(i,{render:e=>c(e)})});y.displayName="Text";const v=({config:t,width:r=300,height:n=150,renderer:a="canvas",forwardedRef:s,children:i})=>{const o=e.useRef(),l=e.useRef();return s?e.createElement(c.Provider,{value:{config:t,width:r,height:n,type:"canvas",ref:s}},i):"svg"===a?e.createElement(c.Provider,{value:{config:t,type:"svg",ref:o}},e.createElement("svg",{width:r,height:n,ref:o},i)):e.createElement(c.Provider,{value:{config:t,width:r,height:n,type:"canvas",ref:l}},e.createElement("canvas",{width:r,height:n,ref:l},i))},E=e.forwardRef((t,r)=>e.createElement(v,Object.assign({},t,{forwardedRef:r})));E.displayName="ReactRough";export default E;export{p as Arc,d as Circle,g as Curve,u as Ellipse,o as Line,h as LinearPath,m as Path,f as Polygon,E as ReactRough,v as ReactRoughComp,l as Rectangle,y as Text};
//# sourceMappingURL=index.modern.js.map
