// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import {CHESS_TYPE} from '../jslib/enum/CHESS'
import {TEAM_TYPE} from '../jslib/enum/TEAM'
import proto from '../proto.js/proto.js'
import netpack from '../jslib/net/netpack.js'
import {GAME_STATE} from '../jslib/enum/GAME_STATE.js'
import pack_helper from '../jslib/pack_helper.js'
var global = require("global")

import COMMON_PACK from '../jslib/pack/COMMON_PACK.js'
import GAME_COMMON_PACK from '../jslib/pack/GAME_COMMON_PACK.js'
import CHESS_PACK from '../jslib/pack/CHESS_PACK.js'

var PACK = pack_helper.new([COMMON_PACK, GAME_COMMON_PACK, CHESS_PACK])

console.log(">>>>>>>>>>>>>>>>>>>PACK>>>>>>>>>>>>>>>", PACK)

var sprite_index_map = {
    [CHESS_TYPE.BLACK_C] : 0,
    [CHESS_TYPE.BLACK_J] : 1,
    [CHESS_TYPE.BLACK_M] : 2,
    [CHESS_TYPE.BLACK_P] : 3,
    [CHESS_TYPE.BLACK_S] : 4,
    [CHESS_TYPE.BLACK_X] : 5,
    [CHESS_TYPE.BLACK_Z] : 6,

    [CHESS_TYPE.RED_C] : 7,
    [CHESS_TYPE.RED_J] : 8,
    [CHESS_TYPE.RED_M] : 9,
    [CHESS_TYPE.RED_P] : 10,
    [CHESS_TYPE.RED_S] : 11,
    [CHESS_TYPE.RED_X] : 12,
    [CHESS_TYPE.RED_Z] : 13,
}

