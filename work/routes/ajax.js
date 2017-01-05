var express = require("express");
var router = express.Router();
router.use("/ajax",function(req,res){
    var data = [
        {name:"张三",phone:"13311111111",en:"z"},
        {name:"李四",phone:"13343546651",en:"l"},
        {name:"王五",phone:"13311111111",en:"w"},
        {name:"赵六",phone:"13311111111",en:"z"},
        {name:"田七",phone:"13344556311",en:"t"},
        {name:"岳八",phone:"13311111111",en:"y"},
        {name:"钱九",phone:"13314635411",en:"q"},
        {name:"小卫",phone:"13311111111",en:"x"},
        {name:"赵六",phone:"13311111111",en:"z"},
        {name:"田七",phone:"13311111111",en:"t"},
        {name:"岳八",phone:"13311111111",en:"y"},
        {name:"安好",phone:"13935789765",en:"a"},
        {name:"艾克",phone:"13935795305",en:"a"},
        {name:"步摇",phone:"17865432345",en:"b"},
        {name:"不悔",phone:"13456432345",en:"b"},
        {name:"榜首",phone:"15487650985",en:"b"},
        {name:"蚕丝里",phone:"13452345678",en:"c"},
        {name:"曹爱华",phone:"15222345678",en:"c"},
        {name:"葱花菜",phone:"13213445678",en:"c"},
        {name:"蒂姆",phone:"15367894567",en:"d"},
        {name:"嗯啊",phone:"13423123432",en:"e"},
        {name:"飞客",phone:"13909909765",en:"f"},
        {name:"郭蓉",phone:"13345233465",en:"g"},
        {name:"灰机",phone:"13909565865",en:"h"},
        {name:"几率",phone:"13907654765",en:"j"},
    ];
    res.send(JSON.stringify(data));
});
module.exports = router;



