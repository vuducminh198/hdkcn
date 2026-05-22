import{i as $,o as W}from"./BOkzZ21V.js";import{t as M}from"./DroroIa9.js";import{a9 as K,D as T,aW as G,z as P,aX as N,G as _,al as U,bS as V,aJ as p,bU as A,n as D,cs as X,aU as k,cK as H,u as J,cL as Q,a2 as y,bI as O,bs as Y,cR as q,bp as Z,cQ as ee,aa as re,U as oe}from"./9ge5YqQ_.js";const te=K("n-avatar-group"),ne=T("avatar",`
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
`,[G(P("&","--n-merged-color: var(--n-color-modal);")),N(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),_("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),_("text","line-height: 1.25")]),ae=Object.assign(Object.assign({},H.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),de=U({name:"Avatar",props:ae,slots:Object,setup(o){const{mergedClsPrefixRef:l,inlineThemeDisabled:m}=X(o),g=O(!1);let d=null;const c=O(null),s=O(null),x=()=>{const{value:e}=c;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:r}=s;if(r){const{offsetWidth:t,offsetHeight:a}=r,{offsetWidth:n,offsetHeight:S}=e,R=.9,j=Math.min(t/n*R,a/S*R,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},b=k(te,null),i=y(()=>{const{size:e}=o;if(e)return e;const{size:r}=b||{};return r||"medium"}),u=H("Avatar","-avatar",ne,J,o,l),z=k(M,null),f=y(()=>{if(b)return!0;const{round:e,circle:r}=o;return e!==void 0||r!==void 0?e||r:z?z.roundRef.value:!1}),v=y(()=>b?!0:o.bordered||!1),F=y(()=>{const e=i.value,r=f.value,t=v.value,{color:a}=o,{self:{borderRadius:n,fontSize:S,color:R,border:j,colorModal:w,colorPopover:B},common:{cubicBezierEaseInOut:I}}=u.value;let E;return typeof e=="number"?E=`${e}px`:E=u.value.self[re("height",e)],{"--n-font-size":S,"--n-border":t?j:"none","--n-border-radius":r?"50%":n,"--n-color":a||R,"--n-color-modal":a||w,"--n-color-popover":a||B,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${E})`}}),h=m?Q("avatar",y(()=>{const e=i.value,r=f.value,t=v.value,{color:a}=o;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),r&&(n+="b"),t&&(n+="c"),a&&(n+=oe(a)),n}),F,o):void 0,L=O(!o.lazy);Y(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const r=q(()=>{e?.(),e=void 0,o.lazy&&(e=W(s.value,o.intersectionObserverOptions,L))});Z(()=>{r(),e?.()})}}),ee(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{g.value=!1});const C=O(!o.lazy);return{textRef:c,selfRef:s,mergedRoundRef:f,mergedClsPrefix:l,fitTextTransform:x,cssVars:m?void 0:F,themeClass:h?.themeClass,onRender:h?.onRender,hasLoadError:g,shouldStartLoading:L,loaded:C,mergedOnError:e=>{if(!L.value)return;g.value=!0;const{onError:r,imgProps:{onError:t}={}}=o;r?.(e),t?.(e)},mergedOnLoad:e=>{const{onLoad:r,imgProps:{onLoad:t}={}}=o;r?.(e),t?.(e),C.value=!0}}},render(){var o,l;const{$slots:m,src:g,mergedClsPrefix:d,lazy:c,onRender:s,loaded:x,hasLoadError:b,imgProps:i={}}=this;s?.();let u;const z=!x&&!b&&(this.renderPlaceholder?this.renderPlaceholder():(l=(o=this.$slots).placeholder)===null||l===void 0?void 0:l.call(o));return this.hasLoadError?u=this.renderFallback?this.renderFallback():V(m.fallback,()=>[p("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):u=A(m.default,f=>{if(f)return p(D,{onResize:this.fitTextTransform},{default:()=>p("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(g||i.src){const v=this.src||i.src;return p("img",Object.assign(Object.assign({},i),{loading:$&&!this.intersectionObserverOptions&&c?"lazy":"eager",src:c&&this.intersectionObserverOptions?this.shouldStartLoading?v:void 0:v,"data-image-src":v,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[i.style||"",{objectFit:this.objectFit},z?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),p("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},u,c&&z)}});export{de as _};
