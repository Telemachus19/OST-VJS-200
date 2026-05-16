interface Book {
    ISBN: number;
    Name: string;
    description: string;
    image: string;
    category: string;
    author: string;
    price: number;
    numberofpage: number;
}

const booksData: Book[] = [
    {
        ISBN: 2,
        Name: "The House of Mirth",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328729186i/17728.jpg",
        category: "Classics",
        author: "Edith Wharton",
        price: 150,
        numberofpage: 40,
    },
    {
        ISBN: 3,
        Name: "The Sun Also Rises",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg",
        category: "Fantasy",
        author: "Ernest Hemingway",
        price: 200,
        numberofpage: 50,
    },
    {
        ISBN: 4,
        Name: "Vile Bodies",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/5/50/Viles_Bodies.jpg",
        category: "Crime",
        author: "Evelyn Waugh",
        price: 250,
        numberofpage: 60,
    },
    {
        ISBN: 5,
        Name: "A Scanner Darkly",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/2/27/AScannerDarkly%281stEd%29.jpg",
        category: "Historical",
        author: "Philip K. Dick",
        price: 300,
        numberofpage: 70,
    },
    {
        ISBN: 6,
        Name: "Moab Is My Washpot",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Stephen_Fry_moab_is_my_washpot.jpg",
        category: "Horror",
        author: "Stephen Fry",
        price: 350,
        numberofpage: 80,
    },
    {
        ISBN: 9,
        Name: "Brave New World",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
        category: "Mystery",
        author: "Aldous Huxley",
        price: 500,
        numberofpage: 110,
    },
    {
        ISBN: 10,
        Name: "Rosemary and Rue",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1406866868i/6294549.jpg",
        category: "Poetry",
        author: "Seanan McGuire",
        price: 550,
        numberofpage: 120,
    },
    {
        ISBN: 11,
        Name: "Pale Fire",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388155863i/7805.jpg",
        category: "Romance",
        author: "Vladimir Nabokov",
        price: 600,
        numberofpage: 130,
    },
    {
        ISBN: 44,
        Name: "In Cold Blood",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://s3.amazonaws.com/criterion-production/films/84453cd1ed9f26281b85c9107c581dab/MrHiNDPFLEUfmHzonSauKOw4DVjDEe_large.jpg",
        category: "Classics",
        author: "Truman Capote",
        price: 50,
        numberofpage: 160,
    },
    {
        ISBN: 15,
        Name: "Behold, Here's Poison",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320460133i/311135.jpg",
        category: "Fantasy",
        author: "Georgette Heyer",
        price: 40,
        numberofpage: 170,
    },
    {
        ISBN: 16,
        Name: "Band of Brothers",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388247701i/42389.jpg",
        category: "Crime",
        author: "Stephen E. Ambrose",
        price: 70,
        numberofpage: 180,
    },
    {
        ISBN: 18,
        Name: "The Dark Tower",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/5/54/Thedarktower7.jpg",
        category: "Horror",
        author: "Stephen King",
        price: 90,
        numberofpage: 200,
    },
    {
        ISBN: 21,
        Name: "Caged Bird",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://m.media-amazon.com/images/I/61-E0cMKZeL.jpg",
        category: "Mystery",
        author: "Maya Angelou",
        price: 30,
        numberofpage: 240,
    },
    {
        ISBN: 22,
        Name: "Alone on a Wide Wide Sea",
        description: "Evelyn Waugh's second novel, Vile Bodies is his tribute to London's smart set. It introduces us to society as it used to be but that now is gone forever, and probably for good",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e2/AloneOnAWideWideSea.jpg",
        category: "Poetry",
        author: "Michael Morpurgo",
        price: 240,
        numberofpage: 250,
    },
    {
        ISBN: 23,
        Name: "The Alchemist",
        description: "A novel by Paulo Coelho that has been translated into many languages.",
        image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
        category: "Quest",
        author: "Paulo Coelho",
        price: 45,
        numberofpage: 163,
    },
    {
        ISBN: 24,
        Name: "Life of Pi",
        description: "A Canadian fantasy adventure novel by Yann Martel published in 2001.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg",
        category: "Adventure",
        author: "Yann Martel",
        price: 55,
        numberofpage: 319,
    },
    {
        ISBN: 25,
        Name: "The Little Prince",
        description: "A novella by French aristocrat, writer, and military aviator Antoine de Saint-Exupéry.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg",
        category: "Fable",
        author: "Antoine de Saint-Exupéry",
        price: 35,
        numberofpage: 96,
    },
    {
        ISBN: 26,
        Name: "Animal Farm",
        description: "A beast fable, in the form of a satirical allegorical novella, by George Orwell.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg",
        category: "Satire",
        author: "George Orwell",
        price: 40,
        numberofpage: 112,
    },
    {
        ISBN: 27,
        Name: "The Old Man and the Sea",
        description: "A short novel written by the American author Ernest Hemingway in 1951.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329189714i/2165.jpg",
        category: "Literary Fiction",
        author: "Ernest Hemingway",
        price: 25,
        numberofpage: 127,
    },
    {
        ISBN: 28,
        Name: "Fahrenheit 451",
        description: "A dystopian novel by American writer Ray Bradbury, first published in 1953.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
        category: "Dystopian",
        author: "Ray Bradbury",
        price: 60,
        numberofpage: 158,
    }
];

declare const Vue: any;

const app = Vue.createApp({
    data() {
        return {
            books: booksData,
            wishlist: [] as Book[],
            isWishlistVisible: false
        };
    },
    methods: {
        addToWishlist(this: any, book: Book) {
            if (!this.isInWishlist(book.ISBN)) {
                this.wishlist.push(book);
            }
        },
        removeFromWishlist(this: any, isbn: number) {
            this.wishlist = this.wishlist.filter((item: Book) => item.ISBN !== isbn);
        },
        isInWishlist(this: any, isbn: number): boolean {
            return this.wishlist.some((item: Book) => item.ISBN === isbn);
        },
        formatPrice(price: number): string {
            return new Intl.NumberFormat('ar-SA', {
                style: 'currency',
                currency: 'SAR',
                minimumFractionDigits: 2
            }).format(price);
        }
    }
});

app.mount('#app');
