<template>
    <p>Post {{ id }}</p>
</template>

<script>
export default {
    name: 'Post',
    props: {
        id: {
            type: [Number, String],
            default: '',
        },
    },
}
</script>

<style></style>
