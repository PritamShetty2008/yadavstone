// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.project_carousel').owlCarousel({
    loop: false,
    margin: 15,
    center: true,
    startPosition: 2,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        769: {
            items: 2,
        },
        992: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

//first text slide in about us
document.addEventListener("DOMContentLoaded", function () {
    let firstBox = document.querySelector(".first-slide");
    firstBox.classList.add("show");
});
    // Slide in the other sections when scrolling
    document.addEventListener("scroll", function () {
        let elements = document.querySelectorAll(".slide-right, .slide-left-again");
        let screenHeight = window.innerHeight;

        elements.forEach((element) => {
            let position = element.getBoundingClientRect().top;
            if (position < screenHeight - 100) {
                element.classList.add("show");
            }
        });
    });


    document.write('<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"><\/script>');
    document.write('<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"><\/script>');
    
    // Filter Implementation
    $(document).ready(function(){
      // Initialize Isotope
      const $grid = $('.isotope-container').imagesLoaded(function(){
        $grid.isotope({
          itemSelector: '.col-lg-4',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: '.col-lg-4',
            gutter: 30
          },
          transitionDuration: '0.6s',
          stagger: 30,
          hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.8)'
          },
          visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
          }
        });
      });
    
      // Filter buttons
      $('.btn-filter').on('click', function(){
        $('.btn-filter').removeClass('active');
        $(this).addClass('active');
        
        const filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
    
      // Window resize handler
      $(window).on('resize', function(){
        $grid.isotope('layout');
      });});
    
    // Modal initialization
    $('#productModal').on('show.bs.modal', function(event) {
      const button = $(event.relatedTarget);
      const modal = $(this);
      
      modal.find('.modal-product-title').text(button.data('product'));
      modal.find('.modal-image').attr('src', button.data('image'));
      modal.find('.price-value').text(button.data('price'));
      
      const specs = button.data('specs').split('|');
      const specList = modal.find('.spec-list').empty();
      specs.forEach(spec => {
        specList.append(`<li>${spec.trim()}</li>`);
      });
    });

    $(document).ready(function(){
        // Initialize Isotope after images load
        const $grid = $('.isotope-container').imagesLoaded(function() {
          $grid.isotope({
            itemSelector: '.product-item',
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.grid-sizer',
              gutter: 30
            },
            percentPosition: true
          });
        });
      
        // Add grid sizer element
        $grid.prepend('<div class="grid-sizer"></div>');
      });


      $(document).ready(function(){
        $('.filter-btn').click(function(){
          $('.filter-btn').removeClass('active');
          $(this).addClass('active');
          
          const filter = $(this).data('filter');
          
          if(filter === 'all') {
            $('.product-grid').show();
          } else {
            $('.product-grid').hide();
            $(`.${filter}`).show();
          }
        });
      });