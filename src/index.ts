import "./style.css"

class EditorJSInlineHotkey {
  api        : any
  button     : HTMLButtonElement | null
  state      : boolean
  keyboardTag: HTMLElement

  static get isInline() {
    return true
  }

  static get shortcut() {
    return "Ctrl+Shift+k"
  }

  static get sanitize() {
    return {
      kbd: true
    }
  }

  static get CSS() {
    return "editorjs-inline-hotkey"
  }

  static title: string = "Hotkey"

  constructor({ api }) {
    this.api         = api
    this.button      = null
    this.state       = false
    this.keyboardTag = document.createElement("KBD")
  }

  getToolIcon(): string {
    return `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M8 15h7.01v.01H15L8 15Z"/>
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
  <path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"/>
</svg>
`
  }

  render() {
    this.button           = document.createElement("BUTTON") as HTMLButtonElement
    this.button.type      = "button"
    this.button.innerHTML = this.getToolIcon()
    this.button.classList.add(this.api.styles.inlineToolButton)

    return this.button
  }

  surround(range: Range) {
    if (!range) {
      return
    }

    if (this.state) {
      this.unwrap(range)
      return
    }

    this.wrap(range)
  }

  wrap(range: Range) {
    const selectedText = range.extractContents()
    const kbd          = document.createElement("KBD")

    kbd.classList.add(EditorJSInlineHotkey.CSS)

    kbd.appendChild(selectedText)
    range.insertNode(kbd)

    this.api.selection.expandToTag(kbd)
  }

  unwrap(range: Range) {
    const selectedText = range.extractContents()
    const keyboardTag  = this.api.selection.findParentTag("KBD", EditorJSInlineHotkey.CSS)

    if (keyboardTag) {
      keyboardTag.remove()
      range.insertNode(selectedText)
    }
  }

  checkState(selection: Selection) {
    const tag = this.api.selection.findParentTag("KBD", EditorJSInlineHotkey.CSS)

    this.state = !!tag

    if (this.button) {
      this.button.classList.toggle(this.api.styles.inlineToolButtonActive, this.state)
    }

    return this.state
  }
}

export default EditorJSInlineHotkey