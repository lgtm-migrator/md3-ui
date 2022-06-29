"use strict";(self.webpackChunkmd3_ui=self.webpackChunkmd3_ui||[]).push([[908],{"./packages/button/stories/icon-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_button_stories});var md3_ui_icons_cjs_prod=__webpack_require__("./packages/icons/dist/md3-ui-icons.cjs.prod.js"),md3_ui_system_cjs_prod=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),md3_ui_utils_cjs_prod=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),react=__webpack_require__("./node_modules/react/index.js"),button_base=__webpack_require__("./packages/button/src/button-base.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","edge","size","style","styles"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var IconButtonRoot=(0,md3_ui_system_cjs_prod.styled)(button_base.X,{name:"IconButton",slot:"Root"})((function(_ref){var theme=_ref.theme,ownerState=_ref.ownerState;return _extends({alignItems:"center",justifyContent:"center",marginEnd:"end"===ownerState.edge?-theme.spacing(1.5):void 0,marginStart:"start"===ownerState.edge?-theme.spacing(1.5):void 0},"small"===ownerState.size&&{height:32,width:32},"medium"===ownerState.size&&{height:40,width:40},"large"===ownerState.size&&{height:48,width:48})})),IconButton=react.forwardRef((function(inProps,ref){var _useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"IconButton",props:inProps}),children=_useThemeProps.children,_useThemeProps$edge=_useThemeProps.edge,edge=void 0!==_useThemeProps$edge&&_useThemeProps$edge,_useThemeProps$size=_useThemeProps.size,size=void 0===_useThemeProps$size?"medium":_useThemeProps$size,style=_useThemeProps.style,styles=_useThemeProps.styles,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,_excluded),ownerState={edge,size};return(0,jsx_runtime.jsx)(IconButtonRoot,_extends({ref,style:[style,null==styles?void 0:styles.root],ownerState},props,{children:react.cloneElement(children,{height:24,width:24})}))}));md3_ui_utils_cjs_prod.__DEV__&&(IconButton.displayName="IconButton");try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{children:{defaultValue:null,description:"The icon to display.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},edge:{defaultValue:null,description:"If given, uses a negative margin to counteract the padding on one side\n(this is often helpful for aligning the left or right side of the icon with\ncontent above or below, without ruining the border size and shape).",name:"edge",required:!1,type:{name:'false | "start" | "end"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the component. `small` is equivalent to the dense button\nstyling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: ViewStyle; }"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered. They won't start at the cursor\ninteraction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.",name:"disableRipple",required:!1,type:{name:"boolean"}},focusColor:{defaultValue:null,description:"@ignore",name:"focusColor",required:!1,type:{name:"string"}},focusOpacity:{defaultValue:null,description:"@ignore",name:"focusOpacity",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"@ignore",name:"hoverColor",required:!1,type:{name:"string"}},hoverOpacity:{defaultValue:null,description:"@ignore",name:"hoverOpacity",required:!1,type:{name:"number"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard. We also\ntrigger an `onFocus` callback.",name:"onFocusVisible",required:!1,type:{name:"((event: NativeSyntheticEvent<TargetedEvent>) => void)"}},pressedColor:{defaultValue:null,description:"@ignore",name:"pressedColor",required:!1,type:{name:"string"}},pressedOpacity:{defaultValue:null,description:"@ignore",name:"pressedOpacity",required:!1,type:{name:"number"}},rippleColor:{defaultValue:null,description:"@ignore",name:"rippleColor",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"@ignore",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/button/src/icon-button.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"packages/button/src/icon-button.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}function icon_button_stories_extends(){return icon_button_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},icon_button_stories_extends.apply(this,arguments)}const icon_button_stories={title:"Components/Buttons/Icon buttons",component:IconButton,subcomponents:{ButtonBase:button_base.X}};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(IconButton,icon_button_stories_extends({},args,{children:(0,jsx_runtime.jsx)(md3_ui_icons_cjs_prod.v2,{})}))};Basic.displayName="Basic",Basic.parameters=icon_button_stories_extends({storySource:{source:"(args) => (\n  <IconButton {...args}>\n    <Menu />\n  </IconButton>\n)"}},Basic.parameters);var __namedExportsOrder=["Basic"]},"./packages/button/src/button-base.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ButtonBase});var _md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/hooks/dist/md3-ui-hooks.cjs.prod.js"),_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),_md3_ui_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_native__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js"),react_native__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"),react_native__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["centerRipple","children","disabled","disableRipple","focusColor","focusOpacity","hoverColor","hoverOpacity","href","onBlur","onFocus","onFocusVisible","onKeyDown","onKeyUp","onPress","pressedColor","pressedOpacity","rippleColor","style","styles"],_excluded2=["backgroundColor"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ButtonBaseRoot=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(react_native__WEBPACK_IMPORTED_MODULE_3__.Z,{name:"ButtonBase",slot:"Root"})((function(_ref){var ownerState=_ref.ownerState;return"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&{cursor:ownerState.disabled?"default":"pointer",outlineWidth:0,transition:"box-shadow 200ms linear",userSelect:"none"}})),ButtonBaseContainer=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(react_native__WEBPACK_IMPORTED_MODULE_5__.Z,{name:"ButtonBase",slot:"Container",skipSx:!0})({backgroundColor:"rgba(255, 255, 255, 0)",overflow:"hidden"}),ButtonBaseHover=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)("span",{name:"ButtonBase",slot:"Hover",skipSx:!0})((function(_ref2){return{borderRadius:"inherit",bottom:0,left:0,position:"absolute",right:0,top:0,transition:_ref2.theme.utils.transition(["background-color","opacity"],"200ms linear"),zIndex:-1}})),ButtonBaseRippleContainer=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)("span",{name:"ButtonBase",slot:"RippleContainer",skipSx:!0})({borderRadius:"inherit",bottom:0,left:0,overflow:"hidden",position:"absolute",right:0,top:0,zIndex:0}),ButtonBaseRipple=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)("span",{name:"ButtonBase",slot:"Ripple",skipSx:!0})((function(_ref3){var ownerState=_ref3.ownerState;return{animationDuration:"550ms",animationKeyframes:{"0%":{opacity:1,transform:[{scale:0}]},"100%":{opacity:0,transform:[{scale:1}]}},animationTimingFunction:"ease-in",backgroundColor:_ref3.theme.utils.rgba(ownerState.pressedColor,ownerState.pressedOpacity-ownerState.hoverOpacity),borderRadius:999,pointerEvents:"none",position:"absolute",zIndex:-1}})),ButtonBase=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(inProps,ref){var _ref4,_ref5,_ref6,_useThemeProps=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.useThemeProps)({name:"ButtonBase",props:inProps}),_useThemeProps$center=_useThemeProps.centerRipple,centerRipple=void 0!==_useThemeProps$center&&_useThemeProps$center,_children=_useThemeProps.children,_useThemeProps$disabl=_useThemeProps.disabled,disabled=void 0!==_useThemeProps$disabl&&_useThemeProps$disabl,_useThemeProps$disabl2=_useThemeProps.disableRipple,disableRipple=void 0!==_useThemeProps$disabl2&&_useThemeProps$disabl2,focusColorProp=_useThemeProps.focusColor,_useThemeProps$focusO=_useThemeProps.focusOpacity,focusOpacity=void 0===_useThemeProps$focusO?.12:_useThemeProps$focusO,hoverColorProp=_useThemeProps.hoverColor,_useThemeProps$hoverO=_useThemeProps.hoverOpacity,hoverOpacity=void 0===_useThemeProps$hoverO?.08:_useThemeProps$hoverO,href=_useThemeProps.href,onBlur=_useThemeProps.onBlur,onFocus=_useThemeProps.onFocus,onFocusVisible=_useThemeProps.onFocusVisible,onKeyDown=_useThemeProps.onKeyDown,onKeyUp=_useThemeProps.onKeyUp,onPress=_useThemeProps.onPress,pressedColorProp=_useThemeProps.pressedColor,_useThemeProps$presse=_useThemeProps.pressedOpacity,pressedOpacity=void 0===_useThemeProps$presse?.12:_useThemeProps$presse,rippleColor=_useThemeProps.rippleColor,_style=_useThemeProps.style,styles=_useThemeProps.styles,props=_objectWithoutPropertiesLoose(_useThemeProps,_excluded),theme=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.useTheme)(),rootRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),handleRef=(0,_md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useForkRef)(rootRef,ref),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),focusVisible=_React$useState[0],setFocusVisible=_React$useState[1];disabled&&focusVisible&&setFocusVisible(!1);var _React$useState2=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),ripples=_React$useState2[0],setRipples=_React$useState2[1],_splitProps$=(0,_md3_ui_utils__WEBPACK_IMPORTED_MODULE_7__.splitProps)(_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(_style),["backgroundColor","borderRadius","bottom","flexBasis","flexGrow","flexShrink","height","left","margin","marginBottom","marginEnd","marginHorizontal","marginLeft","marginRight","marginStart","marginTop","marginVertical","position","right","top","width"])[0],_splitProps$$backgrou=(_splitProps$=void 0===_splitProps$?{}:_splitProps$).backgroundColor,backgroundColor=void 0===_splitProps$$backgrou?null:_splitProps$$backgrou,containerStyle=_objectWithoutPropertiesLoose(_splitProps$,_excluded2),hoverColor=null!=(_ref4=null!=rippleColor?rippleColor:hoverColorProp)?_ref4:theme.color.background,focusColor=null!=(_ref5=null!=rippleColor?rippleColor:focusColorProp)?_ref5:hoverColor,pressedColor=null!=(_ref6=null!=rippleColor?rippleColor:pressedColorProp)?_ref6:theme.color.background,underlayColor=null==backgroundColor?theme.utils.rgba(pressedColor,pressedOpacity):theme.utils.mix(pressedOpacity,pressedColor,backgroundColor.toString()),removeRipple=function removeRipple(rippleID){return function(){setRipples((function(prevRipples){return prevRipples.filter((function(r){return r.id!==rippleID}))}))}},appendRipple=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(event){var _event,_event2;void 0===event&&(event={});var currentRef=rootRef.current;if(!disabled&&!disableRipple&&null!=currentRef){var rippleX,rippleY,rippleSize,_currentRef$getBoundi=currentRef.getBoundingClientRect(),width=_currentRef$getBoundi.width,height=_currentRef$getBoundi.height,left=_currentRef$getBoundi.left,top=_currentRef$getBoundi.top;if(centerRipple||!("clientX"in event)&&!("touches"in event)||"clientX"in event&&0===(null==(_event=event)?void 0:_event.clientX)&&0===(null==(_event2=event)?void 0:_event2.clientY))rippleX=Math.round(width/2),rippleY=Math.round(height/2);else{var _ref7="touches"in event?event.touches[0]:event,clientX=_ref7.clientX,clientY=_ref7.clientY;rippleX=Math.round(clientX-left),rippleY=Math.round(clientY-top)}if(centerRipple)rippleSize=Math.sqrt((2*Math.pow(width,2)+Math.pow(height,2))/3);else{var sizeX=2*Math.max(Math.abs(currentRef.clientWidth-rippleX),rippleX)+2,sizeY=2*Math.max(Math.abs(currentRef.clientHeight-rippleY),rippleY)+2;rippleSize=Math.sqrt(Math.pow(sizeX,2)+Math.pow(sizeY,2))}var rippleID=0===ripples.length?1:ripples[ripples.length-1].id+1,ripple=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonBaseRipple,{ownerState:{hoverOpacity,pressedColor,pressedOpacity},style:{height:rippleSize,left:-rippleSize/2+rippleX,top:-rippleSize/2+rippleY,width:rippleSize},onAnimationEnd:removeRipple(rippleID)},rippleID);setRipples((function(prevRipples){return[].concat(prevRipples,[{id:rippleID,ripple}])}))}}),[rootRef,disabled,disableRipple,centerRipple,ripples,pressedColor,pressedOpacity,hoverOpacity]),handleBlur=(0,_md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useEventCallback)((function(event){setFocusVisible(!1),null==onBlur||onBlur(event)})),handleFocus=(0,_md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useEventCallback)((function(event){null==rootRef.current&&(rootRef.current=event.currentTarget),("web"!==react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS||event.target.matches(":focus-visible"))&&(setFocusVisible(!0),null==onFocusVisible||onFocusVisible(event)),null==onFocus||onFocus(event)})),isNonNativeButton=function isNonNativeButton(){var buttonEl=rootRef.current;return"BUTTON"!==(null==buttonEl?void 0:buttonEl.tagName)&&!("A"===(null==buttonEl?void 0:buttonEl.tagName)&&buttonEl.href)},handleKeyDown=(0,_md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useEventCallback)((function(event){"Enter"!==event.key&&" "!==event.key||appendRipple(),event.target===event.currentTarget&&isNonNativeButton()&&" "===event.key&&event.preventDefault(),null==onKeyDown||onKeyDown(event),event.target===event.currentTarget&&isNonNativeButton()&&"Enter"===event.key&&!disabled&&(event.preventDefault(),null==onPress||onPress(event))})),handleKeyUp=(0,_md3_ui_hooks__WEBPACK_IMPORTED_MODULE_6__.useEventCallback)((function(event){null==onKeyUp||onKeyUp(event),event.target===event.currentTarget&&isNonNativeButton()&&" "===event.key&&!event.defaultPrevented&&(null==onPress||onPress(event))}));react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){var currentRef=rootRef.current;return"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&null!=currentRef?(currentRef.addEventListener("mousedown",appendRipple),currentRef.addEventListener("touchstart",appendRipple),function(){currentRef.removeEventListener("mousedown",appendRipple),currentRef.removeEventListener("touchend",appendRipple)}):function(){}}),[appendRipple,handleKeyDown,rootRef]);var ownerState={disabled},button=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonBaseRoot,_extends({ref:handleRef,accessibilityRole:href?void 0:"button",accessibilityState:{disabled:disabled||void 0},android_ripple:disableRipple?{}:{borderless:!0,color:theme.utils.rgba(pressedColor,pressedOpacity)},disabled,href,ownerState,pointerEvents:disabled?"none":void 0},"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&{style:[_style,null==styles?void 0:styles.root]},"android"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&{style:[_style,null==styles?void 0:styles.root,{bottom:0,left:0,marginBottom:0,marginEnd:0,marginLeft:0,marginRight:0,marginStart:0,marginTop:0,position:"relative",right:0,top:0}]},"ios"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&{style:function style(_ref8){var pressed=_ref8.pressed;return[_style,null==styles?void 0:styles.root,pressed&&!disableRipple&&{backgroundColor:underlayColor}]}},{onBlur:handleBlur,onFocus:handleFocus,onKeyDown:handleKeyDown,onKeyUp:handleKeyUp,onPress,onPressOut:function handlePressOut(){setFocusVisible(!1)}},props,{children:function children(_ref9){var hovered=_ref9.hovered,focused=_ref9.focused;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[react__WEBPACK_IMPORTED_MODULE_0__.Children.only(_children),"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonBaseHover,{style:{backgroundColor:focused&&focusVisible?focusColor:hoverColor,opacity:focused&&focusVisible?focusOpacity:hovered?hoverOpacity:0}}),"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&!disableRipple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonBaseRippleContainer,{children:ripples.map((function(_ref10){return _ref10.ripple}))})]})}}));return"android"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonBaseContainer,{style:[containerStyle,null==styles?void 0:styles.container],children:button}):button}));_md3_ui_utils__WEBPACK_IMPORTED_MODULE_7__.__DEV__&&(ButtonBase.displayName="ButtonBase");try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered. They won't start at the cursor\ninteraction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.",name:"disableRipple",required:!1,type:{name:"boolean"}},focusColor:{defaultValue:null,description:"@ignore",name:"focusColor",required:!1,type:{name:"string"}},focusOpacity:{defaultValue:null,description:"@ignore",name:"focusOpacity",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"@ignore",name:"hoverColor",required:!1,type:{name:"string"}},hoverOpacity:{defaultValue:null,description:"@ignore",name:"hoverOpacity",required:!1,type:{name:"number"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard. We also\ntrigger an `onFocus` callback.",name:"onFocusVisible",required:!1,type:{name:"((event: NativeSyntheticEvent<TargetedEvent>) => void)"}},pressedColor:{defaultValue:null,description:"@ignore",name:"pressedColor",required:!1,type:{name:"string"}},pressedOpacity:{defaultValue:null,description:"@ignore",name:"pressedOpacity",required:!1,type:{name:"number"}},rippleColor:{defaultValue:null,description:"@ignore",name:"rippleColor",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"@ignore",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: ViewStyle; container?: ViewStyle; } | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/button/src/button-base.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"packages/button/src/button-base.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icons/dist/md3-ui-icons.cjs.prod.js":(__unused_webpack_module,exports,__webpack_require__)=>{var icon=__webpack_require__("./packages/icon/dist/md3-ui-icon.cjs.js"),React$1=__webpack_require__("./node_modules/react/index.js"),reactNativeSvg=__webpack_require__("./node_modules/react-native-svg/lib/module/index.js");function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(k){if("default"!==k){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function get(){return e[k]}})}})),n.default=e,Object.freeze(n)}var React__namespace=_interopNamespace(React$1),Add=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),displayName:"Add"}),Attachment=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 0 1 0-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),displayName:"Attachment"}),CalendarToday=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),displayName:"CalendarToday"}),Cancel=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),displayName:"Cancel"}),ChangeHistory=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"}),displayName:"ChangeHistory"}),Check=icon.createIcon({path:React.createElement(reactNativeSvg.Path,{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),displayName:"Check"}),Circle=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),displayName:"Circle"}),Github=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),displayName:"Github"}),Mail=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),displayName:"Mail"}),Menu=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),displayName:"Menu"}),MenuOpen=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"}),displayName:"MenuOpen"}),MoreVert=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),displayName:"MoreVert"}),Nightlight=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"}),displayName:"Nightlight"}),Person=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),displayName:"Person"});exports.mm=Add,exports.Pg=Attachment,exports.Me=CalendarToday,exports.$j=Cancel,exports.Pu=ChangeHistory,exports.Jr=Check,exports.Cd=Circle,exports.Mh=Mail,exports.v2=Menu,exports.v7=MoreVert,exports.Fc=Person}}]);