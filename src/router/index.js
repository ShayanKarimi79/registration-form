import { createRouter, createWebHistory } from 'vue-router'
import WizardVue from '@/components/Wizard.vue'
import Description from '@/components/Description.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'wizard',
      component: WizardVue
     },
    {
      path: '/description',
      name: 'description',
      component: Description
    }
  ]
})

export default router
