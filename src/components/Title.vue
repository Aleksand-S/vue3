<template>
<div @dblclick="titleUpdate()">
    <p :style="{display: pDisplay}">{{ currNote.title }} </p>
    <input
    :style="{display: inputDisplay}"
    v-model=curTitle
    @keyup.enter="submit()"
    @keyup.esc="canceled()"
    v-click-outside="canceled"
    >
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
    props: {
        currNote: {
        type: Object,
        required: true,
        },
    },
    data () {
        return {
            pDisplay: "",
            inputDisplay: "none",
            curTitle: this.currNote.title
        }
    },
    methods: {
        titleUpdate () {
        this.pDisplay = "none"
        this.inputDisplay = ""
        },
        submit () {
            this.currNote.title = this.curTitle
            this.pDisplay = ""
            this.inputDisplay = "none"
        },
        canceled () {
            this.curTitle = this.currNote.title
            this.pDisplay = ""
            this.inputDisplay = "none"
        },
    },
    directives: {
        ClickOutside
    }
};
</script>