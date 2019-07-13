import { checkServerIdentity } from "tls";

export const Generics = () => {
    const arr: Array<Number> = [1, 2, 3];

    function identity<T>(arg: T): T {
        return arg;
    }
    identity<number>(10);
    identity('something');

}