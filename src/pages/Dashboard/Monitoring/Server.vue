<template>
  <div id="DashboardMonitoringServer">
    <div class="card">
        <div class="title">
            <span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="server" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-server"><path data-v-29e0ee4e="" data-v-f2f1339a="" fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" class=""></path></svg>
                主服务器 根节点
            </span>
            
            <div class="control">
                <button v-wave class="btn btn-primary" @click="refreshData()" :disabled="get.status === 1">
                    <div class="flex-center">
                        <div class="spinner-border mini text-light me-2" role="status" v-show="get.status === 1"></div>
                        <span>刷新</span>
                    </div>
                </button>
                <el-switch
                    v-model="autoRefreshData"
                    active-text="自动刷新">
                </el-switch>
            </div>
        </div>
        
        <hr>
        <span class="subtitle d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M8.57 30.9A16 16 0 0 0 33.95 19H18.43Z" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M33.95 17A16 16 0 1 0 7 29.6L17.49 17Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
            资源 / 负载 状态</span>
        <div class="status-resources">
            <div class="group">
                <div class="item cpu">
                    <el-progress :color="colors" type="circle" :percentage="info.cpu.usageRate"></el-progress>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                            <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                        CPU 使用率
                    </span>
                </div>
                <el-tooltip class="item" effect="dark" placement="top">
                    <div slot="content">
                        <span>内存使用详情：</span>
                        <br/>
                        <span>总内存： {{ info.memory.total || '正在计算' }} GB</span>
                        <br/>
                        <span>已使用： {{ info.memory.total - info.memory.free || '正在计算' }} GB</span>
                        <br/>
                        <span>未使用： {{ info.memory.free || '正在计算' }} GB</span>
                    </div>
                    <div class="item memory">
                        <el-progress :color="colors" type="circle" :percentage="info.memory.usageRate"></el-progress>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-memory" viewBox="0 0 16 16">
                                <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
                            </svg>
                            内存 使用率
                        </span>
                    </div>
                </el-tooltip>
                <div class="item cpu">
                    <el-progress :color="colors" type="circle" :percentage="info.disk.list[0].usageRate"></el-progress>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd" viewBox="0 0 16 16">
                            <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                            <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                        </svg>
                        C盘 使用率
                    </span>
                </div>
            </div>
        </div>
        <hr>
        <span class="subtitle d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3v16h16v2H3V3zm14.94 2.94l2.12 2.12L16 14.122l-3-3l-3.94 3.94l-2.12-2.122L13 6.88l3 3z"/></svg>
            数据变化趋势
        </span>
        <el-collapse v-model="activeNames">
        <el-collapse-item title="统计面板 - 展开 / 收起" name="1">
        <div class="status-trend">
            <div class="mt-3"></div>
            <span class="subtitle ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16"><path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>
                Cpu 使用率 ( % )
            </span>
            <template>
                <div class="echart" id="chart-status-cpu" :style="ChartStyle"></div>
            </template>
            <hr>
            <span class="subtitle ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-memory" viewBox="0 0 16 16"><path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/></svg>
                内存 使用率 ( % )
            </span>
            <template>
                <div class="echart" id="chart-status-memory" :style="ChartStyle"></div>
            </template>
            <hr>
            <span class="subtitle ms-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 9a1 1 0 0 1 1 1v4h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h6v-4a1 1 0 0 1 1-1m7 7H5v3h14zM6.662 3.959A1 1 0 0 1 6.75 5.37A6.97 6.97 0 0 0 5 10q0 .446.054.876a1 1 0 0 1-1.984.248A9 9 0 0 1 3 10a8.97 8.97 0 0 1 2.25-5.953a1 1 0 0 1 1.412-.088m12.088.088A8.97 8.97 0 0 1 21 10q0 .57-.07 1.124a1 1 0 1 1-1.984-.248q.053-.43.054-.876a6.97 6.97 0 0 0-1.75-4.63a1 1 0 1 1 1.5-1.323M9.662 6.604a1 1 0 0 1 .088 1.412a3 3 0 0 0-.727 2.36a1 1 0 0 1-1.984.248A5 5 0 0 1 8.25 6.693a1 1 0 0 1 1.41-.089Zm6.088.088a4.98 4.98 0 0 1 1.211 3.932a1 1 0 0 1-1.984-.248a3 3 0 0 0-.726-2.36a1 1 0 1 1 1.499-1.324"/></g></svg>
                网络 吞吐量 ( kb/s )
            </span>
            <template>
                <div class="echart" id="chart-status-network" :style="ChartStyle"></div>
            </template>
        </div>
        </el-collapse-item>
        </el-collapse>
        <hr>
            <span class="subtitle d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 12t.713-3.512t1.924-2.85t2.85-1.925T12 3q2.05 0 3.888.875T19 6.35V4h2v6h-6V8h2.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.038 7.038T5 12t2.038 4.963T12 19q2.625 0 4.588-1.7T18.9 13h2.05q-.375 3.425-2.937 5.713T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"/></svg>
                最近一次根数据更新于</span>
            <div class="status-progress">
                <span>{{ info.updated || '正在计算' }} <el-tag class="ms-1"> {{ (new Date() - new Date(info.updated)) / 1000 || '0' }} 秒前</el-tag><el-tag class="ms-1" :type="(info.cache || info.cache2) ? 'warning' : 'success'">{{(info.cache || info.cache2) ? '缓存' : '实时' }}</el-tag></span>
                <span></span>
            </div>
        <hr>
            <span class="subtitle d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.26 13.15A7.49 7.49 0 0 1 22.57 7H7.13a2 2 0 0 0-1.91 1.41L2.09 18.48a2 2 0 0 0-.09.59V27a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.94a2 2 0 0 0-.09-.59ZM8.92 25h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0h-1.8v-3h1.8Zm5 0H22.1v-3h1.8Zm5 0H27.1v-3h1.8ZM31 19.4H5V18h26Z" className="clr-i-solid--badged clr-i-solid-path-1--badged"/><circle cx="30" cy="6" r="5" fill="currentColor" className="clr-i-solid--badged clr-i-solid-path-2--badged clr-i-badge"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    实时网络吞吐量</span>
            <div class="status-net">
                <template>
                <el-table
                :data="info.network.table"
                style="width: 100%">
                <el-table-column
                    label="类型"
                    width="100">
                    <span slot-scope="scope">
                        <svg v-if="scope.row.type === 'upload'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M3 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M6.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L11 5.414V13a1 1 0 1 1-2 0V5.414L7.707 6.707a1 1 0 0 1-1.414 0" clipRule="evenodd"/></svg>
                        <svg v-if="scope.row.type === 'download'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M3 17a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m3.293-7.707a1 1 0 0 1 1.414 0L9 10.586V3a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                        {{ scope.row.name }}
                    </span>
                </el-table-column>
                <el-table-column
                    prop="value"
                    label="速度"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="总计 GB"
                    width="100">
                    <span slot-scope="scope">
                        {{ scope.row.total }} GB
                    </span>
                </el-table-column>
                <el-table-column
                    prop="times.idle"
                    label="状态">
                    <!-- <el-tag type="success">良好</el-tag> -->
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.status.type">{{ scope.row.status.text }}</el-tag>
                    </template>
                </el-table-column>
                </el-table>
            </template>
            </div>
        <hr>
        <span class="subtitle d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 15V9h6v6zm0 6v-2H5v-4H3v-2h2v-2H3V9h2V5h4V3h2v2h2V3h2v2h4v4h2v2h-2v2h2v2h-2v4h-4v2h-2v-2h-2v2zm8-4V7H7v10z"/></svg>
            CPU / 内核 状态</span>
        <div class="status-cpu-core">
            <template>
                <el-table
                :data="info.cpu.core"
                style="width: 100%">
                <el-table-column
                    prop="model"
                    label="核心">
                </el-table-column>
                <el-table-column
                    prop="speed"
                    label="速度 MHz"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="times.idle"
                    label="idle 空闲占比"
                    width="150">
                </el-table-column>
                <el-table-column
                    label="状态">
                    <el-tag type="success">良好</el-tag>
                </el-table-column>
                </el-table>
            </template>
            <div class="mt-3 text-success">总核心数： {{ info.cpu.core.length || '正在计算' }}</div>
        </div>
        <hr>
        <span class="subtitle d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48m-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"/></svg>
            磁盘 / 负载 状态</span>
        <div class="status-disks">
            <!-- <div v-for="disk in info.disks" class="item" :key="disk.name">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-network" viewBox="0 0 16 16">
                <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2V4zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5z"/>
                </svg><span class="ms-3 font-weight-bold">磁盘： {{ disk.name }}</span><el-progress :percentage="parseInt(disk.capacity)" :color="colors"></el-progress>
                <span class="font-weight-bold">总空间：
                    <span class="text-primary">{{ ( disk.blocks / 1024 / 1024 / 1024 ).toFixed(2) }} GB</span> / 已使用： 
                    <span class="text-black">{{ ( disk.used / 1024 / 1024 / 1024 ).toFixed(2) }} GB</span> / 剩余： 
                    <span class="text-success">{{ ( disk.available / 1024 / 1024 / 1024 ).toFixed(2) }} GB</span>
                </span>
            </div> -->
            <el-table
                :data="info.disk.list"
                style="width: 100%">
                <el-table-column
                    prop="device"
                    label="磁盘"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="total"
                    label="总容量 GB"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="used"
                    label="已使用 GB"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="free"
                    label="空闲 GB"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="available"
                    label="状态"
                    width="100">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.status.type">{{ scope.row.status.text }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    label="百分比">
                    <template slot-scope="scope">
                        <el-progress :percentage="parseInt(scope.row.usageRate)" :color="colors"></el-progress>
                    </template>
                </el-table-column>
            </el-table>

            
            <div class="mt-3 text-success">总磁盘数： {{ info.disk.list.length || '正在计算' }}</div>
        </div>
        <hr>
        <span class="subtitle d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 19v-3m4 3v-3m4 3v-3m4 3v-3M8 11V9m8 2V9m-4 2V9M2 15h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"/></svg>
            进程 / 运行 状态</span>
        <div class="status-progress">
            <div class="mt-3 text-danger">进程数： {{ info.processListCount || '正在计算' }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { getStatus } from '../../../scripts/dashboard/status/m.js'

export default {
    name: 'Server',
    data() {
        return {
            activeNames: ['1'],

            autoRefreshData: true,
            timer: null,
            colors: [
                {color: '#6f7ad3', percentage: 20},
                {color: '#1989fa', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#e6a23c', percentage: 80},
                {color: '#f56c6c', percentage: 100},
            ],
            info: {
                cpu: {
                    usageRate: 0,
                    core: []
                },
                memory: {
                    total: 0,
                    free: 0,
                    usageRate: 0,
                },
                disk: {
                    list: [
                        {
                            device: '正在计算',
                            total: 0,
                            used: 0,
                            free: 0,
                            usageRate: 0,
                            status: {
                                type: 'success',
                                text: '正常'
                            }
                        }
                    ]
                },
                network: {
                    sent: 0,
                    recv: 0,
                    upload: 0,
                    download: 0,
                }
            },
            get: {
                status: 0,
            },
            Chart: {
                cpu: {},
                memory: {},
                network: {}
            },
            ChartStyle: {  width: "100%", height: "400px" }
        }
    },

    watch: {
        autoRefreshData: {
            immediate: true,
            handler: function (newValue, oldValue) {
                if(newValue) {
                    if (oldValue === undefined) this.refreshData();
                    
                    this.timer = setInterval(this.refreshData, 5000);
                } else {
                    clearInterval(this.timer);
                }
            }
        }
    },
    beforeDestroy() {
        if (this.timer) clearInterval(this.timer);
    },
    mounted() {
        this.initEcharts();
    },
    methods: {
        async refreshData() {
            this.get.status = 1;
            const info = await getStatus(this);
            if (info.status === 1) {
                this.info = info; 
                // 单独画表
                this.info.network.table = [
                    {
                        name: '上行',
                        type: 'upload',
                        value: this.info.network.sent_,
                        total: this.info.network.upload,
                        status: {
                            ...this.info.network.sent__
                        }
                    },
                    {
                        name: '下行',
                        type: 'download',
                        value: this.info.network.recv_,
                        total: this.info.network.download,
                        status: {
                            ...this.info.network.recv__
                        }
                    }
                ]
            }
            this.get.status = 0;

            this.Chart.cpu.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross' }
                },
                xAxis: {
                    data: this.info.broken_line_data.cpu.x
                },
                yAxis: {
                    max: 100,
                    min: 0,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [
                {
                    data: this.info.broken_line_data.cpu.y,
                    type: "line"
                }
                ],
            });

            this.Chart.memory.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross' }
                },
                xAxis: {
                    data: this.info.broken_line_data.memory.x
                },
                yAxis: {
                    max: 100,
                    min: 0,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [
                {
                    data: this.info.broken_line_data.memory.y,
                    type: "line"
                }
                ],
            });

            this.Chart.network.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'cross' }
                },
                xAxis: {
                    data: this.info.broken_line_data.network.x
                },
                yAxis: {
                    axisLabel: {
                        formatter: '{value} kb/s'
                    }
                },
                legend: { // 图例
                data: ["上行", "下行"],
                bottom: "0%"
                },
                series: [
                {
                    name: "上行",
                    data: this.info.broken_line_data.network.y.sent,
                    type: "line"
                },
                {
                    name: "下行",
                    data: this.info.broken_line_data.network.y.recv,
                    type: "line" // 类型设置为折线图
                }
                ],
            });
        },
        initEcharts() {
            this.Chart.cpu = this.$echarts.init(document.getElementById('chart-status-cpu'));
            this.Chart.memory = this.$echarts.init(document.getElementById('chart-status-memory'));
            this.Chart.network = this.$echarts.init(document.getElementById('chart-status-network'));

            window.addEventListener("resize", () => {
                this.Chart.cpu.resize();
                this.Chart.memory.resize();
                this.Chart.network.resize();
            });
        }
    }
}
</script>

<style lang="less" scoped>
#DashboardMonitoringServer {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#DashboardMonitoringServer .card:last-child {
    margin-bottom: 20px;
}

.card {
    display: flex;
    flex-direction: column;
    width: 100%;

    svg {
        width: 20px;
        height: 20px;
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
    }
    .subtitle {
        font-size: 16px;
        color: #6e6b7b;
        margin-bottom: 20px;

        svg {
            margin-right: .5rem;
        }
    }
    .control {
        button {
            margin-right: 20px;
        }
    }

    .status-disks .item {
        margin: 10px 5px;
    }
    
    .status-resources {
        margin-top: 20px;

        .group {
            display: flex;
            justify-content: center;
            overflow: auto;
        }

        .group > .item {
            margin: 0 20px;
        }
    }

    .status-resources .item > span {
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
        color: #6e6b7b;
        display: block;
        text-align: center;
    }
    .status-resources .item svg {
        margin-right: 1 rem;
    }

    .status-progress {
        display: flex;
        flex-direction: column;
        // margin-top: 20px;
    }
}
</style>