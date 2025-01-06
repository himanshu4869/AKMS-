////////// TOP_6_CARDS //////////
function viewallBtn1() {window.open("product1.html");}
function viewallBtn2() {window.open("product2.html");}
function viewallBtn3() {window.open("product3.html");}
function viewallBtn4() {window.open("product4.html");}
function viewallBtn5() {window.open("product5.html");}

////////// ELECTROTHERAPY PRODUCTS SCRIPT//////////
function viewallBtnElec1() {window.open("elec1.html");}
function viewallBtnElec2() {window.open("elec2.html");}
function viewallBtnElec3() {window.open("elec3.html");}
function viewallBtnElec4() {window.open("elec4.html");}
function viewallBtnElec5() {window.open("elec5.html");}
function viewallBtnElec6() {window.open("elec6.html");}

////////// HEADER_NAV_MENU_BAR //////////
function page_A() {window.open("page1.html");}
function page_B() {window.open("page2.html");}
function page_C() {window.open("page3.html");}
function page_D() {window.open("page4.html");}
function page_E() {window.open("page5.html");}

/////////////////////////////////////////////////////////////////////////////////////////////
function gateway1() {window.open("gateway1.html");}
function gateway2() {window.open("gateway2.html");}
function gateway3() {window.open("gateway3.html");}
function gateway4() {window.open("gateway4.html");}
function gateway5() {window.open("gateway5.html");}
function gateway6() {window.open("gateway6.html");}

////////// OUR_STATICS_PART //////////
 $.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end: 1500,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

	var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(mathCount);
		},
		complete: settings.complete
	});
};

$('#number1').jQuerySimpleCounter({end: 1000,duration: 60000});
$('#number2').jQuerySimpleCounter({end: 784,duration: 60000});
$('#number3').jQuerySimpleCounter({end: 486,duration: 60000});
$('#number4').jQuerySimpleCounter({end: 627,duration: 60000});