import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import AboutUsPage from '@/components/AboutUsPage.vue'
import DepartmentsPage from '@/components/DepartmentsPage.vue'
import EmployeesPage from '@/components/EmployeesPage.vue'
import EnrollmentPage from '@/components/EnrollmentPage.vue'
import EnrollmentEntry from '@/components/EnrollmentEntry.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/aboutus', name: 'AboutUs', component: AboutUsPage },
  { path: '/departments', name: 'Departments', component: DepartmentsPage },
  { path: '/employees', name: 'Employees', component: EmployeesPage, meta: { requiresAuth: true } },
  { path: '/enrollment', name: 'Enrollment', component: EnrollmentPage, meta: { requiresAuth: true } },
  { path: '/enrollmententry', name: 'EnrollmentEntry', component: EnrollmentEntry },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
