const user = {
    name: 'John Doe',
    age: 32,
    logThis: function() {
        console.log('this в теле метода объекта user:', this)
    },
}

// первый обращается на весь объект, второй только на address
user.logThis()
