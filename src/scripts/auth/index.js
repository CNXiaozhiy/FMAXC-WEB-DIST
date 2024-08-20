import { JSEncrypt } from "jsencrypt";
import CryptoJS from 'crypto-js/crypto-js';
import _ from 'lodash';
import Vue from "vue";

// 登录
export async function login(vc,original){
    let res = false;

    original.sign = CryptoJS.SHA256(original.uname + '@awa' + original.pwd + 'qwq.' + original.verify.sr + '@xzy.' + original.verify.tk + '@maoya..').toString(CryptoJS.enc.Hex)
    const encryptor = new JSEncrypt();
    const publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhvO97w902b4x+lz6tVyH0Gl7bta9hes9O8m8k4iuk3rVH+EwN2ZlOvWFYPoHLuIiVnDnACdHUbtqesB8S5l4Zmt2vm4NAT7U6kORGgOMHzYMwtPYNBwpw80KuY7g9I1c5SvY4xi/ZOsK11i3REwQxdQ0wLCBpExCwGV3QpxPPvFc3xf5obXUe5JCvGvoOnUDIFtZooGXiL3g8mVU2LIWRxcGf1Dg+z1221SEW5Fnb1+s3PhT78QQvT7rGrz+ajz+DST2kA6l23I9Pgf6Yj0Nq3PZIMUjtCkDJeeo/jiN3c+S4orTVYLKBEMzksOdfjICcE0pdHDmRWjqTv7DhyDwIwIDAQAB-----END PUBLIC KEY-----`
    encryptor.setPublicKey(publicKey);
    const encryptData = encryptor.encrypt(JSON.stringify(original));
    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/login',
        data: encryptData,
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                setTimeout(()=>{
                    vc.$router.push('/dashboard');
                },800);
                res = true;
            } else if (response.data.status === 0) {
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else if (response.data.status > 200 && response.data.status < 300) {
                Vue.prototype.$toastx({
                    type: 'danger',
                    title: '未知错误'
                })
            }
        }
    )
    return res;
}

// 注册
export async function reg(vc,original){
    let res = false;

    original.sign = CryptoJS.SHA256(original.uname + '@awa' + original.pwd + 'qwq.' + original.uname + '' + 'a_a.' + '' + 'look me ?' + original.verify.sr + 'love me?' + original.verify.tk + 'too.').toString(CryptoJS.enc.Hex)
    const encryptor = new JSEncrypt();
    const publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhvO97w902b4x+lz6tVyH0Gl7bta9hes9O8m8k4iuk3rVH+EwN2ZlOvWFYPoHLuIiVnDnACdHUbtqesB8S5l4Zmt2vm4NAT7U6kORGgOMHzYMwtPYNBwpw80KuY7g9I1c5SvY4xi/ZOsK11i3REwQxdQ0wLCBpExCwGV3QpxPPvFc3xf5obXUe5JCvGvoOnUDIFtZooGXiL3g8mVU2LIWRxcGf1Dg+z1221SEW5Fnb1+s3PhT78QQvT7rGrz+ajz+DST2kA6l23I9Pgf6Yj0Nq3PZIMUjtCkDJeeo/jiN3c+S4orTVYLKBEMzksOdfjICcE0pdHDmRWjqTv7DhyDwIwIDAQAB-----END PUBLIC KEY-----`
    encryptor.setPublicKey(publicKey);
    const encryptData = encryptor.encrypt(JSON.stringify(original));
    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/reg',
        data: encryptData
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                setTimeout(()=>{
                    vc.$router.push('/auth/login');
                },1000);
            } else if (response.data.status >= -1 && response.data.status <= 5) {
                // -1 - 5 为提醒临界值
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else {
                // 别管了，交给 request
            }
        }
    );
    
    return res;
}

// 检查登录
export async function getUserInfo(vc){
    let resObj = {
        status: 0,
        msg: '未处理完成的请求'
    }
    await vc.$store.dispatch('utils/request',{
        vc,
        method: 'post',
        url: '/user',
    })
    .then(
        response => {
            resObj.status = response.data.status;
            resObj.msg = 'ok';
            resObj.info = response.data.info;
        },
        error => {
            if (error.request.status === 403) resObj = {
                status: 0,
                msg: '需要登录'
            }
        }
    )
    return resObj;
}

export async function quitLogin(vc){
    let resObj = {
        status: 0,
        msg: '未处理完成的请求'
    };
    await vc.$store.dispatch('utils/request',{
        vc,
        method: 'post',
        url: '/user/logout',
    })
    .then (
        response => {
            resObj = response.data;
        },
        error => {
            if (error.request.status === 403) resObj = error.request.data
        }
    );
    return resObj;
}

