$(function () {
  $('.tab-content .tabItem').hide();
  $('.tab-content .tabItem:first').show();
  $('.tab-nav a').click(function() {

    // Check for active
    $('.tab-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tab-content .tabItem').hide();
    $(currentTab).fadeIn('slow');
    $(currentTab).show();

    return false;
  });
});