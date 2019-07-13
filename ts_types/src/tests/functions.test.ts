import { 
    add, 
    addWithInterface, 
    createUser, 
    checkValue, 
    fetchUser
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

    test('email should contain @', () => {
        expect('address@email.com').toMatch(/@/);
    })

    test('Admin should be in users', () => {
        let users = ['john', 'matthew', 'admin', 'alex']
        expect(users).toContain('admin')
    })

    test('User fetched name should by Leanne Graham'), () => {
        expect.assertions(1);
        return fetchUser()
            .then(data => expect(data.name)
            .toEqual('Leanne Graham'))
    }
    
})