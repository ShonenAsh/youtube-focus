const side_bar = document.querySelector(['#content > ytd-mini-guide-renderer']);
side_bar.remove();

const home_contents = document.getElementById('contents');
home_contents.remove();

// Watch page
document.getElementById('secondary').remove()
document.getElementById('comments').remove()

// Search page
srch_shorts_arr = document.getElementsByTagName('ytd-reel-shelf-renderer');

[...srch_shorts_arr].forEach(sh => {
  sh.remove();
});

