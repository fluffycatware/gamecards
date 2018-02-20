import Vue from 'vue'
import Router from 'vue-router'
// Components
import Root from '@/components/Root'
import Account from '@/components/Account'
import CardDetails from '@/components/CardDetails'
import SignIn from '@/components/pages/SignIn'
import FAQ from '@/components/pages/FAQ'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/card/:id',
      name: 'CardDetails',
      component: CardDetails
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
