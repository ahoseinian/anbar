import React from 'react'
import Upload from './upload'

export default({item, editItem, removeItem, refresh, children, toggleSelectGroupModal}) => {
  return children
    ? children
    : (
      <div>
        <Upload id={item.id} uploadSuccess={refresh}/>
        <button className="btn btn-primary d-block" onClick={() => editItem(item)}>
          <span className="fa fa-edit"></span>
        </button>
        <button className="btn btn-danger d-block" onClick={() => removeItem(item)}>
          <span className="fa fa-trash"></span>
        </button>
        <button className="btn btn-success" onClick={() => toggleSelectGroupModal(item.id)}>
          <span className="fa fa-plus"></span>
        </button>
      </div>
    )
}
