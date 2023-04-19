function base() {
  let isUnique = false;
  while (!isUnique) {
    let wario = ~~(Math.random() * (9999 - 1111 + 1)) + 1111;
    let [a, b, c, d] = [...wario+''];
    let [r1, r2, r3, r4] = [a + b + c + d, c + a + d + b, d + c + b + a, b + d + a + c];
    if (/([abcd]).*\1/.test(r1+r2+r3+r4)) {
      console.log('kal');
    } else {
      console.log(`${r1} ${r2} ${r3} ${r4}`);
      isUnique = true;
    }
  }
}
base();





