import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import someAction from '../../actions'

class Test extends Component {
	render() {
		return (
			<div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		example: state.example
	}
}

const matchDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			someAction: someAction
		},
		dispatch
	)
}

export default connect(mapStateToProps, matchDispatchToProps)(Test)