export async function bind_qq(vc,original){
    let res = false;

    original.sign = CryptoJS.SHA256(original.qid + '@awa!imxz').toString(CryptoJS.enc.Hex)
    const encryptor = new JSEncrypt();
    const publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhvO97w902b4x+lz6tVyH0Gl7bta9hes9O8m8k4iuk3rVH+EwN2ZlOvWFYPoHLuIiVnDnACdHUbtqesB8S5l4Zmt2vm4NAT7U6kORGgOMHzYMwtPYNBwpw80KuY7g9I1c5SvY4xi/ZOsK11i3REwQxdQ0wLCBpExCwGV3QpxPPvFc3xf5obXUe5JCvGvoOnUDIFtZooGXiL3g8mVU2LIWRxcGf1Dg+z1221SEW5Fnb1+s3PhT78QQvT7rGrz+ajz+DST2kA6l23I9Pgf6Yj0Nq3PZIMUjtCkDJeeo/jiN3c+S4orTVYLKBEMzksOdfjICcE0pdHDmRWjqTv7DhyDwIwIDAQAB-----END PUBLIC KEY-----`
    encryptor.setPublicKey(publicKey);
    const encryptData = encryptor.encrypt(JSON.stringify(original));
    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/bind/qq',
        data: encryptData,
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                res = true;
            } else if (response.data.status === 0) {
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else if (response.data.status > 200 && response.data.status < 300) {
                Vue.prototype.$toastx({
                    type: 'danger',
                    title: response.data.msg
                })
            }
        }
    )
    return res;
}

export async function unbind_qq(vc){
    let res = false;

    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/unbind/qq',
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                res = true;
            } else if (response.data.status === 0) {
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else if (response.data.status > 200 && response.data.status < 300) {
                Vue.prototype.$toastx({
                    type: 'danger',
                    title: response.data.msg
                })
            }
        }
    );

    return res;
}

export async function modification(vc,original){
    let res = false;
    original.sign = CryptoJS.SHA256(original.nickname + '@awa!mao/yyds').toString(CryptoJS.enc.Hex);
    const encryptor = new JSEncrypt();
    const publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhvO97w902b4x+lz6tVyH0Gl7bta9hes9O8m8k4iuk3rVH+EwN2ZlOvWFYPoHLuIiVnDnACdHUbtqesB8S5l4Zmt2vm4NAT7U6kORGgOMHzYMwtPYNBwpw80KuY7g9I1c5SvY4xi/ZOsK11i3REwQxdQ0wLCBpExCwGV3QpxPPvFc3xf5obXUe5JCvGvoOnUDIFtZooGXiL3g8mVU2LIWRxcGf1Dg+z1221SEW5Fnb1+s3PhT78QQvT7rGrz+ajz+DST2kA6l23I9Pgf6Yj0Nq3PZIMUjtCkDJeeo/jiN3c+S4orTVYLKBEMzksOdfjICcE0pdHDmRWjqTv7DhyDwIwIDAQAB-----END PUBLIC KEY-----`
    encryptor.setPublicKey(publicKey);
    const encryptData = encryptor.encrypt(JSON.stringify(original));
    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/user/modification',
        data: encryptData,
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                res = true;
            } else if (response.data.status === 0) {
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else if (response.data.status > 200 && response.data.status < 300) {
                Vue.prototype.$toastx({
                    type: 'danger',
                    title: response.data.msg
                })
            }
        }
    )
    return res;
}

export async function modification_password(vc,original){
    let res = false;
    original.sign = CryptoJS.SHA256(original.old_pwd + '@awa!xz/yyds' + original.new_pwd + '@hhh_awa' ).toString(CryptoJS.enc.Hex);
    const encryptor = new JSEncrypt();
    const publicKey = `-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhvO97w902b4x+lz6tVyH0Gl7bta9hes9O8m8k4iuk3rVH+EwN2ZlOvWFYPoHLuIiVnDnACdHUbtqesB8S5l4Zmt2vm4NAT7U6kORGgOMHzYMwtPYNBwpw80KuY7g9I1c5SvY4xi/ZOsK11i3REwQxdQ0wLCBpExCwGV3QpxPPvFc3xf5obXUe5JCvGvoOnUDIFtZooGXiL3g8mVU2LIWRxcGf1Dg+z1221SEW5Fnb1+s3PhT78QQvT7rGrz+ajz+DST2kA6l23I9Pgf6Yj0Nq3PZIMUjtCkDJeeo/jiN3c+S4orTVYLKBEMzksOdfjICcE0pdHDmRWjqTv7DhyDwIwIDAQAB-----END PUBLIC KEY-----`
    encryptor.setPublicKey(publicKey);
    const encryptData = encryptor.encrypt(JSON.stringify(original));
    await vc.$store.dispatch('utils/request',{
        method: 'post',
        url: '/user/modification/password',
        data: encryptData,
    })
    .then(
        response => {
            if (response.data.status === 1) {
                Vue.prototype.$toastx({
                    type: 'success',
                    title: response.data.msg
                })
                res = true;
                setTimeout(()=>{
                    vc.$router.push('/auth/login');
                },1000);
            } else if (response.data.status === 0) {
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: response.data.msg
                })
            } else if (response.data.status > 200 && response.data.status < 300) {
                Vue.prototype.$toastx({
                    type: 'danger',
                    title: response.data.msg
                })
            }
        }
    )
    return res;
}