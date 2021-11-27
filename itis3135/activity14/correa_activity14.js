$(document).ready(function () {
  const speaker_toobin = document.querySelector("[title='toobin']");
  const speaker_sorkin = document.querySelector("[title='sorkin']");
  const speaker_chua = document.querySelector("[title='chua']");
  const speaker_sampson = document.querySelector("[title='sampson']");
  // const speaker_chua = document.getElementById("btn");
  // $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (data) {
  //   test();
  //   //       $.each(this, function (key, value) {
  //   //         $("#team").append("Name: " + value.name + "<br>" + "Title: " + value.timeout + "<br>" + "Bio: " + value.bio + "<br><br>");
  //   //       });
  //   //     });
  // });
  speaker_toobin.addEventListener("click", test1);
  speaker_sorkin.addEventListener("click", test2);
  speaker_chua.addEventListener("click", test3);
  speaker_sampson.addEventListener("click", test4);

  function test1() {
    console.log("test 1");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/toobin.json", function (obj) {
      $("h1").empty();
      $("h2").empty();
      $("h3").empty();
      $("#text").empty();
      // $("h1").append(person.title);
      // $("h2").append(person.month);
      // $("h3").append(pearson.speaker);
      // $("#text").append(person.text);
      switchSpeaker(obj);
    });
  }
  function test2() {
    console.log("test 2");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sorkin.json", function (obj) {
      var person = obj.speakers;
      $("h1").empty();
      $("h2").empty();
      $("h3").empty();
      $("#text").empty();
      // $("h1").append(person.title);
      // $("h2").append(person.month);
      // $("h3").append(pearson.speaker);
      // $("#text").append(person.text);
      switchSpeaker(obj);
    });
  }
  function test3() {
    console.log("test 3");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (obj) {
      var person = obj.speakers;
      $("h1").empty();
      $("h2").empty();
      $("h3").empty();
      $("#text").empty();
      // $("h1").append(person.title);
      // $("h2").append(person.month);
      // $("h3").append(pearson.speaker);
      // $("#text").append(person.text);
      switchSpeaker(obj);
    });
  }
  function test4() {
    console.log("test 4");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sampson.json", function (obj) {
      var person = obj.speakers;
      $("h1").empty();
      $("h2").empty();
      $("h3").empty();
      $("#text").empty();
      // $("h1").append(person.title);
      // $("h2").append(person.month);
      // $("h3").append(pearson.speaker);
      // $("#text").append(person.text);
      switchSpeaker(obj);
    });
  }
  function switchSpeaker(speakerPersons) {
    // $("h1").empty();
    // $("h2").empty();
    // $("h3").empty();
    // $("#text").empty();
    var person = speakerPersons[0];
    $("h1").append(person.title);
    $("h2").append(person.month);
    $("h3").append(person.speaker);
    $("#text").append(person.text);
  }
});
