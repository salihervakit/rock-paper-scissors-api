document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', req => {
        apiRequest(req.target)
    })
})

async function apiRequest(choice) {
    choice = choice.className.split(' ')[1]
    const res = await fetch(`/api?choice=${choice}`)
    const data = await res.json()

    document.querySelector('span').innerText = `Result: ${data.result}`
}
