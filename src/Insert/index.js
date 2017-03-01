import React, {Component} from 'react'
import SimpleCard from '../utils/SimpleCard'
import Form from '../items/form'

class Insert extends Component{
  render() {
    return (
      <SimpleCard name="ورود اطلاعات">
        <Form/>
      </SimpleCard>
    )
  }
}

export default Insert
