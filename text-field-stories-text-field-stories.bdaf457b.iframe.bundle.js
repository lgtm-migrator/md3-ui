"use strict";(self.webpackChunkmd3_ui=self.webpackChunkmd3_ui||[]).push([[149],{"./packages/text-field/stories/text-field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,EndIcon:()=>EndIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_field_stories});var md3_ui_button_cjs_prod=__webpack_require__("./packages/button/dist/md3-ui-button.cjs.prod.js"),md3_ui_icons_cjs_prod=__webpack_require__("./packages/icons/dist/md3-ui-icons.cjs.prod.js"),md3_ui_hooks_cjs_prod=__webpack_require__("./packages/hooks/dist/md3-ui-hooks.cjs.prod.js"),md3_ui_system_cjs_prod=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),md3_ui_utils_cjs_prod=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),react=__webpack_require__("./node_modules/react/index.js"),View=__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"),Text=__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js"),Easing=__webpack_require__("./node_modules/react-native-web/dist/exports/Easing/index.js"),TextInput=__webpack_require__("./node_modules/react-native-web/dist/exports/TextInput/index.js"),Platform=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js");function hasValue(value){return null!=value&&!(Array.isArray(value)&&0===value.length)}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["defaultValue","endIcon","error","fullWidth","multiline","name","onChangeText","onEmpty","onFilled","startIcon","style","styles","value"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var TextInputRoot=(0,md3_ui_system_cjs_prod.styled)(TextInput.Z,{name:"TextInput",slot:"Root"})({display:"flex",minWidth:0,width:"100%","&::placeholder":{transition:"opacity 200ms cubic-bezier(0, 0, 0.2, 1)"},"&:focus-visible":{outlineStyle:"none"},"&:enabled":{animationDuration:"10ms",animationName:"md3-auto-fill-cancel"},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"md3-auto-fill"}}),TextInputContainer=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"TextInput",slot:"Container",skipSx:!0})((function(_ref){return _extends({alignItems:"center",flexDirection:"row"},_ref.ownerState.fullWidth&&{width:"100%"})})),text_input_TextInput=react.forwardRef((function(inProps,ref){var _useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"TextInput",props:inProps}),defaultValue=_useThemeProps.defaultValue,endIcon=_useThemeProps.endIcon,_useThemeProps$error=_useThemeProps.error,error=void 0!==_useThemeProps$error&&_useThemeProps$error,_useThemeProps$fullWi=_useThemeProps.fullWidth,fullWidth=void 0!==_useThemeProps$fullWi&&_useThemeProps$fullWi,_useThemeProps$multil=_useThemeProps.multiline,multiline=void 0!==_useThemeProps$multil&&_useThemeProps$multil,name=_useThemeProps.name,onChangeText=_useThemeProps.onChangeText,onEmpty=_useThemeProps.onEmpty,onFilled=_useThemeProps.onFilled,startIcon=_useThemeProps.startIcon,style=_useThemeProps.style,styles=_useThemeProps.styles,valueProp=_useThemeProps.value,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,_excluded),rootRef=react.useRef(null),handleRef=(0,md3_ui_hooks_cjs_prod.useForkRef)(rootRef,ref),controlled=react.useRef(null!=valueProp).current,_useControlled=(0,md3_ui_hooks_cjs_prod.useControlled)({controlled:valueProp,default:defaultValue,name:"TextInput"}),value=_useControlled[0],setValue=_useControlled[1];react.useEffect((function(){var _rootRef$current;"web"===Platform.Z.OS&&null!=name&&(null==(_rootRef$current=rootRef.current)||_rootRef$current.setNativeProps({name}))}),[name]);var checkDirty=react.useCallback((function(checkProps){!function isFilled(props,ssr){return void 0===props&&(props={}),void 0===ssr&&(ssr=!1),hasValue(props.value)&&""!==props.value||ssr&&hasValue(props.defaultValue)&&""!==props.defaultValue}(checkProps)?null==onEmpty||onEmpty():null==onFilled||onFilled()}),[onFilled,onEmpty]);(0,md3_ui_hooks_cjs_prod.useEnhancedEffect)((function(){controlled&&checkDirty({value})}),[checkDirty,controlled,value]);react.useEffect((function(){checkDirty({defaultValue,value})}),[]);var ownerState={fullWidth};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(md3_ui_system_cjs_prod.Global,{styles:{"@keyframes md3-auto-fill":{from:{display:"flex"}},"@keyframes md3-auto-fill-cancel":{from:{display:"flex"}}}}),(0,jsx_runtime.jsxs)(TextInputContainer,{ownerState,style:null==styles?void 0:styles.container,children:[startIcon,(0,jsx_runtime.jsx)(TextInputRoot,_extends({ref:handleRef,accessibilityInvalid:error,multiline,style:[style,null==styles?void 0:styles.root],value,onAnimationStart:function handleAutoFill(event){checkDirty("md3-auto-fill-cancel"===event.animationName?{defaultValue,value}:{value:"x"})},onChangeText:function handleChangeText(text){controlled||checkDirty({value:text}),null==onChangeText||onChangeText(text),setValue(text)}},props)),endIcon]})]})}));md3_ui_utils_cjs_prod.__DEV__&&(text_input_TextInput.displayName="TextInput");try{text_input_TextInput.displayName="TextInput",text_input_TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{endIcon:{defaultValue:null,description:"End `TextInputIcon` for this component.",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"false"},description:"If `true`, the input will indicate an error.",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the `input` will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},onEmpty:{defaultValue:null,description:"",name:"onEmpty",required:!1,type:{name:"(() => void)"}},onFilled:{defaultValue:null,description:"",name:"onFilled",required:!1,type:{name:"(() => void)"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Start `TextInputIcon` for this component.",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ container?: ViewStyle; root?: TextStyle; } | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text-field/src/text-input.tsx#TextInput"]={docgenInfo:text_input_TextInput.__docgenInfo,name:"TextInput",path:"packages/text-field/src/text-input.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}var Animated=__webpack_require__("./node_modules/react-native-web/dist/exports/Animated/index.js"),text_input_label_excluded=["htmlFor","shrink","style","styles"];function text_input_label_extends(){return text_input_label_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},text_input_label_extends.apply(this,arguments)}var TextInputLabelRoot=(0,md3_ui_system_cjs_prod.styled)(Animated.Z.Text,{name:"TextInputLabel",slot:"Root"})({maxWidth:"100%"}),TextInputLabelContainer=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"TextInputLabel",slot:"Container",skipSx:!0})({bottom:0,left:0,position:"absolute",right:0,top:0}),TextInputLabel=react.forwardRef((function(inProps,ref){var _useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"TextInputLabel",props:inProps}),htmlFor=_useThemeProps.htmlFor,_useThemeProps$shrink=_useThemeProps.shrink,shrink=void 0!==_useThemeProps$shrink&&_useThemeProps$shrink,style=_useThemeProps.style,styles=_useThemeProps.styles,props=function text_input_label_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,text_input_label_excluded),rootRef=react.useRef(null),handleRef=(0,md3_ui_hooks_cjs_prod.useForkRef)(rootRef,ref);react.useEffect((function(){var _rootRef$current;"web"===Platform.Z.OS&&null!=htmlFor&&(null==(_rootRef$current=rootRef.current)||_rootRef$current.setNativeProps({for:htmlFor}))}),[htmlFor]);var children=(0,jsx_runtime.jsx)(TextInputLabelRoot,text_input_label_extends({ref:handleRef,accessibilityRole:"web"===Platform.Z.OS?"label":"none",numberOfLines:1,style:[style,null==styles?void 0:styles.root]},props));return"web"===Platform.Z.OS?children:(0,jsx_runtime.jsx)(TextInputLabelContainer,{pointerEvents:shrink?"auto":"none",children})}));md3_ui_utils_cjs_prod.__DEV__&&(TextInputLabel.displayName="TextInputLabel");try{TextInputLabel.displayName="TextInputLabel",TextInputLabel.__docgenInfo={description:"",displayName:"TextInputLabel",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},shrink:{defaultValue:{value:"false"},description:"If `true`, the label is shrunk.",name:"shrink",required:!1,type:{name:"boolean"}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: TextStyle; }"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text-field/src/text-input-label.tsx#TextInputLabel"]={docgenInfo:TextInputLabel.__docgenInfo,name:"TextInputLabel",path:"packages/text-field/src/text-input-label.tsx#TextInputLabel"})}catch(__react_docgen_typescript_loader_error){}var text_field_excluded=["children","endIcon","error","fullWidth","helperText","label","nativeID","onBlur","onEmpty","onFilled","onFocus","startIcon","style","styles","variant"];function text_field_extends(){return text_field_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},text_field_extends.apply(this,arguments)}var TextFieldRoot=(0,md3_ui_system_cjs_prod.styled)(text_input_TextInput,{name:"TextField",slot:"Root"})((function(_ref){var theme=_ref.theme,ownerState=_ref.ownerState;return text_field_extends({},theme.typescale["body-large"],{color:theme.color["on-surface"],padding:theme.spacing(2),minHeight:56,"&:-webkit-autofill":{borderRadius:4}},ownerState.startIcon&&{paddingStart:0},ownerState.endIcon&&{paddingEnd:0})})),TextFieldContainer=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"TextField",slot:"Container",skipSx:!0})((function(_ref2){var theme=_ref2.theme,ownerState=_ref2.ownerState;return text_field_extends({},ownerState.fullWidth&&{width:"100%"},ownerState.startIcon&&{paddingStart:theme.spacing(2.5)},ownerState.endIcon&&{paddingEnd:theme.spacing(2.5)})})),TextFieldOutline=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"TextField",slot:"Outline",skipSx:!0})((function(_ref3){var theme=_ref3.theme,ownerState=_ref3.ownerState;return text_field_extends({borderColor:theme.color.outline,borderRadius:4,borderWidth:1,bottom:0,left:0,position:"absolute",right:0,top:0,zIndex:1,"&:hover":{borderColor:theme.color["on-surface"]}},ownerState.focused&&{borderColor:theme.color.primary,borderWidth:2},ownerState.error&&{borderColor:theme.color.error})})),TextFieldLabel=(0,md3_ui_system_cjs_prod.styled)(TextInputLabel,{name:"TextField",slot:"Label",skipSx:!0})((function(_ref4){var theme=_ref4.theme;return text_field_extends({},theme.typescale["body-large"],{backgroundColor:theme.color.surface,color:theme.color["on-surface"],left:0,paddingHorizontal:theme.spacing(.5)/.75,position:"absolute",top:0,zIndex:2})})),TextFieldHelperText=(0,md3_ui_system_cjs_prod.styled)(Text.Z,{name:"TextField",slot:"HelperText",skipSx:!0})((function(_ref5){var theme=_ref5.theme;return text_field_extends({},theme.typescale["body-large"],{color:theme.color["on-surface"]})})),TextField=react.forwardRef((function(inProps,ref){var _useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"TextField",props:inProps}),endIcon=(_useThemeProps.children,_useThemeProps.endIcon),_useThemeProps$error=_useThemeProps.error,error=void 0!==_useThemeProps$error&&_useThemeProps$error,_useThemeProps$fullWi=_useThemeProps.fullWidth,fullWidth=void 0!==_useThemeProps$fullWi&&_useThemeProps$fullWi,helperText=_useThemeProps.helperText,label=_useThemeProps.label,nativeID=_useThemeProps.nativeID,onBlur=_useThemeProps.onBlur,onFilled=(_useThemeProps.onEmpty,_useThemeProps.onFilled),onFocus=_useThemeProps.onFocus,startIcon=_useThemeProps.startIcon,style=_useThemeProps.style,styles=_useThemeProps.styles,_useThemeProps$varian=_useThemeProps.variant,variant=void 0===_useThemeProps$varian?"outlined":_useThemeProps$varian,props=function text_field_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,text_field_excluded),theme=(0,md3_ui_system_cjs_prod.useTheme)(),rootRef=react.useRef(null),handleRef=(0,md3_ui_hooks_cjs_prod.useForkRef)(rootRef,ref),_useBoolean=(0,md3_ui_hooks_cjs_prod.useBoolean)(),filled=_useBoolean[0],handleFilled=_useBoolean[1],_useBoolean2=(0,md3_ui_hooks_cjs_prod.useBoolean)(),focused=_useBoolean2[0],handleFocus=_useBoolean2[1],shrink=filled||focused,transform=(0,md3_ui_hooks_cjs_prod.useAnimate)({duration:200,easing:Easing.Z.bezier(0,0,.2,1),shouldReset:!1,toValue:shrink?1:0})[0],ownerState={endIcon,error,filled,focused,fullWidth,startIcon,variant},helperTextID=null!=helperText&&null!=nativeID?nativeID+"-helper-text":void 0,labelID=null!=label&&null!=nativeID?nativeID+"-label":void 0;return(0,jsx_runtime.jsxs)(TextFieldContainer,{ownerState,style:null==styles?void 0:styles.container,children:[null!=label&&""!==label&&(0,jsx_runtime.jsx)(TextFieldLabel,{htmlFor:nativeID,nativeID:labelID,shrink,style:[{color:error?theme.color.error:transform.interpolate({inputRange:[0,1],outputRange:[theme.color["on-surface"],theme.color.primary]}),transform:[{scale:transform.interpolate({inputRange:[0,1],outputRange:[1,.75]})},{translateX:transform.interpolate({inputRange:[0,1],outputRange:[theme.spacing(2)-theme.spacing(.5)/.75,theme.spacing(2)-theme.spacing(.5)]})},{translateY:transform.interpolate({inputRange:[0,1],outputRange:[theme.spacing(2),-14]})}]},null==styles?void 0:styles.label],children:label}),(0,jsx_runtime.jsx)(TextFieldOutline,{ownerState,pointerEvents:"none",style:null==styles?void 0:styles.outline}),(0,jsx_runtime.jsx)(TextFieldRoot,text_field_extends({ref:handleRef,accessibilityDescribedBy:helperTextID,endIcon,error,fullWidth,nativeID,ownerState,placeholderTextColor:theme.color["on-surface-variant"],startIcon,style:[style,null==styles?void 0:styles.root],onBlur:(0,md3_ui_utils_cjs_prod.createChainedFunction)(onBlur,handleFocus.off),onEmpty:(0,md3_ui_utils_cjs_prod.createChainedFunction)(onFilled,handleFilled.off),onFilled:(0,md3_ui_utils_cjs_prod.createChainedFunction)(onFilled,handleFilled.on),onFocus:(0,md3_ui_utils_cjs_prod.createChainedFunction)(onFocus,handleFocus.on)},props)),helperText&&(0,jsx_runtime.jsx)(TextFieldHelperText,{nativeID:helperTextID,children:helperText})]})}));md3_ui_utils_cjs_prod.__DEV__&&(TextField.displayName="TextField");try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"string"}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ container?: ViewStyle; label?: TextStyle; outline?: ViewStyle | undefined; root?: TextStyle | undefined; } | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}},variant:{defaultValue:{value:'"outlined"'},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},endIcon:{defaultValue:null,description:"End `TextInputIcon` for this component.",name:"endIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"false"},description:"If `true`, the input will indicate an error.",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the `input` will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},onEmpty:{defaultValue:null,description:"",name:"onEmpty",required:!1,type:{name:"(() => void)"}},onFilled:{defaultValue:null,description:"",name:"onFilled",required:!1,type:{name:"(() => void)"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"Start `TextInputIcon` for this component.",name:"startIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text-field/src/text-field.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/text-field/src/text-field.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}var text_input_icon_excluded=["children","position","style","styles"];function text_input_icon_extends(){return text_input_icon_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},text_input_icon_extends.apply(this,arguments)}var TextInputIconRoot=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"TextInputIcon",slot:"Root"})((function(_ref){var theme=_ref.theme,ownerState=_ref.ownerState;return text_input_icon_extends({},"start"===ownerState.position&&{marginEnd:theme.spacing(1)},"end"===ownerState.position&&{marginStart:theme.spacing(1)})})),TextInputIcon=react.forwardRef((function(inProps,ref){var _useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"TextInputIcon",props:inProps}),children=_useThemeProps.children,position=_useThemeProps.position,style=_useThemeProps.style,styles=_useThemeProps.styles,props=function text_input_icon_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,text_input_icon_excluded),ownerState={position};return(0,jsx_runtime.jsx)(TextInputIconRoot,text_input_icon_extends({ref,ownerState,style:[style,null==styles?void 0:styles.root]},props,{children:"string"==typeof children?(0,jsx_runtime.jsx)(Text.Z,{children}):children}))}));md3_ui_utils_cjs_prod.__DEV__&&(TextInputIcon.displayName="TextInputIcon");try{TextInputIcon.displayName="TextInputIcon",TextInputIcon.__docgenInfo={description:"",displayName:"TextInputIcon",props:{as:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"as",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component, normally an `IconButton` or string.",name:"children",required:!1,type:{name:"ReactNode"}},position:{defaultValue:null,description:"The position this adornment should appear relative to the `TextInput`.",name:"position",required:!0,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: ViewStyle; }"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/text-field/src/text-input-icon.tsx#TextInputIcon"]={docgenInfo:TextInputIcon.__docgenInfo,name:"TextInputIcon",path:"packages/text-field/src/text-input-icon.tsx#TextInputIcon"})}catch(__react_docgen_typescript_loader_error){}function text_field_stories_extends(){return text_field_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},text_field_stories_extends.apply(this,arguments)}const text_field_stories={title:"Components/Text field",component:TextField};var Basic=function Basic(args){return(0,jsx_runtime.jsx)(TextField,text_field_stories_extends({},args))};Basic.displayName="Basic",Basic.args={label:"Label",name:"name",nativeID:"outlined-basic",placeholder:"Placeholder",variant:"outlined"};var EndIcon=function EndIcon(args){return(0,jsx_runtime.jsx)(TextField,text_field_stories_extends({},args))};EndIcon.displayName="EndIcon",EndIcon.args={label:"Label",name:"name",placeholder:"Placeholder",endIcon:(0,jsx_runtime.jsx)(TextInputIcon,{position:"end",children:(0,jsx_runtime.jsx)(md3_ui_button_cjs_prod.IconButton,{edge:"end",children:(0,jsx_runtime.jsx)(md3_ui_icons_cjs_prod.$j,{})})}),variant:"outlined"},Basic.parameters=text_field_stories_extends({storySource:{source:"(args) => <TextField {...args} />"}},Basic.parameters),EndIcon.parameters=text_field_stories_extends({storySource:{source:"(args) => <TextField {...args} />"}},EndIcon.parameters);var __namedExportsOrder=["Basic","EndIcon"]},"./packages/icons/dist/md3-ui-icons.cjs.prod.js":(__unused_webpack_module,exports,__webpack_require__)=>{var icon=__webpack_require__("./packages/icon/dist/md3-ui-icon.cjs.js"),React$1=__webpack_require__("./node_modules/react/index.js"),reactNativeSvg=__webpack_require__("./node_modules/react-native-svg/lib/module/index.js");function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(k){if("default"!==k){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function get(){return e[k]}})}})),n.default=e,Object.freeze(n)}var React__namespace=_interopNamespace(React$1),Add=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),displayName:"Add"}),Attachment=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5a2.5 2.5 0 0 1 0-5H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),displayName:"Attachment"}),CalendarToday=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),displayName:"CalendarToday"}),Cancel=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),displayName:"Cancel"}),ChangeHistory=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"}),displayName:"ChangeHistory"}),Check=icon.createIcon({path:React.createElement(reactNativeSvg.Path,{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),displayName:"Check"}),Circle=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),displayName:"Circle"}),Github=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),displayName:"Github"}),Mail=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),displayName:"Mail"}),Menu=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),displayName:"Menu"}),MenuOpen=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"}),displayName:"MenuOpen"}),MoreVert=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),displayName:"MoreVert"}),Nightlight=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.973 9.973 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"}),displayName:"Nightlight"}),Person=icon.createIcon({path:React__namespace.createElement(reactNativeSvg.Path,{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),displayName:"Person"});exports.mm=Add,exports.Pg=Attachment,exports.Me=CalendarToday,exports.$j=Cancel,exports.Pu=ChangeHistory,exports.Jr=Check,exports.Cd=Circle,exports.Mh=Mail,exports.v2=Menu,exports.v7=MoreVert,exports.Fc=Person}}]);