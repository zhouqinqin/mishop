

// 获取dom元素
var $inputSelet = document.querySelector('.select_regions_inp');
var $recode = document.querySelector('.recode');
var $country_panel= document.querySelector('.country-container-panel');
console.log($country_panel);
var $eare_panel =document.querySelector('.eare-panel');
var $phone_panel =document.querySelector('.phone-panel');
var $select_btn =document.querySelector('.select_btn');
var $err_tip = document.querySelector(".err_tip");
var $submit_step=document.querySelector(".submit_step");
var $record_code =document.querySelector(".record-code");
var $labelbox_inp = document.querySelector(".labelbox_inp");
var $p=document.querySelector(".result-select-regions");

// 点击事件
$inputSelet .onclick=function(){
    $eare_panel.style.display = "block";
}
$select_btn.onclick= function(){
    $phone_panel.style.display = "block";
}

// 事件委托
$eare_panel.onclick = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.nodeName == 'LI') {
        // 把li上面的文本赋值给文本框
        $p.innerHTML = target.innerHTML;
        $eare_panel.style.display="none"; 
        // 隐藏下拉框
    }
}
$phone_panel .onclick = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.nodeName == 'LI') {
        // 把li上面的文本赋值给文本框
        $select_btn .innerHTML = target.lastElementChild.innerHTML;
        $phone_panel.style.display="none"; 
        // 隐藏下拉框
    }
}
// 验证内容
$labelbox_inp.onblur = function () {
    // 文本值去除前后空格
    var val = this.value.trim();
    //展示的文本元素节点
    if (val == '') {
        // 文本框内容为空
        $err_tip.style.display ="block";
    } else{
        var reg =/^1(3|4|5|7|8)\d{9}$/;
        var val = $labelbox_inp.value;
        if(!reg.test(val)){
            alert("手机号码有误，请重填");  
            return false;  
        }
    }
}
$labelbox_inp.oninput=function(){
    $err_tip.style.display ="none";
}
// //发送ajax
// $submit_step.onclick = function (ev) {
//     ev = ev || window.event;
 
// }

