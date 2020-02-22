<template>
    <div style="margin: 100px;" class="main" @mouseleave="handleLeave">
        
        <!-- 左边的城市列表 -->
        <div class="left">
            <ul>
                <li 
                v-for="(item, index) in cities"
                :key="index"
                @mouseenter="handleEnter(index)"
                :class="{active: current === index}">
                    {{item.type}}
                </li>
            </ul>
        </div>


        <!-- 右边当前的城市景区列表 -->
        <div class="right" v-if="current !== false">
            <p 
            v-for="(item, index) in cities[current].children"
            :key="index">
                {{item.desc}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 记录当前的索引
            current: false,
            
            // 模拟的数据
            cities: [
                {
                    type: "广州",
                    children: [
                        {desc: "广州1"},{desc: "广州2"},{desc: "广州3"},{desc: "广州3"},
                    ]
                },{
                    type: "上海",
                    children: [
                        {desc: "上海1"},{desc: "上海2"},{desc: "上海3"},{desc: "上海3"},
                    ]
                },
                {
                    type: "北京",
                    children: [
                        {desc: "北京1"},{desc: "北京2"},{desc: "北京3"},{desc: "北京3"},
                    ]
                },
                {
                    type: " 杭州",
                    children: [
                        {desc: " 杭州1"},{desc: " 杭州2"},{desc: " 杭州3"},{desc: " 杭州3"},
                    ]
                }
            ]
        }
    },

    methods: {
        // 左侧菜单鼠标移入的事件
        handleEnter(index){
            // 记录当前的索引
            this.current = index;
        },

        // 鼠标离开时候触发的事件
        handleLeave(){
            this.current = false;
        }
    }
};
</script>

<style lang="less" scoped>
.main{
    position: relative;
}

.left{
    width:200px;
    border-bottom: 1px blue solid;
    position: relative;
    z-index: 9;
}

.left li{
    border: 1px blue solid;
    border-bottom: none;
    padding:5px;
}

.left .active{
    border-right:1px #fff solid;
}

.right{
    position: absolute;
    border: 1px red solid;
    left:199px;
    top:0;
    padding:20px;
    width:200px;
}
</style>