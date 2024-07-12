console.log('Это файл differentMeanings')

const user1 = {name: 'Миша'}
const user2 = {name: 'Вася'}

function logInfo(){
    console.log('this:', this)
    console.log('thisName:', this.name)
}
// Добавляем новое свойство. Круглые скобки мы не пишем
user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()
