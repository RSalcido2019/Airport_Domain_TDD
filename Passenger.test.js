const Passenger = require('./Passenger')

describe('Passenger', () => {
    const testPassenger = new Passenger()

    test('has passengers', () => {
        expect(testPassenger.amount).toBe()
    })

    test('is an instance of a Passenger', () => {
        const betty = new Passenger('Betty')
        expect(betty instanceof Passenger).toBeTruthy()
    })

})
 
