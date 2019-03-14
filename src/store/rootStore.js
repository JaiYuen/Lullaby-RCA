
import UserStore from './UserStore';
import { action, decorate, observable } from 'mobx';
import FetchAPI from '../api/lullaby-fetch'

class RootStore {
    hideLoading;
    showLoading;
    constructor() {
        this.fetch=new FetchAPI();
        // const persistData = new PersistData()
        this.userStore = new UserStore(this);
    }

    getMessage(){
        this.fetch.sentMessageGET().then(json=>{console.log(json)});
    }
    postMessage(){
        this.fetch.sentMessagePOST().then(json=>{console.log(json)});
    }
    
}
decorate(RootStore, {
    hideLoading: observable,
    showLoading: observable
});
export default new RootStore();
