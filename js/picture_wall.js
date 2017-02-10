$(function() {
    $('.pic_small').css({
        "opacity": 0.8
    });
    $('.pic_small').on("mouseover", function() {
        $(this).css("opacity", 1);

    });
    $('.pic_small').on("mouseleave", function() {
        $(this).css("opacity", 0.8);
    });
    //load team
    $("#load_team_img").click(function() {
        $("#content").load("team.html");
        return false;
    });
    //load news
    $("#load_news_img").click(function() {
        $("#content").load("news.html");
        return false;
    });
    //load_contact_img
    $("#load_contact_img").click(function() {
        $("#content").load("contact.html");
        return false;
    });
    //load_impress_img
    $("#load_impress_img").click(function() {
        $("#content").load("impress.html");
        return false;
    });
    $(".pic_small").click(function() {
        if (!$(this).attr('id')) {
            $("#content").load("projects_overview.html");
            return false;
        }
    });
});