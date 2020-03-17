$(function(){
    var $isAgree = $("#TANGRAM__PSP_4__isAgree"),
        $submit = $('#TANGRAM__PSP_4__submit'),
        $form = $('#TANGRAM__PSP_4__form'),
        $userName = $('#TANGRAM__PSP_4__userName'),//用户名
        $phone = $('#TANGRAM__PSP_4__phone'),//手机号
        $password = $('#TANGRAM__PSP_4__password'),//密码
        $verifyCode = $('#TANGRAM__PSP_4__verifyCode'),//验证码
        $verifyCodeSend = $('#TANGRAM__PSP_4__verifyCodeSend'),
        count = 60,
        timer;
    var $verifyCodeTag = true;
        $isAgree.click(function(){
            if($isAgree.is(':checked')){
                $submit.addClass('pass-button-submit');
                $submit.addClass('pass-button-new-submit');
            }
        })
       //表单级验证
        $submit.click(function(){
            if(!validate('#TANGRAM__PSP_4__userName') || 
                !validate('#TANGRAM__PSP_4__phone') || 
                !validate('#TANGRAM__PSP_4__password' || 
                !validate('#TANGRAM__PSP_4__verifyCode'))){
                return;
            }
            alert("注册成功！")
        })
        function validate(field){
            var $date = $(field),
                $msg = $(field+'Error');
            switch (field){
                case '#TANGRAM__PSP_4__userName':
                    if(!checkNull(field)){
                        return false;
                    }
                    if((/^\d+$/.test($date.val()))){
                        $msg.html('不能为纯数字！');
                        $msg.css("display","block");
                        return false;
                    }else if(!(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test($date.val()))){
                        $msg.html('用户名仅包含中英文、数字和下划线且不能为纯数字');
                        $msg.css("display","block");
                        return false;
                    }
                    return true;
                case '#TANGRAM__PSP_4__phone':
                    if(!checkNull(field)){
                        return false;
                    }

                    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($date.val())){
                        $msg.html('必须是数值！');
                        $msg.css("display","block");
                        return false;
                    }
                    if($date.val().length < 11){
                        $msg.html('手机号码长度不足！');
                        $msg.css("display","block");
                        return false;
                    }
                    if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test($date.val())){
                        $('#TANGRAM__PSP_4__phone').html('手机号码格式不正确');
                        $msg.css("display","block");
                        return false;
                    }
                    return true;
                case '#TANGRAM__PSP_4__password':
                    if(!checkNull(field)){
                        return false;
                    }
                    if(!/^[a-zA-Z]\w{5,17}$/.test($date.val())){
                        $msg.html('以字母开头，长度在6~18之间，只能包含字母、数字和下划线');
                        $msg.css("display","block");
                        return false;
                    }
                    return true;
                case '#TANGRAM__PSP_4__verifyCode':
                    console.log('TANGRAM__PSP_4__verifyCode')
                    if(!checkNull(field)){
                        return false;
                    }
                    if(!$date.val()){
                        $msg.html('请求超时,请稍后再试');
                        $msg.css("display","block");
                        return false;
                    }
                    return true;
                default:
                    break;
            }
        }
       //字段级验证
        function checkNull(field){
            var $msg = $(field+'Error');
            if(!$(field).val()){
                $msg.html('不能为空！');
                $msg.css("display","block");
                return false;
            }else{
                return true;
            }
        }
       //用户名验证
        $userName.focusout(function(){
            if(!validate('#TANGRAM__PSP_4__userName')){
                $userName.css("border","1px solid red");
            }
        })
        $phone.focusout(function(){
            if(!validate('#TANGRAM__PSP_4__phone')){
                $phone.css("border","1px solid red");
            }
        })
        $password.focusout(function(){
            if(!validate('#TANGRAM__PSP_4__password')){
                $password.css("border","1px solid red");
            }
        })
        $verifyCode.focusout(function(){
            console.log("???")
            if(!validate('#TANGRAM__PSP_4__verifyCode')){
                $password.css("border","1px solid red");
            }
        })
       //验证码发送
        $verifyCodeSend.click(function(){
            timer = setInterval(function(){
                count --;
                if(count == 0){
                    clearInterval(timer);
                    $verifyCodeSend.val('获取验证码');
                    count=60;
                    $verifyCodeSend.removeAttr('disabled');
                    if( !$verifyCode.val()){
                        $("#TANGRAM__PSP_4__verifyCodeError").html("请求超时,请稍后再试");
                        $("#TANGRAM__PSP_4__verifyCodeError").css("display","block");
                        $verifyCodeTag = false;
                    }
                }else{
                    $verifyCodeSend.val(count + 's')
                    $verifyCodeSend.attr("disabled",true); 
                    $verifyCodeSend.unbind("mouseenter").unbind("mouseleave");
                }
            },1000)
        })
})