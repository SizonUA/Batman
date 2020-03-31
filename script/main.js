$(document).ready(function () {
  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  });
});

$("#bookmark").on("click", function () {
  let src = ($(this).attr("src") === "image/bookmark.svg") ?
    "image/bookmark-orange.svg" :
    "image/bookmark.svg";
  $(this).attr("src", src);
});
