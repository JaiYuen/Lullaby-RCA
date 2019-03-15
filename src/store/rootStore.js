
import UserStore from './UserStore';
import { decorate, observable } from 'mobx';
import FetchAPI from '../api/lullaby-fetch';
import ResponseCode from '../api/responseCode';

class RootStore {
    hideLoading;
    showLoading;
    constructor() {
        this.fetch=new FetchAPI();
        // const persistData = new PersistData()
        this.userStore = new UserStore(this);
    }
    //发送get请求
    getMessage(url,params){
        return this.fetch.sentMessageGET(url,params).then(json=>this._handleData(json,url,params));
    }
    //发送post请求
    postMessage(url,params){
        return this.fetch.sentMessagePOST(url,params).then(json=>this._handleData(json,url,params));
    }
    //发送文件请求
    postFile(url,params){
        return this.fetch.sentFile(url,params).then(json=>this._handleData(json,url,params));
    }

    _handleData(_json,_url,_params){
        
        if (!_json || _json.result === undefined) return {};
        switch (_json.result) {
            //获取数据成功
            case '0':
                return _json;
            //token过期
            case '-1':
                //return this.UIStore.refreshToken(url, params);
            //自动显示错误信息
                return _json;
            default: {
                console.log(`Requst is get Error,Code :${_json.result}`);
                const msg = ResponseCode.showMsg(_json.result);
                msg && this.showToast(msg);
                return _json;
            }
        }
    }
    
}
decorate(RootStore, {
    hideLoading: observable,
    showLoading: observable
});
export default new RootStore();
