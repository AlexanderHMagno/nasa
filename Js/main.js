$(function(){


let d = new Date() ;
let strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());
obtain_data();


$(".next_picture").on("click",function(){

    d.setDate(d.getDate() - 1);
    
    
    
    strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());



    $(".apod_picture").html("");
    $(".fullPhoto").html("");
    $(".title").html("");
    $(".explanation").html("");
    
   
    obtain_data();
    
    $("body").scrollTop(0,0);
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
     
$(".fullPhoto").append("<img src="+result.url+">");
$(".apod_picture")
      .css({"background-image":"url("+ result.url+")"})
      .append("<p>"+result.copyright+"</p>");

$(".title").append("<h2>"+result.title+"</h2>");
$(".explanation").append("<p>"+result.explanation+"</p>")


    }).fail(function(err) {
      throw err;
    });

};

});