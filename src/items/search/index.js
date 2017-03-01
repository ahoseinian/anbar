import React, {Component} from 'react'
import {getItems} from '../../actions';
import {connect} from 'react-redux';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

class Search extends Component {
  state = {}

  handleChange({target}) {
    this.setState({
      ...this.state,
      [target.name]: target.value
    }, () => {
      this.props.dispatch(getItems(this.state));
    })
  }
  handleSelectChange(name, value) {
    console.log(name, value);
    this.setState({
      ...this.state,
      [name]: value
    }, () => {
      this.props.dispatch(getItems(this.state));
    })
  }

  render() {
    const {models, brands, abkariRangs, groups, types} = this.props
    return (
      <div className="card hidden-print">
        <div className="row">
          <div className="col-3 col-sm-2 col-md-1">
            <div
              className="h-100 d-flex align-items-center justify-content-center bg-primary white">
              <span
                className="fa fa-search"
                style={{
                fontSize: '2rem'
              }}></span>
            </div>
          </div>
          <div className="col-9 col-sm-10 col-md-11">
            <div className="row m-3">
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <input
                  placeholder="کد محصول"
                  type="text"
                  name="code"
                  className="form-control"
                  onChange={this.handleChange.bind(this)}/>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <Select
                  placeholder="مدل محصول"
                  labelKey="name"
                  valueKey="id"
                  simpleValue
                  value={this.state.item_model}
                  options={models}
                  onChange={this.handleSelectChange.bind(this, 'item_model')}/>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <Select
                  placeholder="تایپ محصول"
                  labelKey="name"
                  valueKey="id"
                  simpleValue
                  value={this.state.item_type}
                  options={types}
                  onChange={this.handleSelectChange.bind(this, 'item_type')}/>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <Select
                  placeholder="برند"
                  labelKey="brand"
                  valueKey="brand"
                  simpleValue
                  value={this.state.brand}
                  options={brands}
                  onChange={this.handleSelectChange.bind(this, 'brand')}/>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <Select
                  placeholder="ویژگی"
                  labelKey="name"
                  valueKey="id"
                  simpleValue
                  value={this.state.abkari_rang}
                  options={abkariRangs}
                  onChange={this.handleSelectChange.bind(this, 'abkari_rang')}/>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-3">
                <Select
                  placeholder="گروه"
                  labelKey="name"
                  valueKey="id"
                  simpleValue
                  value={this.state.group}
                  options={groups}
                  onChange={this.handleSelectChange.bind(this, 'group')}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    brands: state.brands.used,
    abkariRangs: state.abkariRangs.all,
    models: state.models.filter(item => item.type === 0),
    types: state.models.filter(item => item.type === 1),
    groups: state.groups.all
  }
})(Search);
