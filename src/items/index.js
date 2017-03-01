import React, {Component} from 'react'
import {connect} from 'react-redux'
import List from './list'
import Search from './search'
import {swapInitialItem, getItems, removeItem} from '../actions'
import confirm from '../confirm'
import {hashHistory} from 'react-router'
import ReactPaginate from 'react-paginate'
import {getPageCount, getItemsInPage} from '../reducers/items'

@connect((state) => {
  return {items: state.items}
})
export default class Items extends Component {
  constructor() {
    super()
    this.state = {
      page: 0
    }
  }

  componentDidMount() {
    this.props.dispatch(getItems())
  }

  editItem(item) {
    this.props.dispatch(swapInitialItem(item))
    hashHistory.push('/insert')
  }

  removeItem(item) {
    confirm().then(r => this.props.dispatch(removeItem(item.id)))
  }

  pageChange(page) {
    this.setState({page: page.selected})
  }

  render() {
    const {items} = this.props
    return (
      <div>
        <Search/>
        <Pagination items={items} pageChange={this.pageChange.bind(this)}/>
        <List
          items={getItemsInPage(items, this.state.page)}
          editItem={this.editItem.bind(this)}
          removeItem={this.removeItem.bind(this)}/>
      </div>
    )
  }
}

const Pagination = ({items, pageChange}) => (
  <nav className="mx-auto mt-3">
    <ReactPaginate
      onPageChange={pageChange}
      pageCount={getPageCount(items)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={5}
      previousLabel="قبلی"
      nextLabel="بعدی"
      activeClassName="active"
      previousClassName="page-item"
      nextClassName="page-item"
      breakClassName="page-link"
      previousLinkClassName="page-link rounded-right"
      nextLinkClassName="page-link rounded-left"
      containerClassName="pagination d-flex p-0"
      pageClassName="page-item w-50 text-center"
      pageLinkClassName="page-link"/>
  </nav>
)
