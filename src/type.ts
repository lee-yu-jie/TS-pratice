// ------ type ------

// 可以宣告型別
type a = null | string
let arg: a = null
// 也可以宣告固定的值
type name = 'Mike' | 'John'
const male: name = 'John'
//const female: name = 'Shelly' //錯誤 因為不是一開始宣告的值

type fruits = {
  name: string,
    // 問號代表不一定要有這個值
  weight?: number,
  isfresh: boolean
}
let banana: fruits = {
  name: 'ban',
  isfresh: true
}