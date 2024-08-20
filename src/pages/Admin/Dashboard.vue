<template>
  
</template>

<script>

export default {
    name: 'Dashboard',
    data() {
        return {
        }
    },
    async mounted() {
        await this.$store.state.userData.pullData(this,true,true);
        if (this.$store.state.userData.user.info) {
            
        }
    }
}
</script>

<style>

</style>