<template>
    <div id="Error404Page">
        <h1>404 Not Found</h1>
        <button class="btn btn-danger" @click="$router.back()">Go Back</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#Error404Page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 20px;
        width: 100px;
    }
}
</style>