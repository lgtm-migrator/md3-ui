"use strict";(self.webpackChunkmd3_ui=self.webpackChunkmd3_ui||[]).push([[807],{"./packages/layout/stories/grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoLayout:()=>AutoLayout,Basic:()=>Basic,Columns:()=>Columns,MultipleBreakpoints:()=>MultipleBreakpoints,NestedGrid:()=>NestedGrid,ResponsiveValues:()=>ResponsiveValues,RowColumnSpacing:()=>RowColumnSpacing,Spacing:()=>Spacing,VariableWidthContent:()=>VariableWidthContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grid_stories});var md3_ui_system_cjs_prod=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),md3_ui_utils_cjs_prod=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),react=__webpack_require__("./node_modules/react/index.js"),View=__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","columns","columnSpacing","container","direction","item","rowSpacing","spacing","span","style","styles","wrap"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function generateGrid(_ref){var span,theme=_ref.theme,ownerState=_ref.ownerState,spanValues=(0,md3_ui_system_cjs_prod.resolveBreakpointValues)({values:ownerState.span,breakpoints:theme.breakpoints.values});return theme.breakpoints.keys.reduce((function(finalStyles,breakpoint){var styles={};if("object"==typeof spanValues?spanValues[breakpoint]&&(span=spanValues[breakpoint]):null!=spanValues&&(span=spanValues),!span)return finalStyles;if(!0===span)styles={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===span)styles={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var columnsValues=(0,md3_ui_system_cjs_prod.resolveBreakpointValues)({values:ownerState.columns,breakpoints:theme.breakpoints.values}),columns="object"==typeof columnsValues?columnsValues[breakpoint]:columnsValues;if(null==columns)return finalStyles;var width=Math.round(span/columns*1e8)/1e6+"%",moreStyles={};if(ownerState.container&&ownerState.item&&0!==ownerState.columnSpacing){var spacing=theme.spacing(ownerState.columnSpacing);0!==spacing&&(moreStyles={flexBasis:"calc("+width+" + "+spacing+"px)",maxWidth:"calc("+width+" + "+spacing+"px)"})}styles=_extends({flexBasis:width,flexGrow:0,flexShrink:1,maxWidth:width},moreStyles)}return 0===theme.breakpoints.values[breakpoint]?Object.assign(finalStyles,styles):finalStyles[theme.breakpoints.up(breakpoint)]=styles,finalStyles}),{})}function generateDirection(_ref2){var theme=_ref2.theme,ownerState=_ref2.ownerState,directionValues=(0,md3_ui_system_cjs_prod.resolveBreakpointValues)({values:ownerState.direction,breakpoints:theme.breakpoints.values});return(0,md3_ui_system_cjs_prod.handleBreakpoints)({theme},directionValues,(function(propValue){var styles={flexDirection:propValue};return null!=propValue&&propValue.startsWith("column")&&ownerState.item&&(styles.maxWidth="none"),styles}))}function generateRowGap(_ref3){var theme=_ref3.theme,ownerState=_ref3.ownerState;if(0!==ownerState.rowSpacing){var rowSpacingValues=(0,md3_ui_system_cjs_prod.resolveBreakpointValues)({values:ownerState.rowSpacing,breakpoints:theme.breakpoints.values});return(0,md3_ui_system_cjs_prod.handleBreakpoints)({theme},rowSpacingValues,(function(propValue){var spacing=theme.spacing(null!=propValue?propValue:0),styles={};return 0!==spacing&&(ownerState.container&&(styles.marginTop=-spacing),ownerState.item&&(styles.paddingTop=spacing)),styles}))}return{}}function generateColumnGap(_ref4){var theme=_ref4.theme,ownerState=_ref4.ownerState;if(0!==ownerState.columnSpacing){var columnSpacingValues=(0,md3_ui_system_cjs_prod.resolveBreakpointValues)({values:ownerState.columnSpacing,breakpoints:theme.breakpoints.values});return(0,md3_ui_system_cjs_prod.handleBreakpoints)({theme},columnSpacingValues,(function(propValue){var spacing=theme.spacing(null!=propValue?propValue:0),styles={};return 0!==spacing&&(ownerState.container&&(styles.width="calc(100% + "+spacing+"px)",styles.marginStart=-spacing),ownerState.item&&(styles.paddingStart=spacing)),styles}))}return{}}var GridRoot=(0,md3_ui_system_cjs_prod.styled)(View.Z,{name:"Grid",slot:"Root"})((function(_ref5){var ownerState=_ref5.ownerState;return _extends({},ownerState.container&&{display:"flex",flexWrap:"wrap",width:"100%"},"wrap"!==ownerState.wrap&&{flexWrap:ownerState.wrap})}),generateDirection,generateRowGap,generateColumnGap,generateGrid),GridContext=react.createContext({}),Grid=react.forwardRef((function(inProps,ref){var contextProps=react.useContext(GridContext),resolvedProps=(0,md3_ui_utils_cjs_prod.resolveProps)(contextProps,inProps),_useThemeProps=(0,md3_ui_system_cjs_prod.useThemeProps)({name:"Grid",props:resolvedProps}),children=_useThemeProps.children,_useThemeProps$column=_useThemeProps.columns,columns=void 0===_useThemeProps$column?12:_useThemeProps$column,columnSpacingProp=_useThemeProps.columnSpacing,_useThemeProps$contai=_useThemeProps.container,container=void 0!==_useThemeProps$contai&&_useThemeProps$contai,_useThemeProps$direct=_useThemeProps.direction,direction=void 0===_useThemeProps$direct?"row":_useThemeProps$direct,_useThemeProps$item=_useThemeProps.item,item=void 0!==_useThemeProps$item&&_useThemeProps$item,rowSpacingProp=_useThemeProps.rowSpacing,_useThemeProps$spacin=_useThemeProps.spacing,spacing=void 0===_useThemeProps$spacin?0:_useThemeProps$spacin,_useThemeProps$span=_useThemeProps.span,span=void 0!==_useThemeProps$span&&_useThemeProps$span,style=_useThemeProps.style,styles=_useThemeProps.styles,_useThemeProps$wrap=_useThemeProps.wrap,wrap=void 0===_useThemeProps$wrap?"wrap":_useThemeProps$wrap,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,_excluded),columnSpacing=null!=columnSpacingProp?columnSpacingProp:spacing,rowSpacing=null!=rowSpacingProp?rowSpacingProp:spacing,ownerState={columns,columnSpacing,container,direction,item,rowSpacing,span,wrap},context=react.useMemo((function(){return container?{columns,columnSpacing,rowSpacing}:{}}),[columns,columnSpacing,container,rowSpacing]);return(0,jsx_runtime.jsx)(GridContext.Provider,{value:context,children:(0,jsx_runtime.jsx)(GridRoot,_extends({ref,ownerState,style:[style,null==styles?void 0:styles.root,container&&(null==styles?void 0:styles.container),item&&(null==styles?void 0:styles.item)]},props,{children}))})}));md3_ui_utils_cjs_prod.__DEV__&&(Grid.displayName="Grid");try{generateGrid.displayName="generateGrid",generateGrid.__docgenInfo={description:"",displayName:"generateGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/grid.tsx#generateGrid"]={docgenInfo:generateGrid.__docgenInfo,name:"generateGrid",path:"packages/layout/src/grid.tsx#generateGrid"})}catch(__react_docgen_typescript_loader_error){}try{generateDirection.displayName="generateDirection",generateDirection.__docgenInfo={description:"",displayName:"generateDirection",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/grid.tsx#generateDirection"]={docgenInfo:generateDirection.__docgenInfo,name:"generateDirection",path:"packages/layout/src/grid.tsx#generateDirection"})}catch(__react_docgen_typescript_loader_error){}try{generateRowGap.displayName="generateRowGap",generateRowGap.__docgenInfo={description:"",displayName:"generateRowGap",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/grid.tsx#generateRowGap"]={docgenInfo:generateRowGap.__docgenInfo,name:"generateRowGap",path:"packages/layout/src/grid.tsx#generateRowGap"})}catch(__react_docgen_typescript_loader_error){}try{generateColumnGap.displayName="generateColumnGap",generateColumnGap.__docgenInfo={description:"",displayName:"generateColumnGap",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},ownerState:{defaultValue:null,description:"",name:"ownerState",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/grid.tsx#generateColumnGap"]={docgenInfo:generateColumnGap.__docgenInfo,name:"generateColumnGap",path:"packages/layout/src/grid.tsx#generateColumnGap"})}catch(__react_docgen_typescript_loader_error){}try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"as",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},columns:{defaultValue:{value:"12"},description:"The number of columns.",name:"columns",required:!1,type:{name:"ResponsiveValue<number>"}},columnSpacing:{defaultValue:null,description:"Defines the horizontal space between the type `item` components. It\noverrides the value of the `spacing` prop.",name:"columnSpacing",required:!1,type:{name:"ResponsiveValue<number>"}},container:{defaultValue:{value:"false"},description:"If `true`, the component will have the flex _container_ behavior. You\nshould be wrapping _items_ with a _container_.",name:"container",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:'"row"'},description:"Defines the `flex-direction` style property. It is applied for all screen\nsizes.",name:"direction",required:!1,type:{name:'ResponsiveValue<"row" | "column" | "row-reverse" | "column-reverse">'}},item:{defaultValue:{value:"false"},description:"If `true`, the component will have the flex _item_ behavior. You should\nbe wrapping _items_ with a _container_.",name:"item",required:!1,type:{name:"boolean"}},rowSpacing:{defaultValue:null,description:"Defines the vertical space between the type `item` components. It\noverrides the value of the `spacing` prop.",name:"rowSpacing",required:!1,type:{name:"ResponsiveValue<number>"}},spacing:{defaultValue:{value:"0"},description:"Defines the space between the type `item` components. It can only be used\non a type `container` component.",name:"spacing",required:!1,type:{name:"ResponsiveValue<number>"}},span:{defaultValue:{value:"false"},description:"",name:"span",required:!1,type:{name:'ResponsiveValue<number | boolean | "auto">'}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: ViewStyle; container?: ViewStyle; item?: ViewStyle | undefined; } | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}},wrap:{defaultValue:{value:'"wrap"'},description:"Defines the `flex-wrap` style property. It's applied for all screen sizes.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"packages/layout/src/grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}var box=__webpack_require__("./packages/layout/src/box.tsx"),src_text=__webpack_require__("./packages/layout/src/text.tsx");function grid_stories_extends(){return grid_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},grid_stories_extends.apply(this,arguments)}const grid_stories={title:"Layout/Grid",component:Grid};var Basic=function Basic(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:2,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:8,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=8"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:4,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=4"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:4,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=4"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:8,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=8"})})})]})};Basic.displayName="Basic";var MultipleBreakpoints=function MultipleBreakpoints(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:2,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:{compact:6,medium:8},children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"compact=6 medium=8"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:{compact:6,medium:4},children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"compact=6 medium=4"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:{compact:6,medium:4},children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"compact=6 medium=4"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:{compact:6,medium:8},children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"compact=6 medium=8"})})})]})};MultipleBreakpoints.displayName="MultipleBreakpoints";var Spacing=function Spacing(_ref){var spacing=_ref.spacing;return(0,jsx_runtime.jsx)(Grid,{container:!0,spacing:2,sx:{flexGrow:1},children:(0,jsx_runtime.jsx)(Grid,{item:!0,span:12,children:(0,jsx_runtime.jsx)(Grid,{container:!0,spacing,sx:{justifyContent:"center"},children:[0,1,2].map((function(value){return(0,jsx_runtime.jsx)(Grid,{item:!0,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",height:140,width:100}})},value)}))})})})};Spacing.displayName="Spacing",Spacing.args={spacing:2};var RowColumnSpacing=function RowColumnSpacing(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,columnSpacing:{compact:1,medium:2,expanded:3},rowSpacing:1,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})})]})};RowColumnSpacing.displayName="RowColumnSpacing";var ResponsiveValues=function ResponsiveValues(){return(0,jsx_runtime.jsx)(Grid,{container:!0,columns:{compact:4,medium:8,expanded:12},spacing:{compact:2,expanded:3},children:[0,1,2,3,4,5].map((function(index){return(0,jsx_runtime.jsx)(Grid,{item:!0,span:{compact:2,medium:4},children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"compact=2 medium=4"})})},index)}))})};ResponsiveValues.displayName="ResponsiveValues";var AutoLayout=function AutoLayout(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:3,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:!0,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:!0,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span"})})})]})};AutoLayout.displayName="AutoLayout";var VariableWidthContent=function VariableWidthContent(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:3,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:"auto",children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"Variable width content"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:6,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=6"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:!0,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span"})})})]})};VariableWidthContent.displayName="VariableWidthContent";var NestedGrid=function NestedGrid(){var row=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:4,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"Item"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:4,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"Item"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:4,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"Item"})})})]});return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:1,children:[(0,jsx_runtime.jsx)(Grid,{container:!0,item:!0,spacing:3,children:row}),(0,jsx_runtime.jsx)(Grid,{container:!0,item:!0,spacing:3,children:row}),(0,jsx_runtime.jsx)(Grid,{container:!0,item:!0,spacing:3,children:row})]})};NestedGrid.displayName="NestedGrid";var Columns=function Columns(){return(0,jsx_runtime.jsxs)(Grid,{container:!0,spacing:2,columns:16,children:[(0,jsx_runtime.jsx)(Grid,{item:!0,span:8,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=8"})})}),(0,jsx_runtime.jsx)(Grid,{item:!0,span:8,children:(0,jsx_runtime.jsx)(box.x,{sx:{bgColor:"primary-container",width:"100%"},children:(0,jsx_runtime.jsx)(src_text.x,{children:"span=8"})})})]})};Columns.displayName="Columns",Basic.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid container spacing={2}>\n    <Grid item span={8}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=8</Text>\n      </Box>\n    </Grid>\n    <Grid item span={4}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=4</Text>\n      </Box>\n    </Grid>\n    <Grid item span={4}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=4</Text>\n      </Box>\n    </Grid>\n    <Grid item span={8}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=8</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},Basic.parameters),MultipleBreakpoints.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid container spacing={2}>\n    <Grid item span={{ compact: 6, medium: 8 }}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>compact=6 medium=8</Text>\n      </Box>\n    </Grid>\n    <Grid item span={{ compact: 6, medium: 4 }}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>compact=6 medium=4</Text>\n      </Box>\n    </Grid>\n    <Grid item span={{ compact: 6, medium: 4 }}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>compact=6 medium=4</Text>\n      </Box>\n    </Grid>\n    <Grid item span={{ compact: 6, medium: 8 }}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>compact=6 medium=8</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},MultipleBreakpoints.parameters),Spacing.parameters=grid_stories_extends({storySource:{source:'({ spacing }) => (\n  <Grid container spacing={2} sx={{ flexGrow: 1 }}>\n    <Grid item span={12}>\n      <Grid container spacing={spacing} sx={{ justifyContent: "center" }}>\n        {[0, 1, 2].map((value) => (\n          <Grid key={value} item>\n            <Box\n              sx={{ bgColor: "primary-container", height: 140, width: 100 }}\n            />\n          </Grid>\n        ))}\n      </Grid>\n    </Grid>\n  </Grid>\n)'}},Spacing.parameters),RowColumnSpacing.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid\n    container\n    columnSpacing={{ compact: 1, medium: 2, expanded: 3 }}\n    rowSpacing={1}\n  >\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},RowColumnSpacing.parameters),ResponsiveValues.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid\n    container\n    columns={{ compact: 4, medium: 8, expanded: 12 }}\n    spacing={{ compact: 2, expanded: 3 }}\n  >\n    {[0, 1, 2, 3, 4, 5].map((index) => (\n      <Grid key={index} item span={{ compact: 2, medium: 4 }}>\n        <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n          <Text>compact=2 medium=4</Text>\n        </Box>\n      </Grid>\n    ))}\n  </Grid>\n)'}},ResponsiveValues.parameters),AutoLayout.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid container spacing={3}>\n    <Grid item span>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span</Text>\n      </Box>\n    </Grid>\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n    <Grid item span>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},AutoLayout.parameters),VariableWidthContent.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid container spacing={3}>\n    <Grid item span="auto">\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>Variable width content</Text>\n      </Box>\n    </Grid>\n    <Grid item span={6}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=6</Text>\n      </Box>\n    </Grid>\n    <Grid item span>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},VariableWidthContent.parameters),NestedGrid.parameters=grid_stories_extends({storySource:{source:'() => {\n  const row = (\n    <>\n      <Grid item span={4}>\n        <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n          <Text>Item</Text>\n        </Box>\n      </Grid>\n      <Grid item span={4}>\n        <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n          <Text>Item</Text>\n        </Box>\n      </Grid>\n      <Grid item span={4}>\n        <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n          <Text>Item</Text>\n        </Box>\n      </Grid>\n    </>\n  )\n\n  return (\n    <Grid container spacing={1}>\n      <Grid container item spacing={3}>\n        {row}\n      </Grid>\n      <Grid container item spacing={3}>\n        {row}\n      </Grid>\n      <Grid container item spacing={3}>\n        {row}\n      </Grid>\n    </Grid>\n  )\n}'}},NestedGrid.parameters),Columns.parameters=grid_stories_extends({storySource:{source:'() => (\n  <Grid container spacing={2} columns={16}>\n    <Grid item span={8}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=8</Text>\n      </Box>\n    </Grid>\n    <Grid item span={8}>\n      <Box sx={{ bgColor: "primary-container", width: "100%" }}>\n        <Text>span=8</Text>\n      </Box>\n    </Grid>\n  </Grid>\n)'}},Columns.parameters);var __namedExportsOrder=["Basic","MultipleBreakpoints","Spacing","RowColumnSpacing","ResponsiveValues","AutoLayout","VariableWidthContent","NestedGrid","Columns"]},"./packages/layout/src/box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var _md3_ui_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),_md3_ui_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),Box=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_0__.createView)({name:"Box"});_md3_ui_utils__WEBPACK_IMPORTED_MODULE_1__.__DEV__&&(Box.displayName="Box");try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{as:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"as",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"packages/layout/src/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./packages/layout/src/text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _md3_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/system/dist/md3-ui-system.cjs.prod.js"),_md3_ui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/utils/dist/md3-ui-utils.cjs.prod.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_native__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js"),react_native__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","color","style","styles","variant"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var TextRoot=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.styled)(react_native__WEBPACK_IMPORTED_MODULE_3__.Z,{name:"Text",slot:"Root"})((function(_ref){var theme=_ref.theme,ownerState=_ref.ownerState;return _extends({textAlign:"left"},null!=ownerState.variant&&theme.typescale[ownerState.variant],"web"===react_native__WEBPACK_IMPORTED_MODULE_4__.Z.OS&&"inherit"===ownerState.variant&&{fontFamily:"inherit",fontSize:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit"},null!=ownerState.color&&{color:theme.color[ownerState.color]})})),Text=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(inProps,ref){var _useThemeProps=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.useThemeProps)({name:"Text",props:inProps}),children=_useThemeProps.children,_useThemeProps$color=_useThemeProps.color,color=void 0===_useThemeProps$color?"inherit":_useThemeProps$color,style=_useThemeProps.style,styles=_useThemeProps.styles,_useThemeProps$varian=_useThemeProps.variant,variant=void 0===_useThemeProps$varian?"inherit":_useThemeProps$varian,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_useThemeProps,_excluded),textStyle=(0,_md3_ui_system__WEBPACK_IMPORTED_MODULE_2__.useTextStyle)(),ownerState={color,variant};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TextRoot,_extends({ref,style:[textStyle,style,null==styles?void 0:styles.root],ownerState},props,{children}))}));_md3_ui_utils__WEBPACK_IMPORTED_MODULE_5__.__DEV__&&(Text.displayName="Text");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{as:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"as",required:!0,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"on-background"'},{value:'"primary"'},{value:'"on-primary"'},{value:'"on-primary-container"'},{value:'"on-secondary"'},{value:'"on-secondary-container"'},{value:'"on-tertiary"'},{value:'"on-tertiary-container"'},{value:'"on-error"'},{value:'"on-error-container"'},{value:'"on-surface"'},{value:'"on-surface-variant"'},{value:'"inverse-on-surface"'}]}},styles:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"styles",required:!1,type:{name:"{ root?: TextStyle; }"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as\nadditional styles.",name:"sx",required:!1,type:{name:"SystemStyleObject"}},variant:{defaultValue:{value:'"body-medium"'},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/layout/src/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"packages/layout/src/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);