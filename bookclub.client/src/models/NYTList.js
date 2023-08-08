export class NYTList {
  constructor(data) {
    this.listId = data.list_id
    this.name = data.display_name
    this.books = data.books
  }
}