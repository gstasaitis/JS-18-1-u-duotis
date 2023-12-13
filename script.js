fetch("https://randomuser.me/api/")
.then(res => res.json())
.then(data => {
    const img = document.createElement("img")
    img.src = data.results[0].picture.large
    img.width = 300
    document.querySelector('div').appendChild(img)

    const name = document.createElement("h2")
    name.innerHTML = `
    ${data.results[0].name.first}
    ${data.results[0].name.last}
    `
    name.style.fontFamily = "arial"
    document.querySelector('div').appendChild(name)

    const age = document.createElement("h3")
    age.innerHTML = 
    `
    ${data.results[0].dob.age + " years old"}
    `
    age.style.color = '#f4836a'
    age.style.fontFamily = "arial"
    document.querySelector('div').appendChild(age)

    const email = document.createElement("h5")
    email.innerHTML = 
    `
    ${data.results[0].email}
    `
    email.style.color = 'lightgray'
    email.style.fontFamily = "arial"
    document.querySelector('div').appendChild(email)


    console.log(data.results[0])
})
.catch(e => console.log(e.message))