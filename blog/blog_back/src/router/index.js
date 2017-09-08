import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
// import first from '@/components/first'
import main_index from '@/components/page/main_index'


// 接口文档
import add_api from '@/components/page/api/api_insert'
import api_list_font from '@/components/page/api/api_list_font'
import api_list_back from '@/components/page/api/api_list_back'
import api_detail from '@/components/page/api/api_detail'
import api_amend from '@/components/page/api/api_amend'

// 分类管理
import add_class_one from '@/components/page/class/add_class_one'
import add_class_two from '@/components/page/class/add_class_two'
import add_class_three from '@/components/page/class/add_class_three'
import amend_class from '@/components/page/class/amend_class'

//文章管理
import add_title_one from '@/components/page/title/add_title_one'
import add_title_two from '@/components/page/title/add_title_two'
import amend_list from '@/components/page/title/amend_list'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    },
    // {
    //     path: '/first',
    //     name: 'first',
    //     component: first
    // },
    {
        path: '/main',
        name: 'main',
        component: main,
        children: [{
            path: '/',
            name: 'main_index',
            component: main_index,
        }, {
            path: 'add_class_one',
            name: 'add_class_one',
            component: add_class_one,
        }, {
            path: 'add_class_two',
            name: 'add_class_two',
            component: add_class_two,
        },{
            path: 'add_class_three',
            name: 'add_class_three',
            component: add_class_three,
        },{
            path: 'add_title_one',
            name: 'add_title_one',
            component: add_title_one,
        },{
            path: 'add_title_two',
            name: 'add_title_two',
            component: add_title_two,
        },{
            path: 'amend_list',
            name: 'amend_list',
            component: amend_list,
        },{
            path: 'amend_class',
            name: 'amend_class',
            component: amend_class,
        },{
            path: 'add_api',
            name: 'add_api',
            component: add_api,
        }, {
            path: 'api_list_font',
            name: 'api_list_font',
            component: api_list_font,
        }, {
            path: 'api_list_back',
            name: 'api_list_back',
            component: api_list_back,
        }, {
            path: 'api_detail',
            name: 'api_detail',
            component: api_detail,
        }, {
            path: 'api_amend',
            name: 'api_amend',
            component: api_amend,
        }]
    }]
})