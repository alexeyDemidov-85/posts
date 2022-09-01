<template>
    <section class="comments">
        <h2>Comments</h2>
        <ul
            v-for="comment of comments"
            :key="comment.id"
            class="comments__list"
        >
            <li class="comments__item">
                <blockquote>
                    <cite>{{ comment.email }}</cite>
                    <p>{{ comment.body }}</p>
                </blockquote>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Comments',
    props: {
        comments: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style>
.comments__list {
    margin: 0 auto;
    padding: 0;
    max-width: 50vw;
    list-style-type: none;
}
.comments__item {
    text-align: left;
    margin-bottom: 20px;
}
.comments__item cite {
    font-size: 1.1em;
    font-weight: 500;
}
.comments__item p {
    margin: 0;
    margin-top: 10px;
    padding-left: 30px;
}
</style>
