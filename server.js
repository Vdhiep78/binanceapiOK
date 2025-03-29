var express = require("express");
//run react: npm start
//run server localhost:3001: npm run dev
// da cai nodemon
const TelegramBot = require('node-telegram-bot-api');
//import { TwitterApi } from 'twitter-api-v2';
const { TwitterApi } = require('twitter-api-v2');
var app = express();
var cors = require('cors')

port=3001
app.listen(port,()=>{
    // res.json({servers:"server running..."});
    console.log("Server is running...port:"+port);
});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// const corsOptions ={
//     origin:'http://localhost:8081', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// app.use(function(req,res, next){
//     res.setHeader("Access-Control-Allow-Origin", "*" );
//     res.setHeader("Access-Controle-Allow-Methods", "GET, POST");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Authorization")
//     next();
// });
//123.23.23.23
const whitelist = ['http://127.0.0.1:5554','http://192.168.1.33:5554','http://192.168.1.102:8081','http://192.168.1.33:8081','http://localhost:3000', 'http://localhost:8081', 'http://localhost:5554'];
const corsOptions ={
     origin: (origin, callback) => {
         if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
     },
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//app.use(cors());
//=========================================
// replace the value below with the Telegram token you receive from @BotFather
const token = '6932896135:AAGiLsANuuBWOPKlkJdiOyC3MJR0-yju8vI';
//6800729481:AAGSeQtTlMPCKa1T0fR87vln8MfSz198qqo
//6932896135:AAGiLsANuuBWOPKlkJdiOyC3MJR0-yju8vI
//Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
//Matches "/echo [whatever]"
// bot.onText(/\/hi (.+)/, (msg, match) => {
//    // 'msg' is the received Message from Telegram
//    // 'match' is the result of executing the regexp above on the text content
//    // of the message
//    const chatId = msg.chat.id;
//    const resp = "hello! "+match[1]; // the captured "whatever"
 
//    // send back the matched "whatever" to the chat
//    bot.sendMessage(chatId, resp);
//  });
// // var stp_interval=false;
// // var timeInterval=14400000;
// bot.on('message', (msg) => {
//     try{
//     const chatId = msg.chat.id;
//     // console.log(msg);
//     // vina id=6708274799
//     // mobi id=6450388221
//     const chatId_mobi=6450388221
//     const chatId_vina=6708274799
//     let mesage="lời chào không hợp lệ";
//     if(msg.text==="/e"){
//         // stp_interval= true;
//         // let mesage2=GIATWO
//         // bot.sendMessage(chatId,mesage2)
//         mesage="let All BTC:"+price2NewBTC
//         bot.sendMessage(chatId_mobi,mesage+ ";--ETH:"+price2NewETH)
//         bot.sendMessage(chatId,mesage+ ";--ETH:"+price2NewETH)
//         // bot.sendMessage(chatId_mobi, "ETH:"+price2NewETH)
//         bot.sendMessage(chatId, "BNB:"+price2NewBNB+";--ADA:"+price2NewADA+ ";--SOL:"+price2NewSOL+ ";--AVAX:"+price2NewAVAX+";--CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+ ";--DOT:"+price2NewDOT)
//         bot.sendMessage(chatId_mobi, "BNB:"+price2NewBNB+";--ADA:"+price2NewADA+ ";--SOL:"+price2NewSOL+ ";--AVAX:"+price2NewAVAX+";--CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+ ";--DOT:"+price2NewDOT)
//         bot.sendMessage(chatId, "C98:"+price2NewC98+ ";--LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
//         bot.sendMessage(chatId_mobi, "C98:"+price2NewC98+ ";--LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
//                 // bot.sendMessage(chatId, "ADA:"+price2NewADA)
//         // bot.sendMessage(chatId, "SOL:"+price2NewSOL)
//         // bot.sendMessage(chatId, "AVAX:"+price2NewAVAX)
//         // bot.sendMessage(chatId, "CAKE:"+price2NewCAKE)
//         // bot.sendMessage(chatId, "ATOM:"+price2NewATOM)
//         // bot.sendMessage(chatId, "AXS:"+price2NewAXS)
//         // bot.sendMessage(chatId, "DOT:"+price2NewDOT)
//         // bot.sendMessage(chatId, "LINA:"+price2NewLINA)
//         // bot.sendMessage(chatId, "ZIL:"+price2NewZIL)
//         // bot.sendMessage(chatId,"on stp_interval="+stp_interval)  
//     // }else if (msg.text==="/b"){
//     //     // setInterval (autosendmassege, timeInterval)
//     //     // function autosendmassege() {
//     //         let messag_BTC=" BTC:"+price2NewBTC;
//     //         let messag_ETH=" ETH:"+price2NewETH;
//     //         let messag_BNB=" BNB:"+price2NewBNB;
//     //         // bot.sendMessage(chatId,"turn on interval!..."+"stp_interval="+stp_interval)  
//     //         bot.sendMessage(chatId,messag_BTC)
//     //         bot.sendMessage(chatId,messag_ETH)
//     //         bot.sendMessage(chatId,messag_BNB)
//     //         // }    
//     }else{
//         // stp_interval= false;
//         bot.sendMessage(chatId,mesage)   
//     }}
//     catch{err=>{    
//         //res.json({result2:false});
//         console.log("loi kia::  "+err);
//         next();}
//     }
// });


// bot.on("polling_error", (msg) => {
//     // if (err) console.Log("111   "+err)
//     // else{
//     const chatId = msg.chat.id;
//     // console.log(msg);
//     const chatId_vt=6826660034
//     const chatId_mobi=6450388221
//     const chatId_vina=6708274799
//     let mesage="lời chào không hợp lệ";
//     if(msg.text==="/b"){
//         bot.sendMessage(chatId_mobi,"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH)
//         bot.sendMessage(chatId_vina,"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH)
//         bot.sendMessage(chatId_vt,"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH)
                
//     }else{
//         bot.sendMessage(chatId,mesage)   
//     }
//     // }
// });
var timed2;
var rh,mh,sh,dh,mmh,yh;
var boolrh15= false;
var boolrh30= false;
var boolrh1h= true;
var boolrh2h= false;
var boolrh4h= false;
var boolrh6h= false;
var booldh= false;
var boolrh12h= false;
var boolrh7_19h= false;
var boolSSFalse= false;
var boolSSTrue= true;
bot.on('message', (msg) => {
    try{
        const chatId = msg.chat.id;
        // console.log(msg);
        const chatId_vt2=6826660034
        const chatId_mobi2=6450388221
        const chatId_vina2=6708274799
        let mesage="lời chào không hợp lệ";
        // if ((mh===30) || (mh===0)){
        //     //console.log("time111   "+rh);
        //     bot.sendMessage(chatId_mobi2,"time2: "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
        //     bot.sendMessage(chatId_vina2,"time2: "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
        //     bot.sendMessage(chatId_vt2,"time2: "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
        //     }else{
                if (msg.text==="/now"){
                console.log("time now "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh);
                bot.sendMessage(chatId_mobi2,"time3   "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
                bot.sendMessage(chatId_vina2,"time3   "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
                bot.sendMessage(chatId_vt2,"time3   "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)          
                }else{ if (msg.text==="/bat15"){
                    boolrh15= boolSSTrue;
                    boolrh30= boolSSFalse;
                    boolrh1h= boolSSFalse;
                    boolrh2h= boolSSFalse;
                    boolrh4h= boolSSFalse;
                    boolrh6h= boolSSFalse;
                    boolrh12h= boolSSFalse;
                    boolrh7_19h= boolSSFalse;
                    booldh= boolSSFalse;
                    bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                    }else{ if (msg.text==="/bat30"){
                        boolrh15= boolSSFalse;
                        boolrh30= boolSSTrue;
                        boolrh1h= boolSSFalse;
                        boolrh2h= boolSSFalse;
                        boolrh4h= boolSSFalse;
                        boolrh6h= boolSSFalse;
                        boolrh12h= boolSSFalse;
                        boolrh7_19h= boolSSFalse;
                        booldh= boolSSFalse;
                        bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                        }else{ if (msg.text==="/bat1h"){
                            boolrh15= boolSSFalse;
                            boolrh30= boolSSFalse;
                            boolrh1h= boolSSTrue;
                            boolrh2h= boolSSFalse;
                            boolrh4h= boolSSFalse;
                            boolrh6h= boolSSFalse;
                            boolrh12h= boolSSFalse;
                            boolrh7_19h= boolSSFalse;
                            booldh= boolSSFalse;
                            bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                            }else{ if (msg.text==="/bat2h"){
                                boolrh15= boolSSFalse;
                                boolrh30= boolSSFalse;
                                boolrh1h= boolSSFalse;
                                boolrh2h= boolSSTrue;
                                boolrh4h= boolSSFalse;
                                boolrh6h= boolSSFalse;
                                boolrh12h= boolSSFalse;
                                boolrh7_19h= boolSSFalse;
                                booldh= boolSSFalse;
                                bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                }else{ if (msg.text==="/bat4h"){
                                    boolrh15= boolSSFalse;
                                    boolrh30= boolSSFalse;
                                    boolrh1h= boolSSFalse;
                                    boolrh2h= boolSSFalse;
                                    boolrh4h= boolSSTrue;
                                    boolrh6h= boolSSFalse;
                                    boolrh12h= boolSSFalse;
                                    boolrh7_19h= boolSSFalse;
                                    booldh= boolSSFalse;
                                    bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                    }else{ if (msg.text==="/bat6h"){
                                        boolrh15= boolSSFalse;
                                        boolrh30= boolSSFalse;
                                        boolrh1h= boolSSFalse;
                                        boolrh2h= boolSSFalse;
                                        boolrh4h= boolSSFalse;
                                        boolrh6h= boolSSTrue;
                                        boolrh12h= boolSSFalse;
                                        boolrh7_19h= boolSSFalse;
                                        booldh= boolSSFalse;
                                        bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                        }else{if (msg.text==="/bat12h"){
                                            boolrh15= boolSSFalse;
                                            boolrh30= boolSSFalse;
                                            boolrh1h= boolSSFalse;
                                            boolrh2h= boolSSFalse;
                                            boolrh4h= boolSSFalse;
                                            boolrh6h= boolSSFalse;
                                            boolrh12h= boolSSTrue;
                                            boolrh7_19h= boolSSFalse;
                                            booldh= boolSSFalse;
                                            bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                            }else{if (msg.text==="/bat7_19h"){
                                                boolrh15= boolSSFalse;
                                                boolrh30= boolSSFalse;
                                                boolrh1h= boolSSFalse;
                                                boolrh2h= boolSSFalse;
                                                boolrh4h= boolSSFalse;
                                                boolrh6h= boolSSFalse;
                                                boolrh12h= boolSSFalse;
                                                boolrh7_19h= boolSSTrue;
                                                booldh= boolSSFalse;
                                                bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                                }else{if (msg.text==="/batday"){
                                                    boolrh15= boolSSFalse;
                                                    boolrh30= boolSSFalse;
                                                    boolrh1h= boolSSFalse;
                                                    boolrh2h= boolSSFalse;
                                                    boolrh4h= boolSSFalse;
                                                    boolrh6h= boolSSFalse;
                                                    boolrh12h= boolSSFalse;
                                                    boolrh7_19h= boolSSFalse;
                                                    booldh= boolSSTrue;
                                                    bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                                    }else{if (msg.text==="/tatall"){
                                                        boolrh15= boolSSFalse;
                                                        boolrh30= boolSSFalse;
                                                        boolrh1h= boolSSFalse;
                                                        boolrh2h= boolSSFalse;
                                                        boolrh4h= boolSSFalse;
                                                        boolrh6h= boolSSFalse;
                                                        boolrh12h= boolSSFalse;
                                                        boolrh7_19h= boolSSFalse;
                                                        booldh= boolSSFalse;
                                                        bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                                        }else{
                                                            bot.sendMessage(chatId,mesage)
                                                            console.log("time4:  "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh);
                                                            bot.sendMessage(chatId,"boolrh15:"+boolrh15+"\n"+"::boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh2h:"+boolrh2h+"\n"+"::boolrh4h:"+boolrh4h+"\n"+"::boolrh6h:"+boolrh6h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                                            // }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
            }
        }
    }
    catch{(err)=>{
        console.log("111   "+err)}
    }
});
function repeartTime(){
    try{
        timed2=new Date();
        mh=timed2.getMinutes();
        rh=timed2.getHours();
        sh=timed2.getSeconds();
        dh=timed2.getDate();
        mmh=timed2.getMonth();
        yh=timed2.getFullYear();
        const chatId_vt22=6826660034
        const chatId_mobi22=6450388221
        const chatId_vina22=6708274799
        if (((mh===0) || (mh===15)||(mh===30) || (mh===45)) & (boolrh15===true)){
            // console.log("time888   "+rh2+':'+rh);
            bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
            bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
            bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
            }else{if (((mh===30) || (mh===0)) & (boolrh30===true)){
                // console.log("time888   "+rh2+':'+rh);
                bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)               
                }else{if ((mh===0) & (boolrh1h===true)){
                // console.log("time888   "+rh2+':'+rh);
                bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL+"__TRUMP"+price2NewTRUMP+";--DOGE:"+price2NewDOGE+";_TRX:"+price2NewTRX+"\n__"+"XRP:"+price2NewXRP+";--MANA:"+price2NewMANA)
                bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL+"__TRUMP"+price2NewTRUMP+";--DOGE:"+price2NewDOGE+";_TRX:"+price2NewTRX+"\n__"+"XRP:"+price2NewXRP+";--MANA:"+price2NewMANA)
                bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL+"__TRUMP"+price2NewTRUMP+";--DOGE:"+price2NewDOGE+";_TRX:"+price2NewTRX+"\n__"+"XRP:"+price2NewXRP+";--MANA:"+price2NewMANA)
                }else{if ((mh===0) & ((rh===0)||(rh===2)||(rh===4)||(rh===6)||(rh===8)||(rh===10)||(rh===12)||(rh===14)||(rh===16)||(rh===18)||(rh===20)||(rh===22)) & (boolrh2h===true)){
                    // console.log("time888   "+rh2+':'+rh);
                    bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                    bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                    bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                    }else{if ((mh===0) & ((rh===0)||(rh===4)||(rh===8)||(rh===12)||(rh===16)||(rh===18)||(rh===20)) & (boolrh4h===true)){
                        // console.log("time888   "+rh2+':'+rh);
                        bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                        bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                        bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                        }else{if ((mh===0) & ((rh===0)||(rh===6)||(rh===12)||(rh===18)) & (boolrh6h===true)){
                            // console.log("time888   "+rh2+':'+rh);
                            bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                            bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                            bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)    
                            }else{if ((mh===0) & ((rh===12)||(rh===0)) & (boolrh12h===true)){
                                // console.log("time888   "+rh2+':'+rh);
                                bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                }else{if ((mh===0) & ((rh===7)||(rh===19)) & (boolrh7_19h===true)){
                                    // console.log("time888   "+rh2+':'+rh);
                                    bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                    bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                    bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                    }else{ if ((mh===0) & (rh===0) & (booldh===true)){
                                        // console.log("time888   "+rh2+':'+rh);
                                        bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                        bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                        bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                        }else{
                                            // bot.sendMessage(chatId_mobi22,"time888   "+rh)
                                            // console.log("boolrh30: "+boolrh30);
                                            // console.log("boolrh1h: "+boolrh1h);
                                            // console.log("boolrh12h: "+boolrh12h);
                                            // console.log("boolrh7_19h: "+boolrh7_19h);
                                            // console.log("booldh:  "+booldh);
                                            // bot.sendMessage(chatId,"boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                            // console.log("boolrh30:"+boolrh30+"\n"+"::boolrh1h:"+boolrh1h+"\n"+"::boolrh12h:"+boolrh12h+"\n"+"::boolrh7_19h: "+boolrh7_19h+"\n"+"::booldh:"+booldh);
                                            // bot.sendMessage(chatId_mobi22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                            // bot.sendMessage(chatId_vina22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)
                                            // bot.sendMessage(chatId_vt22,"time:"+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh+"\n__"+"BTC:"+price2NewBTC+ ";--ETH:"+price2NewETH+"\n__"+"BNB:"+price2NewBNB+";--ADA:"+price2NewADA+"\n__"+"CAKE:"+price2NewCAKE+";--ATOM:"+price2NewATOM+"\n__"+"DOT:"+price2NewDOT+";--C98:"+price2NewC98+";_AXS:"+price2NewAXS+"\n__"+"LINA:"+price2NewLINA+";--ZIL:"+price2NewZIL)    
                                            console.log("time0: "+rh+':'+mh+':'+sh+':/'+dh+':/'+mmh+':/'+yh);   
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
    catch{(err)=>{console.log("5555   "+err)}}
}
setInterval (repeartTime,60000);

// doan code da oK
// function repeartTele() {
//     try{
//     const chatId_vt=6826660034
//     const chatId_mobi=6450388221
//     const chatId_vina=6708274799
//     bot.sendMessage(chatId_mobi,"time33:"+rh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
//     bot.sendMessage(chatId_vina,"time33:"+rh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
//     bot.sendMessage(chatId_vt,"time33:"+rh+"\n__"+"BTC:"+GIATWO.price2NewBTC+ ";--ETH:"+GIATWO.price2NewETH+"\n__"+"BNB:"+GIATWO.price2NewBNB+";--ADA:"+GIATWO.price2NewADA+"\n__"+"CAKE:"+GIATWO.price2NewCAKE+";--ATOM:"+GIATWO.price2NewATOM+"\n__"+"DOT:"+GIATWO.price2NewDOT+";--C98:"+GIATWO.price2NewC98+";_AXS:"+GIATWO.price2NewAXS+"\n__"+"LINA:"+GIATWO.price2NewLINA+";--ZIL:"+GIATWO.price2NewZIL)
//     }
//     catch{(err)=>{console.log("222222   "+err)}}
// }
// setInterval (repeartTele,1800000);
// //========================================================
        //console.log(msg);
//     switch (msg.text) {
//         case ("/eb"):{
//             //stp_interval= true;
//             mesage="let All BTC:"+priceData
//             bot.sendMessage(chatId,mesage)
//             bot.sendMessage(chatId, "ETH:"+priceData2)
//             bot.sendMessage(chatId, "BNB:"+priceData3)
//             bot.sendMessage(chatId, "ADA:"+priceData4)
//             bot.sendMessage(chatId, "SOL:"+priceData5)
//             bot.sendMessage(chatId, "AVAX:"+priceData6)
//             bot.sendMessage(chatId, "CAKE:"+priceData7)
//             bot.sendMessage(chatId, "ATOM:"+priceData8)
//             bot.sendMessage(chatId, "AXS:"+priceData9)
//             bot.sendMessage(chatId, "DOT:"+priceData10)
//             bot.sendMessage(chatId, "C98:"+priceData11)
//             bot.sendMessage(chatId, "LINA:"+priceData12)
//             bot.sendMessage(chatId, "ZIL:"+priceData13)
//             bot.sendMessage(chatId,"on stp_interval=")  
//             break;}
//         case ("/bb"):
//             {
//             setInterval (autosendmassege, timeInterval)
//             function autosendmassege() {
//             let messag_BTC=" BTC:"+priceData;
//             let messag_ETH=" ETH:"+priceData2;
//             let messag_BNB=" BNB:"+priceData3;
//             bot.sendMessage(chatId,"turn on interval!...")  
//             bot.sendMessage(chatId,messag_BTC)
//             bot.sendMessage(chatId,messag_ETH)
//             bot.sendMessage(chatId,messag_BNB)
//             }
//             break;}     
//         default:{
//             //stp_interval= false;
//             bot.sendMessage(chatId,mesage+"   turn off interval!...")   
//             };
//     }
// });
 
 //bot.sendMessage(6450388221,'OK E'+priceETH2.close)
//=========================================
// OAuth 1.0a (User context)
// const userClient = new TwitterApi({
//     appKey: 'lqFsjmtZTPaYy3jSkWq04Jfe8',
//     appSecret: 'S8OqX8KiiLhJCrWBCWYZZKPSMVZKnzbefEgplj2C7XB1H0Jgyq',
//     // Following access tokens are not required if you are
//     // at part 1 of user-auth process (ask for a request token)
//     // or if you want a app-only client (see below)
//     accessToken: '1782086214709129216-tPhT4EKi5IN28g12qgGuBZakfCoHzn',
//     accessSecret: 'X2D3gdHj7f2kgHPYxq0b3zWNYzhaWiskPAazJxUE1aMXV',
//   });
  
// //// Instantiate with desired auth type (here's Bearer v2 auth)
// //const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAANuHtgEAAAAADQZHk9MWC%2BN7FSzVBtBSxPuMyqc%3DUHf8v39jKBEBGlayOMwyevPSdyYj1WgikpicYMisMMmw1351Wn');
// //// Play with the built in methods
// // const user = await readOnlyClient.v2.userByUsername('hiepvn612464');
// // await twitterClient.v2.tweet('Hello, this is a test.');
// // // You can upload media easily!
// // await twitterClient.v1.uploadMedia('./big-buck-bunny.mp4');
//   // OAuth2 (app-only or user context)
//   // Create a client with an already known bearer token
// const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAANuHtgEAAAAADQZHk9MWC');
//   // OR - you can also create a app-only client from your consumer keys -
// //const appOnlyClientFromConsumer = await userClient.appLogin();
// // Tell typescript it's a readonly app
// //const readOnlyClient = twitterClient.readOnly;

// //========================================================
//moi lan thay doi IP phai dang nhap vao github vao https://testnet.binance.vision/ de lay API moi
const ccxt = require("ccxt");
const binance = new ccxt.binance({
    apiKey:"mg96LoZ0ZXlYKPrRyp31todHi0z9ksA0eUZiVU1N8wSbdQAlNknz3dIJfwx1jlA4",
    secret:"Eh0b7T6skQvTq9NOgnJds9fWOEGZuWXFzPXMLdXAHHJKPxRKEo3AVpSld329w5J2"
});
binance.setSandboxMode(true);
//var priceBTC2={};
//var priceETH2=[];
// var priceBTC;
// var priceETH;
// var priceBNB;
// var priceADA;
// var priceSOL;
// var priceAVAX;
// var priceCAKE;
// var priceATOM;
// var priceAXS;
// var priceDOT;
// var priceC98;
// var priceLINA;
// var priceZIL;
//var priceB=toString(priceBTC);
var mangBlockChainBinance=[];
app.post("/balance", function(req, res){
    binance.fetchBalance().then((data)=>{
        //let sizeLength2=Object.keys(data).length;
        //console.log(sizeLength2);
        //console.log(data[10]);
        //for (i=0; (i<sizeLength2); i++){
            //mangBlockChainBinance.push(data[balances].asset);
                
                //if (data[""].info.symbol==="ZIL/USDT"){
                    //j=i;
                    //console.log("data[j]");
                    //break;
            //};
        //console.log(mangBlockChainBinance);
        //let sizeLength2=Object.keys(data).length;
        //console.log(data[balances]);
        res.json({result:true, symbols:[
            {symb:"BTC", free:data.BTC.free},
            {symb:"ETH", free:data.ETH.free},
            {symb:"BNB", free:data.BNB.free},
            {symb:"ADA", free:data.ADA.free},   
            {symb:"SOL", free:data.SOL.free},
            {symb:"AVAX",free:data.AVAX.free},
            {symb:"CAKE",free:data.CAKE.free},
            {symb:"ATOM",free:data.ATOM.free},
            {symb:"AXS", free:data.AXS.free},
            {symb:"DOT", free:data.DOT.free},
            {symb:"C98", free:data.C98.free},
            {symb:"LINA",free:data.LINA.free},
            {symb:"ZIL", free:data.ZIL.free},
            {symb:"TRUMP", free:data.TRUMP.free},
            {symb:"DOGE", free:data.DOGE.free},
            {symb:"TRX", free:data.TRX.free},
            {symb:"XRP", free:data.XRP.free},
            {symb:"MANA", free:data.MANA.free},
            {symb:"USDT",free:data.USDT.free},
            {symb:"TUSD",free:data.TUSD.free},
            {symb:"USDC",free:data.USDC.free}
            ]}); 
    })
    .catch((err)=>{
        //res.json({result:false});
        console.log("balance loi kia::  "+err);
    }); 
});
// const mangCoin = new array ([
// 'BTC',
// 'ETH',
// 'BNB'
// ]);
//var GIATWO
var price2NewBTC
var price2NewETH
var price2NewBNB
var price2NewADA
var price2NewSOL
var price2NewAVAX
var price2NewCAKE
var price2NewATOM
var price2NewAXS
var price2NewDOT
var price2NewC98
var price2NewLINA
var price2NewZIL
var price2NewTRUMP
var price2NewDOGE
var price2NewTRX
var price2NewXRP
var price2NewMANA
//TRUMP
function repeatPrice(){
    binance.fetchTickers().then((data)=>{
            // data.forEach(function(element) {
            // console.log(element);
            // });
            price2NewBTC =data["BTC/USDT"].close+"/="+data["BTC/USDT"].open+"///"+data["BTC/USDT"].percentage,
            price2NewETH =data["ETH/USDT"].close+"/="+data["ETH/USDT"].open+"///"+data["ETH/USDT"].percentage,
            price2NewBNB =data["BNB/USDT"].close+"/="+data["BNB/USDT"].open+"///"+data["BNB/USDT"].percentage,
            price2NewADA =data["ADA/USDT"].close+"/="+data["ADA/USDT"].open+"///"+data["ADA/USDT"].percentage,
            price2NewSOL =data["SOL/USDT"].close+"/="+data["SOL/USDT"].open+"///"+data["SOL/USDT"].percentage,
            price2NewAVAX =data["AVAX/USDT"].close+"/="+data["AVAX/USDT"].open+"///"+data["AVAX/USDT"].percentage,
            price2NewCAKE =data["CAKE/USDT"].close+"/="+data["CAKE/USDT"].open+"///"+data["CAKE/USDT"].percentage, 
            price2NewATOM =data["ATOM/USDT"].close+"/="+data["ATOM/USDT"].open+"///"+data["ATOM/USDT"].percentage, 
            price2NewAXS =data["AXS/USDT"].close+"/="+data["AXS/USDT"].open+"///"+data["AXS/USDT"].percentage,
            price2NewDOT =data["DOT/USDT"].close+"/="+data["DOT/USDT"].open+"///"+data["DOT/USDT"].percentage, 
            price2NewC98 =data["C98/USDT"].close+"/="+data["C98/USDT"].open+"///"+data["C98/USDT"].percentage, 
            price2NewLINA =data["LINA/USDT"].close+"/="+data["LINA/USDT"].open+"///"+data["LINA/USDT"].percentage,
            price2NewZIL =data["ZIL/USDT"].close+"/="+data["ZIL/USDT"].open+"///"+data["ZIL/USDT"].percentage;
            price2NewTRUMP =data["TRUMP/USDT"].close+"/="+data["TRUMP/USDT"].open+"///"+data["TRUMP/USDT"].percentage;
            price2NewDOGE =data["DOGE/USDT"].close+"/="+data["DOGE/USDT"].open+"///"+data["DOGE/USDT"].percentage;
            price2NewTRX =data["TRX/USDT"].close+"/="+data["TRX/USDT"].open+"///"+data["TRX/USDT"].percentage;
            price2NewXRP =data["XRP/USDT"].close+"/="+data["XRP/USDT"].open+"///"+data["XRP/USDT"].percentage;
            price2NewMANA =data["MANA/USDT"].close+"/="+data["MANA/USDT"].open+"///"+data["MANA/USDT"].percentage;
            //console.log(data);
            //console.log(data[10]);
            //console.log(data["BTC/USDT"]);
            //console.log(data["ZIL/USDT"].info.symbol);
            // let index = data.findIndex((item) => item.id === data["ZIL/USDT"]);
            // console.log(index); // 1
            let j,k,l
            
            let sizeLength=Object.keys(data).length;
            // for (i=0; (i<sizeLength); i++){
            //     data[mangBlockChainBinance[i].info.symbol]
            //         //console.log(data[j]);
            //         if (data[""].info.symbol==="ZIL/USDT"){
            //             j=i;
            //             //console.log("data[j]");
            //             break;
            //         }}

            //console.log(sizeLength);
            //console.log(data.indexOf("ZIL/USDT", from))


                // var sizeRisk = Object.keys(data).length;
            // mangCoin.forEach(function (item, index, array) {
            //     console.log(`item ${item} at index ${index} in array ${array}`);
            // });
            // let ranks = ['A', 'B', 'C'];
 
            // ranks.forEach(function (e) {
            //     console.log(e); // A B C
            // });
            // var mangBlockChainBinance
            // data.forEach(function (e) {
            //     mangBlockChainBinance.push(e.info)
            //         console.log(mangBlockChainBinance); // A B C
            //     });

            // for (i=0; (i<sizeLength); i++){
                
            //     //console.log(data[j]);
            //     if (data[""].info.symbol==="ZIL/USDT"){
            //         j=i;
            //         //console.log("data[j]");
            //         break;
            //     }}
            // for (i=0; (i<sizeLength); i++){
                
            //     if (data[i]==="BTC/USDT"){
            //         k=i;                  
            //         break;
            //     }}
            //console.log(j);
            // console.log(k);
            // console.log(data[j].symbol);
            //for 
             
    })
    .catch((err)=>{
        console.log("repeatPrice loi kia::  "+err)
    });
    // var k;
    // var l;
    // var j;
    // var i; 
    // var sizeRisk = Object.keys(data).length;
    // for (i=0; (i<sizeRisk); i++){
    //     if (data[i].symbol==="ZILUSDT"){
    //         j=i;
    //         break;
    //     }}
    // for (i=0; (i<sizeRisk); i++){
    //     if (data[i].symbol==="BTCUSDT"){
    //         k=i;
    //         break;
    //     }}
    // for (i=0; (i<sizeRisk); i++){
    //     if (data[i].symbol==="LINAUSDT"){
    //         l=i;
    //         break;
    //     }}
}
setInterval(repeatPrice,5000);

app.post("/balance2", function(req, res){
    try{
        res.json({servers:true, prices:[
                {symp:"BTC", pricep:price2NewBTC},
                {symp:"ETH", pricep:price2NewETH},
                {symp:"BNB", pricep:price2NewBNB},
                {symp:"ADA", pricep:price2NewADA},   
                {symp:"SOL", pricep:price2NewSOL},
                {symp:"AVAX", pricep:price2NewAVAX},
                {symp:"CAKE", pricep:price2NewCAKE},
                {symp:"ATOM", pricep:price2NewATOM},
                {symp:"AXS", pricep:price2NewAXS},
                {symp:"DOT", pricep:price2NewDOT},
                {symp:"C98", pricep:price2NewC98},
                {symp:"LINA", pricep:price2NewLINA},
                {symp:"ZIL", pricep:price2NewZIL},
                {symp:"TRUMP", pricep:price2NewTRUMP},
                {symp:"DOGE", pricep:price2NewDOGE},
                {symp:"TRX", pricep:price2NewTRX},
                {symp:"XRP", pricep:price2NewXRP},
                {symp:"MANA", pricep:price2NewMANA},
                {symp:"USDT"},
                {symp:"TUSD"},
                {symp:"USDC"}]});
        //console.log("res");
        //console.log("post balance3 đã xử lý ok!");

    }
    catch{(err)=>{
        //res.json({result2:false});
        console.log("bl2 loi kia::  "+err);
    }}
});
app.post("/balance3", function(req, res){
    try{
        res.json({servers:true, prices:[
                {symb:"BTC", price:price2NewBTC},
                {symb:"ETH", price:price2NewETH},
                {symb:"BNB", price:price2NewBNB},
                {symb:"ADA", price:price2NewADA},   
                {symb:"SOL", price:price2NewSOL},
                {symb:"AVAX", price:price2NewAVAX},
                {symb:"CAKE", price:price2NewCAKE},
                {symb:"ATOM", price:price2NewATOM},
                {symb:"AXS", price:price2NewAXS},
                {symb:"DOT", price:price2NewDOT},
                {symb:"C98", price:price2NewC98},
                {symb:"LINA", price:price2NewLINA},
                {symb:"ZIL", price:price2NewZIL},
                {symb:"TRUMP", price:price2NewTRUMP},
                {symb:"DOGE", price:price2NewDOGE},
                {symb:"TRX", price:price2NewTRX},
                {symb:"XRP", price:price2NewXRP},
                {symb:"MANA", price:price2NewMANA},
                {symb:"USDT"},
                {symb:"TUSD"},
                {symb:"USDC"}]});
        //console.log("res");
        //console.log(res);
        console.log("post balance3 đã xử lý ok!");

    }
    catch{(err)=>{
        //res.json({result2:false});
        console.log("post balance3 đã bị lỗi kia::  "+err);
    }}
});
app.post("/balance4", function(req, res){
    try{
        res.json("OK Post 4");
        console.log("post balance4 đã xử lý ok!");
        //console.log(res);
    }
    catch{(err)=>{
        console.log("post balance4 loi kia::  "+err);
    }}
});
// const mangCoin2 = new array ([
//     'BTC',
//     'ETH',
//     'BNB',
//     'ADA',
//     'SOL',
//     'AVAX',
//     'CAKE',
//     'ATOM',
//     'AXS',
//     'DOT',
//     'C98',
//     'LINA',
//     'ZIL',
//     'USDT',
//     'TUSD',
//     'USDC'
// ]);

app.post("/userSendBuyOrderETH", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketBuyOrder("ETH/USDT", amount).then((data)=>{
        //console.log(data)
        res.json(data);
    });
});
app.post("/userSendSellOrderETH", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketSellOrder("ETH/USDT", amount).then((data)=>{
        res.json(data);
    });
});
app.post("/userSendBuyOrderBNB", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketBuyOrder("BNB/USDT", amount).then((data)=>{
        res.json(data);
    });
});
app.post("/userSendSellOrderBNB", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketSellOrder("BNB/USDT", amount).then((data)=>{
        res.json(data);
    });
});
app.post("/userSendMarketBuyOrderADA", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketBuyOrder("ADA/USDT", amount).then((data)=>{
        res.json(data);
    });
});
app.post("/userSendMarketSellOrderADA", function(req, res){
    var amount = parseFloat(req.body.amount);
    binance.createMarketSellOrder("ADA/USDT", amount).then((data)=>{
        res.json(data);
    });
});

function creatRandom(sym){
    rM=Math.random();
    return rM*(sym-0.024)+0.024
}
var sdfs= 0.028
// setInterval(creatRandom(sdfs),3000); 
app.post("/userSetinterval", function(req, res){
    try{
        let kqq=creatRandom(sdfs)
        res.json({kq:true,random:kqq.toFixed(5)});

        }
    catch{err=>{
        //res.json({kq:false});
        console.log("Setinterval loi kia::  "+err);
    }}});
