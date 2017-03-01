import React from 'react'
import {Link} from 'react-router'

export default ({groups}) => {
  const groupItems = groups.map(item => (
    <Link to={`/groups/${item.id}`} key={item.id} className="badge badge-info m-1">{item.name}</Link>
  ))

  return <div className="d-flex p-1 justify-content-center  flex-wrap">{groupItems}</div>
}
