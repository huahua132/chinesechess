// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import {CHESS_TYPE} from '../jslib/enum/CHESS'
import {TEAM_TYPE} from '../jslib/enum/TEAM'

cc.Class({
    extends: cc.Component,

    properties: {
        chess_type : 0, //棋子类型
        row : 0,  //当前行
        col : 0,  //当前列
        id : 0,   //棋子id
        team_type : 0, //队伍
        is_self : false, //是否是自己的棋子
        is_k : false, //是否挂了
    },

    // LIFE-CYCLE CALLBACKS:

    set_chess_type (c_type) {
        this.chess_type = c_type
        if (c_type > CHESS_TYPE.BLACK_Z) {
            this.team_type = TEAM_TYPE.RED
        } else {
            this.team_type = TEAM_TYPE.BLACK
        }
        console.log("chess_type :",this.team_type)
    },

    set_is_self(is_self) {
        this.is_self = is_self
    },

    get_is_self() {
        return this.is_self
    },
    //车
    is_c() {
        return this.chess_type == CHESS_TYPE.BLACK_C || this.chess_type == CHESS_TYPE.RED_C
    },
    //将
    is_j() {
        return this.chess_type == CHESS_TYPE.BLACK_J || this.chess_type == CHESS_TYPE.RED_J
    },
    //马
    is_m() {
        return this.chess_type == CHESS_TYPE.BLACK_M || this.chess_type == CHESS_TYPE.RED_M
    },
    //炮
    is_p() {
        return this.chess_type == CHESS_TYPE.BLACK_P || this.chess_type == CHESS_TYPE.RED_P
    },
    //士
    is_s() {
        return this.chess_type == CHESS_TYPE.BLACK_S || this.chess_type == CHESS_TYPE.RED_S
    },
    //象
    is_x() {
        return this.chess_type == CHESS_TYPE.BLACK_X || this.chess_type == CHESS_TYPE.RED_X
    },
    //卒
    is_z() {
        return this.chess_type == CHESS_TYPE.BLACK_Z || this.chess_type == CHESS_TYPE.RED_Z
    },

    get_chess_type () {
        return this.chess_type
    },

    set_pos (r,c) {
        this.row = r
        this.col = c
    },

    set_id (id) {
        this.id = id
    },

    get_id () {
        return this.id
    },

    killed() {
        this.is_k = true
        this.node.active = false
    },

    is_kill() {
        return this.is_k
    },

    get_team_type() {
        return this.team_type
    },

    get_pos () {
        return {
            row : this.row,
            col : this.col,
        }
    },

    //放下
    un_touch() {
        this.box.active = false
    },

    //拿起
    touch() {
        this.box.active = true
    },

    //移动
    move(target_pos) {
        console.log("move: ",target_pos.m_row,target_pos.m_col)
        this.row = target_pos.m_row
        this.col = target_pos.m_col
        let pre_index =  this.node.zIndex
        cc.tween(this.node).to(0.3,{position: cc.v2(target_pos.x + 3.5,target_pos.y - 3.5),zIndex : 100})
                           .to(0, {zIndex : pre_index})
                           .start()
    },

    onLoad () {
        this.box = this.node.getChildByName("box")
        this.box.active = false
    },

    start () {

    },

    // update (dt) {},
});
