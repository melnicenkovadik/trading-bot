export default class MyWallet {
    balance: number;
    myTradingHistory: any;
    totalProfit: number = 0;

    constructor(balance: number) {
        this.balance = balance;
        this.myTradingHistory = [];
    }

    public getBalance() {
        return this.balance;
    }

    private setTotalProfit(totalProfit: number) {
        this.totalProfit = totalProfit;
    }

    public  withdrawCash(amount: number) {
        this.setTotalProfit(this.totalProfit + amount);
        this.balance = this.balance - amount;
        console.log(`^^^^^^^^^^^^^^ [You withdrew] : ${amount}$ ^^^^^^^^^^^^^^ `);
    }

    public  getTradingHistory() {
        return this.myTradingHistory;
    }

    public clearTradingHistory() {
        this.myTradingHistory = [];
    }

    public addToTradingHistory(value: number) {
        this.myTradingHistory.push(value);
    }

    public logWalletDetails() {
        console.log('[Trading history] :', this.myTradingHistory);
        console.log('[Balance] : ', this.getBalance(), '$')
        console.log('[Total profit] :', this.totalProfit, '$')
    }

    public setBalance(balance: number) {
        this.balance = balance;
    }
}