import React from 'react'
const style = {
  borderBottom: '1px solid #ccc'
}

export default({id, name, permanent, handleRemove}) => (
  <li className="py-1 clearfix" style={style}>
    <h4 className="pull-right pt-2">{name}</h4>
    {!permanent &&
      <button className="btn btn-danger pull-left" onClick={() => handleRemove(id)}>
        <span className="fa fa-trash"></span>
      </button>
    }
  </li>
)
