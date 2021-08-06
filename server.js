const express = require('express');
const app = express()

app.listen(8080, function(){
  console.log("listening on 8080")
})

app.get("/home",function(req,res){
res.send("홈페이지 메인 화면입니다.")
})