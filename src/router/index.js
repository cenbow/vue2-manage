import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Manage from '@/page/manage'
import Tender from '@/page/tender'
import Bin from '@/page/bin'
import userList from '@/page/userlist'
import Edit from '@/page/edit'
import Aptitudes from '@/page/aptitudes'
import Method from '@/page/method'
import Maintenance from '@/page/maintenance'
import Home from '@/page/first'
import Compile from '@/page/compile'
const Addgoods = resolve => require(['@/page/addGoods'],resolve)
import Editer from '@/page/editer'
import Rease from '@/page/rease'
import Quillediter from '@/page/QuillEditor'
import Detail from '@/page/detail'
import Relevance from '@/page/relevance'
import Recycle from '@/page/recycle'


Vue.use(Router)

const routes = [
		{
			path:'/login',
			component:Login,
			name:'login'
		},
		{
			path:'/edit',
			component:Edit,
			name:'edit'
		},
		{
			path:'/manage',
			component:Manage,
			name:'manage',
			children:[
							{
								path:'/tender',
							component: Tender,
								name:'tender'
							},
							{
								path:'/addgoods',
								component: Addgoods,
								name:'addGoods'
							},
							{
								path:'/bin',
								component:Bin,
								name:'bin'
							},
							{
								path:'/home',
								component:Home,
								name:'home'
							},
							{
								path:'/userlist',
								component:userList,
								name:'userList'
							},
							{
								path:'/aptitudes',
								component:Aptitudes,
								name:'aptitudes'
				  		},
          		{
          		     path:'/maintenance',
          		     component:Maintenance,
          		     name:'maintenance'
          		 },
          		 {
          		    path:'/method',
          		    component:Method,
          		    name:'method'
							 },
							 {
							 	path: '/compile/:id/:code',
							 	component: Compile,
							 	name: 'compile'
							 },
							 {
								 path:'/editer/:id',
								 component:Editer,
								 name:'editer'
							 },
							 {
								path:'/rease',
								component:Rease,
								name:'rease'
							 },
							 {
								 path:'/quillediter',
								 component: Quillediter
							 }
							 ,{
                    path:'/detail',
                    component:Detail,
                    name:'detail'

								},
								{
									path: '/relevance',
									component: Relevance,
									name: 'relevance'
								},
								{
									path:'/recycle',
									component:Recycle,
									name:'recycle'
								}


					]
		}



]


export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
