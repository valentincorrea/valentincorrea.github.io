// <!-- jQuery call to the accordion() method. -->
// $(document).ready(function () {
//   $("#tabs").tabs();
// });

$(document).ready(function () {
  $(function () {
    $("#accordion").accordion({
      active: false, // Removed the active class of the first panel
      collapsible: true, // Sets the the behaviour of the panels to the be collapsible
      heightStyle: "content", // Removes the default height and set the height to adjust base on the content
    });
  });
});
