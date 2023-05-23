// ----- interface -----
interface car {
  color: string,
  height: number
}
interface car {
  age: number
}

let toyota: car = {
  color: 'black',
  height: 1000,
  age: 3
}
console.log(toyota);

// 要為物件類型宣告型別要使用 interface 或 type 
// 1.interface 可以擴充, type 不行
// 2.type 有 =
// 3.物件大部分皆用interface
// 4.interface可被繼承