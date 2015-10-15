$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

/*
var sections = $('mainContent')
  , nav = $('nav')
  , nav_height = nav.outerHeight(); // 51
 


var home_top = $('.home').offset().top - nav_height//,
    //home_bottom = home_top + $(this).outerHeight();

var about_top = $('.about').offset().top - nav_height + $(document.body).css( "border-top" )//,
    // about_bottom = about_top + $(this).outerHeight();

var work_top = $('.work').offset().top - nav_height//,
    //work_bottom = work_top + $(this).outerHeight();

var projects_top = $('.projects').offset().top - nav_height//,
    //projects_bottom = projects_top + $(this).outerHeight();

var contact_top = $('.contact').offset().top - nav_height//,
    //contact_bottom = contact_top + $(this).outerHeight();

var home_bottom = about_top - 10,
    about_bottom = work_top - 10,
    work_bottom = projects_top - 10,
    projects_bottom = contact_top - 10,
    contact_bottom = $(document).height()


console.log(home_top, home_bottom)
console.log(about_top, about_bottom)
console.log(work_top, work_bottom)
console.log(projects_top, projects_bottom)
console.log(contact_top, contact_bottom)

$(window).on('scroll', function () {

    var cur_pos = $(window).scrollTop();
    console.log(cur_pos)
 
    if (cur_pos >= home_top && cur_pos <= home_bottom) {
        $(".nav").find(".active").removeClass("active");
        $('.1').addClass('active');
    }
    else if (cur_pos >= about_top && cur_pos <= about_bottom) {
        $(".nav").find(".active").removeClass("active");
        $('.2').addClass('active');
    }
    else if (cur_pos >= work_top && cur_pos <= work_bottom) {
        $(".nav").find(".active").removeClass("active");
        $('.3').addClass('active');
    }
    else if (cur_pos >= projects_top && cur_pos <= projects_bottom) {
        $(".nav").find(".active").removeClass("active");
        $('.4').addClass('active');
    }
    else if (cur_pos >= contact_top && cur_pos <= contact_bottom) {
        $(".nav").find(".active").removeClass("active");
        $('.5').addClass('active');
    }

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".nav").find(".active").removeClass("active");
        $('.5').addClass('active');
       }
});

/*
$(window).on('scroll', function() {
    var one = $( "#1:last" );
    var one_position = one.position().top;

    var two = $( "#2:last" );
    var two_position = two.position().top; 

    var three = $( "#3:last" );
    var three_position = three.position().top; 

    var four = $( "#4:last" );
    var four_position = four.position().top;

    var p = $( "p:last" );
    var p_position = four.position().top;

    var cur_pos = $(this).scrollTop();

    // console.log(cur_pos)

    var four_position = document.getElementById('2').getBoundingClientRect().top
    var el = document.getElementById('2')
    console.log(four_position)

    //$(".nav").find(".active").removeClass("active");
    //console.log($('.nav').find("#1"))
    //$('.nav').find("#1").addClass("active");

    $( "p:last" ).text( "1: " + one_position + " 2: " + two_position + " 3: " + three_position + " 4: " + four_position + ' cur: ' + cur_pos + ' p: ' + p_position ); 
    // 1: 463 2: 1242 3: 1840 4: 2278

});
*/
/*
var p = $( "#1:first" );
var position = p.position();
$( "p:last" ).text( "left: " + position.left + ", top: " + position.top );
*/
