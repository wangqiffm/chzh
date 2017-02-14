$(function slidermaster($) {
    var _SlideshowTransitions = [
//        {$Duration: 1000, $Opacity: 2, $Brother: {$Duration: 1000, $Opacity: 2}},
//        {$Duration:1200,$Zoom:11,$Rotate:-1,$Easing:{$Zoom:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear,$Rotate:$JssorEasing$.$EaseInQuad},$Opacity:2,$Round:{$Rotate:0.5},$Brother:{$Duration:1200,$Zoom:1,$Rotate:1,$Easing:$JssorEasing$.$EaseSwing,$Opacity:2,$Round:{$Rotate:0.5},$Shift:90}},
//        {$Duration:1500,$Cols:2,$FlyDirection:1,$ChessMode:{$Column:3},$Easing:{$Left:$JssorEasing$.$EaseInOutCubic},$ScaleHorizontal:0.5,$Opacity:2,$Brother:{$Duration:1500,$Opacity:2}},
//        {$Duration:1500,$During:{$Left:[0.6,0.4]},$FlyDirection:1,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$ScaleHorizontal:0.3,$Opacity:2,$Outside:true,$Brother:{$Duration:1000,$FlyDirection:2,$Easing:{$Left:$JssorEasing$.$EaseInQuad,$Opacity:$JssorEasing$.$EaseLinear},$ScaleHorizontal:0.3,$Opacity:2}},
        //{$Duration: 1000, $Zoom: 11, $SlideOut: true, $Easing: {$Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear}, $Opacity: 2}
        {$Duration:1000,$Opacity:2,$Brother:{$Duration:1000,$Opacity:2}}
    ];

    var options = {
        $PlayOrientation: 2,
        $DragOrientation: 2,
        $AutoPlay: true,
        $AutoPlayInterval: 1000,
//        $SlideWidth:400,
//        $SlideHeight :300,
//        $Rotate: true,
        $SlideshowOptions: {//Options which specifies enable slideshow or not
            $Class: $JssorSlideshowRunner$, //Class to create instance of slideshow
            $Transitions: _SlideshowTransitions, //Transitions to play slide, see jssor slideshow transition builder
            $TransitionsOrder: 1, //The way to choose transition to play slide, 1 Sequence, 0 Random
            $ShowLink: 2, //0 After Slideshow, 2 Always
            $ContentMode: false                             //Whether to trait content as slide, otherwise trait an image as slide
        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
});