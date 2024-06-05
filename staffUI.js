function toggleFormVisibility() {
    var formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
}

function switchTable(tableType) {
    var accountRecordsTable = document.getElementById('accountRecordsTable');
    var raffleEntryTable = document.getElementById('raffleEntryTable');
    var productOrderTable = document.getElementById('productOrderTable');
    
    var accountRecordsForm = document.getElementById('accountRecordsForm');
    var raffleEntryForm = document.getElementById('raffleEntryForm');
    var productOrderForm = document.getElementById('productOrderForm');
    
    var accountRecordsBtn = document.getElementById('accountRecordsBtn');
    var raffleEntryBtn = document.getElementById('raffleEntryBtn');
    var productOrderBtn = document.getElementById('productOrderBtn');

    accountRecordsTable.classList.add('hidden');
    raffleEntryTable.classList.add('hidden');
    productOrderTable.classList.add('hidden');
    
    accountRecordsForm.classList.add('hidden');
    raffleEntryForm.classList.add('hidden');
    productOrderForm.classList.add('hidden');
    
    accountRecordsBtn.classList.remove('active-btn');
    raffleEntryBtn.classList.remove('active-btn');
    productOrderBtn.classList.remove('active-btn');

    if (tableType === 'account') {
        accountRecordsTable.classList.remove('hidden');
        accountRecordsBtn.classList.add('active-btn');
        accountRecordsForm.classList.remove('hidden');
    } else if (tableType === 'raffle') {
        raffleEntryTable.classList.remove('hidden');
        raffleEntryBtn.classList.add('active-btn');
        raffleEntryForm.classList.remove('hidden');
    } else if (tableType === 'product') {
        productOrderTable.classList.remove('hidden');
        productOrderBtn.classList.add('active-btn');
        productOrderForm.classList.remove('hidden');
    }
}