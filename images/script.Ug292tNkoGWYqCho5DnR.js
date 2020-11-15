/**
 * Loader Out
 */
$(document).ready(function() {
  return $('#__loader').fadeOut(500);
});
/**
 * Scoll Indicator
 */
$(document).ready(function() {
  $(window).on('scroll', function() {
    var winScroll = $(window).scrollTop();
    var height = $(document).outerHeight() - $(window).height();

    $('#scroll-indicator .progress-bar').css('width', winScroll / height * 100 + '%');
  });
});
/**
 * Copy TistoryToolbar to Sidebar
 */
$(document).ready(function() {
  $('.menu_toolbar > #menubar_wrapper > .header_layer').appendTo('#__sidebar > #sidebar__shadow > #sidebar__tistory');
});
/**
 * Copy TistoryToolbar to Body
 */
$(document).ready(function() {
  $('.menu_toolbar > div[class=btn_tool]').appendTo('#__nav > #nav__s2');
  $('#__nav > #nav__s2 > div[class=btn_tool] > .btn_menu_toolbar.btn_subscription').append('<i class="fa fa-star"></i>');
});
/**
 * Copy metainfo to Navigation header
 */
$(document).ready(function() {
  var $h = $('.content__permalink > header > .heading > *:not(.metainfo)');
  var $metainfo = $('#__nav > #nav__metainfo');
  // Only for permalink
  if ($h.length) {
    $metainfo.empty();
    $h.each(function(_, $h) {
      return $metainfo.append($($h).clone());
    });
  }
});
/**
 * Sidebar Toogle
 */
$(document).ready(function() {
  var $sidebar = $('#__sidebar');
  var $sidebarMask = $('#sidebar__mask');

  $('#__nav > #nav__s1 > .profile').on('click', function() {
    $sidebar.css('left', 0);
    $sidebarMask.fadeIn(200);
  });
  $sidebarMask.on('click', function() {
    $sidebar.css('left', '-250px');
    $sidebarMask.fadeOut(200);
  });
});
/**
 * Copy report button to form control
 */
$(document).ready(function() {
  $('.content__list > ol > li .header').each(function() {
    var $report = $(this).find('.metainfo > .date > a');
    $(this).parent().find('.control').append($report);
  });
});
/**
 * Media contents alignment
 */
$(document).ready(function() {
  var alignImage = function alignImage(width) {
    width = width > 1100 ? 1100 : width;
    $(this).css({
      width: width,
      'max-width': 'none',
      'margin-left': 'calc((100% - ' + width + 'px) / 2)'
    });
  };

  $('figure.imageblock.alignCenter').each(function() {
    alignImage.call(this, $(this).data('origin-width') || $(this).attr('width') || $(this).width());
  });
  $('figure.imagegridblock').each(function() {
    alignImage.call(this, 1100);
  });
  $('figure.imageslideblock.alignCenter').each(function() {
    alignImage.call(this, $(this).find('.image-wrap.selected > img').data('origin-width'));
  });
});
/**
 * Headings
 */
$(document).ready(function() {
  $('.content__permalink').find('h2, h3, h4').each(function() {
    var $heading = $(this);
    var anchor = encodeURIComponent($heading.text());
    var $a = $('<a></a>').attr('href', '#' + anchor).text($heading.text());
    var htmlContent = $heading.html();

    $a.html(htmlContent);
    $heading.attr('id', anchor).empty().append($a);
  });
});
/**
 * Table
 */
$(document).ready(function() {
  $('.content__permalink').find('table').each(function() {
    $table = $(this);
    if (typeof $table.attr('class') === 'undefined') {
      $table.attr('data-h-type', 'table');
    }
  });
});
/**
 * Code Highlighting
 */
$(document).ready(function() {
  return hljs.initHighlighting();
});
/**
 * Remove Textnode Only in Category
 */
$(document).ready(function() {
  return h.removeTextNodeOnly('.content__permalink .another_category table th');
});
/**
 * Remove Textnode Only in Tags
 */
$(document).ready(function() {
  return h.removeTextNodeOnly('.permalink__tags');
});
/**
 * Set timer for Notification
 */
$(document).ready(function() {
  return setTimeout(function() {
    return h.notify('#' + 'next', 'bottom-right', 15000);
  }, 3000);
});
/**
 * Set timer for Notification
 */
$(document).ready(function() {
  return setTimeout(function() {
    return h.notify('#' + 'prev', 'bottom-left', 15000);
  }, 3000);
});
/**
 * Remove list element when notice permalink page
 */
$(document).ready(function() {
  return $('#tt-body-page #__notice > .__list[data-mode]').remove();
});
/**
 * Create a scrollspy menu
 */
$(document).ready(function() {
  var $permalink = $('.content__permalink');

  // Extract Headings
  var spies = $permalink.find('h2, h3').get().reduce(function(spies, heading) {
    var $heading = $(heading);
    var anchor = encodeURIComponent($heading.text());
    spies.push({
      href: '#' + anchor,
      label: $heading.text(),
      tag: $heading.prop('tagName').toLowerCase()
    });
    return spies;
  }, []);

  // Build
  var $spy = $('#__spy ul');
  spies.forEach(function(spy) {
    var $a = $('<a></a>').text(spy.label).attr({
      'href': spy.href,
      'data-tag': spy.tag
    });
    $spy.append($('<li></li>').append($a));
  });
});
/**
 * Set scrollspy position
 */
$(document).ready(function() {
  var $spy = $('#__spy');
  var $content = $('.content__permalink').children('.content');

  if ($content.length) {
    var _$content$position = $content.position(),
      top = _$content$position.top;

    $spy.css({
      top: top + 50,
      height: $content.height()
    });
  }
});
/**
 * Change a Theme with Button
 */
$(document).ready(function() {
  var $themeBtn = $('#__theme-btn');
  $themeBtn.on('click', function() {
    var TTDARK = $('html').attr('data-theme') === 'dark' ? 'N' : 'Y';
    localStorage.TTDARK = TTDARK;

    $('html').attr('data-theme', localStorage.TTDARK === 'N' ? 'light' : 'dark');
  });
});
