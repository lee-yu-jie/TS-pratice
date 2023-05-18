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
// 任何型別都行 any, 避免使用
let f: any
console.log(b);

// 陣列
let arr: string[] = ['apple']
let arr1: number[][] = [[2, 3], [4, 5]] //二維
let arr4:( string|number )[] = [18,'Kira']
// Tuple元祖，若陣列中每個值型別不同  
let arr2: [string, boolean, number] = ['2', true, 3]
let arr3: [string, boolean][] = [['2', false]]