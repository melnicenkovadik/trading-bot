"use strict";
exports.__esModule = true;
var MyWallet = /** @class */ (function () {
    function MyWallet(balance) {
        this.totalProfit = 0;
        this.balance = balance;
        this.myTradingHistory = [34.69, 31.27, 28.21, 25.67, 23.31,
            21.21, 19.17, 17.43, 15.86, 14.3,
            12.99, 11.77, 10.62, 9.66, 8.71,
            7.85, 7.1, 6.45, 5.86, 5.31,
            4.82, 4.35, 3.92, 3.54, 3.2,
            2.89, 2.62, 2.37, 2.15, 1.94,
            1.75, 1.59, 1.44, 1.31, 1.19,
            1.08
        ];
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
