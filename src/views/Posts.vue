<template>
    <section class="posts">
        <h2 class="posts__title">Posts</h2>
        <div class="posts__columns">
            <Table
                v-if="postsWithAuthorsName.length"
                :columns="headers"
                :tbody="postsWithAuthorsName"
                :rowClickHandler="toShowPostPage"
            />
            <InputSearch
                v-model:searchName.trim="searchName"
                :variants="authorsNameFilterBySearchName"
                @doSearch="fetchPostsByAuthor"
            />
        </div>
        <Pagination
            :page="page"
            :perPage="limit"
            :totalEntries="totalPosts"
            @changePage="changePageInRouteQuery"
        />
    </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Posts',
    props: {
        page: {
            type: Number,
        },
        limit: {
            type: Number,
        },
    },
    data() {
        return {
            headers: {
                author: 'Author',
                title: 'Title',
            },
            searchName: '',
        }
    },
    created() {
        this.fetchPostOnPage()
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchPostOnPage(to.query).then(next)
    },
    computed: {
        ...mapState('posts', {
            posts: 'posts',
            totalPosts: 'totalPosts',
        }),
        ...mapState('users', {
            users: 'users',
        }),
        ...mapGetters('users', {
            dictionaryUsersById: 'dictionaryUsersById',
            dictionaryUsersByName: 'dictionaryUsersByName',
            authorsName: 'authorsName',
        }),
        postsWithAuthorsName() {
            return this.posts.reduce((acc, post) => {
                acc.push({
                    ...post,
                    author: this.dictionaryUsersById[post.userId]?.name,
                })
                return acc
            }, [])
        },
        authorsNameFilterBySearchName() {
            return this.searchName
                ? this.authorsName.filter((author) => {
                      if (author === this.searchName) return false
                      return author.includes(this.searchName)
                  })
                : []
        },
    },
    methods: {
        toShowPostPage(id) {
            this.$router.push({ name: 'ShowPost', params: { id } })
        },
        fetchPostOnPage(params = {}) {
            let defaultParams = {
                _page: this.page,
                _limit: this.limit,
            }
            console.log('par', params)
            return this.$store
                .dispatch(
                    'posts/fetchPostsOnPage',
                    Object.assign(defaultParams, params)
                )
                .catch((error) => {
                    console.log(error)
                })
        },
        changePageInRouteQuery(num) {
            this.$router.push({
                name: 'Posts',
                query: { ...this.$route.query, _page: num },
            })
        },
        fetchPostsByAuthor() {
            this.$router.push({
                name: 'Posts',
                query: {
                    ...this.$route.query,
                    _page: 1,
                    userId: this.dictionaryUsersByName[this.searchName],
                },
            })
        },
    },
}
</script>

<style>
.posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
}
.posts__columns {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}
</style>
