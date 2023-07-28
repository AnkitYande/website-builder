current = '#current'

$(document).ready(() => {

    $("#add").on("click", () => {
        $(current).append(
            "<div>Test</div>"
        )
    });

    $("#hstack").on("click", () => {
        $(current).css({
            display: 'flex',
            flexDirection: 'row',
        });
    });

    $("#vstack").on("click", () => {
        $(current).css({
            display: 'flex',
            flexDirection: 'column',
        });
    });

    $("#flex-start").on("click", () => {
        $(current).css({
            justifyContent: 'flex-start'
        });
    });
    $("#flex-end").on("click", () => {
        $(current).css({
            justifyContent: 'flex-end'
        });
    });
    $("#center").on("click", () => {
        $(current).css({
            justifyContent: 'center'
        });
    });
    $("#space-evenly").on("click", () => {
        $(current).css({
            justifyContent: 'space-evenly'
        });
    });

    $("#parent").children().mouseover(function(e){
        $(".highlight").removeClass("highlight");     
        $(e.target).addClass("highlight");
      return false;
    }).mouseout(function(e) {
        $(this).removeClass("highlight");
    });

    $("#parent").children().click(function(e){
        current = e.target
        $(".select").removeClass("select");     
        $(e.target).addClass("select");
      return false;
    });

});

