// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        rect : {
            default: null,
            type : cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       
    },

    start () {
        console.log("dd>>>> ",this.rect)
        let ctx = this.rect.getComponent(cc.Graphics);
        ctx.rect(-10000, -10000, 20000, 20000);
        ctx.stroke();
    },

    // update (dt) {},
});
