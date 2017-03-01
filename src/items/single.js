import React, {Component} from 'react'
import Desc from './desc'
import {SERVER_PATH} from '../config'
import {connect} from 'react-redux'
import {toggleSelectGroupModal} from '../actions/groups'
import GroupList from './GroupsList'
import Buttons from './buttons'

class Single extends Component {

  refresh() {
    this.forceUpdate()
  }

  render() {
    const {
      item,
      editItem,
      abkariRangs,
      models,
      removeItem,
      children,
      toggleSelectGroupModal
    } = this.props
    const imageUrl = SERVER_PATH + '/backend/thumbnails/' + item.id + '.jpg?date=' + Math.random();

    const abkariRang = abkariRangs.find(el => el.id === parseInt(item.abkari_rang, 10))
    const model = models.find(el => el.id === parseInt(item.item_model, 10))
    const type = models.find(el => el.id === parseInt(item.item_type, 10))

    return (
      <div className="card my-2 request-card">
        <div
          style={{
          width: '100%',
          position: 'relative'
        }}>

          <img src={imageUrl} className="w-100" role="presentation"/>
          <div className="text-left button-place pt-1">
            <Buttons
              item={item}
              editItem={editItem}
              removeItem={removeItem}
              toggleSelectGroupModal={toggleSelectGroupModal}
              refresh={this.refresh.bind(this)}>
              {children}
            </Buttons>
          </div>
        </div>
        <ul className="list-group list-group-flush pr-0">
          <Desc name="کد انبار" value={item.id}/>
          <Desc name="کد محصول" value={item.code}/>
          <Desc name="مدل" value={model
            ? model.name
            : null}/>
          <Desc name="تایپ" value={type
            ? type.name
            : null}/>
          <Desc
            name="ویژگی"
            value={abkariRang
            ? abkariRang.name
            : null}/>
          <Desc name="موجودی کارخانه" value={item.karkhane_mojodi.toLocaleString()}/>
          <Desc name="موجودی فروشگاه" value={item.foroshgah_mojodi.toLocaleString()}/>
          <Desc name="سایز" value={item.size}/>
          <Desc name="برند" value={item.brand}/>
          <Desc name="توضیحات" value={item.info}/>
          <GroupList groups={item.groups}/>
        </ul>

      </div>
    )
  }
}

export default connect((state) => ({abkariRangs: state.abkariRangs.all, models: state.models}), {toggleSelectGroupModal})(Single)
