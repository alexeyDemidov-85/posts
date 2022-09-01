<template>
    <tr
        class="ui-table-row"
        :class="rowClasses"
        @click="clickHandler(rowData.id)"
    >
        <Cell
            v-for="(column, index) of showColumns"
            :typeCell="typeCell"
            :cellData="rowData[column]"
            :key="index"
        />
    </tr>
</template>

<script>
import Cell from './Cell.vue'

export default {
    name: 'Row',
    components: {
        Cell,
    },
    props: {
        rowData: {
            type: [Array, Object],
            default: () => ({}),
        },
        typeCell: {
            type: String,
            default: 'cell',
        },
        showColumns: {
            type: Array,
            default: () => [],
        },
        rowClickHandler: {
            type: [Function],
            default: null,
        },
        deleteRowHandler: {
            type: [Function],
            default: null,
        },
    },
    computed: {
        rowClasses() {
            return {
                '-th': this.typeCell === 'header',
                '-link': typeof this.rowClickHandler === 'function',
            }
        },
        hasDeleteRowHandler() {
            return (
                this.deleteRowHandler &&
                typeof this.deleteRowHandler === 'function'
            )
        },
    },
    methods: {
        deleteEntry(id) {
            this.emitter.emit('showConfirmPopup', {
                params: {
                    text: 'Are you sure that you want to delete entry?',
                    id,
                },
                res: ({ id }) => {
                    this.$store.dispatch('bodies/deleteBody', id)
                },
            })
        },
        clickHandler(id) {
            if (
                this.rowClickHandler &&
                typeof this.rowClickHandler === 'function'
            ) {
                this.rowClickHandler(id)
            }
        },
    },
}
</script>

<style>
.ui-table-row {
    position: relative;
}
.ui-table-row.-link {
    cursor: pointer;
}
.ui-table-row:hover .ui-table-cell__close-btn {
    display: block;
}
</style>
