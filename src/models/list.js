import React from 'react'
import Single from './Single'

export default({items, handleRemove}) => (
  <ul className="list-unstyled p-0 pt-1">
    {items.map(item => <Single {...item} handleRemove={handleRemove} key={item.id}/>)}
  </ul>
)
