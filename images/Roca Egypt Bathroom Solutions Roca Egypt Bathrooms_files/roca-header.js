'use strict';

/*!
 * .closestDescendant( selector [, findAll ] )
 * https://github.com/tlindig/jquery-closest-descendant
 *
 * v0.1.2 - 2014-02-17
 *
 * Copyright (c) 2014 Tobias Lindig
 * http://tlindig.de/
 *
 * License: MIT
 *
 * Author: Tobias Lindig <dev@tlindig.de>
 */
(function($) {

  /**
   * Get the first element(s) that matches the selector by traversing down
   * through descendants in the DOM tree level by level. It use a breadth
   * first search (BFS), that mean it will stop search and not going deeper in
   * the current subtree if the first matching descendant was found.
   *
   * @param  {selectors} selector -required- a jQuery selector
   * @param  {boolean} findAll -optional- default is false, if true, every
   *                           subtree will be visited until first match
   * @return {jQuery} matched element(s)
   */
  $.fn.closestDescendant = function(selector, findAll) {

      if (!selector || selector === '') {
          return $();
      }

      findAll = findAll ? true : false;

      var resultSet = $();

      this.each(function() {

          var $this = $(this);

          // breadth first search for every matched node,
          // go deeper, until a child was found in the current subtree or the leave was reached.
          var queue = [];
          queue.push($this);
          while (queue.length > 0) {
              var node = queue.shift();
              var children = node.children();
              for (var i = 0; i < children.length; ++i) {
                  var $child = $(children[i]);
                  if ($child.is(selector)) {
                      resultSet.push($child[0]); //well, we found one
                      if (!findAll) {
                          return false; //stop processing
                      }
                  } else {
                      queue.push($child); //go deeper
                  }
              }
          }
      });

      return resultSet;
  };
})(jQuery);


/*** Common ***/

var commons = {
  closeRModals: function(modal){
    $(modal).closest('html').removeClass('lockBody');
    $(modal).each(function(i, e){
      $(e).removeClass('in');
    })
  },
  svgInline: function(){
    /* Replace all SVG images with inline SVG */
    jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          /* Get the SVG tag, ignore the rest */ 
          var $svg = jQuery(data).find('svg');

          /* Add replaced image's ID to the new SVG */ 
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          /* Add replaced image's classes to the new SVG */
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          /* Remove any invalid XML tags as per http://validator.w3.org */
          $svg = $svg.removeAttr('xmlns:a');

          /* Check if the viewport is set, if the viewport is not set the SVG wont't scale. */
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          /* Replace image with new SVG */
          $img.replaceWith($svg);

      }, 'xml');
    });
  },
  centerScroll: function(scrollEl){
    $(scrollEl).each(function(i,e){
      var width = $(e).width();
      var widthChildren = $(e).children().first().width();
      /* console.log(e); */
      if(widthChildren > width){
        $(e).scrollLeft((widthChildren-width)/2);
      }
    }) 
  },
  scrollFixedMenus: function(submenu){
    return true

  }
}

$(document).ready(function(){
  var scrollElement = $('.js-center-scroll');
  try {
    commons.centerScroll(scrollElement);
  } catch (error) {
    console.log('init center scroll horizontal ' + error);
  }

  try {
    commons.svgInline();
  } catch (error) {
    console.log('init svg inline ' + error);
  }

  try {
    $('.js-submenu').each(function(i, e){
      /* commons.scrollFixedMenus(e); */
    })
  } catch (error) {
    console.log('height of scroll fixed menus ' + error);
  }

});

$(window).resize(function(){
  var scrollElement = $('.js-center-scroll');
  try {
    commons.centerScroll(scrollElement);
  } catch (error) {
    console.log('init center scroll horizontal ' + error);
  }

  try {
    $('.js-submenu').each(function(i, e){
      commons.scrollFixedMenus(e);
    })
  } catch (error) {
    console.log('height of scroll fixed menus ' + error);
  }

});






/*** Header ***/

