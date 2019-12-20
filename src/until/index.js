//格式化日期  ep:2019-01-01
 const tranNumber = (number)=>{
    return number>10?number:'0'+number
}
 const transText = (str)=>{
    return str.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/\/\Uploads/g,'http://m.flohy.com/Uploads')
}
export default {
    tranNumber,transText
}