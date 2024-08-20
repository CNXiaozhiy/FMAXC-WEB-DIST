<template>
    <div>
        <div class="card amentItem shadow" v-for="(item,index) in list" :key="index">
            <span class="title">{{ item.title }}</span>
            <span class="time">{{ item.time }}</span>

            <p class="more">{{ item.more }}</p>
            <a :href="item.url" class="card-link">点我前往 >></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Announcement',
    data()  {
        return {
        }
    },
    props: ['list']
}
</script>

<style lang="less" scoped>
.amentItem {
    
    .title {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .time {
        font-size: 14px;
        color: #afafb6;
        margin-bottom: 22px;
    }

    margin-bottom: 15px;
    padding: 15px;
    min-width: 400px;
    max-height: 180px;
    overflow: auto;
    transition: all 0.3s linear;
}
.amentItem:hover{
    // box-shadow: 5 5 20px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
}

</style>