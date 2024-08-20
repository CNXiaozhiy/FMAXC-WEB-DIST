<template>
    <div id="DashboardServerPage">
        <div class="card">
            <h4 class="d-flex align-items-center text-secondary card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160c0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4"/></svg>
                <span class="ms-2">云服务 Cloud Server</span>
            </h4>
            <hr>
                <div class="group">
                <Card class="item-card" color="success" @click="$router.push('/apps/ai-draw')">
                    <div class="item"  >
                        <div class="d-flex align-items-center">
                            <div class="b-avatar badge-light-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 8.833H.679m12.642 0H11.5m-9-3.666H.679m12.642 0H11.5M5.167 2.5V.679m0 12.642V11.5m3.666-9V.679m0 12.642V11.5m1.667-9h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"/><path d="M4.667 7.25c-.281-.048-.281-.452 0-.501a2.546 2.546 0 0 0 2.05-1.964l.018-.078c.06-.278.457-.28.52-.002l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.049.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077A2.546 2.546 0 0 0 4.667 7.25"/></g></svg>
                            </div>
                        </div>
                        <div class="ms-3">
                            <h3 class="font-weight-bolder mb-25 mr-25 text-nowrap">AI 绘画</h3>
                            <span class="introduce text-secondary">
                                AI 绘画，支持 文生图，图生图
                            </span>
                        </div>
                        <div class="d-flex flex-column align-items-center ms-auto">
                            <button v-wave class="btn btn-warning btn-relief" @click.stop="$router.push('/apps/ai-draw')">获取</button>
                            <button v-wave class="btn btn-success btn-relief mt-1" @click.stop="$router.push('/apps/ai-draw')">我的</button>
                        </div>
                    </div>
                </Card>
                <Card class="item-card" color="danger" @click="$router.push('/apps/ai-chat')">
                    <div class="item">
                        <div class="d-flex align-items-center">
                            <div class="b-avatar badge-light-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zM4 8h12v8h-5.277L7 18.234V16H4z"/><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"/></svg>
                            </div>
                        </div>
                        <div class="ms-3">
                            <h3 class="font-weight-bolder mb-25 mr-25 text-nowrap">AI 聊天</h3>
                            <span class="introduce text-secondary text-wrap">
                                AI 聊天，支持文言一心，<br>讯飞星火，混元大模型，ChatGPT 3.5
                            </span>
                        </div>
                        <div class="d-flex flex-column align-items-center ms-auto">
                            <button v-wave class="btn btn-warning btn-relief" @click.stop="$router.push('/apps/ai-chat')">获取</button>
                            <button v-wave class="btn btn-success btn-relief mt-1" @click.stop="$router.push('/apps/ai-chat')">我的</button>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
        <div class="card">
            <h4 class="d-flex align-items-center text-secondary card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId191112c2f531d7a671"><g fill="none" strokeLinejoin="round" strokeWidth="4"><rect width="36" height="30" x="6" y="12" fill="#fff" stroke="#fff" rx="2"/><path stroke="#000" strokeLinecap="round" d="M17.95 24.008h12"/><path stroke="#fff" strokeLinecap="round" d="m6 13l7-8h22l7 8"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId191112c2f531d7a671)"/></svg>
                <span class="ms-2">接口服务 Api Server</span>
            </h4>
            <hr>
            <div class="group">
                <Card class="item-card" color="primary" @click="$router.push('/apps/qq-music')">
                    <div class="item">
                        <div class="d-flex align-items-center">
                            <div class="b-avatar badge-light-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4M18 7h-3v5.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.5V5h4m2-3H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"/></svg>
                            </div>
                        </div>
                        <div class="ms-3">
                            <h3 class="font-weight-bolder mb-25 mr-25 text-nowrap">QQ 音乐</h3>
                            <span class="introduce text-secondary">
                                搜索音乐，免费下载 VIP 音乐
                            </span>
                        </div>
                        <div class="d-flex flex-column align-items-center ms-auto">
                            <button v-wave class="btn btn-warning btn-relief" @click.stop="$router.push('/apps/qq-music')">获取</button>
                            <button v-wave class="btn btn-success btn-relief mt-1" @click.stop="$router.push('/apps/qq-music')">我的</button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'Server',

    mounted(){
        this.$store.state.userData.pullData(this,true,true);
    },
    components: {
        Card
    },
    methods: {
        show() {
        }
    }
}
</script>

<style lang="less" scoped>
#DashboardServerPage {
    // height: 50vh;
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;
    // justify-content: center;

    .item-card {
        margin: .5rem;
    }

    .b-avatar {
        margin: 10px;
    }

    .group {
        display: flex;
        flex-wrap: wrap;

        .item {
            display: flex;
            flex-direction: row;
        }
    }
}

#DashboardServerPage > .card {
    margin: .5rem 0;
    display: flex;

    .group > .item-card {
        flex-grow: 1;

    }
}
</style>