var headerJS = {
  addJsCollapse: function(el){
    $(el).each(function(i, e){
      
      $(e).find('.arrow')
      .mousedown(function(){
        $(e).find('.collapse').collapse('toggle');
      })
      $(e).find('.collapse').on('hide.bs.collapse', function () {
        $(e).find('.arrow').removeClass('up');
      }).on('show.bs.collapse', function () {
        $(e).find('.arrow').addClass('up');
      })
    })
  },
  moveSupraMenuLeft: function(header, test){
    var $header = $(header);

    $header.each(function(i, e){
      var $supraMenuLeft = $(e).find('.supramenu__list--left'),
          $origen = $(e).find('.supramenu-left'),
          $direction = $(e).find('.main-menu-collapse').find('.r-modal__wrapper'),
          $supraMenuLeftDetached = $($supraMenuLeft).detach();
  
      if(test){
        $direction.append($supraMenuLeftDetached);
      }else{
        $origen.append($supraMenuLeftDetached);
      }
      
      
    })
    
  },
  moveSupraMenuRight: function(header, test){
    var $header = $(header);

    $header.each(function(i , e){
      var $supraMenuRight = $(e).find('.supramenu__list--right'),
          $origen = $(e).find('.supramenu-right'),
          $direction = $(e).find('.main-menu-collapse').find('.r-modal__wrapper'),
          $supraMenuRightDetached = $($supraMenuRight).detach();
  
      if(test){
        $direction.append($supraMenuRightDetached);
      }else{
        $origen.append($supraMenuRightDetached);
      }
    })
  },
  moveMainMenu: function(header, test){
    var $header = $(header);
 
    $header.each(function(i, e){
      var $mainMenu = $(e).find('.main-menu__list'),
          $origen = $(e).find('.main-menu__wrapper'),
          $direction = $(e).find('.main-menu-collapse').find('.r-modal__wrapper'),
          $mainMenuDetached = $($mainMenu).detach();
  
      if(test){
        $direction.append($mainMenuDetached);
      }else{
        $origen.append($mainMenuDetached);
      }
    })
  },
  initMenuCollapse: function(header, test){
    /* headerJS.moveUserMenu(header, test);*/
    headerJS.moveMainMenu(header, test);
    headerJS.moveSupraMenuRight(header, test);
    headerJS.moveSupraMenuLeft(header, test);
  },
  menuCollapse: function(header){
    var $header = $(header);

    $header.each(function(i, e){
      
      var $menuTrigger = $(e).find('.menu-trigger').find('a');
      var target;
          $($menuTrigger).each(function(i, el){
            if($(el).data('target')){
              target = $(el).data('target');
            }
          })
      var $collapseMenu =  $(e).find('.r-modal.'+ target ),
          $closeCollapseMenu = $($collapseMenu).find('.js-close');

         
          /* console.log($collapseMenu);*/ 
      
           /* trigger menu collapse*/
          $($menuTrigger).click(function(){
            $($collapseMenu).closest('html').addClass('lockBody');
            /* console.log($collapseMenu);*/
            $($collapseMenu).toggleClass('in');
          })

          /* close menu collapse */
          $($closeCollapseMenu).click(function(){
            $($collapseMenu).closest('html').removeClass('lockBody');
            $($collapseMenu).removeClass('in');
          })
          
          
    })
  },
  menuCountryCollapse: function(header){
    var $header = $(header);

    $header.each(function(i, e){
      var $menuTrigger = $(e).find('.menu-country-trigger').find('a'),
          target = $($menuTrigger).data('target'),
          $collapseMenu =  $(e).find('.r-modal.'+ target ),
          $closeCollapseMenu = $($collapseMenu).find('.js-close');
          
          /* trigger menu collapse */
          $($menuTrigger).click(function(){
            commons.closeRModals('.r-modal');
            $($collapseMenu).closest('html').addClass('lockBody');
            $($collapseMenu).toggleClass('in');
            $([document.documentElement, document.body]).animate({
              scrollTop: $(e).offset().top
          }, 600);
          })

          /* close menu collapse */
          $($closeCollapseMenu).click(function(){
            $($collapseMenu).closest('html').removeClass('lockBody');
            $($collapseMenu).removeClass('in');
          })
          
          
    })
  },
  collapseSD : function(collapseSM, test){
    $(collapseSM).each(function(i, e){
      var $anchor = $(e).closestDescendant('a'),
          $menuCollapse = $(e).closestDescendant('.js-menu-collapse'),
          menuCollapseID = $($menuCollapse).attr('id'),
          menuCollapseParent = $(e).parent().attr('id'),
          $icon = $(e).closestDescendant('.arrow');

      
      if(test){
        $($icon).attr('data-toggle', 'collapse')
        .addClass('collapsed')
        .attr('role', 'button')
        .attr('data-target', '#'+ menuCollapseID) 
        .attr('aria-controls', menuCollapseID) 
        
        .attr('aria-expanded', false);
        $($menuCollapse).addClass('collapse').attr('data-parent', '#'+ menuCollapseParent);
        $($menuCollapse).removeClass('dropdown-menu');
        $($icon).click(function(e){e.preventDefault();})
      }else{
        $($icon).attr('data-toggle', '')
        .attr('role', '') 
        .removeClass('collapsed')
        .attr('data-target', '')
        .attr('aria-controls', '') 
        .attr('aria-expanded', '');
        $($menuCollapse).removeClass('collapse').attr('data-parent', '');
        $($menuCollapse).addClass('dropdown-menu');
        $($icon).click(function(e){e.preventDefault();})
        
      }
    })
  },
  collapseSM : function(collapseSM, test){
    $(collapseSM).each(function(i, e){
      var $anchor = $(e).closestDescendant('a'),
          $menuCollapse = $(e).closestDescendant('.js-menu-collapse'),
          menuCollapseID = $($menuCollapse).attr('id'),
          /* menuCollapseParentEl = $(e).parent().attr('id'), */
          menuCollapseParent = $(e).parent().attr('id'),
          /* menuCollapseParent = menuCollapseParentEl.split(' ').join('.'), */
          $icon = $(e).closestDescendant('.arrow');
      
      if(test){
        $($icon).attr('data-toggle', 'collapse')
        .addClass('collapsed')
        .attr('role', 'button') 
        .attr('data-target', '#'+ menuCollapseID)
        .attr('aria-controls', menuCollapseID) 
        .attr('aria-expanded', false);
        $($menuCollapse).addClass('collapse').attr('data-parent', '#'+ menuCollapseParent)
        $($menuCollapse).removeClass('dropdown-menu');
        $($icon).click(function(e){e.preventDefault();})
        
      }else{
        $($icon).attr('data-toggle', '')
        .removeClass('collapsed')
        .attr('role', '') 
        .attr('data-target', '')
        .attr('aria-controls', '') 
        .attr('aria-expanded', '');
        $($menuCollapse).removeClass('collapse').attr('data-parent', '');
        $($menuCollapse).addClass('dropdown-menu');
        $($icon).click(function(e){e.preventDefault();})
      }
    })
  },
  scrollHeader: function(header, displacement, limit){
    if(displacement > limit){
      $(header).addClass('scrolled-header');
    } else {
        $(header).removeClass('scrolled-header');
      
    }
  }

}

