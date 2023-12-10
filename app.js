const form = document.querySelector('form')
const studentsList = document.querySelector('#students-list')
const btn = document.querySelector('#btn')

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const newStudent = {
        id: new Date().getMilliseconds(),
        fullName: form.fullName.value,
        age: form.age.value,
        ImageUrl: form.url.value
    }

    const response = request(newStudent, "POST")

    form.url.value = ''
    form.age.value = ''
    form.fullName.value = ''
}

async function request(data, method = "GET") {
    const req = await fetch("http://localhost:7467/students", {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
    })

    const response = req.json()
    return response
}

// function getData(student) {
//     student.forEach((item) => {
//         console.log(item) // ishlamadi
//         const = { ImageUrl, fullName, age } = item
//         studentsList.innerHTML += `
//         <li>
//             <img src=${ImageUrl} />
//             <h3>Full Name: ${fullName}</h3>
//             <p>Age: ${age}</p>
//             <button id="btn">Delete</button>
//         </li>`
//     })
// }

// btn.addEventListener('click', handleDelete)

// function handleDelete() {
//
// }