// Wbudowane typy generyczne. Przykłady.
//
// const junkDrawer: any[] = ['coolString', 42, true];
//
// const companies: string[] = ['Google', 'Netflix', 'OpenAI'];
// const companies2: Array<string> = ['Google', 'Netflix', 'OpenAI'];
//
// const primeNumbers: Array<number> = [2, 3, 5];
// const primeNumber = primeNumbers.pop();

// Concept snippet
//

interface Book {
    title: string;
}

class BookShelf {
    _books: Book[] = [];

    addBookToCatalog(book: Book): void {
        // logic
    }

    removeBookFromCatalog(book: Book): Book {
        // logic
        return book;
    }

}

interface Product {
    name: string;
}

class ProductShelf {
    _products: Product[] = [];

    addProductToCatalog(product: Product): void {
        // logic
    }

    removeProductFromCatalog(product: Product): Product {
        // logic
        return product;
    }
}

class BookItem implements Book {
    title = 'Pan Tadeusz';
}

class ProductItem implements Product {
    name = 'cebula';
}

class Shelf<T> {
    _items: T[] = [];

    addItemToCatalog(item: T): void {
        // logic
    }

    removeItemFromCatalog(item: T): T {
        // logic
        return item;
    }
}

const bookShelf: Shelf<Book> = new Shelf<Book>();
const productShelf: Shelf<Product> = new Shelf<Product>();

bookShelf.addItemToCatalog(new BookItem());
productShelf.addItemToCatalog(new ProductItem());

// Functions
//

function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
    return data.splice(amountToShorten, data.length);
}

const stringArray: string[] = 'Tekst'.split('');

const result = shortenArray<string>(stringArray, 2); // <string> nie jest konieczny,
                                                                            // ale piszemy dla celów dydaktycznych

// Type constraint for functions
//

interface MeetingResource {
    name: string;
    capacity: number;
}

interface ConferenceRoom extends MeetingResource {
    hasProjector: boolean;
    location: string;
}

const conferenceRoomData: ConferenceRoom[] = [
    {name: 'Cheerios', capacity: 15, hasProjector: false, location: 'HQ'},
    {name: 'Froot Loops', capacity: 25, hasProjector: true, location: 'East Campus'},
    {name: 'Wheaties', capacity: 40, hasProjector: true, location: 'West Campus'},
    {name: 'Chex', capacity: 10, hasProjector: false, location: 'HQ'}
];

interface PartyTent extends MeetingResource {
    companyOwned: boolean;
    tablesIncluded: number;
}

const partyTentData: PartyTent[] = [
    {name: 'Parasol', capacity: 15, companyOwned: true, tablesIncluded: 3},
    {name: 'Shady', capacity: 100, companyOwned: true, tablesIncluded: 10},
    {name: 'Big Top', capacity: 200, companyOwned: false, tablesIncluded: 40},
    {name: 'Sun Fun', capacity: 50, companyOwned: true, tablesIncluded: 5}
];

interface Building {
    address: string;
    numberOfFloors: number;
}

const buildingData: Building[] = [
    { address: 'Main Street', numberOfFloors: 10 },
    { address: 'Central Avenue', numberOfFloors: 2 },
    { address: 'Curious Way', numberOfFloors: 1 },
    { address: 'Circle Drive', numberOfFloors: 4 },
];

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
    const bigRooms: Array<T> = [];

    for (const room of rooms){
        if(room.capacity >= minSize){
            bigRooms.push(room);
        }
    }

    return bigRooms;
}

const bigRooms: ConferenceRoom[] = getBigRooms<ConferenceRoom>(conferenceRoomData, 30);

// arrow function example:
let getLargeRooms: <T extends MeetingResource>(rooms: T[], minSize: number) => T[];

getLargeRooms = function (r, m){
    return r;
}