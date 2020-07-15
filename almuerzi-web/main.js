const stringToHtml = (s) =>{
    const parser= new DOMParser()
    const doc = parser.parseFromString(s,'text/html')
    return doc.body.firstChild
}

const renderItem = (item) =>{
    const element = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)

    element.addEventListener('click', () =>{
        const mealsList = document.getElementById('meals-list');
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
        const mealsIdInput = document.getElementById('meals-id')
        mealsIdInput.value = item._id
    })

    return element
}

window.onload = () => {
const orderForm = document.getElementById('order')
orderForm.onsubmit = (e) => {
e.preventDefault()
const mealId = document.getElementById('meals-id')
const mealIdValue = mealId.value
if(!mealIdValue){
    alert('Debe seleccionar un platillo')
    return
}
const order = {
    meal_id:mealIdValue,
    user_id:'chanchito Triste',
}
fetch('https://serverless-weld-pi.vercel.app/api/orders', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json',
    },
    body : JSON.stringify(order)
}).then(x => console.log(x))
}



fetch('https://serverless-weld-pi.vercel.app/api/meals')
.then(response => response.json())
.then(data => {
    const mealsList = document.getElementById('meals-list');
    const submit = document.getElementById('submit');
    const listItems = data.map(renderItem)
    mealsList.removeChild(mealsList.firstElementChild)
    listItems.forEach(element => { mealsList.appendChild(element)
    });
    submit.removeAttribute('disabled');
})
}