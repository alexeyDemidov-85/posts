import { createRouter, createWebHistory } from 'vue-router'
import Posts from '@/views/Posts.vue'
import Post from '@/views/Post.vue'
import CreatePost from '@/views/CreatePost.vue'

const routes = [
    {
        path: '/',
        name: 'Posts',
        component: Posts,
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: true,
    },
    {
        path: '/create-post',
        name: 'CreatePost',
        component: CreatePost,
    },

    // {
    //     path: '/post',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
