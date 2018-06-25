
var apiURL='https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6'

$('#search').on('click', function(){
var beer = $('select').val()
$('.remove').remove()
$.ajax({
  url: apiURL,
  success:function(res){
    console.log(res)
    $('.name').html(res[beer].name)
    //$('img').attr('src', res[beer].image_url)
    $('.firstBrewed').html('First brewed: ' + res[beer].first_brewed)
    $('.description').html(res[beer].description)
    $('.foods').append('<li class="space remove">Common Foods:</li>')
    res[beer].food_pairing.forEach(function(el){
      $('.foods').append('<li class="remove">'+ el + '</li>')
    });
},
error:function(err){
  console.log(err)
}
});
});
