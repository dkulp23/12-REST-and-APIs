'use strict';

(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  Handlebars.registerHelper('formatDate', function(dateToBeFormatted) {
    return moment(dateToBeFormatted).format('MMMM DD, YYYY');
  });

  var repoCompiler = Handlebars.compile($('#repo-template').html()); // Finish the Handlebars method here!

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('description')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
/* TODO: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
