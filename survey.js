const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              console.log(`My name is ${name}. I like to ${activity}. I listen to ${music} while I am doing ${activity}. My favourite meal is ${favMeal}. My favourite foos is ${favFood}. My absolute favourit sport is ${sport}. My super poer is ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });


});