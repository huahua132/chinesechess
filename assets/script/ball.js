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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {

    },

    onKeyDown (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w: {
                console.log("onKeyDown w")
                break
            }
            case cc.macro.KEY.s: {
                console.log("onKeyDown s")
                break
            }
            case cc.macro.KEY.a: {
                console.log("onKeyDown a")
                break
            }
            case cc.macro.KEY.d: {
                console.log("onKeyDown d")
                break
            }
        }
    },

    onKeyUp (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w: {
                console.log("onKeyUp w")
                break
            }
            case cc.macro.KEY.s: {
                console.log("onKeyUp s")
                break
            }
            case cc.macro.KEY.a: {
                console.log("onKeyUp a")
                break
            }
            case cc.macro.KEY.d: {
                console.log("onKeyUp d")
                break
            }
        }
    },

    // update (dt) {},
});
