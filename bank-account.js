class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount > 0){
            this.transactions.push({type: 'deposit', amount: amount});
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`;
        }
        else{
            return "Deposit amount must be greater than zero.";
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.transactions.push({type: 'withdraw', amount: amount});
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        }
        else{
            return "Insufficient balance or invalid amount.";
        }
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        const deposits = this.transactions.filter(tr=>tr.type==='deposit').map(tr=>tr.amount);

        return `Deposits: ${deposits.join(',')}`;
    }

    listAllWithdrawals(){
        const withdraws = this.transactions.filter(tr=>tr.type==='withdraw').map(tr=>tr.amount);

        return `Withdrawals: ${withdraws.join(',')}`;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.deposit(200);
myAccount.deposit(700);
myAccount.withdraw(200);
myAccount.withdraw(300);

myAccount.checkBalance();