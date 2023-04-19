function base(){
  let wario
  function getRandomInt() {
    let max = 9999
    let min = 1111
    min = Math.ceil(min);
    max = Math.floor(max);
    wario = Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomInt()
  console.log(wario)
  function randoz(num){
    let stringWario = num.toString()
    let splitWario = stringWario.split('')
    console.log(splitWario)
    let a = splitWario[0]
    let b = splitWario[1]
    let c = splitWario[2]
    let d = splitWario[3]
    let oneResult = a + b + c + d
    let twoResult = c + a + d + b
    let threeResult = d + c + b + a
    let fourResult = b + d + a + c
    function check(){
      if (a && b === c || b && c === d || c && d === b || c && b === a){
        console.log('kal')
        getRandomInt()
      }
      else {
        console.log(oneResult +' '+ twoResult +' '+ threeResult +' '+  fourResult)
      }
    }
    check()
    
  }
  randoz(wario)
}
base()
