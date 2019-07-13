export const Types = () => {
    let str: string = 'a';
    let num: number = 5;
    let bool: boolean = true;
    let arr: string[] = ['a', 'b'];
    let tuple: [number, string] = [1, '2'];
    let union: string | number = '1' // 1
    let stringLiteral: 'foo' | 'bar' = 'foo'
    let something: any = 'anything'

    interface User {
        name: string;
        age: number;
        isActive?: boolean
    }

    const newUser: User = {
        name: 'Mateusz',
        age: 24,
        isActive: true,
    }
}


