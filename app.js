$(document).ready(function(){
    console.log("Let’s get ready to party with jQuery!");

    $("article img").addClass("image-center");

    $("article p:last-child").remove();

    $("#title").css("font-size", Math.random() * 100);

    $("ol").append($("<li>", {text: "THIS LIST IS LISTING"}));

    $("aside").empty().append($("<p>", {text: "I cant believe that list was there I'm really sorry :( "}));

    $(".form-control").on('keyup', function(){
        let red = $(".form-control").eq(0).val();
        let blue = $(".form-control").eq(1).val();
        let green = $(".form-control").eq(2).val();
        $("body").css("background-color", `rgb(${red}, ${blue}, ${green})`);
    });

    $("img").on("click", function(e){
        $(e.target).remove();
    });
});
