import Vue from 'vue'
import Router from 'vue-router'
import EditPanel from '@/components/EditPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditPanel',
      component: EditPanel
    }
  ]
})
