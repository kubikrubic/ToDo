const button__add = document.querySelector('#add-button')
const button__delete = document.querySelector('#delete')



button__add.addEventListener('click', () => {
	const input = document.querySelector('#input')
	const inputValue = input.value
	if (inputValue === '') {
		return
	} else {
		const newIl = document.createElement('li')
		newIl.textContent = inputValue 
		newIl.classList.add('unchecked')
		list.insertBefore(newIl, list.firstChild)
		const span = document.createElement('span')
		span.classList.add('cross')
		span.textContent = '\u00d7'
		newIl.appendChild(span)
		input.value = ""
	}
})


const list = document.querySelector('#list')

list.addEventListener('click', e => {
	if(e.target.tagName === 'SPAN') {
		e.target.parentElement.remove()
		saveData()
	} else if(e.target.tagName === 'LI') {
		e.target.classList.toggle('checked')
		saveData()
	}
	}
)

button__delete.addEventListener('click', () => {
	list.innerHTML = ''
})


function saveData() {
	localStorage.setItem('data', list.innerHTML)
}
function showTask() {
	list.innerHTML = localStorage.getItem('data')
}
showTask()



