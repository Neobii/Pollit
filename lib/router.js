Router.configure({
  'layoutTemplate': 'layout'
})

Router.route('/', {
  name: 'home',
  data: function(){
    return {
      polls: function(){
        return Polls.find({});
      }
    }
  }
});

Router.route('/create-poll', {
  name: 'createPoll'
});

Router.route('/poll', {
  name: 'poll'
});

Router.route('/my-polls', {
  name: 'myPolls'
});

Router.route('/not-found', {
  name: 'e404'
})

Router.route('/search', {
  name: 'search'
})

Router.route('/no-results', {
  name: 'noResults'
})

Router.route("/privacy-policy", {
  name: "privacyPolicy"
})

Router.route("/terms-of-use",{
  name: 'termsOfUse'
})