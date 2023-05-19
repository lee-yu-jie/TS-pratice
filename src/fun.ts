
// void 代表無, 意思是這個function 不會有回傳值
function add(a: number, b: number): void{
  console.log(a + b);
}
add(2, 2)

function add1(a: number, b: number): number{
  return a + b
}
add1(2, 2)

// ? 問號代表可以不傳入此參數, 但只能被放到最後面, 除非用解構的方式
function add2(a: string, b?: number): string{
  return a + b
}
add2('2')

function add3({a, b}: {b?: number, a: string}): string{
  return a + b
}
add3({a: '3', b: 1})