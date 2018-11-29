import VueRouter from 'vue-router'
import register from '../../components/register.vue'
import login from '../../components/login.vue'
import information from '../../components/information.vue'
import equipment from '../../components/equipment.vue'
import strategy from '../../components/strategy.vue'
import journey from '../../components/journey.vue'
import knowledge from '../../components/knowledge.vue'
import forum from '../../components/forum.vue'
import companion from '../../components/companion.vue'
import secondhand from '../../components/secondhand.vue'
import mall from '../../components/mall.vue'
import insurance from '../../components/insurance.vue'
import first from '../../first.vue'

export default new VueRouter({
  routes:[
    {
      path:'/register',
      component:register
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/strategy',
      component:strategy
    },
    {
      path:'/journey',
      component:journey
    },
    {
      path:'/information',
      component:information
    },
    {
      path:'/equipment',
      component:equipment
    },
    {
      path:'/first',
      component:first
    },
    {
      path:'/secondhand',
      component:secondhand
    },
    {
      path:'/knowledge',
      component:knowledge
    },
    {
      path:'/companion',
      component:companion
    },
    {
      path:'/mall',
      component:mall
    },
    {
      path:'/insurance',
      component:insurance
    }
    ,
    {
      path:'/forum',
      component:forum
    }
  ]
})
