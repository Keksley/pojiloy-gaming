window.addEventListener('load', () => {
  const paralax = document.querySelector('.paralax');
  if (paralax) {
    const back = document.querySelector('.paralax__back');
    const front = document.querySelector('.paralax__front');
    const coefficient = {
      front: 5,
      back: 2,
    };
    const animationSpeed = 0.05;
    const position = {
      x: 0,
      y: 0,
    };
    const coordProcent = {
      x: 0,
      y: 0,
    };

    const paralaxTransform = (currPosition, el, coeff) => {
      el.style.transform = `translate(${currPosition.x / coeff}px, ${currPosition.y / coeff}px)`
    }

    const setMouseParalaxStyle = () => {
      const dist = {
        x: coordProcent.x - position.x,
        y: coordProcent.y - position.y,
      };
      position.x = position.x + (dist.x * animationSpeed);
      position.y = position.y + (dist.y * animationSpeed);
      
      const transform = (el, coeff) => paralaxTransform(position, el, coeff);
      transform(back, coefficient.back);
      transform(front, coefficient.front);
      requestAnimationFrame(setMouseParalaxStyle);
    }
    setMouseParalaxStyle();

    window.addEventListener('mousemove', (e) => {
      const paralaxDimantions = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      const coords = {
        x: e.pageX - paralaxDimantions.width,
        y: e.pageY - paralaxDimantions.height,
      }
      coordProcent.x = coords.x / paralaxDimantions.width * 100;
      coordProcent.y = coords.y / paralaxDimantions.height * 100;
    });
  }
})