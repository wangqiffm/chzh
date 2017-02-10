$(document).ready(function() {
    //load home
    $("#content").load("picture_wall.html");
    //load home
    $("#load_picture_wall").click(function() {
        $("#content").load("picture_wall.html");
        return false;
    });
    //load projects overview
    $("#load_projects").click(function() {
        $("#content").load("projects_overview.html");
        return false;
    });
    //load news
    $("#load_news").click(function() {
        $("#content").load("news.html");
        return false;
    });
    //load_team
    $("#load_team").click(function() {
        $("#content").load("team.html");
        return false;
    });
    
    //load_contact
    $("#load_contact").click(function() {
        $("#content").load("contact.html");
        return false;
    });
    //load_impress
    $("#load_impress").click(function() {
        $("#content").load("impress.html");
        return false;
    });

    //load projects text list
//    $("#load_projects_text_list").on("click", function() {
//        alert("load_projects_text_list");
//        $("#content").load("projects_list.html");
//        return false;
//    });
    $(".sub_menu a").click(function() {
        var url = $(this).attr("title");
        if (url) {
            url = "projects/" + url + ".html";
            $("#content").load(url);
        }
        console.log(url);
        return false;
    });
    //change language
    // $("#language_swith").click(function() {
    //     if ($(this).html() == "中文版") {
    //         window.location.href = '../cn/home.html';
    //         console.log("GO to chinese");
    //     }
    //     else if ($(this).html() == "DEUTSCH") {
    //         window.location.href = '../de/home.html';
    //         console.log("GO to deutsch");
    //     }
    // });
});