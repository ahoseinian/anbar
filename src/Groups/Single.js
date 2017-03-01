import React from 'react'
import {Link} from 'react-router'

const style = {
  borderBottom: '1px solid #ccc'
}

export default({id, name, permanent, handleRemove}) => (
  <li className="h1 p-1" style={style}>
    <Link to={`/groups/${id}`}>{name}</Link>
    {!permanent && <button className="btn btn-danger pull-left" onClick={() => handleRemove(id)}>
      <span className="fa fa-trash"></span>
    </button>
}
  </li>
)
