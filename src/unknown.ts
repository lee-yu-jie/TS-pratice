// ----- unknown -----

// 宣告型別為unknown的變數, 可以賦值任何類型
let aa: unknown
aa = 1

// 但 被宣告為unknown 的變數, 除了Any和unknown 不可直接賦值給任何型別
let bb: string = a //錯誤

// 若要賦值給其他變數
let cc = <number>aa
let dd = aa as number