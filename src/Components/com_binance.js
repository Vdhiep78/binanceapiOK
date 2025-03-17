// import React, {Component} from "react";
// import axios from "axios";

// class BinanceCom extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             amount:0.1,
//             amount2:100,
//             arrSymbol:[],
//             //arrPrice:[],
//             BTC:0,
//             ETH:0,
//             BNB:0,
//             ADA:0,
//             USDT:1,
//             TUSD:0,
//             USTC:0,
//             USDC:0,
//             SOL:0,
//             AVAX:0,
//             CAKE:0,
//             ATOM:0,
//             AXS:0,
//             DAI:0,
//             DOT:0,
//             C98:0,
//             LINA:0,
//             ZIL:0
//         }
//     }
//     componentDidMount(){
//         this.updateBalance();
//         // setInterval( this.setState.BTC, 1000);
//         // setInterval( this.setState.BTC, 1000);
//         this.getTickerBTC();
//         this.getTickerETH();
//         this.getTickerBNB();
//         this.getTickerADA();
//         this.getTickerSOL();
//         this.getTickerAVAX();
//         this.getTickerZIL();
//     }
//     // componentDidUpdate() {
//     //     if (this.State.BTC !== this.setState.BTC) {
//     //         this.getTickerBTC();
//     //     }
//     //   }
//     render(){
//         return(
//             <div className="BinanceCom">
//                 <h3>Your Binance Account Balance</h3>
//                 <table border="1">
//                     <tr>
//                         <td>Symbols</td>
//                         <td>Amount</td>
//                         <td>-----price----</td>
//                         <td>used</td>
//                     </tr>
//                     {
//                         this.state.arrSymbol.map((sym, i)=>{
//                             return(
//                                 <tr key={i}>
//                                     <td>{sym.symb}</td>
//                                     <td>{sym.free}</td>
//                                     <td>{sym.price}</td>
//                                     <td></td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </table>
//                 {/* <div>
//                     <h3>BTC:<span>{this.state.BTC}</span></h3>
//                 </div>
//                 <div>
//                     <h3>ETH:<span>{this.state.ETH}</span></h3>
//                 </div>
//                 <div>
//                     <h3>BNB:<span>{this.state.BNB}</span></h3>
//                 </div> */}
//                 {/* <h3>BNB:<span>{this.state.BNB}</span></h3> */}
//                 {/* <h3>ADA:<span>{this.state.ADA}</span></h3>
//                 <h3>USDT:<span>{this.state.USDT}</span></h3>
//                 <h3>TUSD:<span>{this.state.TUSD}</span></h3>
//                 <h3>USTC:<span>{this.state.USTC}</span></h3>
//                 <h3>USDC:<span>{this.state.USDC}</span></h3>
//                 <h3>SOL:<span>{this.state.SOL}</span></h3>
//                 <h3>AVAX:<span>{this.state.AVAX}</span></h3>
//                 <h3>CAKE:<span>{this.state.CAKE}</span></h3>
//                 <h3>ATOM:<span>{this.state.ATOM}</span></h3>
//                 <h3>AXS:<span>{this.state.AXS}</span></h3>
//                 <h3>DAI:<span>{this.state.DAI}</span></h3>
//                 <h3>DOT:<span>{this.state.DOT}</span></h3>
//                 <h3>C98:<span>{this.state.C98}</span></h3>
//                 <h3>LINA:<span>{this.state.LINA}</span></h3>
//                 <h3>ZIL:<span>{this.state.ZIL}</span></h3>  */}
//                 <h3>I want to buy   <input type="text"
//                     value={this.state.amount}
//                     onChange={(txt)=>(this.setState({amount:txt.target.value}))}                
//                 />  BNB (via USDT)</h3>
//                 <button onClick={()=>{this.sendBuyOrder2()}}> Buy {this.state.amount} BNB</button>

//                 <h3>I want to sell   <input type="text"
//                     value={this.state.amount}
//                     onChange={(txt)=>(this.setState({amount:txt.target.value}))}                
//                 />  BNB (via USDT)</h3>
//                 <button onClick={()=>{this.sendSellOrder2()}}>Sell {this.state.amount} BNB</button>

//                 <h3>I want to buy   <input type="text"
//                     value={this.state.amount2}
//                     onChange={(txt)=>(this.setState({amount2:txt.target.value}))}                
//                 />  ADA (via USDT)(*muc Min )</h3>
//                 <button onClick={()=>{this.sendMarketBuyOrder()}}>Buy {this.state.amount2} ADA</button>
                
//                 <h3>I want to sell   <input type="text"
//                     value={this.state.amount2}
//                     onChange={(txt)=>(this.setState({amount2:txt.target.value}))}                
//                 />  ADA (via USDT)(*muc Min )</h3>
//                 <button onClick={()=>{this.sendMarketSellOrder()}}>Sell {this.state.amount2} ADA</button>
//             </div>
//         )
//     }
//     updateBalance(){
//         axios.post("http://localhost:3001/balance")
//         .then(res=>{
//             console.log(res.data);
//             this.setState({arrSymbol:res.data.symbols});
//             //this.setState({BTC:res.data})
//         })
//         .catch(err=>console.log(err))
//     }

