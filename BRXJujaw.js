import{aI as Je,bl as Qe,bm as Xe,bh as de,bD as Ye,bC as eo,bj as ce,cK as Se,bE as M,aj as W,be as oo,aH as g,bI as no,cz as ro,ae as to,bp as io,z as ao,am as lo,Z as so,K as $,A as L,G as B,D as F,H as X,y as H,a7 as te,cE as oe,bQ as ze,N as co,cm as ie,by as Y,cy as Oe,cF as he,a0 as O,R as _e,J as Q,a8 as E,aE as uo,ca as U,aS as ee,co as Te,ct as Pe,cr as ne,ay as fo,aG as ho,bB as po,bF as ue,cJ as Ee,bb as Re,aQ as vo,aB as bo,B as go,o as mo,V as yo,l as wo,bv as Fe,F as Co,q as xo,bG as ko,bc as So,ao as Po,aw as Ro,b5 as Io,j as No,ap as zo,bu as De}from"./C4oaSc5P.js";function Ke(e,o){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[o]!==void 0)return!0;n=n.parentElement}return!1}function _o(e={},o){const n=eo({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,i=l=>{switch(l.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}t!==void 0&&Object.keys(t).forEach(c=>{if(c!==l.key)return;const u=t[c];if(typeof u=="function")u(l);else{const{stop:h=!1,prevent:w=!1}=u;h&&l.stopPropagation(),w&&l.preventDefault(),u.handler(l)}})},a=l=>{switch(l.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==l.key)return;const u=r[c];if(typeof u=="function")u(l);else{const{stop:h=!1,prevent:w=!1}=u;h&&l.stopPropagation(),w&&l.preventDefault(),u.handler(l)}})},s=()=>{(o===void 0||o.value)&&(ce("keydown",document,i),ce("keyup",document,a)),o!==void 0&&Se(o,l=>{l?(ce("keydown",document,i),ce("keyup",document,a)):(de("keydown",document,i),de("keyup",document,a))})};return Je()?(Qe(s),Xe(()=>{(o===void 0||o.value)&&(de("keydown",document,i),de("keyup",document,a))})):s(),Ye(n)}function Ko(e,o,n){const t=M(e.value);let r=null;return Se(e,i=>{r!==null&&window.clearTimeout(r),i===!0?n&&!n.value?t.value=!0:r=window.setTimeout(()=>{t.value=!0},o):t.value=!1}),t}const J="v-hidden",Ao=ao("[v-hidden]",{display:"none!important"}),Nn=W({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const n=M(null),t=M(null);function r(a){const{value:s}=n,{getCounter:l,getTail:c}=e;let u;if(l!==void 0?u=l():u=t.value,!s||!u)return;u.hasAttribute(J)&&u.removeAttribute(J);const{children:h}=s;if(a.showAllItemsBeforeCalculate)for(const k of h)k.hasAttribute(J)&&k.removeAttribute(J);const w=s.offsetWidth,_=[],b=o.tail?c?.():null;let p=b?b.offsetWidth:0,m=!1;const S=s.children.length-(o.tail?1:0);for(let k=0;k<S-1;++k){if(k<0)continue;const d=h[k];if(m){d.hasAttribute(J)||d.setAttribute(J,"");continue}else d.hasAttribute(J)&&d.removeAttribute(J);const f=d.offsetWidth;if(p+=f,_[k]=f,p>w){const{updateCounter:y}=e;for(let P=k;P>=0;--P){const K=S-1-P;y!==void 0?y(K):u.textContent=`${K}`;const A=u.offsetWidth;if(p-=_[P],p+A<=w||P===0){m=!0,k=P-1,b&&(k===-1?(b.style.maxWidth=`${w-A}px`,b.style.boxSizing="border-box"):b.style.maxWidth="");const{onUpdateCount:N}=e;N&&N(K);break}}}}const{onUpdateOverflow:x}=e;m?x!==void 0&&x(!0):(x!==void 0&&x(!1),u.setAttribute(J,""))}const i=ro();return Ao.mount({id:"vueuc/overflow",head:!0,anchorMetaName:to,ssr:i}),io(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:t,sync:r}},render(){const{$slots:e}=this;return oo(()=>this.sync({showAllItemsBeforeCalculate:!1})),g("div",{class:"v-overflow",ref:"selfRef"},[no(e,"default"),e.counter?e.counter():g("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function $o(e){return o=>{o?e.value=o.$el:e.value=null}}const Bo=W({name:"ChevronRight",render(){return g("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});function Ae(e){return Array.isArray(e)?e:[e]}const xe={STOP:"STOP"};function Le(e,o){const n=o(e);e.children!==void 0&&n!==xe.STOP&&e.children.forEach(t=>Le(t,o))}function Oo(e,o={}){const{preserveGroup:n=!1}=o,t=[],r=n?a=>{a.isLeaf||(t.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||t.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),t}function To(e,o){const{isLeaf:n}=e;return n!==void 0?n:!o(e)}function Eo(e){return e.children}function Fo(e){return e.key}function Do(){return!1}function Lo(e,o){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(o(e)))}function Ho(e){return e.disabled===!0}function Mo(e,o){return e.isLeaf===!1&&!Array.isArray(o(e))}function ye(e){var o;return e==null?[]:Array.isArray(e)?e:(o=e.checkedKeys)!==null&&o!==void 0?o:[]}function we(e){var o;return e==null||Array.isArray(e)?[]:(o=e.indeterminateKeys)!==null&&o!==void 0?o:[]}function jo(e,o){const n=new Set(e);return o.forEach(t=>{n.has(t)||n.add(t)}),Array.from(n)}function Go(e,o){const n=new Set(e);return o.forEach(t=>{n.has(t)&&n.delete(t)}),Array.from(n)}function Uo(e){return e?.type==="group"}function zn(e){const o=new Map;return e.forEach((n,t)=>{o.set(n.key,t)}),n=>{var t;return(t=o.get(n))!==null&&t!==void 0?t:null}}class Wo extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Vo(e,o,n,t){return fe(o.concat(e),n,t,!1)}function qo(e,o){const n=new Set;return e.forEach(t=>{const r=o.treeNodeMap.get(t);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||n.has(i.key));)n.add(i.key),i=i.parent}}),n}function Zo(e,o,n,t){const r=fe(o,n,t,!1),i=fe(e,n,t,!0),a=qo(e,n),s=[];return r.forEach(l=>{(i.has(l)||a.has(l))&&s.push(l)}),s.forEach(l=>r.delete(l)),r}function Ce(e,o){const{checkedKeys:n,keysToCheck:t,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:s,checkStrategy:l,allowNotLoaded:c}=e;if(!a)return t!==void 0?{checkedKeys:jo(n,t),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:Go(n,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=o;let h;r!==void 0?h=Zo(r,n,o,c):t!==void 0?h=Vo(t,n,o,c):h=fe(n,o,c,!1);const w=l==="parent",_=l==="child"||s,b=h,p=new Set,m=Math.max.apply(null,Array.from(u.keys()));for(let S=m;S>=0;S-=1){const x=S===0,k=u.get(S);for(const d of k){if(d.isLeaf)continue;const{key:f,shallowLoaded:y}=d;if(_&&y&&d.children.forEach(N=>{!N.disabled&&!N.isLeaf&&N.shallowLoaded&&b.has(N.key)&&b.delete(N.key)}),d.disabled||!y)continue;let P=!0,K=!1,A=!0;for(const N of d.children){const j=N.key;if(!N.disabled){if(A&&(A=!1),b.has(j))K=!0;else if(p.has(j)){K=!0,P=!1;break}else if(P=!1,K)break}}P&&!A?(w&&d.children.forEach(N=>{!N.disabled&&b.has(N.key)&&b.delete(N.key)}),b.add(f)):K&&p.add(f),x&&_&&b.has(f)&&b.delete(f)}}return{checkedKeys:Array.from(b),indeterminateKeys:Array.from(p)}}function fe(e,o,n,t){const{treeNodeMap:r,getChildren:i}=o,a=new Set,s=new Set(e);return e.forEach(l=>{const c=r.get(l);c!==void 0&&Le(c,u=>{if(u.disabled)return xe.STOP;const{key:h}=u;if(!a.has(h)&&(a.add(h),s.add(h),Mo(u.rawNode,i))){if(t)return xe.STOP;if(!n)throw new Wo}})}),s}function Jo(e,{includeGroup:o=!1,includeSelf:n=!0},t){var r;const i=t.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(o||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),n||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(l=>l.key),s}function Qo(e){if(e.length===0)return null;const o=e[0];return o.isGroup||o.ignored||o.disabled?o.getNext():o}function Xo(e,o){const n=e.siblings,t=n.length,{index:r}=e;return o?n[(r+1)%t]:r===n.length-1?null:n[r+1]}function $e(e,o,{loop:n=!1,includeDisabled:t=!1}={}){const r=o==="prev"?Yo:Xo,i={reverse:o==="prev"};let a=!1,s=null;function l(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!c.disabled||t)&&!c.ignored&&!c.isGroup){s=c;return}if(c.isGroup){const u=Ie(c,i);u!==null?s=u:l(r(c,n))}else{const u=r(c,!1);if(u!==null)l(u);else{const h=en(c);h?.isGroup?l(r(h,n)):n&&l(r(c,!0))}}}}return l(e),s}function Yo(e,o){const n=e.siblings,t=n.length,{index:r}=e;return o?n[(r-1+t)%t]:r===0?null:n[r-1]}function en(e){return e.parent}function Ie(e,o={}){const{reverse:n=!1}=o,{children:t}=e;if(t){const{length:r}=t,i=n?r-1:0,a=n?-1:r,s=n?-1:1;for(let l=i;l!==a;l+=s){const c=t[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=Ie(c,o);if(u!==null)return u}else return c}}return null}const on={getChild(){return this.ignored?null:Ie(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return $e(this,"next",e)},getPrev(e={}){return $e(this,"prev",e)}};function nn(e,o){const n=o?new Set(o):void 0,t=[];function r(i){i.forEach(a=>{t.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&r(a.children)})}return r(e),t}function rn(e,o){const n=e.key;for(;o;){if(o.key===n)return!0;o=o.parent}return!1}function He(e,o,n,t,r,i=null,a=0){const s=[];return e.forEach((l,c)=>{var u;const h=Object.create(t);if(h.rawNode=l,h.siblings=s,h.level=a,h.index=c,h.isFirstChild=c===0,h.isLastChild=c+1===e.length,h.parent=i,!h.ignored){const w=r(l);Array.isArray(w)&&(h.children=He(w,o,n,t,r,h,a+1))}s.push(h),o.set(h.key,h),n.has(a)||n.set(a,[]),(u=n.get(a))===null||u===void 0||u.push(h)}),s}function tn(e,o={}){var n;const t=new Map,r=new Map,{getDisabled:i=Ho,getIgnored:a=Do,getIsGroup:s=Uo,getKey:l=Fo}=o,c=(n=o.getChildren)!==null&&n!==void 0?n:Eo,u=o.ignoreEmptyChildren?d=>{const f=c(d);return Array.isArray(f)?f.length?f:null:f}:c,h=Object.assign({get key(){return l(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return To(this.rawNode,u)},get shallowLoaded(){return Lo(this.rawNode,u)},get ignored(){return a(this.rawNode)},contains(d){return rn(this,d)}},on),w=He(e,t,r,h,u);function _(d){if(d==null)return null;const f=t.get(d);return f&&!f.isGroup&&!f.ignored?f:null}function b(d){if(d==null)return null;const f=t.get(d);return f&&!f.ignored?f:null}function p(d,f){const y=b(d);return y?y.getPrev(f):null}function m(d,f){const y=b(d);return y?y.getNext(f):null}function S(d){const f=b(d);return f?f.getParent():null}function x(d){const f=b(d);return f?f.getChild():null}const k={treeNodes:w,treeNodeMap:t,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(d){return nn(w,d)},getNode:_,getPrev:p,getNext:m,getParent:S,getChild:x,getFirstAvailableNode(){return Qo(w)},getPath(d,f={}){return Jo(d,f,k)},getCheckedKeys(d,f={}){const{cascade:y=!0,leafOnly:P=!1,checkStrategy:K="all",allowNotLoaded:A=!1}=f;return Ce({checkedKeys:ye(d),indeterminateKeys:we(d),cascade:y,leafOnly:P,checkStrategy:K,allowNotLoaded:A},k)},check(d,f,y={}){const{cascade:P=!0,leafOnly:K=!1,checkStrategy:A="all",allowNotLoaded:N=!1}=y;return Ce({checkedKeys:ye(f),indeterminateKeys:we(f),keysToCheck:d==null?[]:Ae(d),cascade:P,leafOnly:K,checkStrategy:A,allowNotLoaded:N},k)},uncheck(d,f,y={}){const{cascade:P=!0,leafOnly:K=!1,checkStrategy:A="all",allowNotLoaded:N=!1}=y;return Ce({checkedKeys:ye(f),indeterminateKeys:we(f),keysToUncheck:d==null?[]:Ae(d),cascade:P,leafOnly:K,checkStrategy:A,allowNotLoaded:N},k)},getNonLeafKeys(d={}){return Oo(w,d)}};return k}function an(e){const{textColor2:o,primaryColorHover:n,primaryColorPressed:t,primaryColor:r,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:u,opacityDisabled:h,tagColor:w,closeIconColor:_,closeIconColorHover:b,closeIconColorPressed:p,borderRadiusSmall:m,fontSizeMini:S,fontSizeTiny:x,fontSizeSmall:k,fontSizeMedium:d,heightMini:f,heightTiny:y,heightSmall:P,heightMedium:K,closeColorHover:A,closeColorPressed:N,buttonColor2Hover:j,buttonColor2Pressed:q,fontWeightStrong:G}=e;return Object.assign(Object.assign({},so),{closeBorderRadius:m,heightTiny:f,heightSmall:y,heightMedium:P,heightLarge:K,borderRadius:m,opacityDisabled:h,fontSizeTiny:S,fontSizeSmall:x,fontSizeMedium:k,fontSizeLarge:d,fontWeightStrong:G,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:j,colorPressedCheckable:q,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:t,border:`1px solid ${u}`,textColor:o,color:w,colorBordered:"rgb(250, 250, 252)",closeIconColor:_,closeIconColorHover:b,closeIconColorPressed:p,closeColorHover:A,closeColorPressed:N,borderPrimary:`1px solid ${$(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:$(r,{alpha:.12}),colorBorderedPrimary:$(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:$(r,{alpha:.12}),closeColorPressedPrimary:$(r,{alpha:.18}),borderInfo:`1px solid ${$(i,{alpha:.3})}`,textColorInfo:i,colorInfo:$(i,{alpha:.12}),colorBorderedInfo:$(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:$(i,{alpha:.12}),closeColorPressedInfo:$(i,{alpha:.18}),borderSuccess:`1px solid ${$(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:$(a,{alpha:.12}),colorBorderedSuccess:$(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:$(a,{alpha:.12}),closeColorPressedSuccess:$(a,{alpha:.18}),borderWarning:`1px solid ${$(s,{alpha:.35})}`,textColorWarning:s,colorWarning:$(s,{alpha:.15}),colorBorderedWarning:$(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:$(s,{alpha:.12}),closeColorPressedWarning:$(s,{alpha:.18}),borderError:`1px solid ${$(l,{alpha:.23})}`,textColorError:l,colorError:$(l,{alpha:.1}),colorBorderedError:$(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:$(l,{alpha:.12}),closeColorPressedError:$(l,{alpha:.18})})}const ln={name:"Tag",common:lo,self:an},sn={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},dn=L("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[B("strong",`
 font-weight: var(--n-font-weight-strong);
 `),F("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),F("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),F("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),F("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[F("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),F("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),B("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),B("icon, avatar",[B("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),B("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),B("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[X("disabled",[H("&:hover","background-color: var(--n-color-hover-checkable);",[X("checked","color: var(--n-text-color-hover-checkable);")]),H("&:active","background-color: var(--n-color-pressed-checkable);",[X("checked","color: var(--n-text-color-pressed-checkable);")])]),B("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[X("disabled",[H("&:hover","background-color: var(--n-color-checked-hover);"),H("&:active","background-color: var(--n-color-checked-pressed);")])])])]),cn=Object.assign(Object.assign(Object.assign({},oe.props),sn),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),un=te("n-tag"),_n=W({name:"Tag",props:cn,slots:Object,setup(e){const o=M(null),{mergedBorderedRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:a}=ie(e),s=O(()=>{var p,m;return e.size||((m=(p=a?.value)===null||p===void 0?void 0:p.Tag)===null||m===void 0?void 0:m.size)||"medium"}),l=oe("Tag","-tag",dn,ln,e,t);Y(un,{roundRef:U(e,"round")});function c(){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:m,onUpdateChecked:S,"onUpdate:checked":x}=e;S&&S(!p),x&&x(!p),m&&m(!p)}}function u(p){if(e.triggerClickOnClose||p.stopPropagation(),!e.disabled){const{onClose:m}=e;m&&Q(m,p)}}const h={setTextContent(p){const{value:m}=o;m&&(m.textContent=p)}},w=Oe("Tag",i,t),_=O(()=>{const{type:p,color:{color:m,textColor:S}={}}=e,x=s.value,{common:{cubicBezierEaseInOut:k},self:{padding:d,closeMargin:f,borderRadius:y,opacityDisabled:P,textColorCheckable:K,textColorHoverCheckable:A,textColorPressedCheckable:N,textColorChecked:j,colorCheckable:q,colorHoverCheckable:G,colorPressedCheckable:C,colorChecked:R,colorCheckedHover:z,colorCheckedPressed:v,closeBorderRadius:I,fontWeightStrong:D,[E("colorBordered",p)]:V,[E("closeSize",x)]:re,[E("closeIconSize",x)]:Z,[E("fontSize",x)]:ve,[E("height",x)]:ae,[E("color",p)]:be,[E("textColor",p)]:ge,[E("border",p)]:me,[E("closeIconColor",p)]:le,[E("closeIconColorHover",p)]:T,[E("closeIconColorPressed",p)]:Ve,[E("closeColorHover",p)]:qe,[E("closeColorPressed",p)]:Ze}}=l.value,se=uo(f);return{"--n-font-weight-strong":D,"--n-avatar-size-override":`calc(${ae} - 8px)`,"--n-bezier":k,"--n-border-radius":y,"--n-border":me,"--n-close-icon-size":Z,"--n-close-color-pressed":Ze,"--n-close-color-hover":qe,"--n-close-border-radius":I,"--n-close-icon-color":le,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":Ve,"--n-close-icon-color-disabled":le,"--n-close-margin-top":se.top,"--n-close-margin-right":se.right,"--n-close-margin-bottom":se.bottom,"--n-close-margin-left":se.left,"--n-close-size":re,"--n-color":m||(n.value?V:be),"--n-color-checkable":q,"--n-color-checked":R,"--n-color-checked-hover":z,"--n-color-checked-pressed":v,"--n-color-hover-checkable":G,"--n-color-pressed-checkable":C,"--n-font-size":ve,"--n-height":ae,"--n-opacity-disabled":P,"--n-padding":d,"--n-text-color":S||ge,"--n-text-color-checkable":K,"--n-text-color-checked":j,"--n-text-color-hover-checkable":A,"--n-text-color-pressed-checkable":N}}),b=r?he("tag",O(()=>{let p="";const{type:m,color:{color:S,textColor:x}={}}=e;return p+=m[0],p+=s.value[0],S&&(p+=`a${_e(S)}`),x&&(p+=`b${_e(x)}`),n.value&&(p+="c"),p}),_,e):void 0;return Object.assign(Object.assign({},h),{rtlEnabled:w,mergedClsPrefix:t,contentRef:o,mergedBordered:n,handleClick:c,handleCloseClick:u,cssVars:r?void 0:_,themeClass:b?.themeClass,onRender:b?.onRender})},render(){var e,o;const{mergedClsPrefix:n,rtlEnabled:t,closable:r,color:{borderColor:i}={},round:a,onRender:s,$slots:l}=this;s?.();const c=ze(l.avatar,h=>h&&g("div",{class:`${n}-tag__avatar`},h)),u=ze(l.icon,h=>h&&g("div",{class:`${n}-tag__icon`},h));return g("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:t,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:c,[`${n}-tag--icon`]:u,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||c,g("span",{class:`${n}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&r?g(co,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${n}-tag__border`,style:{borderColor:i}}):null)}}),Kn={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Me=te("n-radio-group");function An(e){const o=ee(Me,null),{mergedClsPrefixRef:n,mergedComponentPropsRef:t}=ie(e),r=Te(e,{mergedSize(d){var f,y;const{size:P}=e;if(P!==void 0)return P;if(o){const{mergedSizeRef:{value:A}}=o;if(A!==void 0)return A}if(d)return d.mergedSize.value;const K=(y=(f=t?.value)===null||f===void 0?void 0:f.Radio)===null||y===void 0?void 0:y.size;return K||"medium"},mergedDisabled(d){return!!(e.disabled||o?.disabledRef.value||d?.disabled.value)}}),{mergedSizeRef:i,mergedDisabledRef:a}=r,s=M(null),l=M(null),c=M(e.defaultChecked),u=U(e,"checked"),h=Pe(u,c),w=ne(()=>o?o.valueRef.value===e.value:h.value),_=ne(()=>{const{name:d}=e;if(d!==void 0)return d;if(o)return o.nameRef.value}),b=M(!1);function p(){if(o){const{doUpdateValue:d}=o,{value:f}=e;Q(d,f)}else{const{onUpdateChecked:d,"onUpdate:checked":f}=e,{nTriggerFormInput:y,nTriggerFormChange:P}=r;d&&Q(d,!0),f&&Q(f,!0),y(),P(),c.value=!0}}function m(){a.value||w.value||p()}function S(){m(),s.value&&(s.value.checked=w.value)}function x(){b.value=!1}function k(){b.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:n,inputRef:s,labelRef:l,mergedName:_,mergedDisabled:a,renderSafeChecked:w,focus:b,mergedSize:i,handleRadioInputChange:S,handleRadioInputBlur:x,handleRadioInputFocus:k}}const fn=L("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[F("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[B("checked",{backgroundColor:"var(--n-button-border-color-active)"}),B("disabled",{opacity:"var(--n-opacity-disabled)"})]),B("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[L("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),F("splitor",{height:"var(--n-height)"})]),L("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[L("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),F("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),H("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),H("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),X("disabled",`
 cursor: pointer;
 `,[H("&:hover",[F("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),X("checked",{color:"var(--n-button-text-color-hover)"})]),B("focus",[H("&:not(:active)",[F("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),B("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function hn(e,o,n){var t;const r=[];let i=!1;for(let a=0;a<e.length;++a){const s=e[a],l=(t=s.type)===null||t===void 0?void 0:t.name;l==="RadioButton"&&(i=!0);const c=s.props;if(l!=="RadioButton"){r.push(s);continue}if(a===0)r.push(s);else{const u=r[r.length-1].props,h=o===u.value,w=u.disabled,_=o===c.value,b=c.disabled,p=(h?2:0)+(w?0:1),m=(_?2:0)+(b?0:1),S={[`${n}-radio-group__splitor--disabled`]:w,[`${n}-radio-group__splitor--checked`]:h},x={[`${n}-radio-group__splitor--disabled`]:b,[`${n}-radio-group__splitor--checked`]:_},k=p<m?x:S;r.push(g("div",{class:[`${n}-radio-group__splitor`,k]}),s)}}return{children:r,isButtonGroup:i}}const pn=Object.assign(Object.assign({},oe.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),$n=W({name:"RadioGroup",props:pn,setup(e){const o=M(null),{mergedSizeRef:n,mergedDisabledRef:t,nTriggerFormChange:r,nTriggerFormInput:i,nTriggerFormBlur:a,nTriggerFormFocus:s}=Te(e),{mergedClsPrefixRef:l,inlineThemeDisabled:c,mergedRtlRef:u}=ie(e),h=oe("Radio","-radio-group",fn,po,e,l),w=M(e.defaultValue),_=U(e,"value"),b=Pe(_,w);function p(f){const{onUpdateValue:y,"onUpdate:value":P}=e;y&&Q(y,f),P&&Q(P,f),w.value=f,r(),i()}function m(f){const{value:y}=o;y&&(y.contains(f.relatedTarget)||s())}function S(f){const{value:y}=o;y&&(y.contains(f.relatedTarget)||a())}Y(Me,{mergedClsPrefixRef:l,nameRef:U(e,"name"),valueRef:b,disabledRef:t,mergedSizeRef:n,doUpdateValue:p});const x=Oe("Radio",u,l),k=O(()=>{const{value:f}=n,{common:{cubicBezierEaseInOut:y},self:{buttonBorderColor:P,buttonBorderColorActive:K,buttonBorderRadius:A,buttonBoxShadow:N,buttonBoxShadowFocus:j,buttonBoxShadowHover:q,buttonColor:G,buttonColorActive:C,buttonTextColor:R,buttonTextColorActive:z,buttonTextColorHover:v,opacityDisabled:I,[E("buttonHeight",f)]:D,[E("fontSize",f)]:V}}=h.value;return{"--n-font-size":V,"--n-bezier":y,"--n-button-border-color":P,"--n-button-border-color-active":K,"--n-button-border-radius":A,"--n-button-box-shadow":N,"--n-button-box-shadow-focus":j,"--n-button-box-shadow-hover":q,"--n-button-color":G,"--n-button-color-active":C,"--n-button-text-color":R,"--n-button-text-color-hover":v,"--n-button-text-color-active":z,"--n-height":D,"--n-opacity-disabled":I}}),d=c?he("radio-group",O(()=>n.value[0]),k,e):void 0;return{selfElRef:o,rtlEnabled:x,mergedClsPrefix:l,mergedValue:b,handleFocusout:S,handleFocusin:m,cssVars:c?void 0:k,themeClass:d?.themeClass,onRender:d?.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:n,handleFocusin:t,handleFocusout:r}=this,{children:i,isButtonGroup:a}=hn(fo(ho(this)),o,n);return(e=this.onRender)===null||e===void 0||e.call(this),g("div",{onFocusin:t,onFocusout:r,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,a&&`${n}-radio-group--button-group`],style:this.cssVars},i)}}),Ne=te("n-dropdown-menu"),pe=te("n-dropdown"),Be=te("n-dropdown-option"),je=W({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return g("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),vn=W({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=ee(Ne),{renderLabelRef:n,labelFieldRef:t,nodePropsRef:r,renderOptionRef:i}=ee(pe);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:t,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:s}=this.tmNode,l=g("div",Object.assign({class:`${o}-dropdown-option`},r?.(s)),g("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},g("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},ue(s.icon)),g("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(s):ue((e=s.title)!==null&&e!==void 0?e:s[this.labelField])),g("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:l,option:s}):l}}),bn=L("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[B("color-transition",{transition:"color .3s var(--n-bezier)"}),B("depth",{color:"var(--n-color)"},[H("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),H("svg",{height:"1em",width:"1em"})]),gn=Object.assign(Object.assign({},oe.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),mn=W({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:gn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=ie(e),t=oe("Icon","-icon",bn,vo,e,o),r=O(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:s},self:l}=t.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:u}=l;return{"--n-bezier":s,"--n-color":c,"--n-opacity":u}}return{"--n-bezier":s,"--n-color":"","--n-opacity":""}}),i=n?he("icon",O(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:O(()=>{const{size:a,color:s}=e;return{fontSize:bo(a),color:s}}),cssVars:n?void 0:r,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:o,depth:n,mergedClsPrefix:t,component:r,onRender:i,themeClass:a}=this;return!((e=o?.$options)===null||e===void 0)&&e._n_icon__&&Ee("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),g("i",Re(this.$attrs,{role:"img",class:[`${t}-icon`,a,{[`${t}-icon--depth`]:n,[`${t}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?g(r):this.$slots)}});function ke(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function yn(e){return e.type==="group"}function Ge(e){return e.type==="divider"}function wn(e){return e.type==="render"}const Ue=W({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=ee(pe),{hoverKeyRef:n,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:l,renderLabelRef:c,renderIconRef:u,labelFieldRef:h,childrenFieldRef:w,renderOptionRef:_,nodePropsRef:b,menuPropsRef:p}=o,m=ee(Be,null),S=ee(Ne),x=ee(Fe),k=O(()=>e.tmNode.rawNode),d=O(()=>{const{value:v}=w;return ke(e.tmNode.rawNode,v)}),f=O(()=>{const{disabled:v}=e.tmNode;return v}),y=O(()=>{if(!d.value)return!1;const{key:v,disabled:I}=e.tmNode;if(I)return!1;const{value:D}=n,{value:V}=t,{value:re}=r,{value:Z}=i;return D!==null?Z.includes(v):V!==null?Z.includes(v)&&Z[Z.length-1]!==v:re!==null?Z.includes(v):!1}),P=O(()=>t.value===null&&!s.value),K=Ko(y,300,P),A=O(()=>!!m?.enteringSubmenuRef.value),N=M(!1);Y(Be,{enteringSubmenuRef:N});function j(){N.value=!0}function q(){N.value=!1}function G(){const{parentKey:v,tmNode:I}=e;I.disabled||l.value&&(r.value=v,t.value=null,n.value=I.key)}function C(){const{tmNode:v}=e;v.disabled||l.value&&n.value!==v.key&&G()}function R(v){if(e.tmNode.disabled||!l.value)return;const{relatedTarget:I}=v;I&&!Ke({target:I},"dropdownOption")&&!Ke({target:I},"scrollbarRail")&&(n.value=null)}function z(){const{value:v}=d,{tmNode:I}=e;l.value&&!v&&!I.disabled&&(o.doSelect(I.key,I.rawNode),o.doUpdateShow(!1))}return{labelField:h,renderLabel:c,renderIcon:u,siblingHasIcon:S.showIconRef,siblingHasSubmenu:S.hasSubmenuRef,menuProps:p,popoverBody:x,animated:s,mergedShowSubmenu:O(()=>K.value&&!A.value),rawNode:k,hasSubmenu:d,pending:ne(()=>{const{value:v}=i,{key:I}=e.tmNode;return v.includes(I)}),childActive:ne(()=>{const{value:v}=a,{key:I}=e.tmNode,D=v.findIndex(V=>I===V);return D===-1?!1:D<v.length-1}),active:ne(()=>{const{value:v}=a,{key:I}=e.tmNode,D=v.findIndex(V=>I===V);return D===-1?!1:D===v.length-1}),mergedDisabled:f,renderOption:_,nodeProps:b,handleClick:z,handleMouseMove:C,handleMouseEnter:G,handleMouseLeave:R,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:q}},render(){var e,o;const{animated:n,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:s,renderLabel:l,renderIcon:c,renderOption:u,nodeProps:h,props:w,scrollable:_}=this;let b=null;if(r){const x=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,t,t.children);b=g(We,Object.assign({},x,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const p={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},m=h?.(t),S=g("div",Object.assign({class:[`${i}-dropdown-option`,m?.class],"data-dropdown-option":!0},m),g("div",Re(p,w),[g("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):ue(t.icon)]),g("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},l?l(t):ue((o=t[this.labelField])!==null&&o!==void 0?o:t.title)),g("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,s&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?g(mn,null,{default:()=>g(Bo,null)}):null)]),this.hasSubmenu?g(go,null,{default:()=>[g(mo,null,{default:()=>g("div",{class:`${i}-dropdown-offset-container`},g(yo,{show:this.mergedShowSubmenu,placement:this.placement,to:_&&this.popoverBody||void 0,teleportDisabled:!_},{default:()=>g("div",{class:`${i}-dropdown-menu-wrapper`},n?g(wo,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return u?u({node:S,option:t}):S}}),Cn=W({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:t}=e;return g(Co,null,g(vn,{clsPrefix:n,tmNode:e,key:e.key}),t?.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Ge(i)?g(je,{clsPrefix:n,key:r.key}):r.isGroup?(Ee("dropdown","`group` node is not allowed to be put in `group` node."),null):g(Ue,{clsPrefix:n,tmNode:r,parentKey:o,key:r.key})}))}}),xn=W({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return g("div",o,[e?.()])}}),We=W({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=ee(pe);Y(Ne,{showIconRef:O(()=>{const r=o.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>r?r(l):l.icon);const{rawNode:s}=i;return r?r(s):s.icon})}),hasSubmenuRef:O(()=>{const{value:r}=n;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:l})=>ke(l,r));const{rawNode:s}=i;return ke(s,r)})})});const t=M(null);return Y(So,null),Y(Po,null),Y(Fe,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:wn(i)?g(xn,{tmNode:r,key:r.key}):Ge(i)?g(je,{clsPrefix:o,key:r.key}):yn(i)?g(Cn,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):g(Ue,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return g("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?g(xo,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?ko({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),kn=L("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ro(),L("dropdown-option",`
 position: relative;
 `,[H("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[H("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),L("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[H("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),X("disabled",[B("pending",`
 color: var(--n-option-text-color-hover);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),H("&::before","background-color: var(--n-option-color-hover);")]),B("active",`
 color: var(--n-option-text-color-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),H("&::before","background-color: var(--n-option-color-active);")]),B("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[F("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),B("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[F("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[B("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),F("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[B("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),L("icon",`
 font-size: var(--n-option-icon-size);
 `)]),F("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),F("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[B("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),L("icon",`
 font-size: var(--n-option-icon-size);
 `)]),L("dropdown-menu","pointer-events: all;")]),L("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),L("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),L("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),H(">",[L("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),X("scrollable",`
 padding: var(--n-padding);
 `),B("scrollable",[F("content",`
 padding: var(--n-padding);
 `)])]),Sn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Pn=Object.keys(De),Rn=Object.assign(Object.assign(Object.assign({},De),Sn),oe.props),Bn=W({name:"Dropdown",inheritAttrs:!1,props:Rn,setup(e){const o=M(!1),n=Pe(U(e,"show"),o),t=O(()=>{const{keyField:C,childrenField:R}=e;return tn(e.options,{getKey(z){return z[C]},getDisabled(z){return z.disabled===!0},getIgnored(z){return z.type==="divider"||z.type==="render"},getChildren(z){return z[R]}})}),r=O(()=>t.value.treeNodes),i=M(null),a=M(null),s=M(null),l=O(()=>{var C,R,z;return(z=(R=(C=i.value)!==null&&C!==void 0?C:a.value)!==null&&R!==void 0?R:s.value)!==null&&z!==void 0?z:null}),c=O(()=>t.value.getPath(l.value).keyPath),u=O(()=>t.value.getPath(e.value).keyPath),h=ne(()=>e.keyboard&&n.value);_o({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:K},ArrowLeft:{prevent:!0,handler:f},Enter:{prevent:!0,handler:A},Escape:d}},h);const{mergedClsPrefixRef:w,inlineThemeDisabled:_,mergedComponentPropsRef:b}=ie(e),p=O(()=>{var C,R;return e.size||((R=(C=b?.value)===null||C===void 0?void 0:C.Dropdown)===null||R===void 0?void 0:R.size)||"medium"}),m=oe("Dropdown","-dropdown",kn,zo,e,w);Y(pe,{labelFieldRef:U(e,"labelField"),childrenFieldRef:U(e,"childrenField"),renderLabelRef:U(e,"renderLabel"),renderIconRef:U(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:c,activeKeyPathRef:u,animatedRef:U(e,"animated"),mergedShowRef:n,nodePropsRef:U(e,"nodeProps"),renderOptionRef:U(e,"renderOption"),menuPropsRef:U(e,"menuProps"),doSelect:S,doUpdateShow:x}),Se(n,C=>{!e.animated&&!C&&k()});function S(C,R){const{onSelect:z}=e;z&&Q(z,C,R)}function x(C){const{"onUpdate:show":R,onUpdateShow:z}=e;R&&Q(R,C),z&&Q(z,C),o.value=C}function k(){i.value=null,a.value=null,s.value=null}function d(){x(!1)}function f(){j("left")}function y(){j("right")}function P(){j("up")}function K(){j("down")}function A(){const C=N();C?.isLeaf&&n.value&&(S(C.key,C.rawNode),x(!1))}function N(){var C;const{value:R}=t,{value:z}=l;return!R||z===null?null:(C=R.getNode(z))!==null&&C!==void 0?C:null}function j(C){const{value:R}=l,{value:{getFirstAvailableNode:z}}=t;let v=null;if(R===null){const I=z();I!==null&&(v=I.key)}else{const I=N();if(I){let D;switch(C){case"down":D=I.getNext();break;case"up":D=I.getPrev();break;case"right":D=I.getChild();break;case"left":D=I.getParent();break}D&&(v=D.key)}}v!==null&&(i.value=null,a.value=v)}const q=O(()=>{const{inverted:C}=e,R=p.value,{common:{cubicBezierEaseInOut:z},self:v}=m.value,{padding:I,dividerColor:D,borderRadius:V,optionOpacityDisabled:re,[E("optionIconSuffixWidth",R)]:Z,[E("optionSuffixWidth",R)]:ve,[E("optionIconPrefixWidth",R)]:ae,[E("optionPrefixWidth",R)]:be,[E("fontSize",R)]:ge,[E("optionHeight",R)]:me,[E("optionIconSize",R)]:le}=v,T={"--n-bezier":z,"--n-font-size":ge,"--n-padding":I,"--n-border-radius":V,"--n-option-height":me,"--n-option-prefix-width":be,"--n-option-icon-prefix-width":ae,"--n-option-suffix-width":ve,"--n-option-icon-suffix-width":Z,"--n-option-icon-size":le,"--n-divider-color":D,"--n-option-opacity-disabled":re};return C?(T["--n-color"]=v.colorInverted,T["--n-option-color-hover"]=v.optionColorHoverInverted,T["--n-option-color-active"]=v.optionColorActiveInverted,T["--n-option-text-color"]=v.optionTextColorInverted,T["--n-option-text-color-hover"]=v.optionTextColorHoverInverted,T["--n-option-text-color-active"]=v.optionTextColorActiveInverted,T["--n-option-text-color-child-active"]=v.optionTextColorChildActiveInverted,T["--n-prefix-color"]=v.prefixColorInverted,T["--n-suffix-color"]=v.suffixColorInverted,T["--n-group-header-text-color"]=v.groupHeaderTextColorInverted):(T["--n-color"]=v.color,T["--n-option-color-hover"]=v.optionColorHover,T["--n-option-color-active"]=v.optionColorActive,T["--n-option-text-color"]=v.optionTextColor,T["--n-option-text-color-hover"]=v.optionTextColorHover,T["--n-option-text-color-active"]=v.optionTextColorActive,T["--n-option-text-color-child-active"]=v.optionTextColorChildActive,T["--n-prefix-color"]=v.prefixColor,T["--n-suffix-color"]=v.suffixColor,T["--n-group-header-text-color"]=v.groupHeaderTextColor),T}),G=_?he("dropdown",O(()=>`${p.value[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:w,mergedTheme:m,mergedSize:p,tmNodes:r,mergedShow:n,handleAfterLeave:()=>{e.animated&&k()},doUpdateShow:x,cssVars:_?void 0:q,themeClass:G?.themeClass,onRender:G?.onRender}},render(){const e=(t,r,i,a,s)=>{var l;const{mergedClsPrefix:c,menuProps:u}=this;(l=this.onRender)===null||l===void 0||l.call(this);const h=u?.(void 0,this.tmNodes.map(_=>_.rawNode))||{},w={ref:$o(r),class:[t,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:s};return g(We,Re(this.$attrs,w,h))},{mergedTheme:o}=this,n={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return g(No,Object.assign({},Io(this.$props,Pn),n),{trigger:()=>{var t,r;return(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t)}})}});export{Bo as C,_n as N,Nn as V,Bn as _,$n as a,zn as b,sn as c,$o as d,tn as e,ln as f,Ke as h,Kn as r,An as s,un as t,_o as u};
