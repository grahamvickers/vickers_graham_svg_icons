(() => {
      // this is a self invoking anonymous function
  console.log('fired')

    // these are the elements that you want to reference on the page (the icons in this case)
  var icon = document.querySelector("button");

  var otherIcon = document.querySelectorAll('.svgIcon')
    // functions are the same in js as in python: what do you want to have happen on a click?
  function logIconId() {
      console.log(this.id);
      // debugger;
  }

  icon.addEventListener("click", logIconId);

  // debugger;

  otherIcon.forEach(icon => icon.addEventListener("click", logIconId))

})();
