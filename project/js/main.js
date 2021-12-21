$(document).ready(function(){
    getWeather();
})

function getWeather(searchQuery) {
    $('.city').text("City: ");
    $('.temp').text("Temperature: ");
    $('.error-message').text("");
    if (searchQuery === undefined) {
      return;
    }
    else {
      let url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&units=metric&appid=" + apiKey;
      $.ajax(url, {success: function(data) {
        $('.city').append(data.name);
        $('.temp').append(data.main.temp);
      }, error: function(error) {
        $('.city').text("");
        $('.temp').text("");
        if (!searchQuery) {
          $(".error-message").text("You MUST enter a city name!");
        }
        else {
          $(".error-message").text("An error occured. Check your spelling or your internet connection and try again.");
        }
      }})
    }
  }

function searchWeather() {
  let searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function showPicture() {
    // use jQuery ($ is shorthand) to find the div on the page and then change the html
    // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
    $("#image").append('<img class="rounded-circle" src="images/agg.gif"/>');
    $("p").html("Pronto, pronto sì, ssss sì ssì sssss stiamo, siam... sìsìsì no, è... la la lascia lasciami... è m mma maria nnn... noo... ss, bè, ss se fosse stato per me... sì... ma io ss sono il primo che che... non ho ca, non ho ca, non ho c... non ho c... [urlando stressato] Allora, mi lasci parlare o no?! Hai capito?! E non ne posso più di ascoltarti, stai parlando solo tu! E mi hai proprio rotto i coglioni, mi hai rotto i coglioni, hai capito?! Perché non sono un automa, sono una persona, e a un certo punto te lo devo proprio dire: vaffanculo! Vaffanculo!! V, A, F, F, 'ncuuuulo!!! Tu, il tuo negozio, la tua villa di merda, mi fai schifo, strooonzoo!! [chiude furiosamente la chiamata e gli altri lo guardano colpiti] Era occupato. (Aldo)");

    // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}