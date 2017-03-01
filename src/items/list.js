import React from 'react'
import Single from './single'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default({items, editItem, abkariRangs, models, removeItem}) => {
  const itemsList = items.map(item => (
    <div className="col-6 col-sm-4 col-md-3" key={item.id}>
      <Single item={item} editItem={editItem} removeItem={removeItem}/>
    </div>
  ));
  return (
    <ReactCSSTransitionGroup
      component="div"
      className="row mt-1"
      transitionName="flipInY-animation"
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {itemsList}
    </ReactCSSTransitionGroup>
  )
}
