var status = 'on';
$('button').hide();

$('.letters').click(function(){
  console.log('button clicked');
  if(status == 'on'){
    $('body').addClass('off');
    $('button').show();
    status = 'off';
  }
  else {
    $('body').removeClass('off');
    $('button').show();
    status = 'on';
  }

})

$(document).ready(function(){

  $('.letters').each(function() {

    var $letterWrapper = $(this);
    var words = $letterWrapper.html().split(' ');
    var wordArray = [];

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      var letterElements = letters.map(getHTMLForCharacter);
      wordArray.push(
        '<div class="word">' +
        letterElements.join('') +
        '</div>'
      );
    }

    console.log(wordArray.join(getHTMLForCharacter(' ')));

    $letterWrapper.html(wordArray.join(getHTMLForCharacter(' ')));
  });

  function getHTMLForCharacter(character) {
        var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
        var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';
        return characterHTML;
  }

})
