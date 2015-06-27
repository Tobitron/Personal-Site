alert("hi i'm here");

$('.seed').click( function() {
  alert("hi you clicked me");
});

$( function() {
  $('.seed').click( function() {
    alert("hi you clicked me");
    $(.'pre_trunk').toggleClass('trunk');
  });
});
