/**
 * const,let などの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// //var 変数の上書き
// var1 = "var上書き";
// console.log(var1);

// //var 再宣言
// var var1 = "再宣言";
// console.log(var1);

// let var2 = "let変数";
// console.log(var2);

// //letの上書き
// var2 = "let上書き";
// console.log(var2);

// //let 再宣言できない
// let var2 = "ss";

// //const
// const var3 = "const変数";
// console.log(var3);

// //var3="const上書き";
// //const var3 = "const再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const var4 = {
//   name: "test",
//   age: 29
// };
// var4.name = "bbbb";
// var4.addr = "yokohama";
// console.log(var4);

// //constで定義したオブジェクトはプロパティの変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

/**
 * テンプレート文字
 */

// const name = "Alice";
// const age = 29;

// const msg = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(msg);

// //テンプレート文字列を用いた方法
// const msg2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(msg2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// const func1 = function func1(str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数 =>
// //アロー関数　引数1つの場合、(str)をstrとして省略の書き方
// const func2 = (str) => {
//   return str;
// };
// //return書略の書き方
// //const func2 = (str) =>str;
// console.log(func2("func2です"));

// //アロー関数：足し算
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 7));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Alex",
//   age: "29"
// };
// const msg1 = `My name is ${myProfile.name}.Age is ${myProfile.age}.`;
// console.log(msg1);

// //myProfile からname,ageを取り出す
// const { name, age } = myProfile;
// const msg2 = `Msg2:My name is ${name}.Age is ${age}.`;
// console.log(msg2);

// const myProfile = ["Alex", 29];
// const msg3 = `My name is ${myProfile[0]}.Age is ${myProfile[1]}.`;
// console.log(msg3);

// const [name, age] = myProfile;
// const msg4 = `My name is ${name}. ${age} year old.`;
// console.log(msg4);

/**
 * デフォルト値
 */
// const sayHi = (name = "guest") => console.log(`Hello ${name}`);
// sayHi("jack");
// sayHi();

/**
 * スプレッド(spread)構文
 * ...順番１つずつ
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;
// console.log(n1);
// console.log(n2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// console.log(...arr7);

// //このやり方でコピーすると、コピー元も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

//const nameArr = ["Bob", "Alex", "Jack"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

/**
 * filter
 */
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "Jack") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const var1 = 1 > 0 ? "trueです" : "falseです";
// console.log(var1);

// const num = 1300; //"1300"
// //toLocaleString　3桁区切りで金額表示
// console.log(num.toLocaleString(num));

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数字を設定してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超え" : "範囲内";
// };
// console.log(checkSum(50, 56));
// console.log(checkSum(50, 30));

/**
 * 論理演算子 && ||
 */
// const flg1 = true;
// const flg2 = false;
// if (flg1 || flg2) {
//   console.log("1 or 2 is true.");
// }
// if (flg1 && flg2) {
//   console.log("1 and 2 is true.");
// }

//　|| の左側がfalseなら、右側を返す
// const num = 100; //null
// const fee = num || "金額未設定";
// console.log(fee);

// && の左側がtrueなら、右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定された";
// console.log(fee2);
