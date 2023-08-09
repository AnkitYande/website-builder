current = '#current'

$(document).ready(() => {

    $("#addDiv").on("click", () => {
        $(current).append(
            "<div></div>"
        )
    });
    $("#addTxt").on("click", () => {
        $(current).append(
            "<p>Text Here</p>"
        )
    });

    $("#delete").on("click", () => {
        if (current != $("#container")) //fix this
            $(current).remove()
    });

    $("#cngTxt").on("click", () => {
        newText = $("#text").val()
        $(current).text(
            `${newText}`
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

    $("#bg").change(function () {
        $(current).css("background-color", $("#bg").val());
    });
    $("#fg").change(function () {
        $(current).css("color", $("#fg").val());
    });

    $("#parent").children().mouseover(function (e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
        return false;
    }).mouseout(function (e) {
        $(this).removeClass("highlight");
    });

    $("#parent").children().click(function (e) {
        current = e.target
        $(".select").removeClass("select");
        $(e.target).addClass("select");
        changeVisibleSettings()
        return false;
    });

    $("#download").on("click", () => {
        var a = document.createElement('a');
        // serialize the whole document as a string
        var doc = new XMLSerializer().serializeToString($("#parent")[0]);
        // convert this string to a blob object
        if (window.Blob) {
            var blob = new Blob([doc], { type: 'text/html' });
            // create a blob URL
            a.href = URL.createObjectURL(blob);
        } else {
            //browser don't support Blob object, create a data url
            a.href = 'data: text/html; charset=utf8, ' + doc;
        }

        // The following won't work in the snippet but can be used on your server for browsers supporting download attribute

        if ('download' in a) {
            a.download = 'yourPageName.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            a.innerHTML = 'Right click - Save As.. to download the page';
            document.body.appendChild(a);
        }
    })

    $("#log").on("click", () => {
        console.log(current.tagName)
    })

});

changeVisibleSettings = () =>{
    $("#left-panel").children().hide(); 
    if(current.tagName == "DIV"){
        $("#divTags").show();
    }
    else if(current.tagName == "P"){
        $("#textTags").show();
    }
    $("#constantTags").show();
}



