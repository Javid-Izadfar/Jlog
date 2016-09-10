// Add custom js here
/*
=================================================================================================
# 2 Sidebar Toggle
-------------------------------------------------------------------------------------------------
*/

    (function( $ ) {

        $.fn.customNavside = function (options) {

          var settings = $.extend({ // These are the defaults.
            toggleSpeed : '200', // defaults toggle speed set to 200 miliseconds
            maxOpacity : '0.5', // defaults wrapper's max opacity set to 0.5
            disableScroll: false,
            safeClick: true,
            openFirst: false,
            activeClasses: 'grey-lighten-3',
            stackSpeed: '200'
          }, options );

          var element = this;
          var open;

          if ( settings.openFirst ) {
            $(element).css('right', 0); // adjust navside properly
            open = true;
          } else {
            $(element).css('right', -($(element).outerWidth() + 10)); // adjust navside properly
            open = false;
          }

          if ( settings.safeClick ) {
            $('body').prepend('<div id="navsideTempWrapper" class="joqd close-navside"></div>'); // prepend a temp wrapper to body
          }

          $('.joqd.open-navside').on('click', function(){ // when opening trigger is clicked

            openNav();

          })

          $('.joqd.close-navside').on('click', function(){ // when closeing trigger is clicked

            closeNav();

          })

          $('.joqd.toggle-navside').on('click', function() {

            if (open) {
              closeNav();
            } else {
              openNav();
            }

          })

          $('.joqd.navside-body a').on('click', function(e) { // when clicked on a link

            if ( $(this).siblings('ul.joqd.stack').size() > 0 ) { // if had sub menu

              e.preventDefault();
              $(this).addClass(settings.activeClasses).parent().siblings('li').find('a.' + settings.activeClasses).removeClass(settings.activeClasses);
              $(this).siblings('ul.joqd.stack').slideToggle(parseInt(settings.stackSpeed));

            }

          })

          function openNav(){
            if ( !settings.disableScroll ) {
              $('body').css('overflow', 'hidden'); // disable scroll
            }

            if ( settings.safeClick ) {
              $('#navsideTempWrapper').css('display', 'block').animate({opacity: settings.maxOpacity}, parseInt(settings.toggleSpeed)); // view temp wrapper
            }

            $(element).animate({right: '0px'}, parseInt(settings.toggleSpeed)); // view navside
            open = true;
          }

          function closeNav(){
            if ( !settings.disableScroll ) {
              $('body').css('overflow', 'auto'); // enable scroll
            }

            if ( settings.safeClick ) {
              $('#navsideTempWrapper').animate({opacity: '0'} , parseInt(settings.toggleSpeed)).css('display', 'none'); // hide temp wrapper
            }

            $(element).animate({right: - ($(element).outerWidth() + 10)}, parseInt(settings.toggleSpeed)); // hide navside
            open = false;
          }
        }

    }( jQuery ));

$('.navside.dynamic-navside').customNavside({
  toggleSpeed : 220,
  maxOpacity : '.5',
  disableScroll: true,
  safeClick: false,
  openFirst: true
}); // activate navside
