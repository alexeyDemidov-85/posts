<template>
    <th v-if="isHeaderType" class="ui-table-cell -th">
        {{ cellData }}
    </th>
    <td v-else class="ui-table-cell">
        <button
            v-if="withDeleteButton"
            class="ui-table-cell__close-btn"
            @click.stop="$emit('deleteEntry')"
        >
            x
        </button>
        {{ cellData }}
    </td>
</template>

<script>
export default {
    name: 'Cell',
    props: {
        typeCell: {
            type: String,
            require: true,
        },
        cellData: {
            type: [Number, String, Boolean],
            default: '',
        },
        withDeleteButton: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isHeaderType() {
            return this.typeCell === 'header'
        },
    },
}
</script>

<style>
.ui-table-cell {
    position: relative;
    padding: 10px 15px;
    border: 1px solid green;
}
.ui-table-cell__close-btn {
    display: none;
    width: 30px;
    height: 100%;
    left: -30px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border: 0;
    background-color: transparent;
    cursor: pointer;
}
</style>
