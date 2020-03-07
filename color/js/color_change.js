
function colorChange() {

    // ランダムな文字列を作成　レイアウトのバリエーションの数を設定
    let randomNum = Math.floor(Math.random() * 6);

    // bodyタグを取得・指定し、変数に代入
    let bodyTag = document.getElementsByTagName('body');
    let bodyTagN = bodyTag[0];

    // IDの名称を決定
    let hoge = 'style' + randomNum;

    // setAttributeでIDに決定した名称を設定
    bodyTagN.setAttribute("id",hoge);

    // IDを取得、変数に代入
    let colorL = document.getElementsByClassName('color1');
    let colorR = document.getElementsByClassName('color2');

    // ランダムな0～255までのRGB値を生成、変数に代入
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let leftRGB = 'rgb(' + red + ',' + green + ',' + blue + ')';

    // 補色の計算　RGB値の最大値と最小値を足して、その値から各RGB値を個別に引く
    let maxData = Math.max(red, green, blue);
    let minData = Math.min(red, green, blue);
    let andNum = maxData + minData;

    let red2 = andNum - red;
    let green2 = andNum - green;
    let blue2 = andNum - blue;
    let rightRGB = 'rgb(' + red2 + ',' + green2 + ',' + blue2 + ')';

    // ドキュメントの中の指定クラス全てに変数に代入したRGB値をあてはめる
    for (i = 0; i < colorL.length; i++) {
        colorL[i].style.backgroundColor = leftRGB;
    }
    for (k = 0; k < colorR.length; k++) {
        colorR[k].style.backgroundColor = rightRGB;
    }
}

const event = document.getElementById('button');
event.addEventListener('click', colorChange, false);
