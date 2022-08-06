"use strict";
exports.__esModule = true;
var wallet_1 = require("./wallet");
var coinPrice = 35.90;
var moneyInWallet = 10000;
var myWallet = new wallet_1["default"](moneyInWallet);
function trade(wallet, coinPrice) {
    if (myWallet.getBalance() > moneyInWallet) {
        withdrawCash();
    }
    var tradingHistory = wallet.getTradingHistory();
    var balance = wallet.getBalance();
    var currentCoinPrice = coinPrice;
    var canUserBuy = balance > currentCoinPrice;
    function buyCoin() {
        if (canUserBuy) {
            console.log('_______________');
            console.log("[Coin price] : ".concat(currentCoinPrice, "$"));
            console.log("[You bought] : 1 COIN , you have ".concat((tradingHistory === null || tradingHistory === void 0 ? void 0 : tradingHistory.length) + 1, " COINS"));
            wallet.addToTradingHistory(currentCoinPrice);
            wallet.setBalance(balance - currentCoinPrice);
            wallet.logWalletDetails();
        }
        else {
            throw new Error("[You can not buy because you have not enough money] You Profit : ".concat(wallet.totalProfit, "$"));
        }
    }
    function sellCoin() {
        var tokensCount = (tradingHistory === null || tradingHistory === void 0 ? void 0 : tradingHistory.length) ? tradingHistory.length : 0;
        var allTokensPrice = tokensCount * currentCoinPrice;
        console.log('_______________');
        console.log("[Coin price] : ".concat(currentCoinPrice, "$"));
        console.log("[You sold] : ".concat(tokensCount, " COINS  / ").concat(allTokensPrice, "$ "));
        wallet.clearTradingHistory();
        wallet.setBalance(balance + allTokensPrice);
        wallet.logWalletDetails();
    }
    if (canUserBuy) {
        var shouldBuyOrSellOrNothing = function (currentPrice, percents) {
            // need to find difference between current price if it is bigger to #0.1-1% then sell else  smaller to #0.1-1% then buy
            var maxPrice = Math.max.apply(Math, tradingHistory);
            var minPrice = Math.min.apply(Math, tradingHistory);
            if (currentPrice > maxPrice + (maxPrice * percents)) {
                sellCoin();
            }
            if (currentPrice < minPrice - (minPrice * percents)) {
                buyCoin();
            }
            if (!tradingHistory.length) {
                buyCoin();
            }
        };
        shouldBuyOrSellOrNothing(currentCoinPrice, 0.09);
    }
    else {
        throw ('[You can not buy because you have not enough money]');
    }
    return;
}
function withdrawCash() {
    var balance = myWallet.getBalance();
    var moneyToWithdraw = balance - moneyInWallet;
    myWallet.withdrawCash(moneyToWithdraw);
}
var setCoinPrice = function (currentPrice) {
    var onePercent = currentPrice / 100;
    var changeCurrentPriceToPercent = function (percent) { return currentPrice + (percent * onePercent); };
    var randomBetweePlusAndMinusOnePercent = function () { return Math.floor(Math.random() * 2) === 0 ? 1 : -1; };
    var randomPercent = randomBetweePlusAndMinusOnePercent();
    return changeCurrentPriceToPercent(randomPercent);
};
setInterval(function () {
    coinPrice = setCoinPrice(coinPrice);
    trade(myWallet, Math.round(coinPrice * 100) / 100);
}, 10);
