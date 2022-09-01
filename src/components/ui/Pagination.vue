<template>
    <div class="ui-pagination-container">
        <button
            class="ui-pagination-btn -prev"
            :disabled="isDisabledPrevButton"
            @click="decreaseNumPage()"
        >
            &#60; Prev
        </button>
        <ul class="ui-pagination-list">
            <li
                v-for="number in maxCountItem"
                :key="number"
                class="ui-pagination-item"
            >
                <button
                    type="button"
                    class="ui-pagination-btn"
                    :class="{ '-active': startNumberPage + number === page }"
                    @click="setNumPage(startNumberPage + number)"
                >
                    {{ startNumberPage + number }}
                </button>
            </li>
        </ul>
        <button
            class="ui-pagination-btn -next"
            :disabled="isDisabledNextButton"
            @click="increaseNumPage()"
        >
            Next &#62;
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        page: {
            type: Number,
            default: 1,
        },
        perPage: {
            type: Number,
            default: 1,
        },
        totalEntries: {
            type: Number,
            default: Infinity,
        },
    },
    data() {
        return {
            defaultMaxCountItem: 5,
        }
    },
    computed: {
        isDisabledPrevButton() {
            return this.page < 2
        },
        isDisabledNextButton() {
            return this.totalEntries < this.perPage * this.page
        },
        maxCountItem() {
            const pages = Math.floor(this.totalEntries / this.perPage)

            return pages > this.defaultMaxCountItem
                ? this.defaultMaxCountItem
                : pages + 1
        },
        startNumberPage() {
            const leftOffset = Math.floor(this.maxCountItem / 2)

            if (this.page - leftOffset < 1) {
                return 0
            } else if (this.page > this.maxNumberPage - this.maxCountItem) {
                return this.maxNumberPage - this.maxCountItem
            } else {
                return this.page - leftOffset - 1
            }
        },
        maxNumberPage() {
            return Math.ceil(this.totalEntries / this.perPage)
        },
    },
    methods: {
        setNumPage(pageNumber) {
            this.$emit('changePage', pageNumber)
        },
        decreaseNumPage() {
            this.setNumPage(this.page - 1)
        },
        increaseNumPage() {
            this.setNumPage(this.page + 1)
        },
    },
}
</script>

<style>
.ui-pagination-container {
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.ui-pagination-list {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 4px;
    list-style-type: none;
}
.ui-pagination-btn {
    padding: 6px 12px;
    border: 2px solid rgb(40, 138, 138);
    border-radius: 4px;
    background-color: #fff;
    font-size: 1.1em;
    cursor: pointer;
}
.ui-pagination-btn.-active {
    background-color: rgb(40, 138, 138);
    pointer-events: none;
    color: #fff;
}
.ui-pagination-btn:hover {
    border-color: rgb(113, 162, 162);
}
.ui-pagination-btn:disabled {
    cursor: default;
    border-color: lightgrey;
    pointer-events: none;
}
.ui-pagination-btn.-prev {
    margin-right: 2em;
}
.ui-pagination-btn.-next {
    margin-left: 2em;
}
</style>
