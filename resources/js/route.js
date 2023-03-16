
import { createWebHistory, createRouter } from "vue-router";

const Home = () => import('./components/Home.vue')
const CategoryList = () => import('./components/category/List.vue')
const CategoryCreate = () => import('./components/category/Add.vue')
const CategoryEdit = () => import('./components/category/Edit.vue')

export const routes = [
    // {
    //     name: 'home',
    //     path: '/',
    //     component: Home
    // },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;