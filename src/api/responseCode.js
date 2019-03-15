class ResponseCode{
    codes={
        "9999":"服务器出现错误",
        "0":"成功",
        "-1":"过期"
    }

    showMsg(code){
        return this.codes[code.toString()];
    }



}

export default new ResponseCode();