const sentence = "hello there from lighthouse labs";
let count = 0

for (const char of sentence) {
  count += 50
  setTimeout(() => {
    process.stdout.write(char);
    
  }, count) // <= 1s delay to make it noticeable. Can dial it down later.
}

setTimeout (() =>{
  process.stdout.write('\n')
}, count)