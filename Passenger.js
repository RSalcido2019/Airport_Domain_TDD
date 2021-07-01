const Person = require('./Person')

class Passenger extends Person {

       callAttendant() {
           console.log('Excuse me, Hay there!')
       }
}

module.exports = Passenger