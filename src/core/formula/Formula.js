import { ExcelComponent } from "../ExcelComponent";

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        })
    } 

    toHtml() {
        return `
        <div class="info">fx</div>
        <div class="input" spellcheck contenteditable></div>
        `
    }

    onInput(event) {
        console.log('Formula onInput:', event)
    }
}