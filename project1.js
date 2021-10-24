var value1=0;
var value2=0;
$(".one-dup").hide();
$(".two-dup").hide();
$(".button-1").click(function(){
  var a=100;
  a=a*(Math.floor(Math.random()*3)+1);
  value1=value1+a;
  $(".one").animate({left: '+='+a+'px'});
  score1(value1);
  check1(value1);
});
$(".button-2").click(function(){
    var a=100;
    a=a*(Math.floor(Math.random()*3)+1);
    value2=value2+a;
  $(".two").animate({left: '+='+a+'px'});
  score2(value2);
  check2(value2);
});
function score1(marks)
{
  $(".p1").text(marks);
}
function score2(marks)
{
  $(".p2").text(marks);
}
function check1(val)
{
  if(val>=1200)
  {
    $("h1").text("player-1 won the match🏁");
    $(".one").addClass("hide-img");
    $(".two").addClass("hide-img");
    $(".one-dup").show("slow");
    $("#Scores").addClass("hide-img");
  }
}
function check2(val)
{
  if(val>=1200)
  {
    $("h1").text("player-2 won the match🏁");
    $(".two").addClass("hide-img");
    $(".one").addClass("hide-img");
    $(".two-dup").show();
    $("#Scores").addClass("hide-img");
  }
}
