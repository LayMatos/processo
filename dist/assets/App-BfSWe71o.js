const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Cla_nhNE.js","assets/index-DF4vcbd5.js","assets/index-BdkBRzvs.css","assets/StatusBadge-BkFYEyyF.js","assets/index-t--hEgTQ.js","assets/Detail--cC5IOiK.js","assets/SubmitInfo-CipJRGI7.js"])))=>i.map(i=>d[i]);
import{r as l,j as E,_ as te}from"./index-DF4vcbd5.js";var _={},se;function Ne(){if(se)return _;se=1,Object.defineProperty(_,"__esModule",{value:!0}),_.parse=s,_.serialize=u;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,n=Object.prototype.toString,o=(()=>{const m=function(){};return m.prototype=Object.create(null),m})();function s(m,y){const d=new o,x=m.length;if(x<2)return d;const g=(y==null?void 0:y.decode)||h;let f=0;do{const w=m.indexOf("=",f);if(w===-1)break;const v=m.indexOf(";",f),R=v===-1?x:v;if(w>R){f=m.lastIndexOf(";",w-1)+1;continue}const b=c(m,f,w),A=i(m,w,b),N=m.slice(b,A);if(d[N]===void 0){let F=c(m,w+1,R),P=i(m,R,F);const T=g(m.slice(F,P));d[N]=T}f=R+1}while(f<x);return d}function c(m,y,d){do{const x=m.charCodeAt(y);if(x!==32&&x!==9)return y}while(++y<d);return d}function i(m,y,d){for(;y>d;){const x=m.charCodeAt(--y);if(x!==32&&x!==9)return y+1}return d}function u(m,y,d){const x=(d==null?void 0:d.encode)||encodeURIComponent;if(!e.test(m))throw new TypeError(`argument name is invalid: ${m}`);const g=x(y);if(!t.test(g))throw new TypeError(`argument val is invalid: ${y}`);let f=m+"="+g;if(!d)return f;if(d.maxAge!==void 0){if(!Number.isInteger(d.maxAge))throw new TypeError(`option maxAge is invalid: ${d.maxAge}`);f+="; Max-Age="+d.maxAge}if(d.domain){if(!r.test(d.domain))throw new TypeError(`option domain is invalid: ${d.domain}`);f+="; Domain="+d.domain}if(d.path){if(!a.test(d.path))throw new TypeError(`option path is invalid: ${d.path}`);f+="; Path="+d.path}if(d.expires){if(!p(d.expires)||!Number.isFinite(d.expires.valueOf()))throw new TypeError(`option expires is invalid: ${d.expires}`);f+="; Expires="+d.expires.toUTCString()}if(d.httpOnly&&(f+="; HttpOnly"),d.secure&&(f+="; Secure"),d.partitioned&&(f+="; Partitioned"),d.priority)switch(typeof d.priority=="string"?d.priority.toLowerCase():void 0){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${d.priority}`)}if(d.sameSite)switch(typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite){case!0:case"strict":f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"none":f+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${d.sameSite}`)}return f}function h(m){if(m.indexOf("%")===-1)return m;try{return decodeURIComponent(m)}catch{return m}}function p(m){return n.call(m)==="[object Date]"}return _}Ne();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ce="popstate";function Te(e={}){function t(a,n){let{pathname:o,search:s,hash:c}=a.location;return Z("",{pathname:o,search:s,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:B(n)}return De(t,r,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function S(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fe(){return Math.random().toString(36).substring(2,10)}function de(e,t){return{usr:e.state,key:e.key,idx:t}}function Z(e,t,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?M(t):t,state:r,key:t&&t.key||a||Fe()}}function B({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function M(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function De(e,t,r,a={}){let{window:n=document.defaultView,v5Compat:o=!1}=a,s=n.history,c="POP",i=null,u=h();u==null&&(u=0,s.replaceState({...s.state,idx:u},""));function h(){return(s.state||{idx:null}).idx}function p(){c="POP";let g=h(),f=g==null?null:g-u;u=g,i&&i({action:c,location:x.location,delta:f})}function m(g,f){c="PUSH";let w=Z(x.location,g,f);u=h()+1;let v=de(w,u),R=x.createHref(w);try{s.pushState(v,"",R)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;n.location.assign(R)}o&&i&&i({action:c,location:x.location,delta:1})}function y(g,f){c="REPLACE";let w=Z(x.location,g,f);u=h();let v=de(w,u),R=x.createHref(w);s.replaceState(v,"",R),o&&i&&i({action:c,location:x.location,delta:0})}function d(g){let f=n.location.origin!=="null"?n.location.origin:n.location.href,w=typeof g=="string"?g:B(g);return w=w.replace(/ $/,"%20"),C(f,`No window.location.(origin|href) available to create URL for href: ${w}`),new URL(w,f)}let x={get action(){return c},get location(){return e(n,s)},listen(g){if(i)throw new Error("A history only accepts one active listener");return n.addEventListener(ce,p),i=g,()=>{n.removeEventListener(ce,p),i=null}},createHref(g){return t(n,g)},createURL:d,encodeLocation(g){let f=d(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:y,go(g){return s.go(g)}};return x}function pe(e,t,r="/"){return Ae(e,t,r,!1)}function Ae(e,t,r,a){let n=typeof t=="string"?M(t):t,o=I(n.pathname||"/",r);if(o==null)return null;let s=ye(e);Me(s);let c=null;for(let i=0;c==null&&i<s.length;++i){let u=Ke(o);c=Ve(s[i],u,a)}return c}function ye(e,t=[],r=[],a=""){let n=(o,s,c)=>{let i={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};i.relativePath.startsWith("/")&&(C(i.relativePath.startsWith(a),`Absolute route path "${i.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),i.relativePath=i.relativePath.slice(a.length));let u=$([a,i.relativePath]),h=r.concat(i);o.children&&o.children.length>0&&(C(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),ye(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:We(u,o.index),routesMeta:h})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))n(o,s);else for(let i of ge(o.path))n(o,s,i)}),t}function ge(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return n?[o,""]:[o];let s=ge(a.join("/")),c=[];return c.push(...s.map(i=>i===""?o:[o,i].join("/"))),n&&c.push(...s),c.map(i=>e.startsWith("/")&&i===""?"/":i)}function Me(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ze(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Oe=/^:[\w-]+$/,_e=3,je=2,Be=1,He=10,Ue=-2,fe=e=>e==="*";function We(e,t){let r=e.split("/"),a=r.length;return r.some(fe)&&(a+=Ue),t&&(a+=je),r.filter(n=>!fe(n)).reduce((n,o)=>n+(Oe.test(o)?_e:o===""?Be:He),a)}function ze(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function Ve(e,t,r=!1){let{routesMeta:a}=e,n={},o="/",s=[];for(let c=0;c<a.length;++c){let i=a[c],u=c===a.length-1,h=o==="/"?t:t.slice(o.length)||"/",p=Y({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},h),m=i.route;if(!p&&u&&r&&!a[a.length-1].route.index&&(p=Y({path:i.relativePath,caseSensitive:i.caseSensitive,end:!1},h)),!p)return null;Object.assign(n,p.params),s.push({params:n,pathname:$([o,p.pathname]),pathnameBase:Xe($([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=$([o,p.pathnameBase]))}return s}function Y(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Je(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let o=n[0],s=o.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:a.reduce((u,{paramName:h,isOptional:p},m)=>{if(h==="*"){let d=c[m]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}const y=c[m];return p&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Je(e,t=!1,r=!0){S(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,i)=>(a.push({paramName:c,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function Ke(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return S(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function I(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Ye(e,t="/"){let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?M(e):e;return{pathname:r?r.startsWith("/")?r:qe(r,t):t,search:Qe(a),hash:Ze(n)}}function qe(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function X(e,t,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ge(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ve(e){let t=Ge(e);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function xe(e,t,r,a=!1){let n;typeof e=="string"?n=M(e):(n={...e},C(!n.pathname||!n.pathname.includes("?"),X("?","pathname","search",n)),C(!n.pathname||!n.pathname.includes("#"),X("#","pathname","hash",n)),C(!n.search||!n.search.includes("#"),X("#","search","hash",n)));let o=e===""||n.pathname==="",s=o?"/":n.pathname,c;if(s==null)c=r;else{let p=t.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;n.pathname=m.join("/")}c=p>=0?t[p]:"/"}let i=Ye(n,c),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&r.endsWith("/");return!i.pathname.endsWith("/")&&(u||h)&&(i.pathname+="/"),i}var $=e=>e.join("/").replace(/\/\/+/g,"/"),Xe=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ze=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function et(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var we=["POST","PUT","PATCH","DELETE"];new Set(we);var tt=["GET",...we];new Set(tt);var O=l.createContext(null);O.displayName="DataRouter";var q=l.createContext(null);q.displayName="DataRouterState";var Ee=l.createContext({isTransitioning:!1});Ee.displayName="ViewTransition";var rt=l.createContext(new Map);rt.displayName="Fetchers";var nt=l.createContext(null);nt.displayName="Await";var k=l.createContext(null);k.displayName="Navigation";var H=l.createContext(null);H.displayName="Location";var L=l.createContext({outlet:null,matches:[],isDataRoute:!1});L.displayName="Route";var re=l.createContext(null);re.displayName="RouteError";function at(e,{relative:t}={}){C(U(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=l.useContext(k),{hash:n,pathname:o,search:s}=W(e,{relative:t}),c=o;return r!=="/"&&(c=o==="/"?r:$([r,o])),a.createHref({pathname:c,search:s,hash:n})}function U(){return l.useContext(H)!=null}function D(){return C(U(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(H).location}var Ce="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Re(e){l.useContext(k).static||l.useLayoutEffect(e)}function ot(){let{isDataRoute:e}=l.useContext(L);return e?vt():it()}function it(){C(U(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(O),{basename:t,navigator:r}=l.useContext(k),{matches:a}=l.useContext(L),{pathname:n}=D(),o=JSON.stringify(ve(a)),s=l.useRef(!1);return Re(()=>{s.current=!0}),l.useCallback((i,u={})=>{if(S(s.current,Ce),!s.current)return;if(typeof i=="number"){r.go(i);return}let h=xe(i,JSON.parse(o),n,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:$([t,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[t,r,o,n,e])}l.createContext(null);function lr(){let{matches:e}=l.useContext(L),t=e[e.length-1];return t?t.params:{}}function W(e,{relative:t}={}){let{matches:r}=l.useContext(L),{pathname:a}=D(),n=JSON.stringify(ve(r));return l.useMemo(()=>xe(e,JSON.parse(n),a,t==="path"),[e,n,a,t])}function lt(e,t){return be(e,t)}function be(e,t,r,a){var w;C(U(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n,static:o}=l.useContext(k),{matches:s}=l.useContext(L),c=s[s.length-1],i=c?c.params:{},u=c?c.pathname:"/",h=c?c.pathnameBase:"/",p=c&&c.route;{let v=p&&p.path||"";Pe(u,!p||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let m=D(),y;if(t){let v=typeof t=="string"?M(t):t;C(h==="/"||((w=v.pathname)==null?void 0:w.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${v.pathname}" was given in the \`location\` prop.`),y=v}else y=m;let d=y.pathname||"/",x=d;if(h!=="/"){let v=h.replace(/^\//,"").split("/");x="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=!o&&r&&r.matches&&r.matches.length>0?r.matches:pe(e,{pathname:x});S(p||g!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),S(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let f=ft(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},i,v.params),pathname:$([h,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?h:$([h,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,r,a);return t&&f?l.createElement(H.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},f):f}function ut(){let e=gt(),t=et(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=l.createElement(l.Fragment,null,l.createElement("p",null,"💿 Hey developer 👋"),l.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",l.createElement("code",{style:o},"ErrorBoundary")," or"," ",l.createElement("code",{style:o},"errorElement")," prop on your route.")),l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),r?l.createElement("pre",{style:n},r):null,s)}var st=l.createElement(ut,null),ct=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?l.createElement(L.Provider,{value:this.props.routeContext},l.createElement(re.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dt({routeContext:e,match:t,children:r}){let a=l.useContext(O);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(L.Provider,{value:e},r)}function ft(e,t=[],r=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,o=r==null?void 0:r.errors;if(o!=null){let i=n.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);C(i>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),n=n.slice(0,Math.min(n.length,i+1))}let s=!1,c=-1;if(r)for(let i=0;i<n.length;i++){let u=n[i];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=i),u.route.id){let{loaderData:h,errors:p}=r,m=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){s=!0,c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}return n.reduceRight((i,u,h)=>{let p,m=!1,y=null,d=null;r&&(p=o&&u.route.id?o[u.route.id]:void 0,y=u.route.errorElement||st,s&&(c<0&&h===0?(Pe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,d=null):c===h&&(m=!0,d=u.route.hydrateFallbackElement||null)));let x=t.concat(n.slice(0,h+1)),g=()=>{let f;return p?f=y:m?f=d:u.route.Component?f=l.createElement(u.route.Component,null):u.route.element?f=u.route.element:f=i,l.createElement(dt,{match:u,routeContext:{outlet:i,matches:x,isDataRoute:r!=null},children:f})};return r&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?l.createElement(ct,{location:r.location,revalidation:r.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}function ne(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ht(e){let t=l.useContext(O);return C(t,ne(e)),t}function mt(e){let t=l.useContext(q);return C(t,ne(e)),t}function pt(e){let t=l.useContext(L);return C(t,ne(e)),t}function ae(e){let t=pt(e),r=t.matches[t.matches.length-1];return C(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function yt(){return ae("useRouteId")}function gt(){var a;let e=l.useContext(re),t=mt("useRouteError"),r=ae("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[r]}function vt(){let{router:e}=ht("useNavigate"),t=ae("useNavigate"),r=l.useRef(!1);return Re(()=>{r.current=!0}),l.useCallback(async(n,o={})=>{S(r.current,Ce),r.current&&(typeof n=="number"?e.navigate(n):await e.navigate(n,{fromRouteId:t,...o}))},[e,t])}var he={};function Pe(e,t,r){!t&&!he[e]&&(he[e]=!0,S(!1,r))}l.memo(xt);function xt({routes:e,future:t,state:r}){return be(e,void 0,r,t)}function V(e){C(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wt({basename:e="/",children:t=null,location:r,navigationType:a="POP",navigator:n,static:o=!1}){C(!U(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=l.useMemo(()=>({basename:s,navigator:n,static:o,future:{}}),[s,n,o]);typeof r=="string"&&(r=M(r));let{pathname:i="/",search:u="",hash:h="",state:p=null,key:m="default"}=r,y=l.useMemo(()=>{let d=I(i,s);return d==null?null:{location:{pathname:d,search:u,hash:h,state:p,key:m},navigationType:a}},[s,i,u,h,p,m,a]);return S(y!=null,`<Router basename="${s}"> is not able to match the URL "${i}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:l.createElement(k.Provider,{value:c},l.createElement(H.Provider,{children:t,value:y}))}function Et({children:e,location:t}){return lt(ee(e),t)}function ee(e,t=[]){let r=[];return l.Children.forEach(e,(a,n)=>{if(!l.isValidElement(a))return;let o=[...t,n];if(a.type===l.Fragment){r.push.apply(r,ee(a.props.children,o));return}C(a.type===V,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),C(!a.props.index||!a.props.children,"An index route cannot have child routes.");let s={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=ee(a.props.children,o)),r.push(s)}),r}var J="get",K="application/x-www-form-urlencoded";function G(e){return e!=null&&typeof e.tagName=="string"}function Ct(e){return G(e)&&e.tagName.toLowerCase()==="button"}function Rt(e){return G(e)&&e.tagName.toLowerCase()==="form"}function bt(e){return G(e)&&e.tagName.toLowerCase()==="input"}function Pt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function St(e,t){return e.button===0&&(!t||t==="_self")&&!Pt(e)}var z=null;function kt(){if(z===null)try{new FormData(document.createElement("form"),0),z=!1}catch{z=!0}return z}var Lt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Q(e){return e!=null&&!Lt.has(e)?(S(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${K}"`),null):e}function $t(e,t){let r,a,n,o,s;if(Rt(e)){let c=e.getAttribute("action");a=c?I(c,t):null,r=e.getAttribute("method")||J,n=Q(e.getAttribute("enctype"))||K,o=new FormData(e)}else if(Ct(e)||bt(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let i=e.getAttribute("formaction")||c.getAttribute("action");if(a=i?I(i,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||J,n=Q(e.getAttribute("formenctype"))||Q(c.getAttribute("enctype"))||K,o=new FormData(c,e),!kt()){let{name:u,type:h,value:p}=e;if(h==="image"){let m=u?`${u}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else u&&o.append(u,p)}}else{if(G(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=J,a=null,n=K,s=e}return o&&n==="text/plain"&&(s=o,o=void 0),{action:a,method:r.toLowerCase(),encType:n,formData:o,body:s}}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function It(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nt(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Tt(e,t,r){let a=await Promise.all(e.map(async n=>{let o=t.routes[n.route.id];if(o){let s=await It(o,r);return s.links?s.links():[]}return[]}));return Mt(a.flat(1).filter(Nt).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function me(e,t,r,a,n,o){let s=(i,u)=>r[u]?i.route.id!==r[u].route.id:!0,c=(i,u)=>{var h;return r[u].pathname!==i.pathname||((h=r[u].route.path)==null?void 0:h.endsWith("*"))&&r[u].params["*"]!==i.params["*"]};return o==="assets"?t.filter((i,u)=>s(i,u)||c(i,u)):o==="data"?t.filter((i,u)=>{var p;let h=a.routes[i.route.id];if(!h||!h.hasLoader)return!1;if(s(i,u)||c(i,u))return!0;if(i.route.shouldRevalidate){let m=i.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:i.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Ft(e,t,{includeHydrateFallback:r}={}){return Dt(e.map(a=>{let n=t.routes[a.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Dt(e){return[...new Set(e)]}function At(e){let t={},r=Object.keys(e).sort();for(let a of r)t[a]=e[a];return t}function Mt(e,t){let r=new Set;return new Set(t),e.reduce((a,n)=>{let o=JSON.stringify(At(n));return r.has(o)||(r.add(o),a.push({key:o,link:n})),a},[])}function Ot(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&I(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Se(){let e=l.useContext(O);return oe(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function _t(){let e=l.useContext(q);return oe(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ie=l.createContext(void 0);ie.displayName="FrameworkContext";function ke(){let e=l.useContext(ie);return oe(e,"You must render this element inside a <HydratedRouter> element"),e}function jt(e,t){let r=l.useContext(ie),[a,n]=l.useState(!1),[o,s]=l.useState(!1),{onFocus:c,onBlur:i,onMouseEnter:u,onMouseLeave:h,onTouchStart:p}=t,m=l.useRef(null);l.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=f=>{f.forEach(w=>{s(w.isIntersecting)})},g=new IntersectionObserver(x,{threshold:.5});return m.current&&g.observe(m.current),()=>{g.disconnect()}}},[e]),l.useEffect(()=>{if(a){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[a]);let y=()=>{n(!0)},d=()=>{n(!1),s(!1)};return r?e!=="intent"?[o,m,{}]:[o,m,{onFocus:j(c,y),onBlur:j(i,d),onMouseEnter:j(u,y),onMouseLeave:j(h,d),onTouchStart:j(p,y)}]:[!1,m,{}]}function j(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Bt({page:e,...t}){let{router:r}=Se(),a=l.useMemo(()=>pe(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?l.createElement(Ut,{page:e,matches:a,...t}):null}function Ht(e){let{manifest:t,routeModules:r}=ke(),[a,n]=l.useState([]);return l.useEffect(()=>{let o=!1;return Tt(e,t,r).then(s=>{o||n(s)}),()=>{o=!0}},[e,t,r]),a}function Ut({page:e,matches:t,...r}){let a=D(),{manifest:n,routeModules:o}=ke(),{basename:s}=Se(),{loaderData:c,matches:i}=_t(),u=l.useMemo(()=>me(e,t,i,n,a,"data"),[e,t,i,n,a]),h=l.useMemo(()=>me(e,t,i,n,a,"assets"),[e,t,i,n,a]),p=l.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let d=new Set,x=!1;if(t.forEach(f=>{var v;let w=n.routes[f.route.id];!w||!w.hasLoader||(!u.some(R=>R.route.id===f.route.id)&&f.route.id in c&&((v=o[f.route.id])!=null&&v.shouldRevalidate)||w.hasClientLoader?x=!0:d.add(f.route.id))}),d.size===0)return[];let g=Ot(e,s);return x&&d.size>0&&g.searchParams.set("_routes",t.filter(f=>d.has(f.route.id)).map(f=>f.route.id).join(",")),[g.pathname+g.search]},[s,c,a,n,u,t,e,o]),m=l.useMemo(()=>Ft(h,n),[h,n]),y=Ht(h);return l.createElement(l.Fragment,null,p.map(d=>l.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...r})),m.map(d=>l.createElement("link",{key:d,rel:"modulepreload",href:d,...r})),y.map(({key:d,link:x})=>l.createElement("link",{key:d,...x})))}function Wt(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Le=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Le&&(window.__reactRouterVersion="7.4.1")}catch{}function zt({basename:e,children:t,window:r}){let a=l.useRef();a.current==null&&(a.current=Te({window:r,v5Compat:!0}));let n=a.current,[o,s]=l.useState({action:n.action,location:n.location}),c=l.useCallback(i=>{l.startTransition(()=>s(i))},[s]);return l.useLayoutEffect(()=>n.listen(c),[n,c]),l.createElement(wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:n})}var $e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,le=l.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:n,reloadDocument:o,replace:s,state:c,target:i,to:u,preventScrollReset:h,viewTransition:p,...m},y){let{basename:d}=l.useContext(k),x=typeof u=="string"&&$e.test(u),g,f=!1;if(typeof u=="string"&&x&&(g=u,Le))try{let P=new URL(window.location.href),T=u.startsWith("//")?new URL(P.protocol+u):new URL(u),ue=I(T.pathname,d);T.origin===P.origin&&ue!=null?u=ue+T.search+T.hash:f=!0}catch{S(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=at(u,{relative:n}),[v,R,b]=jt(a,m),A=Yt(u,{replace:s,state:c,target:i,preventScrollReset:h,relative:n,viewTransition:p});function N(P){t&&t(P),P.defaultPrevented||A(P)}let F=l.createElement("a",{...m,...b,href:g||w,onClick:f||o?t:N,ref:Wt(y,R),target:i,"data-discover":!x&&r==="render"?"true":void 0});return v&&!x?l.createElement(l.Fragment,null,F,l.createElement(Bt,{page:w})):F});le.displayName="Link";var Vt=l.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:n=!1,style:o,to:s,viewTransition:c,children:i,...u},h){let p=W(s,{relative:u.relative}),m=D(),y=l.useContext(q),{navigator:d,basename:x}=l.useContext(k),g=y!=null&&Zt(p)&&c===!0,f=d.encodeLocation?d.encodeLocation(p).pathname:p.pathname,w=m.pathname,v=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(w=w.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&x&&(v=I(v,x)||v);const R=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let b=w===f||!n&&w.startsWith(f)&&w.charAt(R)==="/",A=v!=null&&(v===f||!n&&v.startsWith(f)&&v.charAt(f.length)==="/"),N={isActive:b,isPending:A,isTransitioning:g},F=b?t:void 0,P;typeof a=="function"?P=a(N):P=[a,b?"active":null,A?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(N):o;return l.createElement(le,{...u,"aria-current":F,className:P,ref:h,style:T,to:s,viewTransition:c},typeof i=="function"?i(N):i)});Vt.displayName="NavLink";var Jt=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:n,state:o,method:s=J,action:c,onSubmit:i,relative:u,preventScrollReset:h,viewTransition:p,...m},y)=>{let d=Xt(),x=Qt(c,{relative:u}),g=s.toLowerCase()==="get"?"get":"post",f=typeof c=="string"&&$e.test(c),w=v=>{if(i&&i(v),v.defaultPrevented)return;v.preventDefault();let R=v.nativeEvent.submitter,b=(R==null?void 0:R.getAttribute("formmethod"))||s;d(R||v.currentTarget,{fetcherKey:t,method:b,navigate:r,replace:n,state:o,relative:u,preventScrollReset:h,viewTransition:p})};return l.createElement("form",{ref:y,method:g,action:x,onSubmit:a?i:w,...m,"data-discover":!f&&e==="render"?"true":void 0})});Jt.displayName="Form";function Kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ie(e){let t=l.useContext(O);return C(t,Kt(e)),t}function Yt(e,{target:t,replace:r,state:a,preventScrollReset:n,relative:o,viewTransition:s}={}){let c=ot(),i=D(),u=W(e,{relative:o});return l.useCallback(h=>{if(St(h,t)){h.preventDefault();let p=r!==void 0?r:B(i)===B(u);c(e,{replace:p,state:a,preventScrollReset:n,relative:o,viewTransition:s})}},[i,c,u,r,a,t,e,n,o,s])}var qt=0,Gt=()=>`__${String(++qt)}__`;function Xt(){let{router:e}=Ie("useSubmit"),{basename:t}=l.useContext(k),r=yt();return l.useCallback(async(a,n={})=>{let{action:o,method:s,encType:c,formData:i,body:u}=$t(a,t);if(n.navigate===!1){let h=n.fetcherKey||Gt();await e.fetch(h,r,n.action||o,{preventScrollReset:n.preventScrollReset,formData:i,body:u,formMethod:n.method||s,formEncType:n.encType||c,flushSync:n.flushSync})}else await e.navigate(n.action||o,{preventScrollReset:n.preventScrollReset,formData:i,body:u,formMethod:n.method||s,formEncType:n.encType||c,replace:n.replace,state:n.state,fromRouteId:r,flushSync:n.flushSync,viewTransition:n.viewTransition})},[e,t,r])}function Qt(e,{relative:t}={}){let{basename:r}=l.useContext(k),a=l.useContext(L);C(a,"useFormAction must be used inside a RouteContext");let[n]=a.matches.slice(-1),o={...W(e||".",{relative:t})},s=D();if(e==null){o.search=s.search;let c=new URLSearchParams(o.search),i=c.getAll("index");if(i.some(h=>h==="")){c.delete("index"),i.filter(p=>p).forEach(p=>c.append("index",p));let h=c.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&n.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:$([r,o.pathname])),B(o)}function Zt(e,t={}){let r=l.useContext(Ee);C(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Ie("useViewTransitionState"),n=W(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=I(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=I(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Y(n.pathname,s)!=null||Y(n.pathname,o)!=null}new TextEncoder;const er=()=>{const[e,t]=l.useState(!1);return E.jsxs("header",{className:"bg-gradient-to-r from-black via-gray-300 to-black p-4",children:[E.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[E.jsx(le,{to:"/",children:E.jsx("img",{src:"../src/assets/logo-policia.png",alt:"Polícia",className:"h-12"})}),E.jsx("nav",{className:"hidden md:flex space-x-6",children:E.jsx("p",{className:"text-white text-3xl font-semibold",children:"Polícia Judiciária Civil de Mato Grosso"})}),E.jsx("p",{className:"md:hidden text-white font-semibold",children:"PJC-MT"})]}),e&&E.jsx("nav",{className:"md:hidden bg-black p-4 mt-2",children:E.jsx("p",{children:"Polícia Judiciária Civil de Mato Grosso"})})]})};function tr(){return E.jsx("footer",{className:"bg-gradient-to-r from-black via-gray-500 to-black p-4 flex justify-center items-center mt-auto",children:E.jsx("img",{src:"../src/assets/logo-policia.png",alt:"Logo",className:"h-16 w-auto"})})}const rr=l.lazy(()=>te(()=>import("./Home-Cla_nhNE.js"),__vite__mapDeps([0,1,2,3,4]))),nr=l.lazy(()=>te(()=>import("./Detail--cC5IOiK.js"),__vite__mapDeps([5,1,2,3,4]))),ar=l.lazy(()=>te(()=>import("./SubmitInfo-CipJRGI7.js"),__vite__mapDeps([6,1,2,4]))),or=()=>E.jsx(zt,{children:E.jsxs("div",{className:"flex flex-col min-h-screen",children:[E.jsx(er,{})," ",E.jsx("main",{className:"flex-1",children:E.jsx(l.Suspense,{fallback:E.jsx("div",{className:"text-center p-6",children:"Carregando..."}),children:E.jsxs(Et,{children:[E.jsx(V,{path:"/",element:E.jsx(rr,{})}),E.jsx(V,{path:"/detalhe/:id",element:E.jsx(nr,{})}),E.jsx(V,{path:"/informar/:ocoId",element:E.jsx(ar,{})})]})})}),E.jsx(tr,{})," "]})}),ur=Object.freeze(Object.defineProperty({__proto__:null,default:or},Symbol.toStringTag,{value:"Module"}));export{ur as A,le as L,lr as u};
