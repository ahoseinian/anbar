import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveModels, getModels} from '../actions'
import confirm from '../confirm'
import Form from '../utils/OneRowForm'
import List from './list'
import SimpleCard from '../utils/SimpleCard'

let handleSubmit = function(type) {
  return function(e) {
    e.preventDefault()
    const name = e.target.elements.name.value
    this.props.saveModels({name, type})
    e.target.reset()
  }
}

class Models extends Component {
  handleModel = handleSubmit(0)
  handleType = handleSubmit(1)

  handleRemove(remove) {
    confirm().then(r => this.props.getModels({remove}), r => null)
  }

  render() {
    const {models, types} = this.props
    const modelForm = <Form handleSubmit={this.handleModel.bind(this)} name="name"/>
    const typeForm = <Form handleSubmit={this.handleType.bind(this)} name="name"/>

    return (
      <div className="row">
        <div className="col-12 col-md-6">
          <SimpleCard name="مدل ها" form={modelForm}>
            <List items={models} handleRemove={this.handleRemove.bind(this)}/>
          </SimpleCard>
        </div>
        <div className="col-12 col-md-6">
          <SimpleCard name="تایپ ها" form={typeForm}>
            <List items={types} handleRemove={this.handleRemove.bind(this)}/>
          </SimpleCard>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({
  models: state.models.filter(item => item.type === 0),
  types: state.models.filter(item => item.type === 1)
}), {saveModels, getModels})(Models)
