<template>
    <caption class="ui-table-caption">
        <slot />
    </caption>
</template>

<script>
export default {
    name: 'Caption',
}
</script>

<style>
.ui-table-caption {
    padding: 0.2em;
    margin-bottom: 15px;
    font-size: 2em;
    font-weight: 500;
}
</style>
