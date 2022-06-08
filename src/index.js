import { Excel } from '@core/excel/Excel'
import { Header } from '@core/header/Header'
import { Toolbar } from '@core/toolbar/Toolbar'
import { Formula } from '@core/formula/Formula'
import { Table } from '@core/table/Table'
import './scss/index.scss'


const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table]
})

excel.render()
