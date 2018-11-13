
# NASA APOD -ASTRONOMY PICTURE OF THE DAY

Create a web page using the API provided by [NASA](https://api.nasa.gov/api.html#apod). 
The main idea is that everyday NASA provides with a new source of information, using the API, the webpage will show a unique image everyday, and it'll permit also that the user search for the past images: 

GET https://api.nasa.gov/planetary/apod

QUERY PARAMETERS
Parameter	Type	Default	Description
* **date	YYYY-MM-DD	today	The date of the APOD image to retrieve**
* hd	bool	False	Retrieve the URL for the high resolution image
* api_key	string	DEMO_KEY	api.nasa.gov key for expanded usage

EXAMPLE QUERY
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

For creating this project I used the following:

* HTML
* CSS
* [sass](http://sass-lang.com/)
* JavaScript
* JQuery
* *Json
* Extension of third parts. 
  * [google fonts](https://fonts.google.com/)
  * [JQuery](https://jquery.com/)
 * Github
* Gulp
* Terminal for commiting Git Bash

## HTML
Created using sections, Following two basic premises: 
* Windows everywhere
* Mobil desing first

#### Windows everywhere
* Header : It will contain the title. 
* section 1: On this section will appear the images.
* section 2: on this section will appear the title and description of the image, also the button to display another image. 


#### Mobil desing first
I start the project thinking that the best practice is building my webpage writing my code thinking on mobile, and then using MQuerries I shall be able to display my webpage in other devices. 

#### Links
Also in HTML is the perfect place for posting the links to connect my CSS and third parts developments. 

**_At the end I used an especial validator for searching any mistake commited [validator](https://validator.w3.org/nu/#textarea)_**



## CSS and SASS 
_Main.sass is the principal sass file.
* An external Source was used for reseting the original rules created by default. 
* Created following the same sections displayed on HTML (also including commentaries per section, easy to read.)
* For showing my CSS rules I used a SASS preprocesor which (and combined with gulp) let us to use variables, mixings and other super powerfull tools for writing css.

* _mixinsVariable_  In this file I have created the sizes of my Mquerries, and also some variables that let me write a cleaner code. 
* @include will show the Mquerries, and some group of rules for not repeting code. 
* Variables will be shown with a presign of dollar $. 

**_At the end I used an especial validator for searching any mistake commited [validator](https://jigsaw.w3.org/css-validator/validator)_**




## Jquerry - JavaScript
* Download Jquerry.
* Created a file on my project 
* connected to HTML at the bottom of my file. 


1) JQuery: 
This API works using the actual date, so at the end of the end we would have been able to use one image per day. However, using the following we can use this API for calling other days, at the beginning the API will call today, as follows. 
```
$(function(){
let d = new Date() ;
let strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());
obtain_data();
```
But, if we wanna call a different date for instead, Yesterday and so on. we only need to modify the date, every time the user push this button the date will go one day before: 
```
$(".next_picture").on("click",function(){
    d.setDate(d.getDate() - 1);
    strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());

    $(".SinglePhoto>p").html("");
    $(".fullPhoto").html("");
    $(".title").html("");
    $(".explanation").html("");
    
    obtain_data();
    $("body").scrollTop(0,0);
});

```
This part of my code will only show the picture, if the user wants to explore it. Otherwise, it'll remind hide. 

```
$(".SinglePhoto").on("click", function(){
$(".fullPhoto>img").toggle("slow");
$('html,body').animate({
  scrollTop: $(".fullPhoto>img").offset().top},
  750);  
});
```
This is the function that calls the API, and one important thing here is the use of **strDATE** as a variable for changing the date. 

```
function obtain_data(){
   
   let url = "https://api.nasa.gov/planetary/apod";
    url += '?' + $.param({
    'date': **strDate,**
      'api_key': "V6Z483OMQAniBX56p4mRyQSPEXdl09zSO2Rna86G"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
     
$(".fullPhoto").append("<img src="+result.url+">");
$(".SinglePhoto")
      .css({"background-image":"url("+ result.url+")"})
      .append("<p>"+result.copyright+"</p>");

$(".title").append("<h2>"+result.title+"</h2>");
$(".explanation").append("<p>"+result.explanation+"</p>")


    }).fail(function(err) {
      throw err;
    });

};

```

});
## gulp 

gulp has help us to save a lot of time, cause it has automatized several process. In order to add this helpfull tool working we had to install every component like : 

*terser = require("gulp-terser"),
* rename = require("gulp-rename"),
* eslint = require('gulp-eslint'),
* prettyError = require("gulp-prettyerror"),
* sass = require("gulp-sass"),
* autoprefixer = require("gulp-autoprefixer"),
* cssnano = require("gulp-cssnano"),
* rename = require("gulp-rename"),
* browserSync = require('browser-sync').create();

