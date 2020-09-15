let account = {
    Name: "George",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Beli Jaket', 600000);
account.addExpenses('Beli Celana', 400000);
console.log("Total pengeluaran " + account.Name + " adalah Rp." + account.getAccountSummary());
