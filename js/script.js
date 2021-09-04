// const to target the btn element on the DOM
const btn = document.querySelector("button");

const changeColor = () => {
  // function to generate a random number using math floor (to give us a whole number) and the math random functional notation times/based on the maxNum entered
  const randomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };

  // function to get random HSL color values
  const hslRandomColors = () => {
    const h = randomNumber(360);
    const s = randomNumber(100);
    const l = randomNumber(100);

    // return hsl value using template literals
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };

  //   function to bring it all together i.e. pass the random hsl color as the new background color for the body element each time
  const setBackgroundColor = () => {
    const randomColor = hslRandomColors();
    document.body.style.backgroundColor = randomColor;
  };

  setBackgroundColor();
};

btn.addEventListener("click", changeColor);

