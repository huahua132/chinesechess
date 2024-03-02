// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var global = require("global")

cc.Class({
    extends: cc.Component,

    properties: {
        box : {
            default: null,
            type : cc.Node,
        },

        commit : {
            default: null,
            type : cc.Node,
        },

        account : {
            default: null,
            type : cc.Node,
        },

        password : {
            default : null,
            type : cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.box.active = false
    },

    start () {

    },

    onLoginClick(event) {
        this.box.active = true
        this.mtype = "login"
        let label = this.commit.getComponent(cc.Label)
        label.string = "登录"
    },

    onSignUpClick(event) {
        this.box.active = true
        this.mtype = "signup"
        let label = this.commit.getComponent(cc.Label)
        label.string = "注册"
    },

    onCancelClick(event) {
        this.box.active = false
    },

    onCommitClick(event) {
        let account_editBox = this.account.getComponent(cc.EditBox)
        let password_editBox = this.password.getComponent(cc.EditBox)
        console.log("onCommitClick >>> ", account_editBox.string, password_editBox.string)

        let host = "http://127.0.0.1:11014"
        let xhr = new XMLHttpRequest()
        let data = {}
        let code = 0
        let message = ""
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                response = JSON.parse(response)
                console.log("response: ", response);
                code = response.code
                message = response.message
                data = response.data
            }
        }

        let url = ""
        if (this.mtype == "login") {
            url = host + '/user/login'
        } else {
            url = host + '/user/signup'
        }
        
        xhr.open("POST", url, false)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({
            account : account_editBox.string,
            password : password_editBox.string
        }));

        //成功
        if (code == 0) {
            if (this.mtype == "login") {
                //进入大厅
                global.hallhost = data.host
                global.halltoken = data.token
                cc.director.loadScene("hall");
            }
        } else {
            //失败

        }
    },
    // update (dt) {},
});
