App.BooksRoute = Ember.Route.extend({
  model:function () {
    return this.store.find("book")
  }
});

App.BookRoute = Ember.Route.extend({
  model:function (params) {
    return this.store.find("book", params.book_id)
  }
});
