function Book(title, year, authorName, authorSurname){
    this.title = title
    this.year = year
    this.authorName = authorName
    this.authorSurname = authorSurname
    
    this.ShowAuthor = () => {
        return `${this.authorName} ${this.authorSurname}`
    }
}

const book1 = new Book('1','1971', 'aName1', 'aSurname1')
const book2 = new Book('2','1972', 'aName2', 'aSurname2')
const book3 = new Book('3','1973', 'aName3', 'aSurname3')
const book4 = new Book('4','1974', 'aName4', 'aSurname4')

const books = [book1,book2,book3,book4]

console.log(books)