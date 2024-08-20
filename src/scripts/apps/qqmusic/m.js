import axios from 'axios'
async function search(vc,keyword) {
    let data;
    await axios.get('https://www.hhlqilongzhu.cn/api/dg_qqmusic.php?gm=' + keyword)
    .then (
        res => data = res.data
    )
    let arr = [];
    let list = data.split('\n');
    for (let i = 0; i < list.length; i++) {
        let index_info = list[i].split('、');
        if (index_info.length < 2) { list.splice(i, 1); continue; }
        const index = index_info[0];
        const info = index_info[1];
        let song = info.slice(0,info.indexOf('--'));
        let singer = info.slice(info.indexOf('--')+2);
        arr.push({ index, song, singer })
    }
    return arr;
}
async function getInfo(vc, keyword, index) {
    let data;
    await axios.get('https://www.hhlqilongzhu.cn/api/dg_qqmusic.php?gm=' + keyword + '&n=' + index)
    .then (
        res => data = res.data
    )
    let list = data.split('\n');
    let obj = {};
    for (let i = 0; i < list.length; i++) {
        if (list[i] == '') {
            continue;
        }
        if (list[i].indexOf('±img=') != -1) {
            let img = list[i].slice(list[i].indexOf('±img=')+5);
            // 删除最后一个±
            if (img[img.length-1] == '±') img = img.slice(0, img.length-1);
            obj.img = img;
        } else
        if (list[i].indexOf('歌名：') != -1) {
            let song = list[i].slice(list[i].indexOf('歌名：')+3);
            obj.song = song;
        } else 
        if (list[i].indexOf('歌手：') != -1) {
            let singer = list[i].slice(list[i].indexOf('歌手：')+3);
            obj.singer = singer;
        } else
        if (list[i].indexOf('歌曲详情页：') != -1) {
            let details = list[i].slice(list[i].indexOf('歌曲详情页：')+6);
            obj.details = details;
        } else
        if (list[i].indexOf('播放链接：') != -1) {
            let url = list[i].slice(list[i].indexOf('播放链接：')+5);
            obj.url = url;
        }
    }
    return obj;
}

export { search, getInfo }