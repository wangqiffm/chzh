$(function() {
//   $("#proj_efh_idstein").click(function(){
////       alert("hhhh");
//       $("#content").load("projects/project_efh_idstein.html");
//   });
    $(".proj_name").click(function() {
        var url;
        url = $(this).attr("id");
        if (url) {
            $("#content").load(url);
        }
    });
});