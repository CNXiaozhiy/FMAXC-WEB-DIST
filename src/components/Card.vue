<template>
    <div class="card out-card" :class=" 'bg-' + ( color || 'primary' )" @click="$emit('click')">
        <div class="card">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['color','top'],
    mounted() {
        if(this.top) {
            this.$el.style.paddingTop = this.top
        }
    }
}
</script>

<style lang="less" scoped>
.out-card {
    display: inline-block;
    padding: 0;
    padding-top: .25rem;
    box-shadow: none;
    cursor: pointer;
    .card {
        display: inline-block;
        height: 100%;
        width: 100%;
        box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
        background: #fff;
        opacity: 1;
    }
}
</style>