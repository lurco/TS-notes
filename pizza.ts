let pizzaCost: number = 10;

// pizzaCost = '25';

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

// String type
const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// Boolean type
function offerDiscount(orders: number): boolean {
    return orders > 3;
}

// Any type
// Nie powinno się używać, za wyjątkiem migracji z JS do TS
let coupon2;
let coupon3: any;

// VOID type
let selectedTopping: string;

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

// onClick = () => setState(42);
// onClick = () => {
//     setState(42)
// };

// Never type
function orderError(error: string): never {
    throw new Error(error);
}

// Null type
let coupon4: string | null = 'pizza25';

function removeCoupon(): void {
    coupon4 = null;
}

// Union type
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('large');

// Function type
function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

let sumOrder2: (price: number, quantity: number) => number;

sumOrder2 = (x, y) => x * y;

// Optional arguments
let sumOrder3: (price: number, quantity?: number) => number;

sumOrder3 = (x, y= 42) => x * y;

// Object type
const pizza: {
    name: string,
    price: number,
    foo: string,
    getName(): string
} = {
    name: 'pepperoni',
    price: 32,
    foo: 'example text',
    getName(){
        return pizza.name
    }
}

// Array type
let sizes: string[] = ['small', 'medium', 'large'];

let toppings: Array<string> = ['pepperoni', 'tomato', 'bacon']; // Generic type

// Tuple type
let pizza2: [string, number, boolean] = ['pepperoni', 32, true];

// Alias type
type Size = 'small' | 'medium';

type CallBack = (size: Size) => void;

let pizzaSize2: Size = 'small';
const selectSize2: CallBack = (size) => {
    pizzaSize = size;
}
selectSize2('medium');

// Assertion type
type Pizza3 = {
    name: string;
}

const pizza3: Pizza3 = {
  name: 'hawajska'
}

const serialized = JSON.stringify(pizza3)

function getNameFromJson(obj: string) {
    return (JSON.parse(obj) as Pizza3).name;
}

getNameFromJson(serialized);

// Interface
interface Pizza4 {
    name: string;
    sizes: string[];
    price: number;
}

let pizza4: Pizza4;

function createPizza(name: string, sizes: string[]): Pizza4 {
    return {
        name, sizes, price: 42
    }
}

pizza4 = createPizza('margarita', ['large']);

interface Pizza5 {
    name: string;
    getAvailableSizes(): string[];
}

function createPizza5(name: string, sizes: string[]) {
    return {
        name, getAvailableSizes() {
            return sizes
        }
    } as Pizza5
}

const pizza5: Pizza5 = createPizza5('margarita', ['small'])

// Extending interface
interface Sizes6 {
    sizes: string[];
}

interface Pizza6 extends Sizes6{
    name: string;
    getAvailableSizes(): void;
}

// Class
class Pizza7 {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza7 = new Pizza7('hawajska')

pizza7.addTopping('cebula')

// Class: Access modifiers
class Pizza8 {
    private toppings: string[] = [];

    constructor(readonly name: string) {
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza8 = new Pizza8('wiejska');

pizza8.addTopping('ziemniaki');

// pizza8.name = '42' nie działa, bo name jest readonly

// Class: Setters nad Getters
class Sizes3 {
    constructor(public sizes: string[]) {
    }

    get availableSizes() {
        return this.sizes
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const sizes3 = new Sizes3(['small', 'medium'])

const sizes4 = sizes3.availableSizes
sizes3.availableSizes = ['large']

// Class: Inheritance extends
class Pizza9 extends Sizes3 {
    constructor(public name: string, public sizes: string[]) {
        super(sizes);
    }
}

const pizza9 = new Pizza9('cztery sery', ['small']);
console.log(pizza9.name)
console.log(pizza9.sizes)
pizza9.availableSizes = ['large']

// Class: Interfaces
interface SizesInterface {
    availableSizes: string[];
}

class Sizes4 implements SizesInterface {
    availableSizes: string[] = [];
    constructor(public sizes: string[]) {
    }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class Pizza10 extends Sizes4 implements PizzaInterface {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    updateSizes(sizes: string[]) {
        this.sizes = sizes
    }

    addTopping(topping: string) {
        this.toppings.push(topping)
    }
}







