import{a_ as W,a8 as G,A as H,aU as V,y as P,aV as K,D as C,ak as N,bQ as q,aH as y,bS as D,m as U,cn as Q,aS as T,cF as $,t as X,cG as Y,a1 as x,bG as R,bq as J,cM as Z,bn as ee,cL as re,a9 as te,R as oe}from"./-8RROWZu.js";import{t as ne}from"./upktFXFi.js";const se=W&&"loading"in document.createElement("img");function ae(e={}){var a;const{root:l=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof l=="string"?document.querySelector(l):l)||document.documentElement})}}const w=new WeakMap,_=new WeakMap,M=new WeakMap,ie=(e,a,l)=>{if(!e)return()=>{};const i=ae(a),{root:d}=i.options;let n;const c=w.get(d);c?n=c:(n=new Map,w.set(d,n));let h,o;n.has(i.hash)?(o=n.get(i.hash),o[1].has(e)||(h=o[0],o[1].add(e),h.observe(e))):(h=new IntersectionObserver(p=>{p.forEach(f=>{if(f.isIntersecting){const b=_.get(f.target),O=M.get(f.target);b&&b(),O&&(O.value=!0)}})},i.options),h.observe(e),o=[h,new Set([e])],n.set(i.hash,o));let u=!1;const g=()=>{u||(_.delete(e),M.delete(e),u=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&n.delete(i.hash),n.size||w.delete(d))};return _.set(e,g),M.set(e,l),g},le=G("n-avatar-group"),de=H("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(P("&","--n-merged-color: var(--n-color-modal);")),K(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),C("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),H("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),C("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=N({name:"Avatar",props:ce,slots:Object,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=Q(e),i=R(!1);let d=null;const n=R(null),c=R(null),h=()=>{const{value:r}=n;if(r&&(d===null||d!==r.innerHTML)){d=r.innerHTML;const{value:t}=c;if(t){const{offsetWidth:s,offsetHeight:m}=t,{offsetWidth:v,offsetHeight:j}=r,S=.9,E=Math.min(s/v*S,m/j*S,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${E})`}}},o=T(le,null),u=x(()=>{const{size:r}=e;if(r)return r;const{size:t}=o||{};return t||"medium"}),g=$("Avatar","-avatar",de,X,e,a),p=T(ne,null),f=x(()=>{if(o)return!0;const{round:r,circle:t}=e;return r!==void 0||t!==void 0?r||t:p?p.roundRef.value:!1}),b=x(()=>o?!0:e.bordered||!1),O=x(()=>{const r=u.value,t=f.value,s=b.value,{color:m}=e,{self:{borderRadius:v,fontSize:j,color:S,border:E,colorModal:A,colorPopover:B},common:{cubicBezierEaseInOut:I}}=g.value;let F;return typeof r=="number"?F=`${r}px`:F=g.value.self[te("height",r)],{"--n-font-size":j,"--n-border":s?E:"none","--n-border-radius":t?"50%":v,"--n-color":m||S,"--n-color-modal":m||A,"--n-color-popover":m||B,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${F})`}}),z=l?Y("avatar",x(()=>{const r=u.value,t=f.value,s=b.value,{color:m}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),t&&(v+="b"),s&&(v+="c"),m&&(v+=oe(m)),v}),O,e):void 0,L=R(!e.lazy);J(()=>{if(e.lazy&&e.intersectionObserverOptions){let r;const t=Z(()=>{r?.(),r=void 0,e.lazy&&(r=ie(c.value,e.intersectionObserverOptions,L))});ee(()=>{t(),r?.()})}}),re(()=>{var r;return e.src||((r=e.imgProps)===null||r===void 0?void 0:r.src)},()=>{i.value=!1});const k=R(!e.lazy);return{textRef:n,selfRef:c,mergedRoundRef:f,mergedClsPrefix:a,fitTextTransform:h,cssVars:l?void 0:O,themeClass:z?.themeClass,onRender:z?.onRender,hasLoadError:i,shouldStartLoading:L,loaded:k,mergedOnError:r=>{if(!L.value)return;i.value=!0;const{onError:t,imgProps:{onError:s}={}}=e;t?.(r),s?.(r)},mergedOnLoad:r=>{const{onLoad:t,imgProps:{onLoad:s}={}}=e;t?.(r),s?.(r),k.value=!0}}},render(){var e,a;const{$slots:l,src:i,mergedClsPrefix:d,lazy:n,onRender:c,loaded:h,hasLoadError:o,imgProps:u={}}=this;c?.();let g;const p=!h&&!o&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():q(l.fallback,()=>[y("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=D(l.default,f=>{if(f)return y(U,{onResize:this.fitTextTransform},{default:()=>y("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(i||u.src){const b=this.src||u.src;return y("img",Object.assign(Object.assign({},u),{loading:se&&!this.intersectionObserverOptions&&n?"lazy":"eager",src:n&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},p?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),y("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},g,n&&p)}});export{ve as _};
