import React from 'react'

export default ({handleSubmit}) => (
  <form className="row" onSubmit={handleSubmit}>
    <div className="col-10">
      <input type="text" className="form-control" placeholder="گروه جدید ..." name="name"/>
    </div>
    <div className="col-2">
      <button type="submit" className="btn btn-submit btn-primary btn-block"><span className="fa fa-plus"></span></button>
    </div>
  </form>
)
