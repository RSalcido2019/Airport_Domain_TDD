const Bag = require('./Bag')

describe('Bag', () => {
    const testBag = new Bag(25)

    test('has a weight', () => {
        expect(testBag.weight).toBe(25)
    })

    test('has a color', () => {
        testBag.setColor("Brown")
        expect(testBag.color).toBe('Brown')
    })
})