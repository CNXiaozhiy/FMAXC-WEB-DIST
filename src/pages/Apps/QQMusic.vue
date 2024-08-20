<template>
    <div id="QQMusic-Page">
        <div class="card mb-3">
            <span class="subtitle d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34M208 336c-70.7 0-128-57.2-128-128c0-70.7 57.2-128 128-128c70.7 0 128 57.2 128 128c0 70.7-57.2 128-128 128"/></svg>
                <span class="ms-2">搜索</span>
                
            </span><span class="text-secondary text-end" style="font-size: 15px">Tell me, what do you want to hear ~</span>
            <hr>
            <div class="search">
                <el-input
                    placeholder="请输入内容"
                    v-model="input"
                    @keydown.enter.native="searchBtn"
                    clearable
                >
                </el-input>
                <button v-wave class="btn btn-primary ms-2 p-2" @click="searchBtn" :disabled="!input || loading">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                搜索</button>
            </div>
        </div>
        <div v-show="music.list.length && music.now.src" class="card mb-3">
            <span class="subtitle d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 17q1.05 0 1.775-.725T13 14.5V9h2q.425 0 .713-.288T16 8t-.288-.712T15 7h-2q-.425 0-.712.288T12 8v4.5q-.325-.225-.7-.363T10.5 12q-1.05 0-1.775.725T8 14.5t.725 1.775T10.5 17M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"/></svg>
                <span class="ms-2">音乐卡片</span>
            </span>
            <hr>

            <audio :src="music.now.src" autoplay controls style="width: 100% "></audio>
            <hr>
            <button class="btn btn-primary p-2" @click="setDefault">设置为默认音乐</button>
            <button v-if="defaultMusic" class="btn btn-danger p-2 mt-3" @click="resetDefault">重置默认音乐</button>
            <span class="text-secondary mt-3">tips: 设置为默认音乐后，大部分页面都不会停止播放。默认音乐盒位于右下角</span>
        </div>
        <div v-show="music.list.length" class="list card">
            <span class="subtitle d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 17q.425 0 .713-.288T9 16t-.288-.712T8 15t-.712.288T7 16t.288.713T8 17m0-4q.425 0 .713-.288T9 12t-.288-.712T8 11t-.712.288T7 12t.288.713T8 13m0-4q.425 0 .713-.288T9 8t-.288-.712T8 7t-.712.288T7 8t.288.713T8 9m3 8h6v-2h-6zm0-4h6v-2h-6zm0-4h6V7h-6zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z"/></svg>
                <span class="ms-2">列表卡片</span>
            </span>
            <hr>
            <template>
                <el-table
                    v-loading="loading"
                    :data="music.list"
                    style="width: 100%">
                    <el-table-column
                    fixed
                    prop="index"
                    label="序号"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    prop="song"
                    label="歌名">
                    </el-table-column>
                    <el-table-column
                    prop="singer"
                    label="歌手"
                    width="260">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="220">
                    <template slot-scope="scope">
                        <div class="d-flex">
                            <button v-wave @click="handleClick(scope.row,'play')" class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"/></svg>
                                播放</button>
                            <button v-wave @click="handleClick(scope.row,'download')" class="btn btn-success ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M11.78 7.159a.75.75 0 0 0-1.06 0l-1.97 1.97V1.75a.75.75 0 0 0-1.5 0v7.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 12l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061M2.5 9.75a.75.75 0 0 0-1.5 0V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" clipRule="evenodd"/></svg>
                                下载</button>
                        </div>
                    </template>
                    </el-table-column>
                </el-table>
        </template>
        </div>
        <div class="mb-5">
            
        </div>
    </div>
</template>

<script>
import { search, getInfo } from '@/scripts/apps/qqmusic/m';

export default {
    name: 'QQMusic',
    data() {
        return {
            loading: false,
            music: {
                name: '',
                list: [],
                now: {
                    src: '',
                }
            },
            input: ''
        }
    },
    computed: {
        defaultMusic() {
            return window.localStorage.getItem('defaultMusic');
        }
    },
    methods: {
        setDefault() {
            if (this.music.now.src) {
                window.localStorage.setItem('defaultMusic',this.music.now.src);
                this.$toastx({
                    type: 'success',
                    title: '设置成功'
                });
            }
        },
        resetDefault() {
            window.localStorage.removeItem('defaultMusic');
            this.$toastx({
                type: 'success',
                title: '重置成功'
            });
        },
        searchBtn() {
            if (this.input === '' || this.input === this.music.name) {
                return;
            }
            this.searchMusic(this.input);
        },

        async handleClick(row,type) {
            if (type === 'play') {
                const info = await getInfo(this,this.music.name,row.index);
                this.music.now.src = info.url;
            } else
            if (type === 'download') {
                const info = await getInfo(this,this.music.name,row.index);
                window.location.href = info.url;
            }
            
            // this.music.now = row;
        },

        async searchMusic() {
            this.loading = true;
            const res = await search(this,this.input);
            if (res.length > 0) {
                this.music.name = this.input;
                this.music.list = res;
            }
            this.loading = false;
        },
    }
}
</script>

<style lang="less" scoped>
.search {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.subtitle {
    font-size: 20px;
}   
</style>