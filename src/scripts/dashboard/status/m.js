async function getStatus(vc) {
    let info = {};
    await vc.$store.dispatch('utils/request',{
        vc,
        method: 'get',
        url: '/monitoring/status',
    })
    .then(
        response => {
            if (response.data.status === 1) {
                let data = response.data;
                data.cpu.usageRate = parseFloat(( data.cpu.usageRate * 100.0 ).toFixed(2))
                // data.memory.usageRate = parseFloat(( data.memory.usageRate * 100.0 ).toFixed(2))
                data.memory.total = (data.memory.total / 1024 / 1024 / 1024 ).toFixed(2)
                data.memory.free = (data.memory.free / 1024 / 1024 / 1024 ).toFixed(2)

                // data.cpu.core = data.cpu.core
                // data.updated = data.updated
                // data.processListCount = data.processListCount

                // this.info.disks = response.data.disks
                const disks = data.disk.list
                disks.forEach(disk => {
                    disk.total = ( disk.total / 1024 / 1024 / 1024 ).toFixed(2) // 共
                    disk.free = ( disk.free / 1024 / 1024 / 1024 ).toFixed(2) // 剩余
                    disk.used = ( disk.used / 1024 / 1024 / 1024 ).toFixed(2) // 已使用
                    disk.status = {
                        type: (() => {
                            if ( parseInt(disk.usageRate) > 70 ) return 'warning';
                            if ( parseInt(disk.usageRate) > 85 ) return 'danger';
                            return 'success';
                        })(),
                        text: (() => {
                            if ( parseInt(disk.usageRate) > 70 ) return '警告';
                            if ( parseInt(disk.usageRate) > 85 ) return '危险';
                            return '正常';
                        })()
                    }
                });
                data.disk.list = disks

                data.network.sent = parseFloat(data.network.sent).toFixed(2)
                data.network.recv = parseFloat(data.network.recv).toFixed(2) // KB/s 
                data.network.sent_ = data.network.sent + ' KB/s'
                data.network.recv_ = data.network.recv + ' KB/s'
                data.network.sent__ = {
                    type: 'success',
                    text: 'KB'
                }
                data.network.recv__ = {
                    type: 'success',
                    text: 'KB'
                }

                if (data.network.recv > 1024) {
                    if (data.network.recv > 1024 * 1024) {
                        data.network.recv_ = ( data.network.recv / 1024 / 1024 ).toFixed(2) + ' GB/s'
                        data.network.recv__ = {
                            type: 'danger',
                            text: 'GB'
                        }
                    }
                    data.network.recv_ = ( data.network.recv / 1024 ).toFixed(2) + ' MB/s'
                    data.network.recv__ = {
                        type: 'warning',
                        text: 'MB'
                    }
                }
                if (data.network.sent > 1024) {
                    if (data.network.sent > 1024 * 1024) {
                        data.network.sent_ = ( data.network.sent / 1024 / 1024 ).toFixed(2) + ' GB/s'
                        data.network.sent__ = {
                            type: 'danger',
                            text: 'GB'
                        }
                    }
                    data.network.sent_ = ( data.network.sent / 1024 ).toFixed(2) + ' MB/s'
                    data.network.sent__ = {
                        type: 'warning',
                        text: 'MB'
                    }
                }

                data.network.upload = ( data.network.upload / 1024 / 1024 / 1024 ).toFixed(2)
                data.network.download = ( data.network.download / 1024 / 1024 / 1024 ).toFixed(2)

                // data.cache = data.cache
                info = data;
                return;
            }
        },
        error => {
            throw error;
        }
    )

    return info
}

export { getStatus }