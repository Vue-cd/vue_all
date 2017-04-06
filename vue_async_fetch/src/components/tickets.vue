<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    inline-template
                    label="券码名称"
                    width="180">
                <div>
                    <el-icon name="time"></el-icon>
                    <span style="margin-left: 10px">{{ row.ticket_name }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    label="总数量"
                    width="180">
                <div>
                    <span style="margin-left: 10px">{{ row.ticket_total }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    label="更新时间"
                    width="180">
                <div>
                    <span style="margin-left: 10px">{{ row.update_time }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    :context="_self"
                    inline-template
                    label="操作">
                <div>
                   <!-- <div>
                        <a href=`/ticket/${row.ticket_type}/edit`>编辑</a>
                        <a href=`/ticket/${row.ticket_type}`>详情</a>
                    </div>-->
                    <el-button
                            size="small"
                            @click="handleEdit($index, row)">
                        编辑
                    </el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete($index, row)">
                        详情
                    </el-button>
                </div>
            </el-table-column>
        </el-table>

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20]"
                :page-size="10"
                layout="prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>
<style>
</style>
<script>
    import {mapGetters, mapActions} from 'vuex'
    export default{
        data(){
            return {
                msg: 'hello vue',
                tableData: [],
                total:10
            }
        },
        methods: {
            ...mapActions([
                'getTickets'
            ]),
            handleSizeChange(val){
              console.log('handleSizeChange',val.ticket_type)
            },
            handleCurrentChange(val){
                this.getTickets(val).then(res=>{
                    this.tableData=this.$store.getters.tickets.tickets
                })
            },
            handleEdit(index, row) {
                // 这边需要跳转
                this.$router.push('/ticket/'+row.ticket_type+'/edit')

            },
            handleDelete(index, row) {
                // 我在action是没有办法跳转的这点是和react 不一样的 因为react 是可以在
                this.$router.push('/ticket/'+row.ticket_type)

            }
        },
        computed: {
            ...mapGetters([
                'tickets'
            ])
        },
        created(){
            this.getTickets().then(res=> {
                this.tableData=this.$store.getters.tickets.tickets
                this.total=this.$store.getters.tickets.count
            })
        }
    }
</script>
