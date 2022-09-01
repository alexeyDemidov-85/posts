<template>
    <div id="nav">
        <router-link :to="{ name: 'Posts' }">Posts</router-link> |
        <router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
    </div>
    <router-view />
</template>

<script>
export default {
    name: 'App',
    created() {
        this.fetchAllUsers()
    },
    methods: {
        fetchAllUsers() {
            return this.$store
                .dispatch('users/fetchAllUsers')
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
