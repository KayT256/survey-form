// Alert after submit
document.getElementById('survey-form').addEventListener('submit', event => {
    alert('This is just a demo project. Your data will not be sent as well as stored.')
    event.target.reset()
})