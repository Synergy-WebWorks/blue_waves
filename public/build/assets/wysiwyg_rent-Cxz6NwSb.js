import{r as a,j as e}from"./app-HE9O2mox.js";import{R as r}from"./quill.snow-DPc_Bgcv.js";import{p as u}from"./purify.es-DhD2mIk-.js";const c={toolbar:[[{header:"1"},{header:"2"},{font:[]},{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}]],clipboard:{matchVisual:!1}},d=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"];function x({label:t,value:l,onChange:i,name:m}){const s=a.useCallback(o=>{const n=u.sanitize(o);i(n)},[i]);return e.jsxs("div",{children:[t&&e.jsx("label",{className:"block mb-2 font-medium text-sm",children:t}),e.jsx(r,{value:l,onChange:s,modules:c,formats:d,className:"custom-quill bg-white"}),e.jsx("style",{jsx:!0,children:`
                .custom-quill {
                    height: 450px;
                }
                .custom-quill .ql-container {
                    height: 382px;
                }
                .custom-quill .ql-editor {
                    height: 100%;
                    overflow-y: auto;
                }
            `})]})}export{x as default};
