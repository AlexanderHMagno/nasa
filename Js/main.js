$(function(){


let d = new Date() ;
let strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());
obtain_data();


$(".before_picture").on("click",function(){

    d.setDate(d.getDate() - 1);
    
    
    
    strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());


    if((d.getDate()-1)===0){
     day_before = d.getDate()
    }else{
     day_before = (d.getDate()-1)
    }

    beforeDate=d.getFullYear() + "-" + (d.getMonth()+1) + "-" + day_before;
 

    $(".apod_picture").html("");
    $(".title").html("");
    $(".explanation").html("");
    $(".next_picture>p").html("");
   
    obtain_data();
    obtain_before();
});

    

function obtain_data(){
   
   let url = "https://api.nasa.gov/planetary/apod";
    url += '?' + $.param({
    'date': strDate,
      'api_key': "V6Z483OMQAniBX56p4mRyQSPEXdl09zSO2Rna86G"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
     

$(".apod_picture")
      .css({"background-image":"url("+ result.url+")"})
      .append("<p>"+result.copyright+"</p>");

$(".title").append("<h2>"+result.title+"</h2>");
$(".explanation").append("<p>"+result.explanation+"</p>")


    }).fail(function(err) {
      throw err;
    });

};


function obtain_before(){
   
    let url = "https://api.nasa.gov/planetary/apod";
     url += '?' + $.param({
     'date': beforeDate,
       'api_key': "V6Z483OMQAniBX56p4mRyQSPEXdl09zSO2Rna86G"
     });
     $.ajax({
       url: url,
       method: 'GET',
     }).done(function(result) {
      
  $(".next_picture")
       .css({"background-image":"url("+ result.url+")"})
       .append("<p>"+result.copyright+"</p>");
 
     }).fail(function(err) {
       throw err;
     });
 
 };
});