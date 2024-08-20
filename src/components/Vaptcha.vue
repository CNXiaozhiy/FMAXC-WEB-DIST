<template>
<div>
    <button v-wave @click="startVerify" class="vBtn btn w-100" :class="vBtnClass" :disabled="disabled">
        <!-- <svg t="1722002073628" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1471" width="200" height="200"><path d="M968.001605 217.23828c-1.088443-31.427238-27.273638-61.052915-58.175421-66.470109 0 0-120.104094-18.766265-187.500006-42.636954-84.172953-29.800828-167.457635-95.019854-167.457635-95.019853-26.010043-18.428472-65.756992-17.340029-89.965473 2.714853 0 0-58.888539 59.06369-168.896383 93.393444-93.218292 37.09465-169.296729 43.675353-181.33216 44.513579-1.176019 0.087576-2.339528 0.187663-3.503036 0.375326-29.913426 4.829185-55.247883 32.34053-55.78585 63.142225 0 0-4.1536 161.314811 1.088443 302.937556 1.989224 253.44466 304.201151 503.811653 457.0211 503.811653 150.292759 0 410.243057-174.50124 451.065939-500.196019 10.121272-193.104864 3.440482-306.515657 3.440482-306.515657zM831.258089 383.244658v-1.451258L478.827638 711.65429a47.941551 47.941551 0 0 1-58.525724 5.604858l-9.207981-7.769234L216.350149 508.841012a47.916529 47.916529 0 0 1 2.890005-68.096519 48.792288 48.792288 0 0 1 68.646996 2.890005l160.051216 166.681963L765.325946 312.420775a48.792288 48.792288 0 0 1 68.646996 2.890005 47.703845 47.703845 0 0 1-2.714853 67.933878z m0 0" p-id="1472"></path></svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M11.298 2.195a2 2 0 0 1 1.232-.055l.172.055l7 2.625a2 2 0 0 1 1.291 1.708l.007.165v5.363a9 9 0 0 1-4.709 7.911l-.266.139l-3.354 1.677a1.5 1.5 0 0 1-1.198.062l-.144-.062l-3.354-1.677a9 9 0 0 1-4.97-7.75l-.005-.3V6.693a2 2 0 0 1 1.145-1.808l.153-.065zm4.135 6.434l-4.598 4.598l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l5.234-5.235a1 1 0 1 0-1.414-1.414"/></g></svg>
        <span>{{ title }}</span>
    </button>
</div>
</template>

<script>
export default {
    name: 'Vaptcha',
    props: ['passCallback'],
    data() {
        return {
            vaptchaObj: {},
            vBtnClass: 'btn-warning',
            title: '点我进行人机验证',
            
            disabled: false,
        }
    },
    mounted() {
        vaptcha({
            vid: '669bb37bd3784602950e9629',
            mode: 'invisible',
            scene: 0,
            area: 'auto',
        })
        .then((obj) => {
            this.vaptchaObj = obj;
            obj.listen('pass',()=>{
                const serverToken = obj.getServerToken();
                const data = {
                    server: serverToken.server,
                    token: serverToken.token,
                };
                this.passCallback(data);
                this.vBtnClass = 'btn-success';
                this.title = '人机验证通过！';
                this.disabled = true;
            })
        })
    },
    methods:{
        startVerify(){
            if (this.title === '人机验证模块异常') return;
            this.disabled = true;
            try {
                this.vaptchaObj.validate();
                setTimeout(()=>{
                    this.disabled = false;
                },2000)
            } catch(e) {
                this.title = '人机验证模块异常';
                this.vBtnClass = 'btn-danger'
            }
        },
        resetVerify(){
            this.vaptchaObj.reset();
            this.vBtnClass = 'btn-primary';
            this.title = '点我进行人机验证'
        }
    }
}
</script>

<style lang="less" scoped>
.vBtn {
    display: flex;
    // background: rgba(255, 226, 226,0.6);
    padding: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    transition: all 0.15s linear;
    span{
        font-size: 15px;
        margin-left: 10px;
    }
    .icon {
        height: 20px;
        width: 20px;
    }
}
// .vBtn:hover {
//     // box-shadow: 0 0 8px rgba(0,0,0,0.3);
//     // box-shadow: 0 8px 25px -8px rgba(255, 226, 226,1);
// }
// .vBtnOk {
//     // background: rgba(255, 199, 199,0.6);
//     background: rgba(168, 230, 207, 0.6);
// }
// .vBtnErr {
//     background: rgba(246, 114, 128, 0.6);
//     cursor: not-allowed;
// }
</style>