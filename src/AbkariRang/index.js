import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as abkariRangsActions from '../actions/abkariRangs'
import Form from './form'
import AbkariRangSingle from './AbkariRangSingle'
import confirm from '../confirm'
import SimpleCard from '../utils/SimpleCard'

class AbkariRang extends Component {
  save(e) {
    e.preventDefault()
    this.props.saveAbkariRangs(this.props.current)
  }

  removeItem(remove) {
    confirm().then(r => this.props.removeAbkariRang({remove}))
  }

  editItem(item) {
    this.props.setCurrentItem(item)
  }

  handleChange({target}){
    this.props.changeCurrentItem(target.value)
  }

  render() {
    const {abkariRangs, current} = this.props;
    const items = abkariRangs.map(item => <AbkariRangSingle
      name={item.name}
      key={item.id}
      editItem={this.editItem.bind(this, item)}
      removeItem={this.removeItem.bind(this, item.id)}/>)
    const form = <Form save={this.save.bind(this)} {...current} handleChange={this.handleChange.bind(this)}/>
    return (
      <SimpleCard name="ویژگی ها" form={form}>
        <ul className="list-unstyled p-0 pt-1">
          {items}
        </ul>
      </SimpleCard>
    )
  }
}

export default connect(state => ({abkariRangs: state.abkariRangs.all, current: state.abkariRangs.current}), abkariRangsActions)(AbkariRang)
