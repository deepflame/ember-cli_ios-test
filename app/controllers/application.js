import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    clickMe: function () {
      window.alert('Ember is working!');
    }
  }
});
