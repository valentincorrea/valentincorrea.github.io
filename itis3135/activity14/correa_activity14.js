$(document).ready(function () {
  const speaker_toobin = document.querySelector("[title='toobin']");
  const speaker_sorkin = document.querySelector("[title='sorkin']");
  const speaker_chua = document.querySelector("[title='chua']");
  const speaker_sampson = document.querySelector("[title='sampson']");

  speaker_toobin.addEventListener("click", test1);
  speaker_sorkin.addEventListener("click", test2);
  speaker_chua.addEventListener("click", test3);
  speaker_sampson.addEventListener("click", test4);

  function test1() {
    console.log("test 1");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/toobin.json", function (obj) {
      switchSpeaker(obj);
    });
  }
  function test2() {
    console.log("test 2");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sorkin.json", function (obj) {
      // var person = obj.speakers;
      switchSpeaker(obj);
    });
  }
  function test3() {
    console.log("test 3");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/chua.json", function (obj) {
      // var person = obj.speakers;
      switchSpeaker(obj);
    });
  }
  function test4() {
    console.log("test 4");
    $.getJSON("https://webpages.uncc.edu/ncorream/itis3135/activity14/json_files/sampson.json", function (obj) {
      // var person = obj.speakers;
      switchSpeaker(obj);
    });
  }
  function switchSpeaker(speakerPersons) {
    var person = speakerPersons.speakers[0];
    $("h1").empty();
    $("h2").empty();
    $("h3").empty();
    $("#text").empty();
    $("#picture").empty();
    $("h1").append(person.title);
    $("h2").append(person.month);
    $("h3").append(person.speaker);
    $("#text").append(person.text);
    $("#picture").append("<img src: " + person.image + "/>");

    // .innerHTML = '<img src="https://webpages.uncc.edu/ncorream/itis3135/activity14/${person.image}" alt="${person.speaker}_picture" />';
  }
});
