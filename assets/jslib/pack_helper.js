var M = {
    new(proto, basePacks) {
        let m_PACK = {}

        for (let i = 0; i < basePacks.length; i++) {               
            let packs = basePacks[i]
            
            for (let packname in packs) {
                if (!m_PACK[packname]) {
                    m_PACK[packname] = {};
                }

                let name_pack_id = m_PACK[packname];
                let id = proto[packname].main[packname]
                for (let name in proto[packname].sub) {
                    if (!Number(name)) {
                        let sub_id = proto[packname].sub[name];
                        let pack_id = id * 100 + sub_id;
                        name_pack_id[name] = pack_id;
                    }
                }
            }    
        }

        return m_PACK
    }
}

module.exports = M;