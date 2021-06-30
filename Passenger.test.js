const Passenger = require('./Passenger')

describe('Passenger', () => {
    const testPassenger = new Passenger(25)

    test('has passengers', () => {
        expect(testPassenger.amount).toBe(25)
    })
})