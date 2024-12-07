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
    init(hall, emailInfo) {
        this.m_emailInfo = emailInfo
        this.m_hall = hall
        let title = this.node.getChildByName('title').getChildByName('title').getComponent(cc.Label)
        title.string = emailInfo.title

        let read = this.node.getChildByName('title').getChildByName('read').getComponent(cc.Label)
        if (emailInfo.readFlag == 1) {
            read.string = "(已读)"
        } else {
             read.string = "(未读)"
        }

        let content = this.node.getChildByName('content').getChildByName('content').getComponent(cc.Label)
        content.string = emailInfo.content

        let item_list = this.node.getChildByName('content').getChildByName('itemlist').getComponent(cc.Label)
        item_list.string = ""

        let bt = this.node.getChildByName('content').getChildByName('bt')
        
        let btLabel = bt.getComponent(cc.Label)
        if (emailInfo.itemList) {
            for (let j = 0; j < emailInfo.itemList.length; j++) {
                let oneItem = emailInfo.itemList[j]
                item_list.string += oneItem.id + '-' + oneItem.count
            }
            if (emailInfo.itemFlag == 0) {
                btLabel.string = "领取奖励"
            } else {
                btLabel.string = "已领取"
            }
        }

        if (!emailInfo.itemList || emailInfo.itemList.length == 0) {
            bt.active = false
        }
    },

    onLoad () {
        
    },

    on_click(event) {
        let content = this.node.getChildByName('content')
        if(content.active) {
            content.active = false
            this.node.height = 0
            this.m_hall.OnCloseEmail(this)
        } else {
            content.active = true
            let bt = content.getChildByName('bt')
            let offset = -content.y + -bt.y + bt.height
            this.node.height = offset
            this.m_hall.OnOpenEmail(this)
        }
    },

    getGuid() {
        return this.m_emailInfo.guid
    },

    getReadFlag() {
        return this.m_emailInfo.readFlag
    },

    readed() {
        this.m_emailInfo.readFlag = 1
        let read = this.node.getChildByName('title').getChildByName('read').getComponent(cc.Label)
        read.string = "(已读)"
    },

    itemListed() {
        this.m_emailInfo.itemFlag = 1
        let bt = this.node.getChildByName('content').getChildByName('bt')
        
        let btLabel = bt.getComponent(cc.Label)
        btLabel.string = "已领取"
    },

    //领取邮件奖励
    on_item_list_bt(event) {
        this.m_hall.on_item_list_bt(this.m_emailInfo.guid)
    },

    start () {
        
    },

    // update (dt) {},
});
