import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard2/dashboard2'
import BillingCycles from '../billingCycle/billingCycle'

export default props => (
	<Router history={hashHistory}>
		<Route path='/' component={Dashboard} />
		<Route path='/billingCycles' component={BillingCycles} />
		<Redirect from='*' to='/' />
	</Router>
)