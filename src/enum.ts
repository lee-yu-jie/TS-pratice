// enums 枚舉 
// 主要拿來管理多個同類型同型別的常數(不可修改)
// 編譯後產生查找物件
// 若沒有賦值,則會自動從 0 遞增
enum requestStatusCodes {
  error,
  success,
}
// 等同以下
// enum requestStatusCodes {
//   error = 0,
//   success = 1,
// }
// 當為number時可以反向查詢
console.log(requestStatusCodes.error);
console.log(requestStatusCodes[0]);

enum requestWrongCodes {
  missingParameter = 'A',
  wrongParameter = 'B',
  invalidToken = 'C',
}
console.log(requestWrongCodes.wrongParameter) // 'B'

// 若用const宣告，則不會產生查找物件
// 1.能提高效能 
// 2.不能反向查詢
const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction.Down);
