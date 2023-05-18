"use strict";
// enum.ts 枚舉 
// 主要拿來管理多個同類型同型別的常數(不可修改)
// 編譯後產生查找物件
// 若沒有賦值,則會自動從 0 遞增
var requestStatusCodes;
(function (requestStatusCodes) {
    requestStatusCodes[requestStatusCodes["error"] = 0] = "error";
    requestStatusCodes[requestStatusCodes["success"] = 1] = "success";
})(requestStatusCodes || (requestStatusCodes = {}));
// 等同以下
// enum requestStatusCodes {
//   error = 0,
//   success = 1,
// }
// 當為number時可以反向查詢
console.log(requestStatusCodes.error);
console.log(requestStatusCodes[0]);
var requestWrongCodes;
(function (requestWrongCodes) {
    requestWrongCodes["missingParameter"] = "A";
    requestWrongCodes["wrongParameter"] = "B";
    requestWrongCodes["invalidToken"] = "C";
})(requestWrongCodes || (requestWrongCodes = {}));
console.log(requestWrongCodes.wrongParameter); // 'B'
console.log("DOWN" /* Direction.Down */);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxjQUFjO0FBQ2QsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsSUFBSyxrQkFHSjtBQUhELFdBQUssa0JBQWtCO0lBQ3JCLDZEQUFLLENBQUE7SUFDTCxpRUFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUhJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFHdEI7QUFDRCxPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsSUFBSTtBQUNKLGtCQUFrQjtBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVuQyxJQUFLLGlCQUlKO0FBSkQsV0FBSyxpQkFBaUI7SUFDcEIsMkNBQXNCLENBQUE7SUFDdEIseUNBQW9CLENBQUE7SUFDcEIsdUNBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpJLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJckI7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUMsTUFBTTtBQVdwRCxPQUFPLENBQUMsR0FBRyw2QkFBZ0IsQ0FBQyJ9