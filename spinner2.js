const spin = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   '];
let time = 0;

const timeSpin = (spin, time) => {
  for (let element of spin) {
  setTimeout( () => process.stdout.write(element), time += 200);
}
setTimeout(() => process.stdout.write('\n'), 2000);
}

timeSpin(spin,100);