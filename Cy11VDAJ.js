import{i as fe,j as be}from"./BdRNmwBF.js";import{am as ve,$ as ge,K as me,A as K,G as m,y as L,aj as te,aH as d,cm as ne,cE as N,aA as we,by as Q,b6 as q,bE as D,D as i,aR as Z,H as ee,b3 as X,bQ as z,g as pe,d as ye,co as xe,ct as ke,cF as Se,a0 as W,ca as Ce,a8 as V,bA as Y,al as p,J as G}from"./75SNRmTY.js";function Re(e){const{primaryColor:u,opacityDisabled:r,borderRadius:a,textColor3:b}=e;return Object.assign(Object.assign({},ge),{iconColor:b,textColor:"white",loadingColor:u,opacityDisabled:r,railColor:"rgba(0, 0, 0, .14)",railColorActive:u,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:a,railBorderRadiusMedium:a,railBorderRadiusLarge:a,buttonBorderRadiusSmall:a,buttonBorderRadiusMedium:a,buttonBorderRadiusLarge:a,boxShadowFocus:`0 0 0 2px ${me(u,{alpha:.2})}`})}const Be={common:ve,self:Re},$e=K("form",[m("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[K("form-item",{width:"auto",marginRight:"18px"},[L("&:last-child",{marginRight:0})])])]);var _e=function(e,u,r,a){function b(s){return s instanceof r?s:new r(function(h){h(s)})}return new(r||(r=Promise))(function(s,h){function v(n){try{l(a.next(n))}catch(c){h(c)}}function y(n){try{l(a.throw(n))}catch(c){h(c)}}function l(n){n.done?s(n.value):b(n.value).then(v,y)}l((a=a.apply(e,u||[])).next())})};const ze=Object.assign(Object.assign({},N.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:e=>{e.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Oe=te({name:"Form",props:ze,setup(e){const{mergedClsPrefixRef:u}=ne(e);N("Form","-form",$e,we,e,u);const r={},a=D(void 0),b=l=>{const n=a.value;(n===void 0||l>=n)&&(a.value=l)};function s(){var l;for(const n of q(r)){const c=r[n];for(const o of c)(l=o.invalidateLabelWidth)===null||l===void 0||l.call(o)}}function h(l){return _e(this,arguments,void 0,function*(n,c=()=>!0){return yield new Promise((o,f)=>{const x=[];for(const w of q(r)){const I=r[w];for(const g of I)g.path&&x.push(g.internalValidate(null,c))}Promise.all(x).then(w=>{const I=w.some(k=>!k.valid),g=[],$=[];w.forEach(k=>{var j,O;!((j=k.errors)===null||j===void 0)&&j.length&&g.push(k.errors),!((O=k.warnings)===null||O===void 0)&&O.length&&$.push(k.warnings)}),n&&n(g.length?g:void 0,{warnings:$.length?$:void 0}),I?f(g.length?g:void 0):o({warnings:$.length?$:void 0})})})})}function v(){for(const l of q(r)){const n=r[l];for(const c of n)c.restoreValidation()}}return Q(fe,{props:e,maxChildLabelWidthRef:a,deriveMaxChildLabelWidth:b}),Q(be,{formItems:r}),Object.assign({validate:h,restoreValidation:v,invalidateLabelWidth:s},{mergedClsPrefix:u})},render(){const{mergedClsPrefix:e}=this;return d("form",{class:[`${e}-form`,this.inline&&`${e}-form--inline`],onSubmit:this.onSubmit},this.$slots)}}),Ve=K("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),K("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),L("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),m("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),ee("disabled",[ee("icon",[m("rubber-band",[m("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[L("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),m("active",[m("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[L("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),m("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Z()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),m("active",[i("rail","background-color: var(--n-rail-color-active);")]),m("loading",[i("rail",`
 cursor: wait;
 `)]),m("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Fe=Object.assign(Object.assign({},N.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let M;const Pe=te({name:"Switch",props:Fe,slots:Object,setup(e){M===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?M=CSS.supports("width","max(1px)"):M=!1:M=!0);const{mergedClsPrefixRef:u,inlineThemeDisabled:r,mergedComponentPropsRef:a}=ne(e),b=N("Switch","-switch",Ve,Be,e,u),s=xe(e,{mergedSize(t){var S,C;if(e.size!==void 0)return e.size;if(t)return t.mergedSize.value;const _=(C=(S=a?.value)===null||S===void 0?void 0:S.Switch)===null||C===void 0?void 0:C.size;return _||"medium"}}),{mergedSizeRef:h,mergedDisabledRef:v}=s,y=D(e.defaultValue),l=Ce(e,"value"),n=ke(l,y),c=W(()=>n.value===e.checkedValue),o=D(!1),f=D(!1),x=W(()=>{const{railStyle:t}=e;if(t)return t({focused:f.value,checked:c.value})});function w(t){const{"onUpdate:value":S,onChange:C,onUpdateValue:_}=e,{nTriggerFormInput:T,nTriggerFormChange:A}=s;S&&G(S,t),_&&G(_,t),C&&G(C,t),y.value=t,T(),A()}function I(){const{nTriggerFormFocus:t}=s;t()}function g(){const{nTriggerFormBlur:t}=s;t()}function $(){e.loading||v.value||(n.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue))}function k(){f.value=!0,I()}function j(){f.value=!1,g(),o.value=!1}function O(t){e.loading||v.value||t.key===" "&&(n.value!==e.checkedValue?w(e.checkedValue):w(e.uncheckedValue),o.value=!1)}function ie(t){e.loading||v.value||t.key===" "&&(t.preventDefault(),o.value=!0)}const J=W(()=>{const{value:t}=h,{self:{opacityDisabled:S,railColor:C,railColorActive:_,buttonBoxShadow:T,buttonColor:A,boxShadowFocus:oe,loadingColor:ae,textColor:re,iconColor:le,[V("buttonHeight",t)]:R,[V("buttonWidth",t)]:se,[V("buttonWidthPressed",t)]:de,[V("railHeight",t)]:B,[V("railWidth",t)]:P,[V("railBorderRadius",t)]:ce,[V("buttonBorderRadius",t)]:ue},common:{cubicBezierEaseInOut:he}}=b.value;let E,H,U;return M?(E=`calc((${B} - ${R}) / 2)`,H=`max(${B}, ${R})`,U=`max(${P}, calc(${P} + ${R} - ${B}))`):(E=Y((p(B)-p(R))/2),H=Y(Math.max(p(B),p(R))),U=p(B)>p(R)?P:Y(p(P)+p(R)-p(B))),{"--n-bezier":he,"--n-button-border-radius":ue,"--n-button-box-shadow":T,"--n-button-color":A,"--n-button-width":se,"--n-button-width-pressed":de,"--n-button-height":R,"--n-height":H,"--n-offset":E,"--n-opacity-disabled":S,"--n-rail-border-radius":ce,"--n-rail-color":C,"--n-rail-color-active":_,"--n-rail-height":B,"--n-rail-width":P,"--n-width":U,"--n-box-shadow-focus":oe,"--n-loading-color":ae,"--n-text-color":re,"--n-icon-color":le}}),F=r?Se("switch",W(()=>h.value[0]),J,e):void 0;return{handleClick:$,handleBlur:j,handleFocus:k,handleKeyup:O,handleKeydown:ie,mergedRailStyle:x,pressed:o,mergedClsPrefix:u,mergedValue:n,checked:c,mergedDisabled:v,cssVars:r?void 0:J,themeClass:F?.themeClass,onRender:F?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:u,checked:r,mergedRailStyle:a,onRender:b,$slots:s}=this;b?.();const{checked:h,unchecked:v,icon:y,"checked-icon":l,"unchecked-icon":n}=s,c=!(X(y)&&X(l)&&X(n));return d("div",{role:"switch","aria-checked":r,class:[`${e}-switch`,this.themeClass,c&&`${e}-switch--icon`,r&&`${e}-switch--active`,u&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},z(h,o=>z(v,f=>o||f?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),o),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),f)):null)),d("div",{class:`${e}-switch__button`},z(y,o=>z(l,f=>z(n,x=>d(pe,null,{default:()=>this.loading?d(ye,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(f||o)?d("div",{class:`${e}-switch__button-icon`,key:f?"checked-icon":"icon"},f||o):!this.checked&&(x||o)?d("div",{class:`${e}-switch__button-icon`,key:x?"unchecked-icon":"icon"},x||o):null})))),z(h,o=>o&&d("div",{key:"checked",class:`${e}-switch__checked`},o)),z(v,o=>o&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{Oe as N,Pe as a};
