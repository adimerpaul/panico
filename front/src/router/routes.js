import Login from "pages/Login";
import IndexPage from "pages/IndexPage";
import SignUp from "pages/SignUp";
import Datos from "pages/Datos";
import History from "pages/History";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage,meta: { requiresAuth: true } },
      { path: 'datos', component: Datos,meta: { requiresAuth: true } },
      { path: 'history', component: History,meta: { requiresAuth: true } },
    ]
  },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
