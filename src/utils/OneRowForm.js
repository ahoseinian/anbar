import React from 'react'

export default ({handleSubmit, name='name', type='text'}) => (
  <form className="row" onSubmit={handleSubmit}>
    <div className="col-10">
      <input
        type={type}
        className="form-control"
        placeholder="آیتم جدید"
        name={name}/>
    </div>
    <div className="col-2">
      <button type="submit" className="btn btn-submit btn-primary text-center">
        <span className="fa fa-plus"></span>
      </button>
    </div>
  </form>
)
