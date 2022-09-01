<template>
    <table class="ui-table">
        <Caption v-if="caption">
            {{ caption }}
        </Caption>
        <thead>
            <Row
                :rowData="columns"
                :showColumns="visibleColumns"
                typeCell="header"
            />
        </thead>
        <tbody>
            <Row
                v-for="body of tbody"
                :key="body.id"
                :rowData="body"
                :showColumns="visibleColumns"
                :rowClickHandler="rowClickHandler"
            />
        </tbody>
    </table>
</template>

<script>
import Caption from './Caption.vue'
import Row from './Row.vue'
export default {
    name: 'Table',
    components: {
        Row,
        Caption,
    },
    props: {
        tbody: {
            type: Array,
            default: () => [],
        },
        caption: {
            type: String,
            default: '',
        },
        columns: {
            type: Object,
            default: () => ({}),
        },
        rowClickHandler: {
            type: Function,
        },
    },
    computed: {
        visibleColumns() {
            return Object.keys(this.columns)
        },
        // headers() {
        //     if (this.tbody.length) {
        //         return Object.keys(this.tbody[0]).map((key) =>
        //             this.getConvertTitleFromCamelCase(key)
        //         )
        //     }
        //     return []
        // },
    },
    methods: {
        // getConvertTitleFromCamelCase(camelCase) {
        //     const regex =
        //         /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
        //     return camelCase
        //         .toString()
        //         .match(regex)
        //         .map((word, index) => {
        //             if (index === 0) {
        //                 const [firstLetter, ...others] = word
        //                 return `${firstLetter.toUpperCase()}${others.join('')}`
        //             }
        //             return word.toLowerCase()
        //         })
        //         .join(' ')
        // },
    },
}
</script>

<style>
.ui-table {
    border-collapse: collapse;
}
</style>
