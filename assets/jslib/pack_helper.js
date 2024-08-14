var M = {
    new(basePacks) {
        let m_PACK = {}

        for (let i = 0; i < basePacks.length; i++) {               
            let packs = basePacks[i]
            
            for (let packname in packs) {
                let id = packs[packname];
                let sub_packs = require(packname); // 使用同步 require 代替动态 import

                if (!m_PACK[packname]) {
                    m_PACK[packname] = {};
                }

                let name_pack_id = m_PACK[packname];

                for (let name in sub_packs) {
                    let sub_id = sub_packs[name];
                    let pack_id = id * 100 + sub_id;
                    name_pack_id[name] = pack_id;
                }
            }    
        }

        return m_PACK
    }
}

module.exports = M;