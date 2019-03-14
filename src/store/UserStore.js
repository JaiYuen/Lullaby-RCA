import { observable, action, decorate } from 'mobx';
import PersistData from './PersistData';
/**
 * 用户登录  示例代码，可以删除
 */
class UserStore {
    mobile;
    nickName;
    counts=0;
    constructor(rootStore) {
        this.rootStore = rootStore;
        // 添加需要持久化的监听
        PersistData.set('nickName', this);
        // 持久化到SeesionStorage，不传最后一个参数
        PersistData.set('mobile', this, true);
        // PersistData.set('firstSight', this);
        //从持久层初始化数据
        this.mobile = PersistData.get('mobile', this);
    }

    setMobile(mobile) {
        this.mobile = mobile;
    }
    setCounts(){
        this.counts+=1;
    }
    clickBtn(){
        this.rootStore.getMessage();
    }

}
decorate(UserStore, {
    counts: observable,
    mobile: observable,
    nickName: observable,
    setMobile: action,
    setCounts: action,
});
export default UserStore;
