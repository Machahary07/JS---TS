for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000); // 2000 milliseconds = 2 seconds
}

/*
NORMAL CODE
for (let i = 0; i < 5; i++) {
  console.log(i);
}
*/