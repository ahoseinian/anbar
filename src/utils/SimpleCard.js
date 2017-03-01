import React from 'react'

export default({name, form, children}) => (
  <div className="card">
    <div className="card-header bg-primary white">
      <div className="row">
      <div className="col-12 col-sm-3">
        <h3 className="m-0 pt-1">{name}</h3>
      </div>
      <div className="col-12 col-sm-9">
        {form}
      </div>
      </div>
    </div>
    <div className="card-block p-3">
      {children}
    </div>
  </div>
)
