// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




// Try using this with rails. You check if turbolinks is loaded not the DomContent

// $(document).on('turbolinks:load'), function() {
//   // jquery examples on how to select and append
//   $('#messages_table').append("hello, world!")
// }

//refactor it into a function of it's own concern this is all jquery right now.

messageAppender = function(content) {
  $('#messages-table').append(`${content}`)
}

$(document).on('DOMContentLoaded', function() {
  // jquery examples on how to select and append
  messageAppender("hello world");
});