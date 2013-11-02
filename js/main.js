$(function(){
  $(window).on("mousemove", function(event){
    height = $(document).height();
    $("#video-bg")[0].playbackRate = .3 + 3 * (1 - event.pageY / height);
  })
})
