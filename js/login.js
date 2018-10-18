
// 登录切换
$(document).ready(function(){
    //点击扫描登录
    $(".loadMa").click(function(){
        $("acc").hide();
       $(".sss").show();
   });

   //点击账号登录
   $(".loadcode").click(function(){
    $(".sss").hide();
   $(".acc").fadeIn();
});
});

    


 // 发送ajax
var login = (function () {
    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['btn'];
            
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            console.log(this.$usernameInp);
            this.event();
        },
        event: function () {
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function () {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function (data) {
                        console.log(data);
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost/Milletmall/php/login.php', params);
            }
        },
        loginSuccess: function (data) {
            if (data.code == 200) {
                var userId = data.data.id;
                // document.cookie = "user-id=" + data.data.id;
                // document.cookie = "token=" + data.data.token;
                var loginObject = '{"userId":"'+data.data.id+'","token":"'+data.data.token+'"}';
              //  alert(loginObject+'---');
                var _cookie = new OperationCookie();
                _cookie.setItem("loginMessage",loginObject,10);
                _cookie.setItem("loginUserId",userId,10);
               // alert(_cookie.getItem("loginMessage"));
                localStorage.userImg = data.data.ataver;
                location.href = 'milletmall.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())

// 表单验证
// var verification = (function () {
//     var $from = document.querySelector('.login-form');
//     var $btn = document.querySelector('.btn');
//     var $inpAll = document.querySelectorAll('input');
//     var $inp_null=document.querySelectorAll('.inp-null');
//     console.log($inp_null);
//     var $text=document.querySelectorAll('.text');
//     var $pss= document.querySelectorAll('.pass');
//     return {
//         init: function () {
//             this.event();
//         },
//         event: function () {
//             var _this = this;
//             for (var i = 0; i < $inpAll.length; i++) {
//                 $inpAll[i].blur = function () {
//                     // 文本值去除前后空格
//                     var val = this.value.trim();
//                     if (val == '') {
//                         // 文本框内容为空
//                         $tipText.className = 'bg-danger';
//                         $tipText.innerHTML = '输入内容不能为空';
//                     }
//                 }
//             }
//             $btn.onclick = function (ev) {
//                 ev = ev || window.event;
//                 for (var i = 0; i < $inpAll.length; i++) {
//                     $inpAll[i].focus();
//                     $inpAll[i].blur();
//                 }
//                 // 获取失败元素
//                 // 如果有一个， 证明至少有一个表单没有通过验证
//                 var errorInput = $from.querySelector('.bg-danger');
//                 if (errorInput) {
//                     errorInput.parentNode.querySelector('input').focus();
//                 } else {
//                     console.log('恭喜成功')
//                 }
//             }
//         }
//     }
// }())

