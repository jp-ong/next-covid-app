_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"30+C":function(e,t,n){"use strict";var o=n("wx14"),a=n("Ff2n"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("kKAo"),c=n("H2TA"),s=r.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=Object(a.a)(e,["classes","className","raised"]);return r.createElement(l.a,Object(o.a)({className:Object(i.a)(n.root,c),elevation:d?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return pe})),n.d(t,"default",(function(){return fe}));var o=n("nKUr"),a=n("g4pe"),r=n.n(a),i=n("CafY"),l=n("R/WZ"),c=n("ofer"),s=n("tRbT"),d=n("30+C"),u=n("oa/T"),p=n("q1tI"),f=n("5AJ6"),g=Object(f.a)(p.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddOutlined"),b=n("rwtN"),m=n("nXt3"),v=n("YlDu"),h=n("dl/7"),x=n("6yBS"),O=n("rePB"),y=n("Ff2n"),j=n("wx14"),C=(n("17x9"),n("iuhU")),w=n("H2TA"),S=n("AOnC"),k=n("NqtD"),I=p.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.color,r=void 0===a?"default":a,i=e.component,l=void 0===i?"li":i,c=e.disableGutters,s=void 0!==c&&c,d=e.disableSticky,u=void 0!==d&&d,f=e.inset,g=void 0!==f&&f,b=Object(y.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return p.createElement(l,Object(j.a)({className:Object(C.a)(n.root,o,"default"!==r&&n["color".concat(Object(k.a)(r))],g&&n.inset,!u&&n.sticky,!s&&n.gutters),ref:t},b))})),P=Object(w.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(I),E=n("kKAo"),D=n("PsDL"),N=Object(f.a)(p.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),T=n("ye/S"),R=n("bfFb"),L=n("VD++");function A(e){return"Backspace"===e.key||"Delete"===e.key}var $=p.forwardRef((function(e,t){var n=e.avatar,o=e.classes,a=e.className,r=e.clickable,i=e.color,l=void 0===i?"default":i,c=e.component,s=e.deleteIcon,d=e.disabled,u=void 0!==d&&d,f=e.icon,g=e.label,b=e.onClick,m=e.onDelete,v=e.onKeyDown,h=e.onKeyUp,x=e.size,O=void 0===x?"medium":x,w=e.variant,S=void 0===w?"default":w,I=Object(y.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),P=p.useRef(null),E=Object(R.a)(P,t),D=function(e){e.stopPropagation(),m&&m(e)},T=!(!1===r||!b)||r,$="small"===O,z=c||(T?L.a:"div"),M=z===L.a?{component:"div"}:{},F=null;if(m){var H=Object(C.a)("default"!==l&&("default"===S?o["deleteIconColor".concat(Object(k.a)(l))]:o["deleteIconOutlinedColor".concat(Object(k.a)(l))]),$&&o.deleteIconSmall);F=s&&p.isValidElement(s)?p.cloneElement(s,{className:Object(C.a)(s.props.className,o.deleteIcon,H),onClick:D}):p.createElement(N,{className:Object(C.a)(o.deleteIcon,H),onClick:D})}var W=null;n&&p.isValidElement(n)&&(W=p.cloneElement(n,{className:Object(C.a)(o.avatar,n.props.className,$&&o.avatarSmall,"default"!==l&&o["avatarColor".concat(Object(k.a)(l))])}));var B=null;return f&&p.isValidElement(f)&&(B=p.cloneElement(f,{className:Object(C.a)(o.icon,f.props.className,$&&o.iconSmall,"default"!==l&&o["iconColor".concat(Object(k.a)(l))])})),p.createElement(z,Object(j.a)({role:T||m?"button":void 0,className:Object(C.a)(o.root,a,"default"!==l&&[o["color".concat(Object(k.a)(l))],T&&o["clickableColor".concat(Object(k.a)(l))],m&&o["deletableColor".concat(Object(k.a)(l))]],"default"!==S&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[l]],u&&o.disabled,$&&o.sizeSmall,T&&o.clickable,m&&o.deletable),"aria-disabled":!!u||void 0,tabIndex:T||m?0:void 0,onClick:b,onKeyDown:function(e){e.currentTarget===e.target&&A(e)&&e.preventDefault(),v&&v(e)},onKeyUp:function(e){e.currentTarget===e.target&&(m&&A(e)?m(e):"Escape"===e.key&&P.current&&P.current.blur()),h&&h(e)},ref:E},M,I),W||B,p.createElement("span",{className:Object(C.a)(o.label,$&&o.labelSmall)},g),F)})),z=Object(w.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(T.d)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(T.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(T.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(T.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(T.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(T.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(T.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(T.d)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(T.d)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(T.d)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(T.d)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(T.d)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(T.d)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(T.d)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(T.d)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})($),M=Object(f.a)(p.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),F=Object(f.a)(p.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),H=n("ODXe"),W=(n("U8pU"),n("wRgb")),B=n("yCxk"),V=n("Ovef"),_=n("GIek");function K(e){return"undefined"!==typeof e.normalize?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function U(e,t){for(var n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreAccents,n=void 0===t||t,o=e.ignoreCase,a=void 0===o||o,r=e.limit,i=e.matchFrom,l=void 0===i?"any":i,c=e.stringify,s=e.trim,d=void 0!==s&&s;return function(e,t){var o=t.inputValue,i=t.getOptionLabel,s=d?o.trim():o;a&&(s=s.toLowerCase()),n&&(s=K(s));var u=e.filter((function(e){var t=(c||i)(e);return a&&(t=t.toLowerCase()),n&&(t=K(t)),"start"===l?0===t.indexOf(s):t.indexOf(s)>-1}));return"number"===typeof r?u.slice(0,r):u}}();function G(e){var t=e.autoComplete,n=void 0!==t&&t,o=e.autoHighlight,a=void 0!==o&&o,r=e.autoSelect,i=void 0!==r&&r,l=e.blurOnSelect,c=void 0!==l&&l,s=e.clearOnBlur,d=void 0===s?!e.freeSolo:s,u=e.clearOnEscape,f=void 0!==u&&u,g=e.componentName,b=void 0===g?"useAutocomplete":g,m=e.debug,v=void 0!==m&&m,h=e.defaultValue,x=void 0===h?e.multiple?[]:null:h,O=e.disableClearable,y=void 0!==O&&O,C=e.disableCloseOnSelect,w=void 0!==C&&C,S=e.disabledItemsFocusable,k=void 0!==S&&S,I=e.disableListWrap,P=void 0!==I&&I,E=e.filterOptions,D=void 0===E?q:E,N=e.filterSelectedOptions,T=void 0!==N&&N,R=e.freeSolo,L=void 0!==R&&R,A=e.getOptionDisabled,$=e.getOptionLabel,z=void 0===$?function(e){return e}:$,M=e.getOptionSelected,F=void 0===M?function(e,t){return e===t}:M,K=e.groupBy,G=e.handleHomeEndKeys,J=void 0===G?!e.freeSolo:G,X=e.id,Y=e.includeInputInList,Z=void 0!==Y&&Y,Q=e.inputValue,ee=e.multiple,te=void 0!==ee&&ee,ne=e.onChange,oe=e.onClose,ae=e.onHighlightChange,re=e.onInputChange,ie=e.onOpen,le=e.open,ce=e.openOnFocus,se=void 0!==ce&&ce,de=e.options,ue=e.selectOnFocus,pe=void 0===ue?!e.freeSolo:ue,fe=e.value,ge=Object(W.a)(X),be=z;var me=p.useRef(!1),ve=p.useRef(!0),he=p.useRef(null),xe=p.useRef(null),Oe=p.useState(null),ye=Oe[0],je=Oe[1],Ce=p.useState(-1),we=Ce[0],Se=Ce[1],ke=a?0:-1,Ie=p.useRef(ke),Pe=Object(B.a)({controlled:fe,default:x,name:b}),Ee=Object(H.a)(Pe,2),De=Ee[0],Ne=Ee[1],Te=Object(B.a)({controlled:Q,default:"",name:b,state:"inputValue"}),Re=Object(H.a)(Te,2),Le=Re[0],Ae=Re[1],$e=p.useState(!1),ze=$e[0],Me=$e[1],Fe=Object(V.a)((function(e,t){var n;if(te)n="";else if(null==t)n="";else{var o=be(t);n="string"===typeof o?o:""}Le!==n&&(Ae(n),re&&re(e,n,"reset"))}));p.useEffect((function(){Fe(null,De)}),[De,Fe]);var He=Object(B.a)({controlled:le,default:!1,name:b,state:"open"}),We=Object(H.a)(He,2),Be=We[0],Ve=We[1],_e=!te&&null!=De&&Le===be(De),Ke=Be,Ue=Ke?D(de.filter((function(e){return!T||!(te?De:[De]).some((function(t){return null!==t&&F(e,t)}))})),{inputValue:_e?"":Le,getOptionLabel:be}):[],qe=Object(V.a)((function(e){-1===e?he.current.focus():ye.querySelector('[data-tag-index="'.concat(e,'"]')).focus()}));p.useEffect((function(){te&&we>De.length-1&&(Se(-1),qe(-1))}),[De,te,we,qe]);var Ge=Object(V.a)((function(e){var t=e.event,n=e.index,o=e.reason,a=void 0===o?"auto":o;if(Ie.current=n,-1===n?he.current.removeAttribute("aria-activedescendant"):he.current.setAttribute("aria-activedescendant","".concat(ge,"-option-").concat(n)),ae&&ae(t,-1===n?null:Ue[n],a),xe.current){var r=xe.current.querySelector("[data-focus]");r&&r.removeAttribute("data-focus");var i=xe.current.parentElement.querySelector('[role="listbox"]');if(i)if(-1!==n){var l=xe.current.querySelector('[data-option-index="'.concat(n,'"]'));if(l&&(l.setAttribute("data-focus","true"),i.scrollHeight>i.clientHeight&&"mouse"!==a)){var c=l,s=i.clientHeight+i.scrollTop,d=c.offsetTop+c.offsetHeight;d>s?i.scrollTop=d-i.clientHeight:c.offsetTop-c.offsetHeight*(K?1.3:0)<i.scrollTop&&(i.scrollTop=c.offsetTop-c.offsetHeight*(K?1.3:0))}}else i.scrollTop=0}})),Je=Object(V.a)((function(e){var t=e.event,o=e.diff,a=e.direction,r=void 0===a?"next":a,i=e.reason,l=void 0===i?"auto":i;if(Ke){var c=function(e,t){if(!xe.current||-1===e)return-1;for(var n=e;;){if("next"===t&&n===Ue.length||"previous"===t&&-1===n)return-1;var o=xe.current.querySelector('[data-option-index="'.concat(n,'"]')),a=!k&&o&&(o.disabled||"true"===o.getAttribute("aria-disabled"));if(!(o&&!o.hasAttribute("tabindex")||a))return n;n+="next"===t?1:-1}}(function(){var e=Ue.length-1;if("reset"===o)return ke;if("start"===o)return 0;if("end"===o)return e;var t=Ie.current+o;return t<0?-1===t&&Z?-1:P&&-1!==Ie.current||Math.abs(o)>1?0:e:t>e?t===e+1&&Z?-1:P||Math.abs(o)>1?e:0:t}(),r);if(Ge({index:c,reason:l,event:t}),n&&"reset"!==o)if(-1===c)he.current.value=Le;else{var s=be(Ue[c]);he.current.value=s,0===s.toLowerCase().indexOf(Le.toLowerCase())&&Le.length>0&&he.current.setSelectionRange(Le.length,s.length)}}})),Xe=p.useCallback((function(){if(Ke){var e=te?De[0]:De;if(0!==Ue.length&&null!=e){if(xe.current)if(T||null==e)Ie.current>=Ue.length-1?Ge({index:Ue.length-1}):Ge({index:Ie.current});else{var t=Ue[Ie.current];if(te&&t&&-1!==U(De,(function(e){return F(t,e)})))return;var n=U(Ue,(function(t){return F(t,e)}));-1===n?Je({diff:"reset"}):Ge({index:n})}}else Je({diff:"reset"})}}),[0===Ue.length,!te&&De,T,Je,Ge,Ke,Le,te]),Ye=Object(V.a)((function(e){Object(_.a)(xe,e),e&&Xe()}));p.useEffect((function(){Xe()}),[Xe]);var Ze=function(e){Be||(Ve(!0),ie&&ie(e))},Qe=function(e,t){Be&&(Ve(!1),oe&&oe(e,t))},et=function(e,t,n,o){De!==t&&(ne&&ne(e,t,n,o),Ne(t))},tt=p.useRef(!1),nt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"select-option",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"options",a=n,r=t;if(te){var i=U(r=Array.isArray(De)?De.slice():[],(function(e){return F(t,e)}));-1===i?r.push(t):"freeSolo"!==o&&(r.splice(i,1),a="remove-option")}Fe(e,r),et(e,r,a,{option:t}),w||Qe(e,a),(!0===c||"touch"===c&&tt.current||"mouse"===c&&!tt.current)&&he.current.blur()};var ot=function(e,t){if(te){Qe(e,"toggleInput");var n=we;-1===we?""===Le&&"previous"===t&&(n=De.length-1):((n+="next"===t?1:-1)<0&&(n=0),n===De.length&&(n=-1)),n=function(e,t){if(-1===e)return-1;for(var n=e;;){if("next"===t&&n===De.length||"previous"===t&&-1===n)return-1;var o=ye.querySelector('[data-tag-index="'.concat(n,'"]'));if(!o||o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled"))return n;n+="next"===t?1:-1}}(n,t),Se(n),qe(n)}},at=function(e){me.current=!0,Ae(""),re&&re(e,"","clear"),et(e,te?[]:null,"clear")},rt=function(e){return function(t){switch(-1!==we&&-1===["ArrowLeft","ArrowRight"].indexOf(t.key)&&(Se(-1),qe(-1)),t.key){case"Home":Ke&&J&&(t.preventDefault(),Je({diff:"start",direction:"next",reason:"keyboard",event:t}));break;case"End":Ke&&J&&(t.preventDefault(),Je({diff:"end",direction:"previous",reason:"keyboard",event:t}));break;case"PageUp":t.preventDefault(),Je({diff:-5,direction:"previous",reason:"keyboard",event:t}),Ze(t);break;case"PageDown":t.preventDefault(),Je({diff:5,direction:"next",reason:"keyboard",event:t}),Ze(t);break;case"ArrowDown":t.preventDefault(),Je({diff:1,direction:"next",reason:"keyboard",event:t}),Ze(t);break;case"ArrowUp":t.preventDefault(),Je({diff:-1,direction:"previous",reason:"keyboard",event:t}),Ze(t);break;case"ArrowLeft":ot(t,"previous");break;case"ArrowRight":ot(t,"next");break;case"Enter":if(229===t.which)break;if(-1!==Ie.current&&Ke){var o=Ue[Ie.current],a=!!A&&A(o);if(t.preventDefault(),a)return;nt(t,o,"select-option"),n&&he.current.setSelectionRange(he.current.value.length,he.current.value.length)}else L&&""!==Le&&!1===_e&&(te&&t.preventDefault(),nt(t,Le,"create-option","freeSolo"));break;case"Escape":Ke?(t.preventDefault(),t.stopPropagation(),Qe(t,"escape")):f&&(""!==Le||te&&De.length>0)&&(t.preventDefault(),t.stopPropagation(),at(t));break;case"Backspace":if(te&&""===Le&&De.length>0){var r=-1===we?De.length-1:we,i=De.slice();i.splice(r,1),et(t,i,"remove-option",{option:De[r]})}}e.onKeyDown&&e.onKeyDown(t)}},it=function(e){Me(!0),se&&!me.current&&Ze(e)},lt=function(e){null===xe.current||document.activeElement!==xe.current.parentElement?(Me(!1),ve.current=!0,me.current=!1,v&&""!==Le||(i&&-1!==Ie.current&&Ke?nt(e,Ue[Ie.current],"blur"):i&&L&&""!==Le?nt(e,Le,"blur","freeSolo"):d&&Fe(e,De),Qe(e,"blur"))):he.current.focus()},ct=function(e){var t=e.target.value;Le!==t&&(Ae(t),re&&re(e,t,"input")),""===t?y||te||et(e,null,"clear"):Ze(e)},st=function(e){Ge({event:e,index:Number(e.currentTarget.getAttribute("data-option-index")),reason:"mouse"})},dt=function(){tt.current=!0},ut=function(e){var t=Number(e.currentTarget.getAttribute("data-option-index"));nt(e,Ue[t],"select-option"),tt.current=!1},pt=function(e){return function(t){var n=De.slice();n.splice(e,1),et(t,n,"remove-option",{option:De[e]})}},ft=function(e){Be?Qe(e,"toggleInput"):Ze(e)},gt=function(e){e.target.getAttribute("id")!==ge&&e.preventDefault()},bt=function(){he.current.focus(),pe&&ve.current&&he.current.selectionEnd-he.current.selectionStart===0&&he.current.select(),ve.current=!1},mt=function(e){""!==Le&&Be||ft(e)},vt=L&&Le.length>0;vt=vt||(te?De.length>0:null!==De);var ht=Ue;if(K){new Map;ht=Ue.reduce((function(e,t,n){var o=K(t);return e.length>0&&e[e.length-1].group===o?e[e.length-1].options.push(t):e.push({key:n,index:n,group:o,options:[t]}),e}),[])}return{getRootProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(j.a)({"aria-owns":Ke?"".concat(ge,"-popup"):null,role:"combobox","aria-expanded":Ke},e,{onKeyDown:rt(e),onMouseDown:gt,onClick:bt})},getInputLabelProps:function(){return{id:"".concat(ge,"-label"),htmlFor:ge}},getInputProps:function(){return{id:ge,value:Le,onBlur:lt,onFocus:it,onChange:ct,onMouseDown:mt,"aria-activedescendant":Ke?"":null,"aria-autocomplete":n?"both":"list","aria-controls":Ke?"".concat(ge,"-popup"):null,autoComplete:"off",ref:he,autoCapitalize:"none",spellCheck:"false"}},getClearProps:function(){return{tabIndex:-1,onClick:at}},getPopupIndicatorProps:function(){return{tabIndex:-1,onClick:ft}},getTagProps:function(e){var t=e.index;return{key:t,"data-tag-index":t,tabIndex:-1,onDelete:pt(t)}},getListboxProps:function(){return{role:"listbox",id:"".concat(ge,"-popup"),"aria-labelledby":"".concat(ge,"-label"),ref:Ye,onMouseDown:function(e){e.preventDefault()}}},getOptionProps:function(e){var t=e.index,n=e.option,o=(te?De:[De]).some((function(e){return null!=e&&F(n,e)})),a=!!A&&A(n);return{key:t,tabIndex:-1,role:"option",id:"".concat(ge,"-option-").concat(t),onMouseOver:st,onClick:ut,onTouchStart:dt,"data-option-index":t,"aria-disabled":a,"aria-selected":o}},id:ge,inputValue:Le,value:De,dirty:vt,popupOpen:Ke,focused:ze||-1!==we,anchorEl:ye,setAnchorEl:je,focusedTag:we,groupedOptions:ht}}function J(e){e.anchorEl,e.open;var t=Object(y.a)(e,["anchorEl","open"]);return p.createElement("div",t)}var X=p.createElement(M,{fontSize:"small"}),Y=p.createElement(F,null),Z=p.forwardRef((function(e,t){e.autoComplete,e.autoHighlight,e.autoSelect,e.blurOnSelect;var n,o=e.ChipProps,a=e.classes,r=e.className,i=e.clearOnBlur,l=(void 0===i&&e.freeSolo,e.clearOnEscape,e.clearText),c=void 0===l?"Clear":l,s=e.closeIcon,d=void 0===s?X:s,u=e.closeText,f=void 0===u?"Close":u,g=(e.debug,e.defaultValue),b=(void 0===g&&e.multiple,e.disableClearable),m=void 0!==b&&b,v=(e.disableCloseOnSelect,e.disabled),h=void 0!==v&&v,x=(e.disabledItemsFocusable,e.disableListWrap,e.disablePortal),O=void 0!==x&&x,w=(e.filterOptions,e.filterSelectedOptions,e.forcePopupIcon),k=void 0===w?"auto":w,I=e.freeSolo,N=void 0!==I&&I,T=e.fullWidth,R=void 0!==T&&T,L=e.getLimitTagsText,A=void 0===L?function(e){return"+".concat(e)}:L,$=(e.getOptionDisabled,e.getOptionLabel),M=void 0===$?function(e){return e}:$,F=(e.getOptionSelected,e.groupBy),H=e.handleHomeEndKeys,W=(void 0===H&&e.freeSolo,e.id,e.includeInputInList,e.inputValue,e.limitTags),B=void 0===W?-1:W,V=e.ListboxComponent,_=void 0===V?"ul":V,K=e.ListboxProps,U=e.loading,q=void 0!==U&&U,Z=e.loadingText,Q=void 0===Z?"Loading\u2026":Z,ee=e.multiple,te=void 0!==ee&&ee,ne=e.noOptionsText,oe=void 0===ne?"No options":ne,ae=(e.onChange,e.onClose,e.onHighlightChange,e.onInputChange,e.onOpen,e.open,e.openOnFocus,e.openText),re=void 0===ae?"Open":ae,ie=(e.options,e.PaperComponent),le=void 0===ie?E.a:ie,ce=e.PopperComponent,se=void 0===ce?S.a:ce,de=e.popupIcon,ue=void 0===de?Y:de,pe=e.renderGroup,fe=e.renderInput,ge=e.renderOption,be=e.renderTags,me=e.selectOnFocus,ve=(void 0===me&&e.freeSolo,e.size),he=void 0===ve?"medium":ve,xe=(e.value,Object(y.a)(e,["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","classes","className","clearOnBlur","clearOnEscape","clearText","closeIcon","closeText","debug","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","getOptionSelected","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","value"])),Oe=O?J:se,ye=G(Object(j.a)({},e,{componentName:"Autocomplete"})),je=ye.getRootProps,Ce=ye.getInputProps,we=ye.getInputLabelProps,Se=ye.getPopupIndicatorProps,ke=ye.getClearProps,Ie=ye.getTagProps,Pe=ye.getListboxProps,Ee=ye.getOptionProps,De=ye.value,Ne=ye.dirty,Te=ye.id,Re=ye.popupOpen,Le=ye.focused,Ae=ye.focusedTag,$e=ye.anchorEl,ze=ye.setAnchorEl,Me=ye.inputValue,Fe=ye.groupedOptions;if(te&&De.length>0){var He=function(e){return Object(j.a)({className:Object(C.a)(a.tag,"small"===he&&a.tagSizeSmall),disabled:h},Ie(e))};n=be?be(De,He):De.map((function(e,t){return p.createElement(z,Object(j.a)({label:M(e),size:he},He({index:t}),o))}))}if(B>-1&&Array.isArray(n)){var We=n.length-B;!Le&&We>0&&(n=n.splice(0,B)).push(p.createElement("span",{className:a.tag,key:n.length},A(We)))}var Be=pe||function(e){return p.createElement("li",{key:e.key},p.createElement(P,{className:a.groupLabel,component:"div"},e.group),p.createElement("ul",{className:a.groupUl},e.children))},Ve=ge||M,_e=function(e,t){var n=Ee({option:e,index:t});return p.createElement("li",Object(j.a)({},n,{className:a.option}),Ve(e,{selected:n["aria-selected"],inputValue:Me}))},Ke=!m&&!h,Ue=(!N||!0===k)&&!1!==k;return p.createElement(p.Fragment,null,p.createElement("div",Object(j.a)({ref:t,className:Object(C.a)(a.root,r,Le&&a.focused,R&&a.fullWidth,Ke&&a.hasClearIcon,Ue&&a.hasPopupIcon)},je(xe)),fe({id:Te,disabled:h,fullWidth:!0,size:"small"===he?"small":void 0,InputLabelProps:we(),InputProps:{ref:ze,className:a.inputRoot,startAdornment:n,endAdornment:p.createElement("div",{className:a.endAdornment},Ke?p.createElement(D.a,Object(j.a)({},ke(),{"aria-label":c,title:c,className:Object(C.a)(a.clearIndicator,Ne&&a.clearIndicatorDirty)}),d):null,Ue?p.createElement(D.a,Object(j.a)({},Se(),{disabled:h,"aria-label":Re?f:re,title:Re?f:re,className:Object(C.a)(a.popupIndicator,Re&&a.popupIndicatorOpen)}),ue):null)},inputProps:Object(j.a)({className:Object(C.a)(a.input,-1===Ae&&a.inputFocused),disabled:h},Ce())})),Re&&$e?p.createElement(Oe,{className:Object(C.a)(a.popper,O&&a.popperDisablePortal),style:{width:$e?$e.clientWidth:null},role:"presentation",anchorEl:$e,open:!0},p.createElement(le,{className:a.paper},q&&0===Fe.length?p.createElement("div",{className:a.loading},Q):null,0!==Fe.length||N||q?null:p.createElement("div",{className:a.noOptions},oe),Fe.length>0?p.createElement(_,Object(j.a)({className:a.listbox},Pe(),K),Fe.map((function(e,t){return F?Be({key:e.key,group:e.group,children:e.options.map((function(t,n){return _e(t,e.index+n)}))}):_e(e,t)}))):null)):null)})),Q=Object(w.a)((function(e){var t;return{root:{"&$focused $clearIndicatorDirty":{visibility:"visible"},"@media (pointer: fine)":{"&:hover $clearIndicatorDirty":{visibility:"visible"}}},fullWidth:{width:"100%"},focused:{},tag:{margin:3,maxWidth:"calc(100% - 6px)"},tagSizeSmall:{margin:2,maxWidth:"calc(100% - 4px)"},hasPopupIcon:{},hasClearIcon:{},inputRoot:{flexWrap:"wrap","$hasPopupIcon &, $hasClearIcon &":{paddingRight:30},"$hasPopupIcon$hasClearIcon &":{paddingRight:56},"& $input":{width:0,minWidth:30},'&[class*="MuiInput-root"]':{paddingBottom:1,"& $input":{padding:4},"& $input:first-child":{padding:"6px 0"}},'&[class*="MuiInput-root"][class*="MuiInput-marginDense"]':{"& $input":{padding:"4px 4px 5px"},"& $input:first-child":{padding:"3px 0 6px"}},'&[class*="MuiOutlinedInput-root"]':{padding:9,"$hasPopupIcon &, $hasClearIcon &":{paddingRight:39},"$hasPopupIcon$hasClearIcon &":{paddingRight:65},"& $input":{padding:"9.5px 4px"},"& $input:first-child":{paddingLeft:6},"& $endAdornment":{right:9}},'&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]':{padding:6,"& $input":{padding:"4.5px 4px"}},'&[class*="MuiFilledInput-root"]':{paddingTop:19,paddingLeft:8,"$hasPopupIcon &, $hasClearIcon &":{paddingRight:39},"$hasPopupIcon$hasClearIcon &":{paddingRight:65},"& $input":{padding:"9px 4px"},"& $endAdornment":{right:9}},'&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]':{paddingBottom:1,"& $input":{padding:"4.5px 4px"}}},input:{flexGrow:1,textOverflow:"ellipsis",opacity:0},inputFocused:{opacity:1},endAdornment:{position:"absolute",right:0,top:"calc(50% - 14px)"},clearIndicator:{marginRight:-2,padding:4,visibility:"hidden"},clearIndicatorDirty:{},popupIndicator:{padding:2,marginRight:-2},popupIndicatorOpen:{transform:"rotate(180deg)"},popper:{zIndex:e.zIndex.modal},popperDisablePortal:{position:"absolute"},paper:Object(j.a)({},e.typography.body1,{overflow:"hidden",margin:"4px 0"}),listbox:{listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto"},loading:{color:e.palette.text.secondary,padding:"14px 16px"},noOptions:{color:e.palette.text.secondary,padding:"14px 16px"},option:(t={minHeight:48,display:"flex",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16},Object(O.a)(t,e.breakpoints.up("sm"),{minHeight:"auto"}),Object(O.a)(t,'&[aria-selected="true"]',{backgroundColor:e.palette.action.selected}),Object(O.a)(t,'&[data-focus="true"]',{backgroundColor:e.palette.action.hover}),Object(O.a)(t,"&:active",{backgroundColor:e.palette.action.selected}),Object(O.a)(t,'&[aria-disabled="true"]',{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"}),t),groupLabel:{backgroundColor:e.palette.background.paper,top:-8},groupUl:{padding:0,"& $option":{paddingLeft:24}}}}),{name:"MuiAutocomplete"})(Z),ee=n("20a2"),te=n("hlie"),ne=n("r9w1");function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=Object(l.a)({root:{display:"block",width:"100%",height:"100%"}}),ie=function(e){var t=e.countries,n=re(),a=Object(ee.useRouter)(),r=function(e){var t=e.target.textContent;a.push("/".concat(t))},i=function(e){var t=e.target.textContent;a.prefetch("/".concat(t))},l=function(e){var t=e.key,n=e.target.value;"Enter"===t&&a.push("/".concat(n))};return Object(o.jsx)(Q,{id:"country-select",style:{width:"100%",margin:"1em 0"},options:t,autoHighlight:!0,getOptionLabel:function(e){return e},renderOption:function(e){return Object(o.jsx)(te.a,{className:n.root,color:"inherit",value:e,onClick:r,underline:"none",onMouseOver:i,children:e})},renderInput:function(e){return Object(o.jsx)(ne.a,ae(ae({},e),{},{color:"secondary",label:"Choose a country",variant:"outlined",inputProps:ae(ae({},e.inputProps),{},{autoComplete:"new-password"}),onKeyPress:l}))}})},le=n("K/MF"),ce=Object(l.a)({root:{width:"100%"}}),se=function(e){var t=e.data,n=t.confirmed,a=t.deaths,r=t.recovered,i=t.confirmed_daily,l=t.deaths_daily,c=t.recovered_daily,d=[{label:"Confirmed",value:n,bgColor:b.a[700]},{label:"Deaths",value:a,bgColor:m.a[700]},{label:"Recovered",value:r,bgColor:v.a[700]},{label:"New Confirmed",value:i,icon:Object(o.jsx)(g,{}),trimColor:b.a.A400},{label:"New Deaths",value:l,icon:Object(o.jsx)(g,{}),trimColor:h.a.A400},{label:"New Recovered",value:c,icon:Object(o.jsx)(g,{}),trimColor:x.a.A400}];return Object(o.jsx)(s.a,{container:!0,spacing:1,children:d.map((function(e){var t=e.label,n=e.value,a=e.icon,r=e.bgColor,i=e.trimColor;return Object(o.jsx)(de,{label:t,value:n,icon:a,bgColor:r,trimColor:i},t)}))})},de=function(e){var t=e.label,n=e.value,a=e.icon,r=e.bgColor,i=e.trimColor,l=ce();return Object(o.jsx)(s.a,{item:!0,xs:12,sm:6,md:4,children:Object(o.jsx)(d.a,{className:l.root,variant:"outlined",children:Object(o.jsxs)(u.a,{style:r?{backgroundColor:r,color:"white"}:{border:"solid 2px ".concat(i)},children:[Object(o.jsx)(c.a,{component:"h2",variant:"overline",align:"center",children:Object(o.jsx)("b",{children:t})}),Object(o.jsxs)(c.a,{component:"h3",variant:"h4",align:"center",children:[a||" ",Object(o.jsx)("b",{children:n.toLocaleString()})]})]})})})},ue=function(e){var t=e.data,n=e.countries,a=e.date;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(le.a,{countryButton:!0}),Object(o.jsx)("hr",{}),Object(o.jsxs)(c.a,{variant:"h4",component:"h1",children:["Summaries as of ",Object(o.jsx)("b",{children:new Date(a).toJSON().slice(0,10)})," from"," ",Object(o.jsx)("b",{children:n.length})," countries."]}),Object(o.jsx)(ie,{countries:n}),Object(o.jsx)(se,{data:t})]})},pe=!0;function fe(e){var t=e.data,n=e.countries,a=e.date;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(r.a,{children:[Object(o.jsx)("title",{children:"Summary Statistics for COVID-19 Cases"}),Object(o.jsx)("meta",{name:"keywords",content:"covid-19, global, statistics, confirmed, deaths, recovered, population, summary, total"}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(o.jsx)("link",{rel:"canonical",href:"https://c19statistics.vercel.app/"})]}),Object(o.jsx)(i.a,{children:Object(o.jsx)(ue,{data:t,countries:n,date:a})})]})}},YlDu:function(e,t,n){"use strict";t.a={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"}},"oa/T":function(e,t,n){"use strict";var o=n("wx14"),a=n("Ff2n"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),c=r.forwardRef((function(e,t){var n=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,d=Object(a.a)(e,["classes","className","component"]);return r.createElement(s,Object(o.a)({className:Object(i.a)(n.root,l),ref:t},d))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},tRbT:function(e,t,n){"use strict";var o=n("Ff2n"),a=n("wx14"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,d=e.classes,u=e.className,p=e.component,f=void 0===p?"div":p,g=e.container,b=void 0!==g&&g,m=e.direction,v=void 0===m?"row":m,h=e.item,x=void 0!==h&&h,O=e.justify,y=void 0===O?"flex-start":O,j=e.lg,C=void 0!==j&&j,w=e.md,S=void 0!==w&&w,k=e.sm,I=void 0!==k&&k,P=e.spacing,E=void 0===P?0:P,D=e.wrap,N=void 0===D?"wrap":D,T=e.xl,R=void 0!==T&&T,L=e.xs,A=void 0!==L&&L,$=e.zeroMinWidth,z=void 0!==$&&$,M=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(i.a)(d.root,u,b&&[d.container,0!==E&&d["spacing-xs-".concat(String(E))]],x&&d.item,z&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==N&&d["wrap-xs-".concat(String(N))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==l&&d["align-content-xs-".concat(String(l))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(f,Object(a.a)({className:F,ref:t},M))})),p=Object(l.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(o){var a=e.spacing(o);0!==a&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=p},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);