/**
 * 过滤特殊字符
 */
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
export function emailValidator(value){
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
    // if(reg.test(value)){
    //     return true;
    // }else{
    //     return false;
    // }
    return reg.test(value)?true: false
}
export function passwordValidator(value){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/; 
    return reg.test(value)?true: false
}
export function codeValidator(value){
    let reg =/^[a-z0-9]{6}$/; 
    return reg.test(value)?true: false
}

