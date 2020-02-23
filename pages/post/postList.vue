<template>
    <div style="padding: 100px;">
        <!-- 文章列表 -->
        <p 
        v-for="(item, index) in list"
        :key="index">
            {{item.title}}
        </p>

        <!-- 分页 -->
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="start / limit + 1"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 文章列表
            list: [],
            start: 0,
            limit: 5,
            total: 0
        }
    },
    mounted(){
        // 页面一加载请求第一页的数据
        this.getData();
    },
    methods: {
        // 请求文章列表数据
        getData(){
            this.$axios({
                url: "/posts",
                // 当前请求的参数
                params: {
                    _start: this.start, // 从哪一条数据开始
                    _limit: this.limit // 拿多少条数据
                }
            }).then(res => {
                const {data, total} = res.data;
                // 赋值给data的list
                this.list = data;
                // 总条数
                this.total = total;
            })
        },

        // 切换页数时候触发
        handleSizeChange(){},

        // 切换条数时候触发
        handleCurrentChange(index){
            // 根据页数修改start的开始的条数
            this.start = (index - 1) * this.limit;
            
            // 给当前的路由添加参数
            this.$router.replace({
                url: this.$route.path,
                query: {
                    start: this.start
                }
            })

            // 可以使用computed优化
            this.getData();
        }
    }
};
</script>

<style>
</style>