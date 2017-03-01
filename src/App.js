import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getModels, getBrands} from './actions'
import {getAbkariRangs} from './actions/abkariRangs'
import {getGroups} from './actions/groups'
import Alert from 'react-s-alert'
import GroupSelectModal from './Groups/SelectModal'
import Navigation from './navigation'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'react-s-alert/dist/s-alert-default.css'
import './router-animation.css'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(getModels())
    this.props.dispatch(getBrands())
    this.props.dispatch(getAbkariRangs())
    this.props.dispatch(getGroups())
  }

  render() {
    const {children, location} = this.props;
    return (
      <div>
        <GroupSelectModal/>
        <Alert stack={{
          limit: 3
        }}/>
        <Navigation/>
        <div className="container mt-3" >
          <ReactCSSTransitionGroup
            transitionName="fade-animation"
            transitionEnterTimeout={500}
            transitionLeave={false}>
            {React.cloneElement(children, {key: location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default connect()(App);
