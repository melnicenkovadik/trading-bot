import MyWallet from "./wallet";

let coinPrice: number = 35.90;
const moneyInWallet = 10000;

const myWallet = new MyWallet(moneyInWallet);

function trade(wallet: MyWallet, coinPrice: number) {
    if (myWallet.getBalance() > moneyInWallet) {
        withdrawCash()
    }
    const tradingHistory: number[] = wallet.getTradingHistory();
    const balance: number = wallet.getBalance();
    const currentCoinPrice: number = coinPrice;
    const canUserBuy: boolean = balance > currentCoinPrice;

    function buyCoin() {
        if (canUserBuy) {
            console.log('_______________');
            console.log(`[Coin price] : ${currentCoinPrice}$`);
            console.log(`[You bought] : 1 COIN , you have ${tradingHistory?.length + 1} COINS`);
            wallet.addToTradingHistory(currentCoinPrice);
            wallet.setBalance(balance - currentCoinPrice);
            wallet.logWalletDetails()
        } else {
            throw new Error(`[You can not buy because you have not enough money] You Profit : ${wallet.totalProfit}$`);
        }
    }

    function sellCoin() {
        const tokensCount = tradingHistory?.length ? tradingHistory.length : 0;
        const allTokensPrice = tokensCount * currentCoinPrice;
        console.log('_______________');
        console.log(`[Coin price] : ${currentCoinPrice}$`);
        console.log(`[You sold] : ${tokensCount} COINS  / ${allTokensPrice}$ `);
        wallet.clearTradingHistory();
        wallet.setBalance(balance + allTokensPrice);
        wallet.logWalletDetails()
    }

    if (canUserBuy) {

        const shouldBuyOrSellOrNothing = (currentPrice: number, percents: number) => {
            // need to find difference between current price if it is bigger to #0.1-1% then sell else  smaller to #0.1-1% then buy
            const maxPrice = Math.max(...tradingHistory)
            const minPrice = Math.min(...tradingHistory)
            if (currentPrice > maxPrice + (maxPrice * percents)) {
                sellCoin();
            }
            if (currentPrice < minPrice - (minPrice * percents)) {
                buyCoin();
            }
            if (!tradingHistory.length) {
                buyCoin();
            }
        }
        shouldBuyOrSellOrNothing(currentCoinPrice, 0.09);

    } else {
        throw ('[You can not buy because you have not enough money]');
    }
    return;
}

function withdrawCash() {
    const balance = myWallet.getBalance();
    const moneyToWithdraw = balance - moneyInWallet;
    myWallet.withdrawCash(moneyToWithdraw);
}

const setCoinPrice = (currentPrice: number) => {
    const onePercent = currentPrice / 100;
    const changeCurrentPriceToPercent = (percent: number) => currentPrice + (percent * onePercent);
    const randomBetweePlusAndMinusOnePercent = () => Math.floor(Math.random() * 2) === 0 ? 1 : -1;
    const randomPercent = randomBetweePlusAndMinusOnePercent();
    return changeCurrentPriceToPercent(randomPercent);
}
setInterval(() => {
    coinPrice = setCoinPrice(coinPrice);
    trade(myWallet, Math.round(coinPrice * 100) / 100);
}, 10);
