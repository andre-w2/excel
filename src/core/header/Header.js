import { ExcelComponent } from "../ExcelComponent";

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHtml() {
        return `
        <input type="text" class="input" value="Новая таблица">

        <div>
          <div class="button">
            <span class="material-icons-outlined">delete</span>
          </div>
          <div class="button">
            <span class="material-icons-outlined">exit_to_app</span>
          </div>
        </div>
        `
    }
}