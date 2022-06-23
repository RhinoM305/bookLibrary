function findAuthorById(authors, id) {
  return authors.find((author) => (author.id == id))
}

function findBookById(books, id) {
  return books.find((book) => (book.id == id))
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => (book.borrows.some((borrowed) => borrowed.returned == false)))
  let returnedBooks = books.filter((book) => (book.borrows.every((unborrowed) => (unborrowed.returned == true))))
  return [borrowedBooks,returnedBooks]
}



function getBorrowersForBook(book, accounts) {
  
let findBorrower = (accounts, id) => (accounts.find((account) => (account.id == id)))
let bookBorrow = book.borrows.map((returned) => Object.assign(returned,findBorrower(accounts,returned.id)))
  return bookBorrow.splice(0,10)
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};