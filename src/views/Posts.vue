<template>
    <p>Posts</p>
</template>

<script>
const DEFAULT_PAGES_PARAMS = {
    _page: 1,
    _limit: 10,
}

export default {
    name: 'Posts',
    created() {
        this.$store.dispatch('posts/getPostsOnPage', DEFAULT_PAGES_PARAMS)
        this.$store.dispatch('users/fetchAllUsers')
    },
}
</script>

<style></style>
