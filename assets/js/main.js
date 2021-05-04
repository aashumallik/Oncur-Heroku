// Code for Header Sticky 
const nav = document.querySelector('.header-area');

function stickyNavigation() {
    if (window.scrollY > 0) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickyNavigation);

// Mobile menu Activation 
$('.mobile-bar').on('click', function() {
    $('.off-canvas-menu-wrap').toggleClass('show');
})

// Nice Select Activation 
$('.selection').niceSelect();


// Query For Popup 

document.querySelector('#subscription-fm').addEventListener('submit', function(e) {
    e.preventDefault();
    let subsMail = document.querySelector('#subMail').value;
    let subsMailTwo = document.querySelector('#formTwo input');
    if (subsMail !== null) {
        subsMailTwo.value = subsMail;
        $('body').toggleClass('show-popup');
    }
    console.log(subsMailTwo.value)
})

$('.page-overlay').on('click', function() {
    $('body').toggleClass('show-popup');
    $(this).toggleClass('show');
})

// Script for Back to top button action
$(document).ready(function() {
    var back = $('.back-to-top');
    back.on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 900);
    })
    $(window).on('scroll', function() {
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();
        if (top > height) {
            back.addClass('visible');
        } else {
            back.removeClass('visible');
        }
    })

})