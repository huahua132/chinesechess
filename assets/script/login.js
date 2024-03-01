// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
    },
    // update (dt) {},
});
