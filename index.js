const transactions = [
    {
        id: 1,
        name:'salary',
        amount:5000,
        date: new Date(),
        type: 'income'
    },
    {
        id: 2,
        name:'haircut',
        amount:20 ,
        date: new Date(),
        type: 'expense'
    },
    {
        id: 3,
        name:'concert ticket',
        amount:350,
        date: new Date(),
        type: 'expense'
    },

];

const transaction = JSON.parse(localStorage.getItem('transaction')) || [];

const formatter = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
    signDisplay: "always",
    
});


const list = document.getElementById("transactionList");
const form = document.getElementById("transactionForm");
const status = document.getElementById("status");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");


form.addEventListener("submit", addTransaction);

function updateTotal(){
    const incomeTotal = transactions
    .filter(trx => trx.type === 'income')
    .reduce((total,trx) => total + trx.amount, 0); 

    const expenseTotal = transactions
    .filter(trx => trx.type === 'expense')
    .reduce((total,trx) => total + trx.amount, 0); 

    const balanceTotal = incomeTotal - expenseTotal;

    balance.textContent = formatter.format(balanceTotal).substring(1);
    income.textContent = formatter.format(incomeTotal);
    expense.textContent = formatter.format(expenseTotal * -1);
}
function renderList(){
    list.innerHTML = "";
    status.textContent = ""; 
    if (transactions.length === 0){
        status.textContent = "No transactions.";
        return;
    }
    transactions.forEach(({id,name,amount,date,type})=> { 
        const sign = 'income' === type ? 1 : -1;

        const li = document.createElement("li");
        li.innerHTML = `
        <div class="name">
        <h4>${name}</h4>
        <p>${new Date(date).toLocaleDateString()}</p>
        </div>

        <div class="amount${type}">
            <span>${formatter.format(amount * sign)}</span>
        </div>
        <div class="action">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick="deleteTransaction(${id})">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
        `;
        list.appendChild(li);
    });
}
renderList();
saveTransactions();
updateTotal();

function deleteTransaction(id){
    const index = transactions.findIndex((trx) => trx.id === id);
    transactions.splice(index,1);

    updateTotal();
    saveTransactions(); 
    renderList();
}

function addTransaction(e){
    e.preventDefault();
    
    const formData = new FormData(this);
    
    transactions.push({
        id:transactions.length+1,
        name:formData.get("name"),
        amount:parseFloat(formData.get("amount")),
        date: new Date(formData.get("date")),
        type: 'on' === formData.get("type") ? 'income' : 'expense',
    });

    this.reset();

    updateTotal();
    saveTransactions();
    renderList();
}

function saveTransactions(){

    transactions.sort((a,b) => new Date(b.date) - new Date(a.date));
    localStorage.setItem("transactions",JSON.stringify(transactions));
}

// Tracker dollar section

const element = document.querySelector('.dollar-element');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};


const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      element.classList.add('show');
    }
    else {
      element.classList.remove('show');
    }
  });
}, options);


observer.observe(element);

// footer section

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));