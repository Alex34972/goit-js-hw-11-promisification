const delay = (ms) => {
  // Твой код

  return new Promise((resolve) => {
    setTimeout(() => {
      const time = ms;
      resolve(logger(time));
    }, `${ms}`);
  });
};
const logger = (time) => {
  if (time !== undefined) {
    console.log(`Resolved after ${time}ms`);
  }
};
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
