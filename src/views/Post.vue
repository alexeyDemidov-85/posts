<template>
    <section v-if="post" class="post">
        <h2>Post</h2>
        <dl class="post__author-info">
            <dt>Author:</dt>
            <dd>{{ authorName }}</dd>

            <dt>Author Email:</dt>
            <dd>{{ authorEmail }}</dd>
        </dl>
        <p>
            {{ post.body }}
        </p>
    </section>
    <Comments v-if="commentsOnPost.length" :comments="commentsOnPost" />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Comments from '@/components/Comments'
export default {
    name: 'Post',
    components: {
        Comments,
    },
    props: {
        id: {
            type: [Number, String],
            default: '',
        },
    },
    data() {
        return {
            apiBusy: false,
            headers: {
                title: 'Title',
                body: 'Text',
            },
        }
    },
    computed: {
        ...mapState('posts', {
            post: 'post',
        }),
        ...mapState('comments', {
            commentsOnPost: 'commentsOnPost',
        }),
        ...mapGetters('users', {
            dictionaryUsersById: 'dictionaryUsersById',
        }),
        authorName() {
            return this.dictionaryUsersById[this.post.userId]?.name
        },
        authorEmail() {
            return this.dictionaryUsersById[this.post.userId]?.email
        },
    },
    created() {
        this.fetchPost()
        this.fetchCommentOnPost()
    },
    methods: {
        fetchPost(id = this.id) {
            return this.$store
                .dispatch('posts/fetchPostById', id)
                .catch(({ response: { status } }) => {
                    if (status === 404) {
                        this.$router.push({
                            name: '404Resource',
                            params: { resource: 'post' },
                        })
                    }
                })
        },
        fetchCommentOnPost(id = this.id) {
            this.$store.dispatch('comments/fetchCommentOnPost', id)
        },
    },
}
</script>

<style>
.post {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.post__author-info {
    margin: 0;
    min-width: 40vw;
    text-align: left;
}
.post__author-info dt {
    font-size: 1.2rem;
    font-weight: 500;
}
.post__author-info dd {
    margin-bottom: 8px;
}
</style>