cc.Class({
    extends: cc.Component,

    properties: {
        chess_sprite : {
            default: [],
            type: cc.SpriteFrame
        },

        chess_prefab : {
            default: null,
            type : cc.Prefab,
        },

        pos_prefab : {
            default: null,
            type : cc.Prefab,
        },

        pos_list : {
            default : null,
            type : cc.Node,
        },

        borad : {
            default: null,
            type : cc.Node,
        },

        result : {
            default: null,
            type : cc.Node,
        },

        win : {
            default: null,
            type : cc.Node,
        },

        lose : {
            default: null,
            type : cc.Node,
        },

        self_player : {
            default: null,
            type : cc.Node,
        },

        rival_player : {
            default: null,
            type : cc.Node,
        },

        touch_chess : null,      //拿起的棋子
    },

    set_chess_pos(chess,row,col) {
        let chess_obj = chess.getComponent('chess')
        chess_obj.set_pos(row,col)
        let pos = this.pos_map[row - 1][col - 1]
        chess.setPosition(cc.v2(pos.x + 3.5,pos.y - 3.5))
    },

    show_can_move_pos() {
        let can_move_pos_list = this.can_move_pos_list
        for (let i = 0; i < can_move_pos_list.length; i++) {
            let pos = can_move_pos_list[i]
            let pos_script = pos.getComponent("pos")
            pos_script.show_dot()
        }
    },

    check_can_move(target_pos) {
        let can_move_pos_list = this.can_move_pos_list
        for (let i = 0; i < can_move_pos_list.length; i++) {
            let pos = can_move_pos_list[i]
            if (pos == target_pos) {
                return true
            }
        }
        return false
    },

    unshow_can_move_pos() {
        let can_move_pos_list = this.can_move_pos_list
        for (let i = 0; i < can_move_pos_list.length; i++) {
            let pos = can_move_pos_list[i]
            let pos_script = pos.getComponent("pos")
            pos_script.unshow_dot()
        }
    },

    // LIFE-CYCLE CALLBACKS:
    on_pos_click(event) {
        if (this.m_state != GAME_STATE.playing) return
        if (this.m_player_info.player_id != this.m_next_doing.player_id) return
        console.log("event ",event)
        let target = event.target
        let row = target.m_row
        let col = target.m_col
        let chess = this.chess_pos_map[row - 1][col - 1]
        let chess_script = null
        if (chess) {
            chess_script = chess.getComponent("chess")
            console.log("chess ",chess_script.get_team_type(),chess_script.get_pos(),chess_script.get_chess_type())
        }

        console.log("on_pos_click:",this.touch_chess,target,chess)
        if (this.touch_chess) {     //已经拿起棋子
            let touch_script = this.touch_chess.getComponent("chess")
            if (chess && chess_script.get_is_self()) {    //放下或者拿起其他棋子
                this.touch_chess = null
                touch_script.un_touch()
                this.unshow_can_move_pos()
                if (touch_script.get_id() == chess_script.get_id()) {
                    return
                }
            } else {                            //移动
                if (!this.check_can_move(target)) {
                    return
                }

                if (chess) {                   //有棋子
                    console.log("get_team_type ",chess_script.get_team_type(),touch_script.get_team_type())
                    if (chess_script.get_team_type() != touch_script.get_team_type()) {
                        //敌方棋子
                        
                    } else {
                        //友方棋子
                        return
                    }
                } else {
                    //位置
                }

                let move_req = {
                    chessId : touch_script.get_id(),
                    moveRow : target.m_row,
                    moveCol : target.m_col,
                }
                let buffer = netpack.pack(PACK.chinese_chess_game.moveReq,proto.chinese_chess_game.moveReq.encode(move_req).finish())
                this.wsSocket.send(buffer)
            }
        } 

        if (chess && chess_script.get_is_self()) {      //拿起
            let chess_id = chess_script.get_id()
            console.log("chess_id:",chess_id,this.m_next_doing.can_move_list_map[chess_id])
            this.can_move_pos_list = this.m_next_doing.can_move_list_map[chess_id]
            if (!this.can_move_pos_list) {
                this.can_move_pos_list = []
            }
            this.show_can_move_pos(chess)
            chess_script.touch()
            this.touch_chess = chess
        }
    },

    LoginRes(msg) {
        console.log("LoginRes:",msg)
        if (msg.isreconnect == 0) {
            let match_req = {
                tableId : global.gametableid
            }
            let buffer = netpack.pack(PACK.game_hall.JoinReq,proto.game_hall.JoinReq.encode(match_req).finish())
            this.wsSocket.send(buffer)
        } else {
            let game_state_req = {
                playerId : global.player_id
            }
            let buffer = netpack.pack(PACK.chinese_chess_game.gameStateReq,proto.chinese_chess_game.gameStateReq.encode(game_state_req).finish())
            this.wsSocket.send(buffer)
        }

        // 以秒为单位的时间间隔
        var interval = 5;
        this.schedule(function() {
            // 这里的 this 指向 component
            let heart_req = {
                time: Date.now()
            };
            
            let send_buffer = netpack.pack(PACK.game_hall.HeartReq,proto.game_hall.HeartReq.encode(heart_req).finish())
            this.wsSocket.send(send_buffer)
        }, interval);
    },

    nextDoing(msg) {
        console.log("next doing:",msg)
        this.m_next_doing = {
            player_id : msg.playerId,
            team_type : msg.teamType,
            can_move_list_map : {},
            remain_total_time : msg.remainTotalTime,
            remain_once_time : msg.remainOnceTime,
        }

        let pos_map = this.pos_map
        for (let i = 0; i < msg.canMoveList.length; i++) {
            let move_obj = msg.canMoveList[i]
            let chess_id = move_obj.chessId
            this.m_next_doing.can_move_list_map[chess_id] = []
            for (let j = 0; j < move_obj.rowList.length; j++) {
                let row = move_obj.rowList[j] - 1
                let col = move_obj.colList[j] - 1
                this.m_next_doing.can_move_list_map[chess_id].push(pos_map[row][col])
            }
        }
        this.m_doing_time = 0
        console.log("next doing:",this.m_next_doing)
    },

    showBaseInfo() {
        console.log("showBaseInfo >>>>>>>>>>>>>>>>>", this.m_rival_player, this.m_player_info)
        let nickname = this.rival_player.getChildByName("nickname")
        let content = nickname.getChildByName("content")
        let label = content.getComponent(cc.Label)
        label.string = this.m_rival_player.nickname

        let score = this.rival_player.getChildByName("score")
        content = score.getChildByName("content")
        label = content.getComponent(cc.Label)
        label.string = this.m_rival_player.score

        nickname = this.self_player.getChildByName("nickname")
        content = nickname.getChildByName("content")
        label = content.getComponent(cc.Label)
        label.string = this.m_player_info.nickname

        score = this.self_player.getChildByName("score")
        content = score.getChildByName("content")
        label = content.getComponent(cc.Label)
        label.string = this.m_player_info.score
    },

    gameStateRes(msg) {
        console.log("gameStateRes:",msg)
        this.m_player_list = msg.playerList
        this.m_state = msg.state
        this.m_rival_player = {}
        for(let i = 0; i < msg.playerList.length; i++) {
            let one_player = msg.playerList[i]
            if ( one_player.playerId == this.m_player_info.player_id ) {
                this.m_player_info.team_type = one_player.teamType
                this.m_player_info.nickname = one_player.nickname
                this.m_player_info.score = one_player.score
            } else {
                this.m_rival_player.nickname = one_player.nickname
                this.m_rival_player.score = one_player.score
            }
        }
        this.showBaseInfo()
        console.log("m_team_type :",this.m_player_info)

        if (!this.m_chess_list && msg.chessList && msg.chessList.length > 0) {
            this.m_chess_list = []
            for (let i = 0; i < msg.chessList.length; i++) {
                let one_chess = msg.chessList[i]
                this.m_chess_list.push({
                    chess_type : one_chess.chessType,
                    col : one_chess.col,
                    row : one_chess.row,
                    chess_id : one_chess.chessId,
                })
            }
    
            this.init_chess_borad()
        }
        this.nextDoing(msg.nextDoing)

        if (this.m_state == GAME_STATE.over) {
            this.result.active = true
            if (msg.winPlayerId == global.player_id) {
                this.lose.active = false
            } else {
                this.win.active = false
            }
        }
    },

    moveRes(msg) {
        console.log("moveRes:",msg)
        let chess_id = msg.chessId
        let move_row = msg.moveRow
        let move_col = msg.moveCol

        let move_chess = this.chess_map[chess_id]
        let move_chess_script = move_chess.getComponent("chess")
        let move_chess_pos = move_chess_script.get_pos()
        let target_pos = this.pos_map[move_row - 1][move_col - 1]
        move_chess_script.move(target_pos)

        let target_chess = this.chess_pos_map[move_row - 1][move_col - 1]
        let target_script = null
        if (target_chess) {
            target_script = target_chess.getComponent("chess")
            target_script.killed()
        }

        this.chess_pos_map[move_chess_pos.row - 1][move_chess_pos.col - 1] = null
        this.chess_pos_map[move_row - 1][move_col - 1] = move_chess
       
        if (this.touch_chess) {
            let touch_script = this.touch_chess.getComponent("chess")
            touch_script.un_touch()
            this.unshow_can_move_pos()
        }
    },

    JoinRes(msg) {
        console.log("JoinRes:",msg)
        let game_state_req = {
            playerId : global.player_id
        }
        let buffer = netpack.pack(PACK.chinese_chess_game.gameStateReq,proto.chinese_chess_game.gameStateReq.encode(game_state_req).finish())
        this.wsSocket.send(buffer)
    },

    dispatch(packid,packbuffer) {
        switch(packid) {
            case PACK.login.LoginRes:{
                let msg = proto.login.LoginRes.decode(packbuffer);
                this.LoginRes(msg)
                break
            }
            case PACK.chinese_chess_game.gameStateRes:{
                let msg = proto.chinese_chess_game.gameStateRes.decode(packbuffer);
                this.gameStateRes(msg)
                break
            }
            case PACK.chinese_chess_game.nextDoing:{
                let msg = proto.chinese_chess_game.nextDoing.decode(packbuffer);
                this.nextDoing(msg)
                break
            }
            case PACK.chinese_chess_game.moveRes:{
                let msg = proto.chinese_chess_game.moveRes.decode(packbuffer);
                this.moveRes(msg)
                break
            }
            case PACK.game_hall.JoinRes:{
                let msg = proto.game_hall.JoinRes.decode(packbuffer);
                this.JoinRes(msg)
                break
            }
            case PACK.errors.Error: {
                let msg = proto.errors.Error.decode(packbuffer);
                console.log("err msg ", msg)
                break
            }
            default:
                console.log("unkown packid ",packid)
        }
    },

    onBackHallClick(event) {
        console.log("onBackHallClick >>> ")
        cc.director.loadScene("hall");
    },

    init_chess_borad() {
        //生成棋子
        this.chess_map = {}
        this.chess_type_map = {}
        let chess_list = this.m_chess_list

        if (this.m_player_info.team_type == TEAM_TYPE.BLACK) {
            console.log("rotation:",this.borad)
            this.borad.rotation = 180   //背景翻转
            this.node.rotation = 180    //棋盘翻转
        }
        let chess_node_list = this.node.getChildByName("chess_list")
        for(let i = 0; i < chess_list.length; i++) {
            let one_chess_info = chess_list[i]
            let chess = cc.instantiate(this.chess_prefab)
            let sp = chess.getComponent(cc.Sprite)
            sp.spriteFrame = this.chess_sprite[sprite_index_map[one_chess_info.chess_type]]
            let chess_obj = chess.getComponent('chess')
            this.set_chess_pos(chess,one_chess_info.row,one_chess_info.col)
            chess_obj.set_chess_type(one_chess_info.chess_type)
            chess_obj.set_id(one_chess_info.chess_id)
            if (chess_obj.get_team_type() == this.m_player_info.team_type) {
                chess_obj.set_is_self(true)
            } else {
                chess_obj.set_is_self(false)
            }

            if (this.m_player_info.team_type == TEAM_TYPE.BLACK) {
                chess.rotation = 180 //棋子翻转
            }
            
            chess_node_list.addChild(chess)
            this.chess_map[one_chess_info.chess_id] = chess
            this.chess_type_map[one_chess_info.chess_type] = chess

            this.chess_pos_map[one_chess_info.row - 1][one_chess_info.col - 1] = chess
        }
        console.log("this node:",this.node)
        console.log("chess pos ",this.chess_pos_map)
    },

    onLoad () {
        this.result.active = false
        console.log("global >>>>> ",global)
        let ws = new WebSocket("ws://" + global.gamehost)

        let chess_mgr = this
        this.m_player_info = {}
        this.m_player_info.player_id = global.player_id
        this.m_player_info.seat_id = 0
        this.m_player_info.team_type = 0
        ws.onopen = function (event) {
            console.log("Send Text WS was opened.",this.m_player_info);
            let login_req = {
                token: global.gametoken,
                playerId:  chess_mgr.m_player_info.player_id,
            };
            
            let send_buffer = netpack.pack(PACK.login.LoginReq,proto.login.LoginReq.encode(login_req).finish())
            ws.send(send_buffer)
        };
        ws.onmessage = function (event) {
            console.log("onmessage:",event.data)
            const reblob = netpack.unpack(event.data).then(({ packid, packbuffer }) => {
                console.log("包名:", packid);
                chess_mgr.dispatch(packid, packbuffer)
            })
            .catch((error) => {
                console.error("解包错误:", error.message);
            });
        };
        ws.onerror = function (event) {
            console.log("Send Text fired an error");
        };
        ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
        };
       
        setTimeout(function () {
            if (ws.readyState === WebSocket.OPEN) {
                //ws.send("Hello WebSocket, I'm a text message.");
                console.log("send login >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            }
            else {
                console.log("WebSocket instance wasn't ready...");
            }
        }, 3);

        this.wsSocket = ws

        this.pos_map = []   //可放棋的位置
        this.chess_pos_map = [] //位置上有没有棋子

        let init_pos = this.pos_list.getChildByName("init_pos")
        let x = init_pos.x
        let y = init_pos.y
        let offset = 57

        for (let row = 1; row <= 10; row++) {
            let p_list = []
            let cp = []
            let ry = y - ((row - 1) * offset)
            for (let col = 1; col <= 9; col++) {
                let one_pos = cc.instantiate(this.pos_prefab)
                p_list.push(one_pos)
                let rx = x + ((col - 1) * offset)
                one_pos.setPosition(cc.v2(rx,ry))
                one_pos.m_row = row
                one_pos.m_col = col
                one_pos.m_chess_mgr = this
                this.pos_list.addChild(one_pos)

                cp.push(null)
            }
            this.pos_map.push(p_list)
            this.chess_pos_map.push(cp)
        }
    },

    start () {

    },

    update (dt) {
        if (this.m_state == GAME_STATE.playing) {
            this.m_doing_time += dt

            let doing_player_id = this.m_next_doing.player_id
            let change_player = null
            if (doing_player_id == this.m_player_info.player_id) {
                change_player = this.self_player
            } else {
                change_player = this.rival_player
            }

            let total_time = change_player.getChildByName("total_time")
            let content = total_time.getChildByName("content")
            let label = content.getComponent(cc.Label)
            label.string = Math.floor((this.m_next_doing.remain_total_time - (this.m_doing_time * 100)) / 100)
    
            let doing_time = change_player.getChildByName("doing_time")
            content = doing_time.getChildByName("content")
            label = content.getComponent(cc.Label)
            label.string = Math.floor((this.m_next_doing.remain_once_time - (this.m_doing_time * 100)) / 100)
        }
    },
});
