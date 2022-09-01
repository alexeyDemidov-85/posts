import Table from './Table/Table'
import Pagination from './Pagination'
import InputSearch from './InputSearch'

export default (app) => {
    app.component('Table', Table)
    app.component('Pagination', Pagination)
    app.component('InputSearch', InputSearch)
}
