// 終端機輸入 tsc --init 可產生tsconfig.json

// 基本類型 直接在變數後方指定型別
// 若變數會直接賦值可以省略型別官告，ts會自動會自動推導類型
let a = 2;
// a = 'ss' //a已被自動推導為number, 所以報錯
let b: number | string = 'banana'
let c: boolean
c = false
let d: undefined
let e: null
console.log(b);
