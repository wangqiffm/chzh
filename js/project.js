$(function() {
    //for project slider
    jssor_slider1_starter = function(containerId) {
        var options = {
            $AutoPlay: false, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $SlideDuration: 800, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

            $ThumbnailNavigatorOptions: {//[Optional] Options to specify and enable thumbnail navigator or not
                $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always

                $ActionMode: 2, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                $SpacingX: 5, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                $DisplayPieces: 10, //[Optional] Number of pieces to display, default value is 1
                $ParkingPosition: 360                           //[Optional] The offset position to park thumbnail
            },

                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
        };

        var jssor_slider1 = new $JssorSlider$(containerId, options);
    };
    jssor_slider1_starter('slider1_container');
    //for project text
    $("#project_detail").slideDown("slow");
    $("#project_text").accordion({
        collapsible: true,
        heightStyle: "content"
    });

        //load projects overview
    $("#back_to_overview").click(function() {
        $("#content").load("projects_overview.html");
        return false;
    });
    $("#back_to_list").on("click", function() {
        $("#content").load("projects_list.html");
        return false;
    });
});