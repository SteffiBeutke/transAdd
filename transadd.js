/*document.addEventListener("mouseover", function(e){
  var curTag = e.target;
  var text = curTag.innerText;
  var words = text.split(" ");

  words.forEach(function(){

  });

  console.log(curTag);
}, false);*/
var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-1.6.3.js';
document.getElementsByTagName('head')[0].appendChild(script);

document.addEventListener("click", function(e){
  console.log("."+document.selection.createRange().text);
  //alert(e.target);
});
