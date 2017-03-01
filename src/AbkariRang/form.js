import React from 'react'

const style = {
  fontSize: '2rem'
}
export default({save, name, handleChange}) => {
  return (
    <form onSubmit={save}>
      <input
        autoFocus
        type="text"
        onChange={handleChange}
        value={name}
        className="form-control form-control-lg p-1 text-center"
        name="name"
        style={style}
        placeholder="+ نام"/>
    </form>
  )
}
