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
        },
        self_ball : {
            default: null,
            type : cc.Node,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.rect = {w : false, s : false, a : false, d : false}
        this.max_move_speed = 400           //最大移动速度
        this.x_speed = 0                    //x方向速度
        this.y_speed = 0                    //y方向速度
        this.accel = 350                    //加速度
    },

    onKeyDown (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w: {
                this.rect.w = true
                //console.log("onKeyDown w")
                break
            }
            case cc.macro.KEY.s: {
                this.rect.s = true
                //console.log("onKeyDown s")
                break
            }
            case cc.macro.KEY.a: {
                this.rect.a = true
                //console.log("onKeyDown a")
                break
            }
            case cc.macro.KEY.d: {
                this.rect.d = true
                //console.log("onKeyDown d")
                break
            }
        }
    },

    onKeyUp (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w: {
                this.rect.w = false
                //console.log("onKeyUp w")
                break
            }
            case cc.macro.KEY.s: {
                this.rect.s = false
                //console.log("onKeyUp s")
                break
            }
            case cc.macro.KEY.a: {
                this.rect.a = false
                //console.log("onKeyUp a")
                break
            }
            case cc.macro.KEY.d: {
                this.rect.d = false
                //console.log("onKeyUp d")
                break
            }
        }
    },


    start () {
        console.log("dd>>>> ",this.rect)
        let ctx = this.rect.getComponent(cc.Graphics);
        ctx.rect(-200, -200, 400, 400);
        ctx.stroke();
    },

    update (dt) {
        if (this.rect.w) {
            this.y_speed += this.accel * dt;
        }

        if (this.rect.s) {
            this.y_speed -= this.accel * dt;
        }

        if (this.rect.a) {
            this.x_speed -= this.accel * dt;
        }

        if (this.rect.d) {
            this.x_speed += this.accel * dt;
        }

        if (Math.abs(this.x_speed) > this.max_move_speed) {
           this.x_speed = this.max_move_speed * this.x_speed / Math.abs(this.x_speed)
        }
        if (Math.abs(this.y_speed) > this.max_move_speed) {
            this.y_speed = this.max_move_speed * this.y_speed / Math.abs(this.y_speed)
        }

        let change_x = this.x_speed * dt;
        let change_y = this.y_speed * dt;

        let self_ball_obj = this.self_ball.getComponent('ball')
        self_ball_obj.move(change_x, change_y)
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
});
