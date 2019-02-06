/*global $, jQuery, alert*/
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  // LOADING PAGE
  // ========================================================================= //

  // ========================================================================= //
  //  // Text Scramble
  // ========================================================================= //

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = 'Do Your Job'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 100)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Title Text Scramble
// ——————————————————————————————————————————————————

const phrases = ["Sports Analytics Consultant"]

const el = document.querySelector('.title')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter])
  counter = (counter + 1) % phrases.length
}

next()

// ——————————————————————————————————————————————————
// School Text Scramble
// ——————————————————————————————————————————————————

const phrases1 = ["University of Michigan"]

const el1= document.querySelector('.school')
const fx1 = new TextScramble(el1)

let counter1 = 0
const next1 = () => {
  fx1.setText(phrases1[counter1])
  counter1 = (counter1 + 1) % phrases1.length
}

next1()
// // ——————————————————————————————————————————————————
// // Masters Text Scramble
// // ——————————————————————————————————————————————————

const phrases2 = ["M.S. Information"]

const el2 = document.querySelector('.masters')
const fx2 = new TextScramble(el2)

let counter2 = 0
const next2 = () => {
  fx2.setText(phrases2[counter])
  counter2 = (counter2 + 1) % phrases2.length
}

next2()
// // ——————————————————————————————————————————————————
// // Name Text Scramble
// // ——————————————————————————————————————————————————

const phrases3 = ["ROHIT"]

const el3 = document.querySelector('.name')
const fx3 = new TextScramble(el3)

let counter3 = 0
const next3 = () => {
  fx3.setText(phrases3[counter3])
  counter3 = (counter3 + 1) % phrases3.length
}

next3()

const phrases33 = ["MOGALAYAPALLI"]

const el33 = document.querySelector('.name1')
const fx33 = new TextScramble(el33)

let counter33 = 0
const next33 = () => {
  fx33.setText(phrases33[counter33])
  counter33 = (counter33 + 1) % phrases33.length
}

next33()

next6()

 

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

$(".btn").click(function() {
  
   var lable = $(".btn").text().trim();

   if(lable == "Hide") {
     $(".btn").text("Show");
     $(".myText").hide();
   }
   else {
     $(".btn").text("Hide");
     $(".myText").show();
   }
    
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});
