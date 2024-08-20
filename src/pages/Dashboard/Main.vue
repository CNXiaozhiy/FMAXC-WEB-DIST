<template>
  <div id="DashboardMainPage" class="d-flex align-items-center justify-content-center">
    <Card :top="'.5rem'" :color="'info'">
        <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
                <div class="b-avatar badge-light-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-8 56a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>
                </div>
            </div>
            <div class="ms-3">
                <h3>欢迎光临 FMaxCloud 官方网站</h3>
            </div>
        </div>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    name: 'Main',
    data() {
        return {}
    },
    components: {
        Card
    }
}
</script>

<style lang="less" scoped>
#DashboardMainPage {
    margin-top: .5rem;
    height: 50vh;
}
.title {
    font-size: 30px;
}
</style>