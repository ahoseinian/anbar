import React, {Component} from 'react'
import Input from './input';
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeInitialItem, saveNewItem, saveEditedItem, resetNewItem} from '../../actions'

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.newItem.id) {
      this.props.dispatch(saveEditedItem(this.props.newItem));
    } else {
      this.props.dispatch(saveNewItem(this.props.newItem));
    }
  }

  handleChange({target}) {
    this.props.dispatch(changeInitialItem(target));
  }

  handleSelectChange(name, value) {
    this.props.dispatch(changeInitialItem({name, value}));
  }

  resetForm() {
    this.props.dispatch(resetNewItem())
  }

  render() {
    const {newItem, abkariRangs, models, brands, types} = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Input label="مدل محصول">
          <Select
            placeholder="مدل محصول"
            labelKey="name"
            valueKey="id"
            simpleValue
            value={newItem.item_model}
            options={models}
            onChange={this.handleSelectChange.bind(this, 'item_model')}/>
        </Input>
        <Input label="تایپ محصول">
          <Select
            placeholder="تایپ محصول"
            labelKey="name"
            valueKey="id"
            simpleValue
            value={newItem.item_type}
            options={types}
            onChange={this.handleSelectChange.bind(this, 'item_type')}/>
        </Input>
        <Input label="کد محصول">
          <input
            type="number"
            name="code"
            required
            className="form-control"
            onChange={this.handleChange}
            step="0.1"
            value={newItem.code}/>
        </Input>
        <Input label="ویژگی">
          <Select
            placeholder="ویژگی محصول"
            labelKey="name"
            valueKey="id"
            simpleValue
            value={newItem.abkari_rang}
            options={abkariRangs}
            onChange={this.handleSelectChange.bind(this, 'abkari_rang')}/>
        </Input>
        <Input label="موجودی کارخانه">
          <input
            type="number"
            name="karkhane_mojodi"
            className="form-control"
            onChange={this.handleChange}
            value={newItem.karkhane_mojodi}/>
        </Input>
        <Input label="موجودی فروشگاه">
          <input
            type="number"
            name="foroshgah_mojodi"
            className="form-control"
            onChange={this.handleChange}
            value={newItem.foroshgah_mojodi}/>
        </Input>
        <Input label="سایز">
          <input
            type="text"
            name="size"
            className="form-control"
            onChange={this.handleChange}
            value={newItem.size}/>
        </Input>
        <Input label="برند">
          <Select
            placeholder="برند..."
            labelKey="brand"
            valueKey="brand"
            simpleValue
            value={newItem.brand}
            options={brands.all}
            onChange={this.handleSelectChange.bind(this, 'brand')}/>
        </Input>

        <Input label="توضیحات">
          <textarea
            name="info"
            className="form-control"
            rows="4"
            onChange={this.handleChange}
            value={newItem.info}/>
        </Input>

        <ul className="list-inline text-left">
          <li className="list-inline-item">
            <button
              className="btn btn-secondary"
              type="reset"
              onClick={this.resetForm.bind(this)}>
              <span className="fa fa-refresh ml-3"></span>
              از نو</button>
          </li>
          <li className="list-inline-item">
            <button className="btn btn-primary" type="submit">
              <span className="fa fa-check ml-3"></span>
              ثبت
            </button>
          </li>
          <li className="list-inline-item"></li>
        </ul>
      </form>
    );
  }
}

export default connect((state) => ({
  newItem: state.newItem,
  models: state.models.filter(item => item.type === 0),
  types: state.models.filter(item => item.type === 1),
  abkariRangs: state.abkariRangs.all,
  brands: state.brands
}))(Form)
