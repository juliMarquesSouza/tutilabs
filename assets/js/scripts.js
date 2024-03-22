document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('btn-front').addEventListener('click', function () {
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    this.classList.add('active');
    var stacks = document.getElementsByClassName('stacks');
    for (var i = 0; i < stacks.length; i++) {
      stacks[i].classList.remove('active');
    }

    document.getElementById('stacks-front').classList.add('active');
    splide();
  })

  document.getElementById('btn-back').addEventListener('click', function () {
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    this.classList.add('active');

    this.classList.add('active');
    var stacks = document.getElementsByClassName('stacks');
    for (var i = 0; i < stacks.length; i++) {
      stacks[i].classList.remove('active');
    }

    document.getElementById('stacks-back').classList.add('active');
    splide();
  })

  splide();
});

selectStack = (stack) => {
  document.getElementById('header-stack').innerText = stack;
}

function splide() {
  var rowStackFront = document.querySelector('#row-stack-front');
  var rowStackBack = document.querySelector('#row-stack-back');
  var scrollAmountFront = 0;
  var scrollAmountBack = 0;
  var stacksFrontWidth = 0;
  var stacksBackWidth = 0;
  var stacksFront = document.querySelectorAll('.stack-front');
  var stacksBack = document.querySelectorAll('.stack-back');

  stacksFront.forEach(function (stack) {
    stacksFrontWidth += stack.offsetWidth;
  });

  stacksBack.forEach(function (stack) {
    stacksBackWidth += stack.offsetWidth;
  });

  console.log("stacksBackWidth", stacksBackWidth);

  var arrowLeftFront = document.querySelector('#arrow-left');
  var arrowRightFront = document.querySelector('#arrow-right');

  var arrowLeftBack = document.querySelector('#arrow-left-back');
  var arrowRightBack = document.querySelector('#arrow-right-back');

  if (stacksFrontWidth <= rowStackFront.offsetWidth) {
    arrowLeftFront.classList.add('hidden');
    arrowRightFront.classList.add('hidden');
  } else {
    arrowLeftFront.classList.add('hidden');
    arrowRightFront.classList.remove('hidden');
  }

  if (stacksBackWidth <= rowStackBack.offsetWidth) {
    arrowLeftBack.classList.add('hidden');
    arrowRightBack.classList.add('hidden');
  } else {
    arrowLeftBack.classList.add('hidden');
    arrowRightBack.classList.remove('hidden');
  }

  arrowRightFront.addEventListener('click', function () {
    rowStackFront.scrollTo({
      top: 0,
      left: (scrollAmountFront += 80),
      behavior: 'smooth'
    });

    if (rowStackFront.scrollLeft + rowStackFront.offsetWidth >= stacksFrontWidth) {
      arrowRightFront.classList.add('hidden');
      arrowLeftFront.classList.remove('hidden');
    }
  });

  arrowLeftFront.addEventListener('click', function () {
    rowStackFront.scrollTo({
      top: 0,
      left: (scrollAmountFront -= 80),
      behavior: 'smooth'
    });

    if (rowStackFront.scrollLeft <= 0) {
      arrowLeftFront.classList.add('hidden');
      arrowRightFront.classList.remove('hidden');
    }
  });

  arrowRightBack.addEventListener('click', function () {
    rowStackBack.scrollTo({
      top: 0,
      left: (scrollAmountBack += 80),
      behavior: 'smooth'
    });

    console.log("soma", rowStackBack.scrollLeft + rowStackBack.offsetWidth);
    console.log("stacksBackWidth", stacksBackWidth);

    if (rowStackBack.scrollLeft + rowStackBack.offsetWidth >= stacksBackWidth) {
      console.log("soma", rowStackBack.scrollLeft + rowStackBack.offsetWidth);
      console.log("stacksBackWidth", stacksBackWidth);

      arrowRightBack.classList.add('hidden');
      arrowLeftBack.classList.remove('hidden');
    }
  });

  arrowLeftBack.addEventListener('click', function () {
    rowStackBack.scrollTo({
      top: 0,
      left: (scrollAmountBack -= 80),
      behavior: 'smooth'
    });

    if (scrollAmountBack < 0) {
      scrollAmountBack = 0;
    }

    if (rowStackBack.scrollLeft <= 0) {
      arrowLeftBack.classList.add('hidden');
      arrowRightBack.classList.remove('hidden');
    }
  });
}