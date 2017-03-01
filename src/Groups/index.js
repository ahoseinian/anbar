import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveGroups, getGroups} from '../actions/groups'
import confirm from '../confirm'
import Form from '../utils/OneRowForm'
import List from './list'
import SimpleCard from '../utils/SimpleCard'

class Groups extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    this.props.saveGroups({name: form.elements.name.value})
    form.reset()
  }

  handleRemove(remove) {
    confirm().then(r => this.props.getGroups({remove}))
  }

  render() {
    const form = <Form handleSubmit={this.handleSubmit.bind(this)}/>
    return (
      <SimpleCard name="گروه ها" form={form}>
        <List items={this.props.items} handleRemove={this.handleRemove.bind(this)}/>
      </SimpleCard>
    )
  }
}

export default connect((state) => ({items: state.groups.all}), {saveGroups, getGroups})(Groups)
