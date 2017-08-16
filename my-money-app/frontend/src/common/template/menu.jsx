import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
	<ul className='sidebar-menu'>
		<MenuItem icon='dashboard' label='Dashboard' path='/'/>
		<MenuTree icon='edit' label='Cadastro'>
			<MenuItem icon='usd' label='Ciclos de Pagamentos' path='billingCycles'/>
		</MenuTree>
	</ul>
)