import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import AboutUsPage from '@/components/AboutUsPage.vue'
import DepartmentsPage from '@/components/DepartmentsPage.vue'
import EmployeesPage from '@/components/EmployeesPage.vue'
import EnrollmentPage from '@/components/EnrollmentPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/aboutus', name: 'AboutUs', component: AboutUsPage },
  { path: '/departments', name: 'Departments', component: DepartmentsPage },
  { path: '/employees', name: 'Employees', component: EmployeesPage },
  { path: '/enrollment', name: 'Enrollment', component: EnrollmentPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
