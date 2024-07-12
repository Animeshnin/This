const user = {
    name: 'John Doe',
    age: 32,
    logThis: () => {
        console.log('this в теле метода объекта user:', this)
    }
}

user.logThis()
