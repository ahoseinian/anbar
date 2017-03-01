import React from 'react';

export default({name, value, children}) => {

  return value || children
    ? (
      <li className="list-group-item px-2 d-flex justify-content-between">
        <div>
          {name}
        </div>
        <div className="d-flex">
          {value || children}
        </div>
      </li>
    )
    : null
}
