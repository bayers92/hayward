// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// Magellan top bar preferences
// $(document).foundation({
// "magellan-expedition": {
//   active_class: 'active', // specify the class used for active sections
//   threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
//   destination_threshold: 20, // pixels from the top of destination for it to be considered active
//   throttle_delay: 0, // calculation throttling to increase framerate
//   fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
// }
// });


// offcanvas nav preferences
$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move', 
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : true
  }
});