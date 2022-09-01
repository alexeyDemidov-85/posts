<template>
    <div class="ui-search__container">
        <input
            type="text"
            class="ui-search__input"
            :value="searchName"
            placeholder="Search By Author"
            @input="onInput"
        />
        <button
            type="button"
            class="ui-search__button"
            @click="$emit('doSearch')"
        >
            Go
        </button>
        <ul v-if="variants.length" class="ui-search__variant-list">
            <li
                v-for="variant in variants"
                :key="variant"
                class="ui-search__variant-item"
                @click="setVariant(variant)"
            >
                {{ variant }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'InputSearch',
    props: {
        searchName: {
            type: [String, Number],
            require: true,
        },
        variants: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        onInput(event) {
            this.$emit('update:searchName', event.target.value)
        },
        setVariant(variant) {
            this.$emit('update:searchName', variant)
        },
    },
}
</script>

<style>
.ui-search__container {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
}
.ui-search__input {
    padding: 5px 10px;
    border: 1px solid #2c3e50;
    border-radius: 4px;
}
.ui-search__input:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 2px #2c3e50;
}
.ui-search__button {
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #2c3e50;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
}
.ui-search__button:hover {
    transform: scale(1.1);
}
.ui-search__button:active {
    transform: scale(1);
}
.ui-search__button:disabled {
    color: grey;
    border-color: lightgray;
    pointer-events: none;
}
.ui-search__variant-list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 8px;
    padding: 0;
    list-style-type: none;
}
.ui-search__variant-item {
    padding: 5px 10px;
    cursor: pointer;
}
.ui-search__variant-item:hover {
    color: #42b983;
}
</style>
