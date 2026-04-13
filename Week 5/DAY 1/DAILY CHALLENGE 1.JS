<div class="converter-card">
    <h2>Currency Converter</h2>
    
    <div class="input-group">
        <input type="number" id="amount" value="1" min="1">
        
        <select id="from-currency"></select>
        
        <button id="switch-btn"><i class="fa-solid fa-right-left"></i></button>
        
        <select id="to-currency"></select>
    </div>

    <button id="convert-btn">Convert</button>
    
    <div id="result-container">
        <p id="result-text">Select currencies to begin</p>
    </div>
</div>

<script>
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual key
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const resultText = document.getElementById('result-text');
const switchBtn = document.getElementById('switch-btn');

// --- Task 1: Fetch Supported Currencies ---
async function loadCurrencies() {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.result === "success") {
            // data.supported_codes is an array of arrays: [ ["USD", "United States Dollar"], ... ]
            data.supported_codes.forEach(([code, name]) => {
                const option1 = new Option(`${code} - ${name}`, code);
                const option2 = new Option(`${code} - ${name}`, code);
                fromSelect.add(option1);
                toSelect.add(option2);
            });
            
            // Set defaults
            fromSelect.value = "USD";
            toSelect.value = "EUR";
        }
    } catch (error) {
        console.error("Error loading currencies:", error);
    }
}

// --- Task 2: Fetch Conversion Rate ---
async function convertCurrency() {
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = amountInput.value;
    
    if (amount === "" || amount <= 0) return;

    resultText.innerText = "Converting...";

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const convertedAmount = data.conversion_result.toLocaleString();
            resultText.innerHTML = `<strong>${amount} ${from}</strong> = <strong>${convertedAmount} ${to}</strong>`;
        } else {
            resultText.innerText = "Error fetching rate.";
        }
    } catch (error) {
        resultText.innerText = "Connection error.";
    }
}

// --- Bonus: Switch Button Logic ---
switchBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency(); // Re-calculate automatically
});

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);
window.addEventListener('DOMContentLoaded', loadCurrencies);
</script>