import React, {Component} from "react";
import axios from "axios";
import dayjs from 'dayjs';
class BinanceCom extends Component{  
    constructor(props){
        super(props);
        this.state={
            amount:0.01,
            amount2:0.1,
            amount3:200,
            arrSymbol:[],
            arrPrice:[],
            BMAR:0, 
            serverStatus:""
        }
    }
    componentDidMount(){
        this.updateBalance();
        this.updatePrice();
        this.randomBMAR()
    };
    render(){
        return(  
            <div className="BinanceCom" style={{
                //width: "400px",
                backgroundColor:"#a4deeb",
                float:"left" ,
                //display: "flexbox",
                margin: "auto",
                //margin: "0px 0px 0px 0px",
                //padding: '0px 0px 0px 0px',
                //textAlign: "center",
            }}>
                {/* <h1>Counter: {this.state.counter}</h1> */}
                
                <div className="divTable"  style={{
                    width: "100px",
                    backgroundColor:"#61dafb",
                    //display: inline-block
                    display: "flexbox",
                    float:"left"
                    //margin: "auto",
                    //textAlign: "center",
                    }}>
                    <table border="1">
                        <tr>
                            {/* <td>Symbols</td> */}
                            <td>Amount</td>
                            {/* <td>----price---</td> */}
                        </tr>
                        {
                            this.state.arrSymbol.map((sym, i)=>{
                                return(
                                    <tr key={i}>
                                        {/* <td>{sym.symb}</td> */}
                                        <td>{sym.free}</td>
                                        {/* <td>{sym.price}</td> */}
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div className="divTable2"  style={{
                    width: "300px",
                    backgroundColor:"#61dafb",
                    //display: inline-block
                    display: "flexbox",
                    float:"left"             
                    }}>
                    <table border="1">
                        <tr>
                            <td>Symbols</td>
                            <td>--price-open-per%--</td>
                        </tr>
                        {
                            this.state.arrPrice.map((symp, j)=>{
                                return(
                                    <tr key={j}>
                                        <td>{symp.symp}</td>                                     
                                        <td>{symp.pricep}</td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                <div className="tradContainer" style={{
                    width: "360px",
                    backgroundColor:"#a4deeb",
                    float:"left" ,
                    //display: "flexbox",
                    margin: "auto",
                    //margin: "0px 0px 0px 0px",
                    //padding: '0px 0px 0px 0px',
                    textAlign: "center",
                }}>
                    {/* <h3 style={{margin: "2px 0px 0px 0px"}}>Buy<input type="text" style={{width: "70px"}} 
                    value={this.state.amount0}
                        onChange={(txt)=>(this.setState({amount0:txt.target.value}))}                
                    />:: 
                    <input type="text" style={{width: "80px"}} 
                    value={this.state.tradesymbol}
                        onChange={(txt)=>(this.setState({tradesymbol:txt.target.value}))}/>  
                    <button onClick={()=>{this.sendBuyOrder0()}} style={{width: "120px", backgroundColor :"green"}}> Buy {this.state.amount}::{this.state.tradesymbol}</button>
                    </h3> */}
                    <h3>Your Binance Account Balance _ BMAR: {this.state.BMAR}</h3>     
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Buy<input type="text" style={{width: "70px"}} 
                    value={this.state.amount}
                        onChange={(txt)=>(this.setState({amount:txt.target.value}))}                
                    />  ETH (via USDT)
                    <button onClick={()=>{this.sendBuyOrder()}} style={{width: "100px", backgroundColor :"green"}}> Buy {this.state.amount} ETH</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Sell<input type="text" style={{width: "70px"}}
                        value={this.state.amount}
                        onChange={(txt)=>(this.setState({amount:txt.target.value}))}                
                    />  ETH (via USDT)
                    <button onClick={()=>{this.sendSellOrder()}} style={{width: "100px", backgroundColor :"red"}}>Sell {this.state.amount} ETH</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Buy<input type="text" style={{width: "70px"}}
                        value={this.state.amount2}
                        onChange={(txt)=>(this.setState({amount2:txt.target.value}))}                
                    />  BNB (via USDT)
                    <button onClick={()=>{this.sendBuyOrder2()}} style={{width: "100px", backgroundColor :"green"}}> Buy {this.state.amount2} BNB</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Sell<input type="text" style={{width: "70px"}}
                        value={this.state.amount2}
                        onChange={(txt)=>(this.setState({amount2:txt.target.value}))}                
                    />  BNB (via USDT)
                    <button onClick={()=>{this.sendSellOrder2()}} style={{width: "100px", backgroundColor :"red"}}>Sell {this.state.amount2} BNB</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Buy<input type="text" style={{width: "70px"}}
                        value={this.state.amount3}
                        onChange={(txt)=>(this.setState({amount3:txt.target.value}))}                
                    />  ADA (via USDT)
                    <button onClick={()=>{this.sendBuyOrder3()}} style={{width: "100px", backgroundColor :"green"}}>Buy {this.state.amount3} ADA</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Sell<input type="text" style={{width: "70px"}}
                        value={this.state.amount3}
                        onChange={(txt)=>(this.setState({amount3:txt.target.value}))}                
                    />  ADA (via USDT)
                    <button onClick={()=>{this.sendSellOrder3()}} style={{width: "100px", backgroundColor :"red"}}>Sell {this.state.amount3} ADA</button>
                    </h3>
                    {/* serverStatus */}
                    <h3>sv:{this.state.serverStatus}</h3>
                    {/* <h3 style={{margin: "2px 0px 0px 0px"}}>Nhap<input type="text" style={{width: "70px"}}
                        value={this.state.timeInterval}
                        onChange={(txt)=>(this.setState({ timeInterval:txt.target.value}))}                
                    />time interval telegram
                    <button onClick={()=>{this.sendChangeTime()}} style={{width: "160px", backgroundColor :"blue"}}>Nhap {this.state.timeInterval} time</button>
                    </h3>
                    <h3 style={{margin: "2px 0px 0px 0px"}}>Nhap<input type="text" style={{width: "70px"}}
                        value={this.state.stpInterval}
                        onChange={(txt)=>(this.setState({stpInterval:txt.target.value}))}                
                    />stp bot telegram
                    <button onClick={()=>{this.sendChangeStpBot()}} style={{width: "160px", backgroundColor :"blue"}}>Nhap {this.state.stpInterval} time</button>
                    </h3> */}
                </div>
                {/* <div className="tradContainerClear" type={{clear:"both"}}></div> */}
            </div>
    
        )
    }
    updateBalance(){
        axios.post("http://localhost:3001/balance")
        .then(res=>{
            this.setState({arrSymbol:res.data.symbols});
        })
        .catch(err=>console.log(err))
    }
    updatePrice(){
        axios.post("http://localhost:3001/balance2")
        .then(res=>{
            this.setState({arrPrice:res.data.prices});
        })
        .catch(err=>console.log('updatePrice'+err))
    }
    sendBuyOrder(){
        axios({
            method:"POST",
            url:"http://localhost:3001/userSendBuyOrderETH",
            data: new URLSearchParams({
                amount:this.state.amount
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    sendSellOrder(){
        axios({method:"POST",
            url:"http://localhost:3001/userSendSellOrderETH",
            data: new URLSearchParams({
                amount:this.state.amount
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
    sendBuyOrder2(){
        axios({
            method:"POST",
            url:"http://localhost:3001/userSendBuyOrderBNB",
            data: new URLSearchParams({
                amount:this.state.amount2
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    sendSellOrder2(){
        axios({method:"POST",
            url:"http://localhost:3001/userSendSellOrderBNB",
            data: new URLSearchParams({
                amount:this.state.amount2
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
    sendBuyOrder3(){
        axios({method:"POST",
            url:"http://localhost:3001/userSendMarketBuyOrderADA",
            data: new URLSearchParams({
                amount:this.state.amount3
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    sendSellOrder3(){
        axios({method:"POST",
            url:"http://localhost:3001/userSendMarketSellOrderADA",
            data: new URLSearchParams({
                amount:this.state.amount3
            })
        })
        .then((res)=>{
            console.log(res.data);
            this.updateBalance();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    randomBMAR(){
        axios.post("http://localhost:3001/userSetinterval")
        .then(res=>{
            this.setState({BMAR:res.data.random});    
            let date = dayjs().add(0,'days').format('dddd, MMMM D, YYYY'); // Wednesday, June 16, 2023 
            let time = dayjs().subtract(0, 'hours').format('HH:mm:ss'); // 07:53:00
            this.setState({serverStatus:time +"-:-"+ date});
        })
        .catch(err=>console.log("randomBMAR"+err))        
    }
    fgdfgdf=setInterval(() => {
        this.randomBMAR();
        this.updatePrice();
    },3000);
}
export default BinanceCom;