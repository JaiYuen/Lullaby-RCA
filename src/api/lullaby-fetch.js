//fetch('请求地址'，init)，将会返回一个Promise对象。

// fetch('https://api.github.com/users/chriscoyier/repos')
// .then(response => {/* do something */})
import 'isomorphic-fetch';

export default class Agent {
    constructor() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        this.headers.append('Accept', 'application/json, text/javascript, */*; q=0.01');
        this.headers.set('Pragma', 'no-cache');
    }
    handleCatch(e){
        console.error(e);
        return undefined;
    }
    sentMessageGET(url,params){
        // return fetch('https://api.github.com/users/chriscoyier/repos')
        // .then(response => response.json())
        // .then(data=>data)
        // .catch(this.handleCatch);
        //这里返回的是一个promise对象
        return this.sendRequest(url,params,'GET');
    }
    sentMessagePOST(url,params){
        return this.sendRequest(url,params,'POST');
    }

    sentFile(url,params){
        return this.sendRequest(url,params,'POST',true);
    }

    handleResponse(response) {
        if (!response || response.status >= 400) {
            return undefined;
        } else {
            return response.json();
        }
    }

    sendRequest(url,_params,_type,isFile){
        let fullUrl = url;
        let type = _type;
        let params = _params;
        //type不传就默认为GET
        type = type ? type : 'GET';
        //组装参数
        params = params ? params : {};
        let form = [];
        if (isFile) {
            //上传文件是删除Content-Type,使用浏览器自动生成的
            this.headers.delete('Content-Type');
            form = new FormData();
            Object.keys(params).forEach(key => {
                const value = params[key];
                if (value !== undefined) {
                    form.append(key, typeof value === 'string' ? value.trim() : value);
                }
            });
        } else {
            this.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8;');
            Object.keys(params).forEach(key => {
                const value = params[key];
                if (params[key] !== undefined) {
                    form.push(`${key}=${encodeURIComponent(typeof value === 'string' ? value.trim() : value)}`);
                }
            });
            form = form.join('&');
        }

        let rq = {
            method: type,
            headers: this.headers,
            //提交cookie
            credentials: 'include'
        };
        //如果是GET请求，就拼接URL
        if (type === 'GET') {
            if (fullUrl.search(/\?/) === -1) {
                if (form.length !== 0) fullUrl = `${fullUrl}?${form}`;
            } else {
                fullUrl = `${fullUrl}&${form}`;
            }
        } else {
            rq.body = form;
        }

        return fetch(fullUrl, rq)
            .then(this.handleResponse)
            .then(json => json)
            .catch(this.handleCatch);
    }
    }

    

        // return fetch(fullUrl, rq)
        //     .then(this.handleResponse)
        //     .then(json => json)
        //     .catch(this.handleCatch);
    