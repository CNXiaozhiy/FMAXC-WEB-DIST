<template>
    <div>
        <div class="xz-BulletinBoard-Main" :class="isCard ? 'card' : ''">
            <el-carousel :height="height" trigger="click" :interval="interval*1">
                <el-carousel-item v-for="(item,index) in Bulletin" :key="index">
                    <div class="xz-BulletinBoard-items" :class="isCenter ? 'xz-BulletinBoard-center' : ''">
                        <span class="xz-BulletinBoard-title" v-html="item.title"></span>
                        <span class="xz-BulletinBoard-content" v-html="item.content"></span>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default {
    name: 'BulletinBoard',
    props: ['height','interval','isCard','isCenter','Bulletin'],
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                loop: true, // 无缝,
                effect : 'flip',
            }
        }
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        }
    }
}
</script>

<style lang="less">
.xz-BulletinBoard-items .xz-BulletinBoard-title{
    font-size: 25px;
    display: block;
    margin-bottom: 5px;
}
.xz-BulletinBoard-center {
    display: flex;
    justify-content: center;
    align-items: center
}
.xz-BulletinBoard-overflow {
    display: none;
}
@media screen and (max-width:800px) {
    .xz-BulletinBoard-items .xz-BulletinBoard-title{
        font-size: 18px;
        display: block;
        margin-bottom: 5px;
    }
}
</style>