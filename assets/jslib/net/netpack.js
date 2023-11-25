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
    pack(packname, buffer) {
        let namesz_buffer = intToBigEndian(packname.length, 2);
            
        // 创建一个Uint8Array来容纳所有数据
        let send_buffer = new Uint8Array(namesz_buffer.length + packname.length + buffer.length);
        
        // 将namesz_buffer，packname和buffer依次写入send_buffer
        send_buffer.set(namesz_buffer, 0);
        send_buffer.set(Array.from(packname, c => c.charCodeAt(0)), namesz_buffer.length); // 注意将packname转换为字节
        send_buffer.set(buffer, namesz_buffer.length + packname.length);
        
        // 计算send_buffer的总长度，并编码为2字节的大端格式
        let szbuffer = intToBigEndian(send_buffer.length, 2);
        
        // 创建一个Uint8Array来容纳szbuffer和send_buffer
        let sends_buffer = new Uint8Array(szbuffer.length + send_buffer.length);
        
        // 将szbuffer和send_buffer依次写入sends_buffer
        sends_buffer.set(szbuffer, 0);
        sends_buffer.set(send_buffer, szbuffer.length);
        return sends_buffer
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
                
                // 解析包名的长度（2字节的大端格式）
                const nameLength = (new DataView(arrayBuffer, 2, 2)).getUint16(0, false);
    
                // 使用解析出的包名长度来截取包名
                const packname = new TextDecoder().decode(new Uint8Array(arrayBuffer.slice(4, 4 + nameLength)));
    
                // 截取包内容

               console.log("packname:",packname)
                const packbuffer = new Uint8Array(arrayBuffer.slice(4 + nameLength, arrayBuffer.byteLength));
                resolve({ packname, packbuffer });
            };
    
            reader.onerror = (event) => {
                reject(new Error("Error reading Blob: " + event.target.error));
            };
            
            reader.readAsArrayBuffer(blob);
        });
    }
}

module.exports = M 