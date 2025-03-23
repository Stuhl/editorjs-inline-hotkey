function $parcel$defineInteropFlag(t){Object.defineProperty(t,"__esModule",{value:!0,configurable:!0})}function $parcel$export(t,e,r,o){Object.defineProperty(t,e,{get:r,set:o,enumerable:!0,configurable:!0})}require("./main.css"),$parcel$defineInteropFlag(module.exports),$parcel$export(module.exports,"default",()=>$eb7869949b641a40$export$2e2bcd8739ae039);class $eb7869949b641a40$var$KeyboardShortcutInlineTool{static get isInline(){return!0}static get shortcut(){return"Ctrl+Shift+k"}static get sanitize(){return{kbd:!0}}static get CSS(){return"editorjs-inline-hotkey"}static{this.title="Hotkey"}constructor({api:t}){this.api=t,this.button=null,this.state=!1,this.keyboardTag=document.createElement("KBD")}getToolIcon(){return`<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
</svg>
`}render(){return this.button=document.createElement("BUTTON"),this.button.type="button",this.button.innerHTML=this.getToolIcon(),this.button.classList.add(this.api.styles.inlineToolButton),this.button}surround(t){if(t){if(this.state){this.unwrap(t);return}this.wrap(t)}}wrap(t){let e=t.extractContents(),r=document.createElement("KBD");r.classList.add($eb7869949b641a40$var$KeyboardShortcutInlineTool.CSS),r.appendChild(e),t.insertNode(r),this.api.selection.expandToTag(r)}unwrap(t){let e=t.extractContents(),r=this.api.selection.findParentTag("KBD",$eb7869949b641a40$var$KeyboardShortcutInlineTool.CSS);r&&(r.remove(),t.insertNode(e))}checkState(t){let e=this.api.selection.findParentTag("KBD",$eb7869949b641a40$var$KeyboardShortcutInlineTool.CSS);return this.state=!!e,this.button&&this.button.classList.toggle(this.api.styles.inlineToolButtonActive,this.state),this.state}}var $eb7869949b641a40$export$2e2bcd8739ae039=$eb7869949b641a40$var$KeyboardShortcutInlineTool;
//# sourceMappingURL=main.js.map
