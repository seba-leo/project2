let walletExchange=[];
const Criptos={
    BTC:18000,
    ETH:1400,
    ADA:2.4,
    BNB:150,
    Doge:0.15
}
let TotalBTC=0;
let TotalETH=0;
let TotalADA=0;
let TotalBNB=0;
let TotalDoge=0;
let BuyCripto=true;


let AskUsd=(parseInt(prompt('¿Cuantos Usdt tenes?')));
let AskCripto=parseInt(prompt('¿que Criptomoneda queres comprar? 1.BTC 2.Eth 3.ADA 4.BNB 5.DogeCoin'));
while(BuyCripto===true){ 
    if (AskCripto===1) {
        let Conversion=AskUsd/Criptos.BTC
        TotalBTC=TotalBTC+ Conversion
        console.log(`compraste ${TotalBTC}  de BTC`)
    }else if(AskCripto===2){
        let Conversion=AskUsd/Criptos.ETH
        TotalETH=TotalETH + Conversion
        console.log(`compraste ${TotalETH} de ETH`)
    }else if(AskCripto===3){
        let Conversion=AskUsd/Criptos.ADA
        TotalADA=TotalADA+ Conversion
        console.log(`compraste ${TotalADA} de ADA`)
    }else if(AskCripto===4){
        let Conversion=AskUsd/Criptos.BNB
        TotalBNB=TotalBNB+ Conversion
        console.log(`compraste ${TotalBNB} de BNB`)
    }else if(AskCripto===5){
        let Conversion=AskUsd/Criptos.Doge
        TotalDoge=TotalDoge+ Conversion
        console.log(`compraste ${TotalDoge} de Dogecoin`)
    }
    const ReBuy=(parseInt(prompt(`Compraste ,¿Deseas seguir comprando? 1.Si 2.No`)))
    if(ReBuy===1){
        AskUsd=(parseInt(prompt('¿Cuantos Usdt tenes?')));
        AskCripto=parseInt(prompt('¿que Criptomoneda queres comprar? 1.BTC 2.Eth 3.ADA 4.BNB 5.DogeCoin'));
    }else {
        BuyCripto=false
        walletExchange.push(TotalBTC +' BTC')
        walletExchange.push(TotalETH +' ETH')
        walletExchange.push(TotalADA +' ADA')
        walletExchange.push(TotalBNB +' BNB')
        walletExchange.push(TotalDoge +' DOGE')
        console.log('En tu billetera spot tenes estas criptomonedas')
        console.log(walletExchange)
    }
}
let Envio= function (num1,num2,cripto,red){
    const  Fee= (num1*num2)/100;
    const  Total= num1 - Fee;
    console.log(`El Fee de envio de ${cripto} por la red ${red} es de ${Fee} , por lo que te quedan ${Total} tokens`)
    walletEnvio.push(Total +` ${cripto}`)
    }

    const walletEnvio=[];


    const ask2=parseInt(prompt(`Elige la red de envia hacia tu wallet= 1)ERC20 2.TRC20 3.BSC`))
    if (ask2===1) {
        Envio(TotalBTC,5,'BTC','ERC20')
        Envio(TotalETH,5,'ETH','ERC20')
        Envio(TotalADA,5,'ADA','ERC20')
        Envio(TotalBNB,5,'BNB','ERC20')
        Envio(TotalDoge,5,'DOGE','ERC20')

    }else if(ask2===2){
        Envio(TotalBTC,3,'BTC','TRC20')
        Envio(TotalETH,3,'ETH','TRC20')
        Envio(TotalADA,3,'ADA','TRC20')
        Envio(TotalBNB,3,'BNB','TRC20')
        Envio(TotalDoge,3,'DOGE','TRC20')

    }else{
        Envio(TotalBTC,1.2,'BTC','BSC')
        Envio(TotalETH,1.2,'ETH','BSC')
        Envio(TotalADA,1.2,'ADA','BSC')
        Envio(TotalBNB,1.2,'BNB','BSC')
        Envio(TotalDoge,1.2,'DOGE','BSC')
    };
    console.log('Total de criptomonedas en tu wallet')
    console.log(walletEnvio)