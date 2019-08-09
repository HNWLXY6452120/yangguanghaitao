$(() => {
    $("form").on("submit", function () {
        if ($("form")[0].uemail.value) {
            let saveObj={
                uemail:$("form")[0].uemail.value,
                upwd:$.md5($("form")[0].upwd.value),
            }
            $.ajax({
                url: 'http://127.0.0.1:8080/api/login',
                data:saveObj,
                type: "post",
                dataType: "json",
                // header:{
                //     "Content-Type":'application/x-www-form-urlencoded',
                //     'x-Requested-with':"XMLHttpRequest"
                // }
                beforeSend() {
                    $(".login_show").show();
                }
            }).then((data) => {
                $(".login_show").hide();
                if (data.status == 1) {
                    localStorage.setItem("userInfo",JSON.stringify(data.data));
                    $.cookie("userInfo", JSON.stringify(data.data), {
                        expires: 10
                    })
                    $.cookie("token", JSON.stringify(data.token), {
                        expires: 10
                    })
                    layer.msg(data.msg);
                    setTimeout(() => {
                        window.location = "./../index.html";
                    }, 1000)
                }
                layer.msg(data.msg);
            })
        } else {
            layer.msg('请输入邮箱和密码');
        }
        return false;
    })
})