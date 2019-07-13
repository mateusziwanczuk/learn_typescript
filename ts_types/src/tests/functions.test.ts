import { 
    add, 
    addWithInterface, 
    createUser, 
    checkValue 
    } from '../components/functions'

describe('testing functions results', () => {
    test('Add 2 + 2 to equal 4', () => {
        expect(add(2, 2)).toBe(4);
    })

    test('Add 2 + 2 to not equal 5', () => {
        expect(add(2, 2)).not.toBe(5);
    })

    test('Add 5 + 5 to equal 10', () => {
        expect(addWithInterface(5, 5)).toBe(10);
    })

    test('Create user with name and age as a parameter', () => {
        expect(createUser('Mateusz', 24)).toEqual(
            {
                name: 'Mateusz',
                age: 24,
            }
        );
    })

    test('Should be falsy', () => {
        expect(checkValue(null)).toBeFalsy()
    })
    
})


// .toBeNull()
// .toBeFalsy()