'use strict';


/*** Footer ***/

var footerJS = {
  collapseSM : function(collapseSM, test){
    $(collapseSM).each(function(i, e){
      var $anchor = $(e).closestDescendant('a'),
          $menuCollapse = $(e).closestDescendant('.collapseble-wrapper'),
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
        /* console.log(menuCollapseParent); */
        
      }else{
        $($icon).attr('data-toggle', '')
        .removeClass('collapsed')
        .attr('role', '') 
        .attr('data-target', '')
        .attr('aria-controls', '') 
        .attr('aria-expanded', '');
        $($menuCollapse).removeClass('collapse').attr('data-parent', '');
        $($icon).click(function(e){e.preventDefault();})
        /* $($menuCollapse).addClass('dropdown-menu'); */
      }
    })
  },
  displaceLogo: function(footer, test){
    var $footer = $(footer);

    $footer.each(function(i, e){
      var $logoCont = $(e).find('.footer-logo'),
          $direction = $(e).find('.footer-bottom');
      var $logoContDetached = $logoCont.detach();
  
      if(test){
        $direction.append($logoContDetached);
      }else{
        $direction.prepend($logoContDetached);
      }
    })
  }
}

$(document).ready(function(){
  var windowWidth = $(window).width();
  var $footer = $('.footer');

  /* Collapse */
  var $jsCollapse = $($footer).find('.js-collapse-wrapper');

  /* Displace Logo */
  var movil = true;

  if(windowWidth < 768){
    movil = true;
    footerJS.displaceLogo($footer, movil);
    footerJS.collapseSM($jsCollapse, movil);
  }else{
    movil = false;
    footerJS.displaceLogo($footer, movil);
    footerJS.collapseSM($jsCollapse, movil);
  }

});

$(window).resize(function(){
  var windowWidth = $(window).width();
  var $footer = $('.footer');

    /* Collapse */
    var $jsCollapse = $($footer).find('.js-collapse-wrapper');

   /* Displace Logo */
   var movil = true;
  if(windowWidth < 768){
    movil = true;
    footerJS.displaceLogo($footer, movil);
    footerJS.collapseSM($jsCollapse, movil);
  }else{
    movil = false;
    footerJS.displaceLogo($footer, movil);
    footerJS.collapseSM($jsCollapse, movil);
  }
})



