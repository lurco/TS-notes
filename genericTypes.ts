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