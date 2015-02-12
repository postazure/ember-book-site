App.Router.map(function () {
  this.resource("books", function () {
    this.route("book", {path: "/:book_id"});
  });

  this.resource("authors", function () {
    this.route("author", {path: "/:author_id"});
  });
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('books');
  }
});
