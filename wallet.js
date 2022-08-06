"use strict";
exports.__esModule = true;
var MyWallet = /** @class */ (function () {
    function MyWallet(balance) {
        this.totalProfit = 0;
        this.balance = balance;
        this.myTradingHistory = [];
    }
    MyWallet.prototype.getBalance = function () {
        return this.balance;
    };
    MyWallet.prototype.setTotalProfit = function (totalProfit) {
        this.totalProfit = totalProfit;
    };
    MyWallet.prototype.withdrawCash = function (amount) {
        this.setTotalProfit(this.totalProfit + amount);
        this.balance = this.balance - amount;
        console.log("^^^^^^^^^^^^^^ [You withdrew] : ".concat(amount, "$ ^^^^^^^^^^^^^^ "));
    };
    MyWallet.prototype.getTradingHistory = function () {
        return this.myTradingHistory;
    };
    MyWallet.prototype.clearTradingHistory = function () {
        this.myTradingHistory = [];
    };
    MyWallet.prototype.addToTradingHistory = function (value) {
        this.myTradingHistory.push(value);
    };
    MyWallet.prototype.logWalletDetails = function () {
        console.log('[Trading history] :', this.myTradingHistory);
        console.log('[Balance] : ', this.getBalance(), '$');
        console.log('[Total profit] :', this.totalProfit, '$');
    };
    MyWallet.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    return MyWallet;
}());
exports["default"] = MyWallet;
