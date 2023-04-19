function base(){
  let wario = Math.floor(Math.random() * (9999 - 1111)) + 1111;
  let stringWario = wario.toString()
  let splitWario = stringWario.split('')
  let a = splitWario[0]
  let b = splitWario[1]
  let c = splitWario[2]
  let d = splitWario[3]
  let oneResult = a + b + c + d
  let twoResult = c + a + d + b
  let threeResult = d + c + b + a
  let fourResult = b + d + a + c
  if (a && b === c || b && c === d || c && d === b || c && b === a){
    console.log('kal')
    return base()
  }
  console.log(oneResult +' '+ twoResult +' '+ threeResult +' '+  fourResult)
}
base()






