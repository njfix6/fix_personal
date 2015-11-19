




// var blurrable = true;


// var toggleBlur = function(time){
//     $(".iconBar").fadeToggle(time);

//     $(".pro").fadeToggle(time);
//     $(".shadow").fadeToggle(time);
    
    
//     blurrable = !blurrable;
// };

// // $('.shadow').click(function(){
// //     if (blurrable){
// //         toggleBlur(500);
// //     }
// // });


// $("#navicon").click(function(){
    
//     toggleBlur(500);
// });


// setTimeout(function(){
//     if (blurrable){
//         toggleBlur(500);
//     }
// }, 1500);



// var Pro = function(name, id, template){
//     var self = this;
//     this.name = name;
//     this.id = id;
//     this.template = template;
//     this.clickListener = function(){
//         $("."+self.id).click(function(){
//             toggleBlur(500);
//             $('.proWord').each(function(i, obj) {
//                 var val = $(this);
//                 if(val.hasClass("disabled")){
//                     val.toggleClass('disabled');
//                 }
               
//             });
//             $(this).toggleClass('disabled');
           
            
//             $('#main').html(self.template);
//         });
//     }
// };

// var home_temp = 
//     ""

// var travel_temp = 
//     "<img class='image' src='images/backpack.jpeg'>";
// var graph_temp = 
//     "<img class='image' src='images/7_winnie_the_pooh_wallpaper.png'>"+
//     "<img class='image' src='images/rochester_corn_cob_without_background.png'>";

// var all_pros = [
//     new Pro("Home", "home", home_temp),
//     new Pro("My Pack", "mypack", travel_temp),
//     new Pro("Graphic Design", "graphicDesign", graph_temp)
// ];

// for (var i in all_pros){
//     i = all_pros[i];
//     $(".pro").append("<div class='proWord " + i.id + "'>" + i.name + "</div>");
//     i.clickListener();
// }


// $(".home").toggleClass('disabled');
// $('#main').html(home_temp);
