$(function() {
    $(".proj_small").css("opacity", 0.8);
    $(".proj_small").mouseenter(function() {
        $($(this)).css("opacity", 1);
    });
    $(".proj_small").mouseleave(function() {
        $($(this)).css("opacity", 0.8);
    });


    $(".show_list").on("click", function() {
        $("#content").load("projects_list.html");
        return false;
    });
//    $(".proj_small").on("click", function() {
//        var url = $(this).attr("title");
//        url = "projects/" + url + ".html";
//        console.log(url);
//        $("#content").load(url);
//        return false;
//    });
    //load project
    $(".proj_small").click(function() {
//        alert("oovooasdf");
//        alert($(this).attr("id"));
//       console.log($(this).attr("id")); 
        var url;
        url = $(this).attr('title');
        if (url) {
            url = "projects/" + url + ".html";
            
            $("#content").load(url);
        }else{
            $("#content").load("projects_list.html");
        }
        return false;
    });
});