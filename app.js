// https://calculator.swiftutors.com/debt-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debtRatioRadio = document.getElementById('debtRatioRadio');
const totalLiabilitiesRadio = document.getElementById('totalLiabilitiesRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');

let debtRatio;
let totalLiabilities = v1;
let totalAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debtRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Liabilities';
  variable2.textContent = 'Total Assets';
  totalLiabilities = v1;
  totalAssets = v2;
});

totalLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Ratio';
  variable2.textContent = 'Total Assets';
  debtRatio = v1;
  totalAssets = v2;
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt Ratio';
  variable2.textContent = 'Total Liabilities';
  debtRatio = v1;
  totalLiabilities = v2;
});

btn.addEventListener('click', function() {
  
  if(debtRatioRadio.checked)
    result.textContent = `Debt Ratio = ${computeDebtRatio().toFixed(2)}%`;

  else if(totalLiabilitiesRadio.checked)
    result.textContent = `Total Liabilities = ${computeTotalLiabilities().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)}`;
})

// calculation

function computeDebtRatio() {
  return (Number(totalLiabilities.value) / Number(totalAssets.value)) * 100;
}

function computeTotalLiabilities() {
  return (Number(debtRatio.value) / 100) * Number(totalAssets.value);
}

function computeTotalAssets() {
  return Number(totalLiabilities.value) / (Number(debtRatio.value) / 100);
}