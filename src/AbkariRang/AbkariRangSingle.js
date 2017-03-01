import React from 'react'
const style = {
  borderBottom: '1px solid #ccc'
}
export default({name, removeItem, editItem}) => (
  <li className="clearfix p-1" style={style}>
    <h4 className="pull-right pt-2">{name}</h4>
    <button className="btn btn-danger pull-left" onClick={removeItem}>
      <span className="fa fa-trash"></span>
    </button>
    <button className="btn btn-info ml-1 pull-left" onClick={editItem}>
      <span className="fa fa-edit"></span>
    </button>
  </li>
)
