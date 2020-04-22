console.log('This is coming from App.js in js folder')
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#m1')
const message2 = document.querySelector('#m2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc = search.value
    console.log(loc)
    //fetch('http://localhost:5000/help/?location='+loc).then((response)=>{
    fetch('/help/?location='+loc).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                console.log('error')
            }
            else
            {
                message1.textContent = data.humidity
                message2.textContent = data.country

                console.log(data.humidity)
                console.log(data.country)
                console.log(data.population)
            }
        })
    })
})

