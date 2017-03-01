import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveGroupsItems, getGroupById, removeItemFromGroup} from '../actions/groups'
import confirm from '../confirm'
import SingleItem from '../items/single'
import SimpleCard from '../utils/SimpleCard'
import Form from '../utils/OneRowForm'

class GroupBox extends Component {

  fetchData() {
    this.props.getGroupById({id: this.props.params.id})
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.params.id
    let newId = this.props.params.id
    if (newId !== oldId)
      this.fetchData()
  }

  addToGroup(e) {
    e.preventDefault();
    const form = e.target;
    this.props.saveGroupsItems({groupId: this.props.item.id, itemId: form.elements.itemId.value})
    form.reset()
  }

  removefromGroup(itemId) {
    confirm().then(r => {
      this.props.removeItemFromGroup({itemId, groupId: this.props.item.id})
    })
  }

  render() {
    const {item} = this.props
    const form = <Form handleSubmit={this.addToGroup.bind(this)} name="itemId"/>
    return (
      <SimpleCard name={item.name} form={form}>
        <Items items={item.items} handleRemove={this.removefromGroup.bind(this)}/>
      </SimpleCard>
    )
  }
}

export default connect((state, ownProps) => ({item: state.groups.current}), {saveGroupsItems, getGroupById, removeItemFromGroup})(GroupBox)

const Items = ({items, handleRemove}) => {
  return (
    <div className="row m-1">
      {items.map(el => (
        <div className="col-6 col-md-3" key={el.id}>
          <SingleItem item={el}>
            <button className="btn btn-danger" onClick={() => handleRemove(el.id)}>
              <span className="fa fa-times"></span>
            </button>
          </SingleItem>
        </div>
      ))}
    </div>
  )
}
