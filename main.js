const url = 'https://api.exchangerate-api.com/v4/latest/'

const input = document.getElementById('input')
const fromSelect = document.getElementById('fromSelect')
const toSelect = document.getElementById('toSelect')
const result = document.getElementById('result')
const button = document.getElementById('btn')

async function convertMoney() {
	const respone = await fetch(url + 'uzs')
	const data = await respone.json()
	const rates = data.rates

	for (let key in rates) {
		const option1 = document.createElement('option')
		const option2 = document.createElement('option')

		option1.textContent = key
		option1.value = key

		option2.textContent = key
		option2.value = key

		fromSelect.appendChild(option1)
		toSelect.appendChild(option2)
	}
}

convertMoney()

async function fetchingData() {
	const respone = await fetch(url + fromSelect.value)
	const data = await respone.json()
	const rates = data.rates
	const rate = rates[toSelect.value]

	const res = rate * input.value;
	result.textContent = res + '' + toSelect.value;
}

button.addEventListener('click', fetchingData)
