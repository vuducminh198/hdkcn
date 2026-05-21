import{z as l,G as d,x as o,D as i,A as u,ah as g,aE as m,cf as b,cu as f,bt as h,cr as $,w as y,bG as a}from"./14Kc_6Jj.js";const t="0!important",p="-1px!important";function s(r){return i(`${r}-type`,[o("& +",[l("button",{},[i(`${r}-type`,[u("border",{borderLeftWidth:t}),u("state-border",{left:p})])])])])}function n(r){return i(`${r}-type`,[o("& +",[l("button",[i(`${r}-type`,[u("border",{borderTopWidth:t}),u("state-border",{top:p})])])])])}const x=l("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[l("button",[o("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),s("default"),i("ghost",[s("primary"),s("info"),s("success"),s("warning"),s("error")])])])]),i("vertical",{flexDirection:"column"},[l("button",[o("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),o("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),o("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),i("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),v={size:String,vertical:Boolean},G=g({name:"ButtonGroup",props:v,setup(r){const{mergedClsPrefixRef:e,mergedRtlRef:c}=b(r);return f("-button-group",x,e),h(y,r),{rtlEnabled:$("ButtonGroup",c,e),mergedClsPrefix:e}},render(){const{mergedClsPrefix:r}=this;return m("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});class w{static synchronize(){return a.get("/company/customers/synchronize")}static getList(e){return a.get("/company/customers",{params:e})}static getDetail(e){return a.get(`/company/customers/${e}`)}static update(e,c){return a.put(`/company/customers/${e}`,c)}static delete(e){return a.delete(`/company/customers/${e}`)}}export{w as C,G as N};
