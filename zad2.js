function Book(title, year, authorName, authorSurname,ilWypozyczen = 0){
    this.title = title
    this.year = year
    this.authorName = authorName
    this.authorSurname = authorSurname
    
    this.ilWypozyczen = ilWypozyczen

    this.ShowAuthor = () => {
        return `${this.authorName} ${this.authorSurname}`
    }
    
    this.Wyp = (il = 1) => {
        this.ilWypozyczen += il
    }

    this.removeWyp = (il = 1) => {
        this.ilWypozyczen -= il
    }

}

const book1 = new Book('1','1977', 'aName1', 'aSurname1')
const book2 = new Book('2','1972', 'aName2', 'aSurname2')
const book3 = new Book('3','1978', 'aName3', 'aSurname3')
const book4 = new Book('4','1974', 'aName4', 'aSurname4')

const books = [book1,book2,book3,book4]

console.log(books)

console.log(`książki wydane w 1978 roku`)
books.forEach(book =>{
    if (book.year == 1978){
        console.log(`${book.title} -- ${book.ShowAuthor()}`)
    }
})

book1.Wyp(72233)
book2.Wyp(123)
book3.Wyp(5)
book4.Wyp(89)

let i = []
books.forEach(book =>{
    i.push(book.year)
})
console.log(Math.min(...i))

const year = Math.min(...i)

console.log(`książki wydane w ${year} roku`)
books.forEach(book =>{
    if (book.year == year){
        console.log(`${book.title} -- ${book.ShowAuthor()}`)
    }
})

let suma = 0
books.forEach(book =>{
    suma += book.ilWypozyczen
})
let srednia = suma/(books.length)
console.log(`Średnia wypozyczeń jest równa: ${srednia}`)

