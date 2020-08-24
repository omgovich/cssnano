(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1170:function(e,t,n){var r={"./_collections":184,"./_collections.js":184,"./_path":201,"./_path.js":201,"./_transforms":204,"./_transforms.js":204,"./addAttributesToSVGElement":412,"./addAttributesToSVGElement.js":412,"./addClassesToSVGElement":413,"./addClassesToSVGElement.js":413,"./cleanupAttrs":414,"./cleanupAttrs.js":414,"./cleanupEnableBackground":415,"./cleanupEnableBackground.js":415,"./cleanupIDs":416,"./cleanupIDs.js":416,"./cleanupListOfValues":417,"./cleanupListOfValues.js":417,"./cleanupNumericValues":418,"./cleanupNumericValues.js":418,"./collapseGroups":419,"./collapseGroups.js":419,"./convertColors":420,"./convertColors.js":420,"./convertEllipseToCircle":421,"./convertEllipseToCircle.js":421,"./convertPathData":422,"./convertPathData.js":422,"./convertShapeToPath":423,"./convertShapeToPath.js":423,"./convertStyleToAttrs":424,"./convertStyleToAttrs.js":424,"./convertTransform":425,"./convertTransform.js":425,"./inlineStyles":426,"./inlineStyles.js":426,"./mergePaths":441,"./mergePaths.js":441,"./minifyStyles":442,"./minifyStyles.js":442,"./moveElemsAttrsToGroup":456,"./moveElemsAttrsToGroup.js":456,"./moveGroupAttrsToElems":457,"./moveGroupAttrsToElems.js":457,"./prefixIds":458,"./prefixIds.js":458,"./removeAttributesBySelector":459,"./removeAttributesBySelector.js":459,"./removeAttrs":460,"./removeAttrs.js":460,"./removeComments":461,"./removeComments.js":461,"./removeDesc":462,"./removeDesc.js":462,"./removeDimensions":463,"./removeDimensions.js":463,"./removeDoctype":464,"./removeDoctype.js":464,"./removeEditorsNSData":465,"./removeEditorsNSData.js":465,"./removeElementsByAttr":466,"./removeElementsByAttr.js":466,"./removeEmptyAttrs":467,"./removeEmptyAttrs.js":467,"./removeEmptyContainers":468,"./removeEmptyContainers.js":468,"./removeEmptyText":469,"./removeEmptyText.js":469,"./removeHiddenElems":470,"./removeHiddenElems.js":470,"./removeMetadata":471,"./removeMetadata.js":471,"./removeNonInheritableGroupAttrs":472,"./removeNonInheritableGroupAttrs.js":472,"./removeOffCanvasPaths":473,"./removeOffCanvasPaths.js":473,"./removeRasterImages":474,"./removeRasterImages.js":474,"./removeScriptElement":475,"./removeScriptElement.js":475,"./removeStyleElement":476,"./removeStyleElement.js":476,"./removeTitle":477,"./removeTitle.js":477,"./removeUnknownsAndDefaults":478,"./removeUnknownsAndDefaults.js":478,"./removeUnusedNS":479,"./removeUnusedNS.js":479,"./removeUselessDefs":480,"./removeUselessDefs.js":480,"./removeUselessStrokeAndFill":481,"./removeUselessStrokeAndFill.js":481,"./removeViewBox":482,"./removeViewBox.js":482,"./removeXMLNS":483,"./removeXMLNS.js":483,"./removeXMLProcInst":484,"./removeXMLProcInst.js":484,"./reusePaths":485,"./reusePaths.js":485,"./sortAttrs":494,"./sortAttrs.js":494,"./sortDefsChildren":495,"./sortDefsChildren.js":495};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=1170},1409:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1409},1413:function(e,t){},1415:function(e,t){},1564:function(e,t){},171:function(e,t,n){"use strict";n.r(t);var r=n(558),o=n.n(r),s=(n(559),n(325),n(569)),a=n(0),l=n.n(a),i=n(202),c=n(570),m=n.n(c),u=n(571),d=n.n(u),p=n(183),v=n(185),h=n.n(v),f=n(241),E=n(242),j=n.n(E);class g extends a.Component{constructor(e){super(e),this.state={isEditorReady:!1},this.handleEditorDidMount=this.handleEditorDidMount.bind(this)}handleEditorDidMount(){this.setState({isEditorReady:!0})}render(){return l.a.createElement("div",null,l.a.createElement(E.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"css",loading:l.a.createElement(f.RingSpinner,null),value:this.props.input,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var y=g;class b extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(j.a,{height:"50rem",theme:this.props.theme,language:"css",loading:l.a.createElement(f.RingSpinner,null),value:this.props.output,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var S=b,C={encodeToBase64:e=>window.btoa(unescape(encodeURIComponent(e))),decodeFromBase64:e=>decodeURIComponent(escape(window.atob(e)))};class w extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(E.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"json",loading:l.a.createElement(f.RingSpinner,null),value:this.props.config,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))}}var N=w,A=n(606),D=n(607),O=n(605),T=n(98),P=n.n(T);function k({...e}){return l.a.createElement("nav",{className:h()("navbar navbar--dark",P.a.playgroundInnerNav)},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("button",{onClick:e.toggleTheme,className:h()("button button--primary",P.a.headbtn)},l.a.createElement(O.a,null)," Toggle theme"),l.a.createElement("button",{onClick:e.runHandler,className:h()("button button--primary",P.a.headbtn)},l.a.createElement(A.a,null)," Run"),l.a.createElement("button",{onClick:e.format,className:h()("button button--primary",P.a.headbtn)},l.a.createElement(D.a,null)," Format"),l.a.createElement("button",{onClick:e.save,className:h()("button button--primary",P.a.headbtn)},l.a.createElement(A.b,null)," Save"))))}var _=n(179),M=n.n(_);const I={cssnanoPresetDefault:n(340),cssnanoPresetAdvanced:n(1552),cssnanoPresetLite:n(1635)};function U(e,t,n){if(!Array.isArray(e))return Promise.resolve(e()(t,n));{const[r,o]=e;if(void 0===o||"object"==typeof o&&!o.exclude)return Promise.resolve(r(o)(t,n))}return Promise.resolve()}var x=(e,t)=>{const{plugins:n}=I[(r=t[0],r.split("-").map((e,t)=>0===t?e:e.slice(0,1).toUpperCase().concat(e.slice(1))).join(""))](t[1]);var r;const o=(e,t)=>n.reduce((n,r)=>n.then(U.bind(null,r,e,t)),Promise.resolve());return new Promise((t,n)=>{M()(o).process(e).then(e=>t(e)).catch(e=>n(e))})},B=n(99),G=n.n(B);t.default=function(){var e=JSON.parse("undefined"!=typeof window&&window.localStorage.getItem("cssnano_editor_state")||null),t=function(){try{return JSON.parse(C.decodeFromBase64(window.location.hash.replace(/^#/u,"")))}catch(e){return null}}()||e||{input:"/* write your css below */",config:'// cssnano config\n{\n  "preset" : "default",\n}\n'},n=Object(p.a)().siteConfig,r=void 0===n?{}:n,c=Object(a.useState)("dark"),u=c[0],v=c[1],E=Object(a.useState)(!1),j=E[0],g=E[1],b=Object(a.useState)("/* your optimized output here */"),w=b[0],A=b[1],D=Object(a.useState)(t.input),O=D[0],T=D[1],_=Object(a.useState)(t.config),M=_[0],I=_[1];function U(){return(U=Object(s.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),t=JSON.parse(JSON.stringify(M.split("\n").slice(1).join("\n"))),n=B(t),x(O,n).then((function(e){A(e.css)})).catch((function(e){A(e)})),g(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){if(void 0!==e.preset&&e.preset,void 0===e.plugins){if(Array.isArray(e.preset))return["advance"===e.preset[0]?"cssnano-preset-advance":"default"===e.preset[0]?"cssnano-preset-default":"cssnano-preset-lite",e.preset.length>1?e.preset[1]:{}];"advance"===e.preset||e.preset}return["cssnano-preset-default",{}]}return l.a.createElement(i.a,{title:""+r.title,description:"CSSNANO - Playground"},l.a.createElement(k,{toggleTheme:function(){v("light"===u?"dark":"light")},runHandler:function(){return U.apply(this,arguments)},format:function(){var e=m.a.format(O,{parser:"css",plugins:[d.a]});T(e)},save:function(){var e=JSON.stringify({input:O,config:M});"undefined"!=typeof window&&(window.localStorage&&window.localStorage.setItem("cssnano_editor_state",e),window.location.hash=C.encodeToBase64(e))}}),l.a.createElement("div",{className:P.a.panelLoaderPlaceholder,style:{display:j?"block":"none"}},l.a.createElement("div",{className:P.a.panelLoaderHolder},l.a.createElement(f.RingSpinner,null))),l.a.createElement("div",{className:"row",style:{margin:"0"}},l.a.createElement("div",{className:h()("col col--4",G.a.editorCol)},l.a.createElement(y,{theme:u,input:O,handleOnChange:function(e,t){T(t)}})),l.a.createElement("div",{className:h()("col col--4",G.a.editorCol)},l.a.createElement(N,{theme:u,config:M,handleOnChange:function(e,t){I(t)}})),l.a.createElement("div",{className:h()("col col--4",G.a.editorCol)},l.a.createElement(S,{theme:u,output:w}))))}},608:function(e,t){},609:function(e,t){},610:function(e,t){},627:function(e,t){},641:function(e,t){}}]);