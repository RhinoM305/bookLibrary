let getTotalBooksCount = (books) => books.length


let getTotalAccountsCount = (accounts) => accounts.length

let getBooksBorrowedCount = (books) => {
let unReturned = books.filter((book) => book.borrows.some((borrowIndex) => borrowIndex.returned === false))
return unReturned.length
}
 
function getMostCommonGenres (books) {
	let genres = books.reduce((acc, book) => {
		acc[book.genre] != null ? acc[book.genre].count++ : acc[book.genre] = { name: book.genre, count: 1 }
		return acc
	}, {})
  // the above reduce function is assigning book.genre as the key and the value being and object being 
  //{name: book.genre, count: 1} but it checks with acc[book.genre] != null , remember if it does exist
  // you can refrence the object key `acc[book.genre]` this will reveal the current index in books as 
  // reduce is a looping method. so in summary this reduce function is checking wether the object key
  // even exist and if it does not than creaate a object. all of this is being accumalated into acc than
  // returned. acc is a object itself {}.
	return Object.keys(genres)
		.map(genre => genres[genre]) // map creates an array with only the values from genres 
		.sort((a,b) => b.count - a.count) // sort will than organize the array from map
		.slice(0,5) // slice uses only the first 5 positions from the sorted array received from .sort
}
// this here is alot more simple than it looks, Object.keys is taking in the genres object that has
// a list of every genre and how many books are associated with the respective genre. so that line
// of code will display the individual {name: genre, count: 1} 



function getMostPopularBooks(books) {
  return books.map((book) => ({name: book.title,count: book.borrows.length}))
         .sort((a,b) => b.count - a.count)
         .slice(0,5)
  
}

function getMostPopularAuthors(books, authors) {
  let findAmount = (books,authorID) => books.reduce((acc,book) => {
    book.authorId == authorID ? acc += book.borrows.length : acc += 0
    return acc
  }, 0)
 
let authorsArr = authors.map((author) => ({name:`${author.name.first} ${author.name.last}`, count: findAmount(books,author.id)}))
return authorsArr.sort((a,b) => b.count - a.count)
                 .splice(0,5)     
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
