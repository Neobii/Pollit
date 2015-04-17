Router.configure({
  'layoutTemplate': 'layout'
})

Router.route('/', {
  name: 'home'
});

Router.route('/create-poll', {
  name: 'createPoll'
})