//     //setInterval( this.getTickerBT(), 1000);
//     // getTickerBTC(){
//     //     axios.post("http://localhost:3001/tickerBTC")
//     //     .then(res=>{
//     //         console.log(res.data);
//     //         this.setState({BTC:res.data});   
//     //     })
//     //     .catch(err=>console.log(err));
//     //     }
//     getTickerBTC(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerBTC",
//             data: new URLSearchParams({
//                 BTC:this.state.BTC
//             })
//         })
//     .then(res=>{
//         console.log(res.data);
//         //this.setState({BTC:res.data});   
//     })
//     .catch(err=>console.log(err));
//     }  

//     getTickerETH(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerETH",
//             data: new URLSearchParams({
//                 ETH:this.state.ETH
//             })
//         })
//         .then(res=>{
//             console.log(res.data);
//             // if (this.State.ETH !== this.setState.ETH) {
//             //     this.setState({ETH:res.data});
//             //     }
//                 //this.setState({ETH:res.data});
//         })
//         .catch(err=>console.log(err));
//     }
//     getTickerBNB(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerBNB",
//             data: new URLSearchParams({
//                 BNB:this.state.BNB
//             })
//         })
//             .then(res=>{
//                 console.log(res.data);
//                 //this.getTickerBNB()
//                 //this.setState({BNB:res.data});
//             })
//             .catch(err=>console.log(err));
//     }
//     getTickerADA(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerADA",
//             data: new URLSearchParams({
//                 ADA:this.state.ADA
//             })
//         })
//             .then(res=>{
//                 console.log(res.data);
//                 //this.getTickerBNB()
//                 //this.setState({BNB:res.data});
//             })
//             .catch(err=>console.log(err));
//     } 
//     getTickerSOL(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerSOL",
//             data: new URLSearchParams({
//                 SOL:this.state.SOL
//             })
//         })
//             .then(res=>{
//                 console.log(res.data);
//                 //this.getTickerBNB()
//                 //this.setState({BNB:res.data});
//             })
//             .catch(err=>console.log(err));
//     } 
//     getTickerAVAX(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerAVAX",
//             data: new URLSearchParams({
//                 AVAX:this.state.AVAX
//             })
//         })
//             .then(res=>{
//                 console.log(res.data);
//                 //this.getTickerBNB()
//                 //this.setState({BNB:res.data});
//             })
//             .catch(err=>console.log(err));
//     } 
//     getTickerZIL(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/tickerZIL",
//             data: new URLSearchParams({
//                 ZIL:this.state.ZIL
//             })
//         })
//             .then(res=>{
//                 console.log(res.data);
//                 //this.getTickerZIL()
//                 //this.setState({ZIL:res.data});
//             })
//             .catch(err=>console.log(err));
//     }    
//     sendBuyOrder2(){
//         axios({
//             method:"POST",
//             url:"http://localhost:3001/userSendBuyOrder",
//             data: new URLSearchParams({
//                 amount:this.state.amount
//             })
//         })
//         .then((res)=>{
//             //console.log(res.data);
//             this.updateBalance();
//             this.getTickerBTC();
//             this.getTickerETH();
//             this.getTickerBNB();
//             this.getTickerADA();
//             this.getTickerSOL();
//             this.getTickerAVAX();
//             this.getTickerZIL();
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

//     sendSellOrder2(){
//         axios({method:"POST",
//             url:"http://localhost:3001/userSendSellOrder",
//             data: new URLSearchParams({
//                 amount:this.state.amount
//             })
//         })
//         .then((res)=>{
//             //console.log(res.data);
//             this.updateBalance();
//             this.getTickerBTC();
//             this.getTickerETH();
//             this.getTickerBNB();
//             this.getTickerADA();
//             this.getTickerSOL();
//             this.getTickerAVAX();
//             this.getTickerZIL();
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     sendMarketBuyOrder(){
//         axios({method:"POST",
//             url:"http://localhost:3001/userSendMarketBuyOrder",
//             data: new URLSearchParams({
//                 amount2:this.state.amount2
//             })
//         })
//         .then((res)=>{
//             //console.log(res.data);
//             this.updateBalance();
//             this.getTickerBTC();
//             this.getTickerETH();
//             this.getTickerBNB();
//             this.getTickerADA();
//             this.getTickerSOL();
//             this.getTickerAVAX();
//             this.getTickerZIL();
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     sendMarketSellOrder(){
//         axios({method:"POST",
//             url:"http://localhost:3001/userSendMarketSellOrder",
//             data: new URLSearchParams({
//                 amount2:this.state.amount2
//             })
//         })
//         .then((res)=>{
//             //console.log(res.data);
//             this.updateBalance();
//             this.getTickerBTC();
//             this.getTickerETH();
//             this.getTickerBNB();
//             this.getTickerADA();
//             this.getTickerSOL();
//             this.getTickerAVAX();
//             this.getTickerZIL();
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
// }
// export default BinanceCom;