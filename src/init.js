// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice

var personalData = {
  firstName: "Cindy",
  lastName: "Burhan",
  jobTitle: "Engagement Manager",
  homeOffice: "London",
  tellMeMore:"<span style='color: rgb(240, 72, 136)'>Hey!</span> I am originally from Indonesia. <br> <br>  I lived in Australia for 16 years before moving to London in 2016. <br> <br>My favourite Beatle is George Harrison.<br> <br> <span style='color: rgb(240, 72, 136)'> 2 Truths and 1 Lie about me:<br> <br>   </span>I am 4 foot 10, which makes me the shortest person over the age of 9 in the whole of Europe!  <br> <br>  I am short sighted and once stepped over a snake (mistaking it for a twig) and did not get hurt. <br> <br>  I represented Australia in the Women's Olympics 4 x 100m freestyle swim relay"
}

// using jQuery and the object above, display the information as the appropriate button is clicked

var myDetails = $('.my-details');
var myDetailsText = $('.my-details-text');
var myPicture = $('.img-mypicture');
var closeButton = $('.close-button');

$(".btn-data").click(function() {
  if ($(this).hasClass('btn-fname')) {
    myDetailsText.html(window.personalData.firstName);
    myPicture.css("display", "none");
    closeButton.css("display", "inline");
  } else if ($(this).hasClass('btn-lname')) {
    myDetailsText.html(window.personalData.lastName);
    myPicture.css("display", "none");
    closeButton.css("display", "inline");
  } else if ($(this).hasClass('btn-jobtitle')) {
    myDetailsText.html(window.personalData.jobTitle);
    myPicture.css("display", "none");
    closeButton.css("display", "inline");
  } else if ($(this).hasClass('btn-homeoffice')) {
    myDetailsText.html(window.personalData.homeOffice);
    myPicture.css("display", "none");
    closeButton.css("display", "inline");
  } else if ($(this).hasClass('btn-tellmemore')) {
    myDetailsText.html(window.personalData.tellMeMore);
    myPicture.css("display", "inline-block");
    myPicture.attr("src", window.personalData.tellMeMorePic);
    closeButton.css("display", "inline");
  }
});

$(".close-button").click(function() {
  myDetailsText.html("");
  myPicture.css("display", "none");
  myDetails.css("border", "none");
  closeButton.css("display", "none");
});

// Random Dogs Pics. (TO DO: Error validation is not available yet - TBC)

$(".btn-dogpics").click(function() {
  $.ajax({
    url: "https://random.dog/woof.json",
    headers: {
       "Accept": "application/json"
    },
    crossDomain: true,
    type: 'get',
    dataType: 'json',
    async: false,
    success: function(data) {
      if (data.url.indexOf(".mp4") == -1 ) {
        $(".dogpic").css('display', "block");
        $(".dogvid").css('display', "none");
    	  $(".dogpic").attr('src', data.url);
      } else {
        $(".dogpic").css('display', "none");
        $(".dogvid").css('display', "block");
        $(".dogvid-source").attr('src', data.url);
        $(".dogvid").load();
      }
    }
  })
});

//Time of day greeting

var time = new Date();
h = time.getHours();
greetings(h);


function greetings(h) {
  var greeting;

  if (!h) {
    greeting = "Greetings!"
  }

  if (h > 17) {
    greeting = "good evening!";
  }

  if (h < 12) {
    greeting = "good morning!";
  }

  if (h <= 17 && h >= 12) {
    greeting = "good afternoon!";
  }

  document.getElementById('greetings').innerHTML = greeting;
}
