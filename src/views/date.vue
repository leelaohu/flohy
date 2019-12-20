<template>
    <div class="">
        <div class="date">
            111
            <!-- 年份 月份 -->
            <div class="month">
                <i class="el-icon-arrow-left" @click="pickPre(currentYear,currentMonth)"></i>
                <div>
                    <span @click="incrementYear()">+</span>
                    <span>{{ currentYear }} 年</span>
                    <span @click="decrementYear()">-</span>
                </div>
                <div>
                    <span @click="incrementMonth()">+</span>
                    <span> {{ currentMonth }} 月</span>
                    <span @click="decrementMonth()">-</span>
                </div>
                <div>
                    <span>{{ currentDay }}日</span>
                </div>
                <i class="el-icon-arrow-right" @click="pickNext(currentYear,currentMonth)"></i>
            </div>
            <h2>{{currentYear}}年{{currentMonth}}月{{currentDay}}日</h2>
            <!-- 星期 -->
            <ul class="weekdays">
                <li style="color:#0A0A0A">日</li>
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li style="color:#0A0A0A">六</li>
            </ul>
            <ul class="dayList">
                <li :class="{active:item.active}" v-for="item in dateArr" :data="item.data">
                    {{item.dateNumber}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {tranNumber} from '@/until'
    export default {
        data () {
            return {
                currentYear: 1970,   // 年份
                currentMonth: 1,  // 月份
                currentDay: 1,    // 日期
                currentWeek: 1,    // 星期
                dateArr:[]
            }
        },

        created(){
            this.currentDate()
            this.dateList()
        },
        methods:{
            incrementYear(){
                this.currentYear++
                this.dateList()
            },
            decrementYear(){
                this.currentYear--
                if(this.currentYear<1970){
                    this.currentYear = 1970
                }
                this.dateList()
            },
            incrementMonth(){
                this.currentMonth++
                if(this.currentMonth>12){
                    this.currentYear++
                    this.currentMonth = 1
                }
                this.dateList(this.currentYear,this.currentMonth)
            },
            decrementMonth(){
                this.currentMonth--
                if(this.currentMonth<1){
                    this.currentYear--
                    this.currentMonth = 12
                }
                this.dateList(this.currentYear,this.currentMonth)
            },
            currentDate(){
                let date =  new Date();
                this.currentYear = date.getFullYear()
                this.currentMonth = date.getMonth()+1
                this.currentDay = date.getDate()
                this.currentWeek = date.getDay()
            },
            dateList(){
                let year = this.currentYear,month = this.currentMonth
                //存储需要的时间
                let dateList = []
                //当前月有多少天
                let dateCount = new Date(year, month, 0).getDate()
                //1.上个月有多少天
                let lastDateCount = new Date(year, month-1, 0).getDate()
                //当前月的第一天是星期几
                let firstDayWeek = new Date(year,month-1, 1).getDay()
                //2.上个月的最后几天
                for(let j = firstDayWeek-1;j>=0;j--){
                    dateList.push({dateNumber:lastDateCount-j,active:false,data:''})
                }
                //当前月
                for(let i = 0,l=dateCount;i<l;i++){
                    dateList[firstDayWeek+i] ={dateNumber:i+1,active:true,data:`${tranNumber(this.currentYear)}${tranNumber(this.currentMonth)}${tranNumber(i+1)}`}
                }
                //下个月的前几天
                for(let i = 1,l=42-dateList.length;i<=l;i++){
                    dateList.push({dateNumber:i,active:false,data:''})
                }
                this.dateArr = dateList
            }
        }
    }
</script>

<style>
    .date {
        height: 150px;
        width:100vw;
        color: #333;
        float: left;
    }
    .weekdays {
       display: flex;
    }
    .weekdays li{
        width:calc(100vw / 7);
        border:1px solid #eee;
        text-align: center;
        line-height: 50px;
    }
    .dayList{
        display: flex;
        flex-wrap: wrap;
    }
    .dayList li{
        width:calc(100vw / 7);
        border:1px solid #eee;
        text-align: center;
        line-height: 50px;
        color: #999;
    }
    .dayList li.active{
        color: #333;
    }
</style>
