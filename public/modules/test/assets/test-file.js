(function (Drupal) {
  Drupal.behaviors.test = {
    attach: function attach() {
      console.log('hello, world!')
    }
  }
} (Drupal))
