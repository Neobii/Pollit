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
})