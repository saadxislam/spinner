// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

const spinnyThingy = "|/-\\|"

let delay = 100

for (let char of spinnyThingy){
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, delay += 200)
}
setTimeout(() => {
  process.stdout.write('\n')}, delay += 200);