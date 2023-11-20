/* eslint-disable no-unused-vars */
function formatName(firstName, lastName){
  return `${firstName || ""} ${lastName || ""}`;
}

// 題目根據參數firstName, lastName的值判斷是否return結果
// 若firstName, lastName為null或undefined則結果顯示""，如兩者皆為空白結果則顯示""
// 反之則顯示firstName, lastName的值(其順序為先firstName後lastName)
// 將函式重構後得上述答案顯示firstName或者(||)""；顯示lastName或者(||)""