$(document).ready(function(){
  var windowWidth = $(window).width();
  var $header = $('.js-header .main-header__wrapper');
  var $collapseSM = $($header).find('.js-collapse-sm');
  var $collapseSD = $($header).find('.js-collapse-sd');

  /* Collapse */
  var $jsCollapse = $($header).find('.js-collapse-wrapper');
  headerJS.addJsCollapse($jsCollapse);

  /* Menu Collapse */
  var movil = true,
      smallDevice = true;


  if(windowWidth < 1200){
    movil = true;
    headerJS.collapseSM($collapseSM, movil);
    headerJS.initMenuCollapse($header, movil);
  }else if(windowWidth < 992){
    smallDevice = true;
    headerJS.collapseSD($collapseSD, movil);
  }else{
    movil = false;
    smallDevice = false;
    headerJS.collapseSM($collapseSM, movil);
    headerJS.collapseSD($collapseSD, movil);
    headerJS.initMenuCollapse($header, movil);
  }
  
  headerJS.menuCollapse($header);
  headerJS.menuCountryCollapse($header);
});

$(window).resize(function(){
  var windowWidth = $(window).width();
  var $header = $('.js-header .main-header__wrapper');
  var $collapseSM = $($header).find('.js-collapse-sm');
  var $collapseSD = $($header).find('.js-collapse-sd');

  /* Menu Collapse */
  var movil = true;

  if(windowWidth < 1200){
    movil = true;
    headerJS.collapseSM($collapseSM, movil);
    headerJS.initMenuCollapse($header, movil);
  }else if(windowWidth < 992){
    movil = true;
    headerJS.collapseSD($collapseSD, movil);
  }else{
    movil = false;
    headerJS.collapseSM($collapseSM, movil);
    headerJS.collapseSD($collapseSD, movil);
    headerJS.initMenuCollapse($header, movil);
  }
})

/* Descomentar en liferay */

$(document).ready(function(){
  if($('#wrapper').length > 0){
    var $header = $('.js-header');
    var $headerHeight = $('.js-header').height();
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      /* headerJS.scrollHeader($header, scroll, $headerHeight) */      
    });
  }
})
