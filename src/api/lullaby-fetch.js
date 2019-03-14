//fetch('请求地址'，init)，将会返回一个Promise对象。

// fetch('https://api.github.com/users/chriscoyier/repos')
// .then(response => {/* do something */})

export default class Agent {
    constructor() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        this.headers.append('Accept', 'application/json, text/javascript, */*; q=0.01');
        this.headers.set('Pragma', 'no-cache');
    }
    handleCatch(){
        console.log('法克，出错了');
    }
    sentMessageGET(){
        return fetch('https://api.github.com/users/chriscoyier/repos')
        .then(response => response.json())
        .then(data=>data)
        .catch(this.handleCatch);
        //这里返回的是一个promise对象
    }
    sentMessagePOST(){
        console.log("you have a post networks");
    }

    

        // return fetch(fullUrl, rq)
        //     .then(this.handleResponse)
        //     .then(json => json)
        //     .catch(this.handleCatch);
    
}