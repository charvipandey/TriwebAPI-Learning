function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1);
}

function main() {
  const n = 10;
  const sequence = fibonacci(n);

  console.log(`fibonacci sequence up to ${n} numbers:`);
  console.log(sequence.join(', '));
}

main();
