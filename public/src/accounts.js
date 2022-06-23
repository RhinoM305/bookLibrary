function findAccountById(accounts, id) {
  return accounts.find((account) => (account.id == id))
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last > b.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let borrowed = books.reduce((acc,book) => {
    if(book.borrows.some((borrow) => borrow.id == account.id)){
      acc++
    }
    return acc
  },0)
  return borrowed
}
 
function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = books.reduce((acc,book) => {
    if(book.borrows[0].returned == false && book.borrows[0].id == account.id) {
      acc.push({...book,author: authors.find((author) => author.id == book.authorId)})
    }
       return acc
  },[])
  return borrowed
  }

  
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
