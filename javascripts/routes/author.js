App.AuthorsRoute = Ember.Route.extend({
  model:function () {
    return this.store.find("author")
  }
});

App.AuthorRoute = Ember.Route.extend({
  model:function (params) {
    return this.store.find("author", params.author_id)
  }
});
