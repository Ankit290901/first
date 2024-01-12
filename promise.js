console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
  try {
    const promiseWifeBringingTickets = new Promise((resolve) => {
      setTimeout(() => resolve('tickets'), 3000);
    });

    const getPopcorn = new Promise((resolve) => resolve('popcorn'));
    const getButter = new Promise((resolve) => resolve('Butter'));
    const getColdDrinks = new Promise((resolve) => resolve('ColdDrinks'));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: I have ${ticket}`);
    console.log(`husband: we should go in`);
    console.log(`wife: No, I am hungry`);

    let popcorn = await getPopcorn;
    console.log(`husband: I got some ${popcorn}`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need butter on my popcorn`);

    let Butter = await getButter;
    console.log(`husband: I got some ${Butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go, we are getting late `);
    console.log(`husband: thank you for the reminder`);

    let ColdDrinks = await getColdDrinks;
    console.log(`husband: so should we get in now ?`);
    console.log(`Wife: we will need ColdDrinks with popcorn`);
    console.log(`husband: I got ColdDrinks already`);
    console.log(`wife: yes lets go now`);

    return ticket;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to handle it at a higher level if needed.
  }
};

try {
  preMovie().then((m) => console.log(`person3: shows ${m}`));
  console.log('person4: shows ticket');
  console.log('person5: shows ticket');
} catch (error) {
  console.error('Error outside preMovie:', error);
}
