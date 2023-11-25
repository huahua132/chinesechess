// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.dot = this.node.getChildByName("dot")
        this.dot.active = false                    //红点
    },

    on_click(event) {
        this.node.m_chess_mgr.on_pos_click(event)
    },

    show_dot() {
        this.dot.active = true 
    },

    unshow_dot() {
        this.dot.active = false 
    },

    start () {

    },

    // update (dt) {},
});
