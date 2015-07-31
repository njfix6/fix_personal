




var blurrable = true;


var toggleBlur = function(time){
    $(".iconBar").fadeToggle(time);

    $(".pro").fadeToggle(time);
    $(".shadow").fadeToggle(time);
    
    
    blurrable = !blurrable;
};

$('.shadow').click(function(){
    if (blurrable){
        toggleBlur(500);
    }
});


$("#navicon").click(function(){
    
    toggleBlur(500);
});


setTimeout(function(){
    if (blurrable){
        toggleBlur(500);
    }
}, 1500);



var Pro = function(name, id, template){
    this.name = name;
    this.id = id;
    this.template = template;
    this.clickListener = function(){
    var temp = this;
        $("."+this.id).click(function(){
            toggleBlur(500);
            $('#main').html(temp.template);
        });
    }
};

var home_temp = 
    "<img class='image' src='images/mike.jpeg'>"

var travel_temp = 
    "<img class='image' src='images/mike.jpeg'>";
var graph_temp = 
    "<img class='image' src='images/7_winnie_the_pooh_wallpaper.png'>"+
    "<img class='image' src='images/rochester_corn_cob_without_background.png'>";

var all_pros = [
    new Pro("Home", "home", home_temp),
    new Pro("My Pack", "mypack", travel_temp),
    new Pro("Graphic Design", "graphicDesign", graph_temp)
];

for (var i in all_pros){
    i = all_pros[i];
    $(".pro").append("<div class='proWord " + i.id + "'>" + i.name + "</div>");
    i.clickListener();
}

$('#main').html(home_temp);
