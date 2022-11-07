import Login from "pages/Login";
import IndexPage from "pages/IndexPage";
import SignUp from "pages/SignUp";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage, }
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
