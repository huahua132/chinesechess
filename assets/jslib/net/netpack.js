function intToBigEndian(num, bytes) {
    const byteArray = new Uint8Array(bytes);
    for (let i = bytes - 1; i >= 0; i--) {
        byteArray[i] = num & 0xff;
        num >>= 8;
    }
    return byteArray;
}

function bigEndianToInt(byteArray) {
    let result = 0;
    for (let i = 0; i < byteArray.length; i++) {
        result = (result << 8) | byteArray[i];
    }
    return result;
}

var M = {
    pack(packid, buffer) {
        let packid_buffer = intToBigEndian(packid, 2);
            
        // 创建一个Uint8Array来容纳所有数据
        let send_buffer = new Uint8Array(4 + buffer.length);
        
        //包长度
        let szbuffer = intToBigEndian(2 + buffer.length, 2);

        send_buffer.set(szbuffer, 0);
        send_buffer.set(packid_buffer, 2);
        send_buffer.set(buffer, 4);
       
        return send_buffer
    },

    unpack(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                const arrayBuffer = event.target.result;
                
                // 在这里继续解析 arrayBuffer
                // 假设包的总长度存储在前两个字节
                const totalLength = (new DataView(arrayBuffer, 0, 2)).getUint16(0, false);
                
                // 检查字节流是否足够长
                if (arrayBuffer.byteLength != totalLength + 2) {
                    reject(new Error("Buffer is not long enough to contain the specified package."));
                    return;
                }
                
                // 解析协议号的长度（2字节的大端格式）
                const packid = (new DataView(arrayBuffer, 2, 2)).getUint16(0, false);
    
                // 截取包内容

               console.log("packid:",packid)
                const packbuffer = new Uint8Array(arrayBuffer.slice(4, arrayBuffer.byteLength));
                resolve({ packid, packbuffer });
            };
    
            reader.onerror = (event) => {
                reject(new Error("Error reading Blob: " + event.target.error));
            };
            
            reader.readAsArrayBuffer(blob);
        });
    }
}

module.exports = M 