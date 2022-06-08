import { ExcelComponent } from "../ExcelComponent";
import { createTable } from "./table.component";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    toHtml() {
        return createTable()
    }
}