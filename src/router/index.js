import { createRouter, createWebHistory } from 'vue-router'
import Posts from '@/views/Posts.vue'
import Post from '@/views/Post.vue'
import CreatePost from '@/views/CreatePost.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

import NProgress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'Posts',
        component: Posts,
        props: (route) => {
            return {
                page: parseInt(route.query._page) || 1,
                limit: parseInt(route.query._limit) || 8,
            }
        },
    },
    {
        path: '/post/:id',
        name: 'ShowPost',
        component: Post,
        props: true,
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: CreatePost,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true,
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetworkError,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})
router.beforeEach(() => {
    NProgress.start()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
