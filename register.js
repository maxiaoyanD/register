$(function(){var _,s=$("#TANGRAM__PSP_4__isAgree"),o=$("#TANGRAM__PSP_4__submit"),e=$("#TANGRAM__PSP_4__userName"),d=$("#TANGRAM__PSP_4__phone"),r=$("#TANGRAM__PSP_4__password"),l=$("#TANGRAM__PSP_4__verifyCode"),t=$("#TANGRAM__PSP_4__verifyCodeSend"),i=60;function c(_){var s=$(_),o=$(_+"Error");switch(_){case"#TANGRAM__PSP_4__userName":return a(_)?/^\d+$/.test(s.val())?(o.html("不能为纯数字！"),void o.css("display","block")):/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(s.val())||(o.html("用户名仅包含中英文、数字和下划线且不能为纯数字"),void o.css("display","block")):void 0;case"#TANGRAM__PSP_4__phone":return a(_)?/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(s.val())?s.val().length<11?(o.html("手机号码长度不足！"),void o.css("display","block")):/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(s.val())||($("#TANGRAM__PSP_4__phone").html("手机号码格式不正确"),void o.css("display","block")):(o.html("必须是数值！"),void o.css("display","block")):void 0;case"#TANGRAM__PSP_4__password":return a(_)?/^[a-zA-Z]\w{5,17}$/.test(s.val())||(o.html("以字母开头，长度在6~18之间，只能包含字母、数字和下划线"),void o.css("display","block")):void 0;case"#TANGRAM__PSP_4__verifyCode":return console.log("TANGRAM__PSP_4__verifyCode"),a(_)?s.val()||(o.html("请求超时,请稍后再试"),void o.css("display","block")):void 0}}function a(_){var s=$(_+"Error");return $(_).val()||(s.html("不能为空！"),void s.css("display","block"))}s.click(function(){s.is(":checked")&&(o.addClass("pass-button-submit"),o.addClass("pass-button-new-submit"))}),o.click(function(){c("#TANGRAM__PSP_4__userName")&&c("#TANGRAM__PSP_4__phone")&&c("#TANGRAM__PSP_4__password")&&alert("注册成功！")}),e.focusout(function(){c("#TANGRAM__PSP_4__userName")||e.css("border","1px solid red")}),d.focusout(function(){c("#TANGRAM__PSP_4__phone")||d.css("border","1px solid red")}),r.focusout(function(){c("#TANGRAM__PSP_4__password")||r.css("border","1px solid red")}),l.focusout(function(){console.log("???"),c("#TANGRAM__PSP_4__verifyCode")||r.css("border","1px solid red")}),t.click(function(){_=setInterval(function(){0==--i?(clearInterval(_),t.val("获取验证码"),i=60,t.removeAttr("disabled"),l.val()||($("#TANGRAM__PSP_4__verifyCodeError").html("请求超时,请稍后再试"),$("#TANGRAM__PSP_4__verifyCodeError").css("display","block"),0)):(t.val(i+"s"),t.attr("disabled",!0),t.unbind("mouseenter").unbind("mouseleave"))},1e3)})});