to_remove_arr = [
  '#guide-button',
  '#content > ytd-mini-guide-renderer',
  '#contents',
  '#secondary',
  '#comments'
]

function remove_distractions(list_of_selectors) {
  list_of_selectors.forEach(id => {
    el = document.querySelector(id);
    if (el) {
      el.remove();
    }
  });

  // Search page
  srch_shorts_arr = document.getElementsByTagName('ytd-reel-shelf-renderer');

  if (srch_shorts_arr.length > 0) {
    [...srch_shorts_arr].forEach(sh => {
      sh.remove();
    });
  }
}

// execute
remove_distractions(to_remove_arr);

// listen to app reloads
window.navigation.addEventListener("navigate", (event) => {
  remove_distractions(to_remove_arr);
});
