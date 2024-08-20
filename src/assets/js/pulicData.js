import { JSEncrypt } from "jsencrypt";
import CryptoJS from 'crypto-js/crypto-js';
import _ from 'lodash';
import axios from "axios";

// 获取公告
export async function getBulletin() {
    const eventID = '75f2fa63-4f5f-4664-b748-aee38a14da91';
    let resObj = {
        status: 0,
        msg: '未处理完成的数据'
    };
    await axios({
        method: 'post',
        url: '/api/v1/get/public/' + eventID,
        headers:{
        'content-type':"application/json"
        },
        withCredentials: 'include'
    })
    .then(
        response => {
            if (_.get(response.data,'status') === 1){
                resObj = response.data;
            }
        },
        error => {
            resObj = _.get(error,'response.data');
        }
    )

    return resObj;
}