"use strict";(self.webpackChunkpatel_tiyaben_ui_garden=self.webpackChunkpatel_tiyaben_ui_garden||[]).push([[407],{"./src/components/HeroImage/HeroImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoText:()=>NoText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroImage_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeroContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  width: 100%;
  height: ${props=>props.$height||"300px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`,StyledImage=styled_components_browser_esm.Ay.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`,OverlayText=styled_components_browser_esm.Ay.div`
  position: relative;
  z-index: 1;
`,HeroImage=_ref=>{let{src,alt,height,overlayText}=_ref;return(0,jsx_runtime.jsxs)(HeroContainer,{$height:height,role:"img","aria-label":alt,children:[(0,jsx_runtime.jsx)(StyledImage,{src,alt}),overlayText&&(0,jsx_runtime.jsx)(OverlayText,{children:overlayText})]})},HeroImage_HeroImage=HeroImage;HeroImage.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},overlayText:{required:!1,tsType:{name:"string"},description:""}}};const HeroImage_stories={title:"Components/HeroImage",component:HeroImage_HeroImage,tags:["autodocs"]},Default={render:args=>(0,jsx_runtime.jsx)(HeroImage_HeroImage,{...args}),args:{src:"https://via.placeholder.com/1200x400",alt:"Hero Image",height:"400px",overlayText:"Welcome to Our Website"}},NoText={render:args=>(0,jsx_runtime.jsx)(HeroImage_HeroImage,{...args}),args:{src:"https://via.placeholder.com/1200x400",alt:"Hero Image Without Text",height:"400px",overlayText:""}},__namedExportsOrder=["Default","NoText"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => <HeroImage {...args} />,\n  args: {\n    src: 'https://via.placeholder.com/1200x400',\n    alt: 'Hero Image',\n    height: '400px',\n    overlayText: 'Welcome to Our Website'\n  }\n}",...Default.parameters?.docs?.source}}},NoText.parameters={...NoText.parameters,docs:{...NoText.parameters?.docs,source:{originalSource:"{\n  render: args => <HeroImage {...args} />,\n  args: {\n    src: 'https://via.placeholder.com/1200x400',\n    alt: 'Hero Image Without Text',\n    height: '400px',\n    overlayText: ''\n  }\n}",...NoText.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-HeroImage-HeroImage-stories.6271635a.iframe.bundle.js.map