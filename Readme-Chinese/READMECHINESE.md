[English Version](../README.md)

在這份 reademe 檔案中，您可以找到有關此作品中的所有資訊

為了節省您的時間，我非常推薦您用以下的順序來閱讀這份 readme

(1) [觀看介紹影片](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E4%BB%8B%E7%B4%B9%E5%BD%B1%E7%89%87)

(2) [特殊的技巧](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E7%89%B9%E6%AE%8A%E7%9A%84%E5%B0%8F%E6%8A%80%E5%B7%A7)

(3) [反思](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E5%8F%8D%E6%80%9D)

&nbsp;

# 概述

1. [關於這個作品](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E9%97%9C%E6%96%BC%E9%80%99%E5%80%8B%E4%BD%9C%E5%93%81)

2. [作品的動機](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E4%BD%9C%E5%93%81%E7%9A%84%E5%8B%95%E6%A9%9F)

3. [使用的技術](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E4%BD%BF%E7%94%A8%E7%9A%84%E6%8A%80%E8%A1%93)

4. [介紹影片](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E4%BB%8B%E7%B4%B9%E5%BD%B1%E7%89%87)

5. [作品概述](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E4%BD%9C%E5%93%81%E6%A6%82%E8%BF%B0)

6. [探討細節](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E6%8E%A2%E8%A8%8E%E7%B4%B0%E7%AF%80)

   1. [格式化價錢的表示](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#1-%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%83%B9%E9%8C%A2%E7%9A%84%E8%A1%A8%E7%A4%BA)

   2. [當在製作圓餅圖時，防止使用者輸入錯誤的資料](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#2-%E7%95%B6%E5%9C%A8%E8%A3%BD%E4%BD%9C%E5%9C%93%E9%A4%85%E5%9C%96%E6%99%82%E9%98%B2%E6%AD%A2%E4%BD%BF%E7%94%A8%E8%80%85%E8%BC%B8%E5%85%A5%E9%8C%AF%E8%AA%A4%E7%9A%84%E8%B3%87%E6%96%99)

   3. [防止使用者輸入重複的類別名稱](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#3-%E9%98%B2%E6%AD%A2%E4%BD%BF%E7%94%A8%E8%80%85%E8%BC%B8%E5%85%A5%E9%87%8D%E8%A4%87%E7%9A%84%E9%A1%9E%E5%88%A5%E5%90%8D%E7%A8%B1)

7. [特殊的技巧](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E7%89%B9%E6%AE%8A%E7%9A%84%E6%8A%80%E5%B7%A7)

   1. [throttle 函數和 useCurWidth 客製的 hook](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#1-throttle-%E5%87%BD%E6%95%B8%E5%92%8C-usecurwidth-%E5%AE%A2%E8%A3%BD%E7%9A%84-hook)

   2. [mutipleArgsHelper 函數](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#2-mutipleargshelper-%E5%87%BD%E6%95%B8)

   3. [當新聞的圖片沒有提供時，主動去抓其他圖片來](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#3-%E7%95%B6%E6%96%B0%E8%81%9E%E7%9A%84%E5%9C%96%E7%89%87%E6%B2%92%E6%9C%89%E6%8F%90%E4%BE%9B%E6%99%82%E4%B8%BB%E5%8B%95%E5%8E%BB%E6%8A%93%E5%85%B6%E4%BB%96%E5%9C%96%E7%89%87%E4%BE%86)

8. [反思](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E5%8F%8D%E6%80%9D)

   - [在做這個作品時有遇到什麼主要的困難嗎？](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E5%9C%A8%E5%81%9A%E9%80%99%E5%80%8B%E4%BD%9C%E5%93%81%E6%99%82%E6%9C%89%E9%81%87%E5%88%B0%E4%BB%80%E9%BA%BC%E4%B8%BB%E8%A6%81%E7%9A%84%E5%9B%B0%E9%9B%A3%E5%97%8E)

   - [在這份作品中我從中學到了什麼？](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E5%9C%A8%E9%80%99%E4%BB%BD%E4%BD%9C%E5%93%81%E4%B8%AD%E6%88%91%E5%BE%9E%E4%B8%AD%E5%AD%B8%E5%88%B0%E4%BA%86%E4%BB%80%E9%BA%BC)

   - [這份作品中也哪些地方是可以改善的？](https://github.com/OYE0303/expense-tracker/blob/main/Readme-Chinese/READMECHINESE.md#%E9%80%99%E4%BB%BD%E4%BD%9C%E5%93%81%E4%B8%AD%E4%B9%9F%E5%93%AA%E4%BA%9B%E5%9C%B0%E6%96%B9%E6%98%AF%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%96%84%E7%9A%84)

&nbsp;

# 關於這個作品

這是一個網頁版的記帳軟體，使用者可以增加、刪除和編輯每日的支出和收入資料。這個軟體提供很多不同的功能來處理使用者輸入的資料，藉此幫助使用者用更有條理和效率的方式來管理使用者的財富。

&nbsp;

# 作品的動機

在製作這個作品之前，我就一直想要用我剛學的技術去完成一個作品。但我不單單只是想要做出一個作品那麼簡單，我更想要去解決一個現實生活中的問題。在過去的幾年裡，我一直都有記帳的習慣，不過只限於用手機的應用軟體。這在一開始似乎很好而且很方便，但我在之後開始遇到一些問題。當我儲存的資料越來越多，以及我想要更複雜的功能時，手機版的記帳軟體就變得越來越難用。除此之外，使用方便的代價就是螢幕大小的限制，更大的螢幕可以有更好的使用者體驗。基於以上問題，雖然擁有手機版的軟體很好，但如果有一個電腦版的記帳軟體會更好，因此給予了我動機，去完成一個有許多功能且可以幫助我解決日常困難的記帳軟體。

&nbsp;

# 使用的技術

- HTML
- CSS
- Javascript
- React.js
- Chart.js
- Unsplash-js
- Firebase
- API - newsdata.io
- API - Unsplash

&nbsp;

# 介紹影片

為了快速的介紹這份作品的所有特色和功能，我錄製了這份介紹影片。

**_非常推薦您可以打開字幕來觀看影片_**

**_您可以用 1.25 或 1.5 倍速來觀看影片_**

[中文版本](https://youtu.be/yC7LjlKLeZc)

[英文版本](https://youtu.be/5rNEYkm49zQ)

&nbsp;

# 作品概述

_如果您偏好看影片大於閱讀的話，我建議可以省略此部分，並直接去看影片。_

作品中總共有六個頁面，而在這邊會簡單概要的介紹每個頁面。作品大致上的排版可以分成兩個部分，在左手邊是側邊欄位，使用者可以點擊不同的圖案來切換不同的主頁，而在右手邊是對應的畫面。

## 主頁

![This is an image](/Image/home.png)
主頁的頁面可以簡單地分成兩個部分

主要部分（左手邊）

&#8594; 記錄著每日的交易資料，使用者可以藉由點選週曆的列表來切換到不同的日期

&#8594; 能藉由左右兩側的箭頭按鈕來切換到不同的週期

次要部分（右手邊）

&#8594; 上方的區塊顯示了這一整個星期的總支出、總收入以及總淨收入

&#8594; 下方的區塊顯示了兩個簡單的圖表去幫助使用者能夠用視覺化的方式來瞭解一週的支出變化

&nbsp;

## 月曆

![This is an image](/Image/calendar.png)
月曆的頁面可以簡單地分成兩個部分

主要部分（左手邊）

&#8594; 記錄一個月內的所有交易資料，粉紅色的小點代表著收入資料，藍色的小點代表著支出資料

&#8594; 點選其中一個日期來顯示那天所有的詳細資料

&#8594; 藉由左右兩側的箭頭按鈕來切換到不同的月份

次要部分（右手邊）

&#8594; 上方的區塊顯示了這一整個月份的總支出、總收入以及總淨收入

&#8594; 下方的區塊顯示了兩個簡單的圖表去幫助使用者能夠用視覺化的方式來瞭解一個月份的支出變化

&nbsp;

## 圖表

![This is an image](/Image/chart.png)
圖表的頁面可以簡單地分成兩個部分

主要部分（右手邊）

&#8594; 顯示了長條圖或是圓餅圖

次要部分（右手邊）

&#8594; 多樣化的選項來讓使用者可以客製化圖表

&nbsp;

## 搜尋

![This is an image](/Image/search.png)
搜尋的頁面可以簡單地分成兩個部分

主要部分（右手邊）

&#8594; 顯示了所有的支出和收入資料

&#8594; 藉由不同的按鈕來排序資料，也可以輸入備註來搜尋特定的資料

次要部分（右手邊）

&#8594; 點擊多選匡來篩選資料

&nbsp;

## 帳戶

![This is an image](/Image/account.png)
帳戶的頁面可以簡單地分成兩個部分

主要部分（左手邊）

&#8594; 三個小區塊顯示了整個帳戶的總支出、收入和淨收入

&#8594; 下方圖表顯示了不同時間維度的累積淨收入

次要部分（右手邊）

&#8594; 上方區塊顯示了近期的財經新聞

&#8594; 下方區塊顯示三個簡單的圖表去幫助使用者了解到個人的消費習慣

&nbsp;

## 設定

帳戶的頁面有三個小的次頁面

### 帳戶

![This is an image](/Image/setting-account.png)

&#8594; 顯示個人資料，像是名字和信箱

### 外觀

![This is an image](/Image/setting-appearance.png)

&#8594; 切換成深色模式或淺色模式

&#8594; 此作品是以深色模式作為預設

### 類別

![This is an image](/Image/setting-category.png)

&#8594; 不僅顯示了所有的主類別和次類別，也能讓使用者增加和刪除類別

&nbsp;

# 探討細節

_如果您偏好看影片大於閱讀的話，我建議可以省略此部分，並直接去看影片。_

在這邊會說明此作品中的三個細節

## 1. 格式化價錢的表示

為了提供一個清楚貨幣的表示，每當超過三位數時，會使用”,”來區分。例如，不要單純的顯示$2930，而是更清楚的顯示$2,930。此外，當有一個極度高的價格時，如果完整的顯示此價格會變得很冗長，因此我用英文字母來表示高價錢。例如，1,000,000 = 1M (百萬), 1,000,000,000 = 1B(十億), 1,000,000,000,000 = 1T(兆)，所以如果顯示 23B，而不是顯示完整的 23,000,000,000，會更加的清楚。這個細節讓使用者可以輕易的辨認正確的價錢，同時也能維持使用者介面的格局。

&nbsp;

## 2. 當在製作圓餅圖時，防止使用者輸入錯誤的資料

當要製作圓餅圖時，使用者必須輸入起始日和終止日，但是終止日早於起始日是不太合理的事。例如，如果使用者選擇 2021-09-12 當作起始日時，必須確保使用者只能選擇起始日之後的日期當作終止日，也就是 2021-09-13 之後。這個細節能夠幫助使用者輸入正確的資料，因為輸入錯誤的資料很有可能會導致錯誤的產生。

&nbsp;

## 3. 防止使用者輸入重複的類別名稱

在此作品中，使用者可以新增類別，但有兩個重複名稱的類別是不太合裡的事情。為了避免發生，當使用者嘗試輸入重複的類別名稱時，按鈕會喪失功能，同時會顯示警告的字樣來告知使用者。

&nbsp;

# 特殊的技巧

在此我想要說明三個在作品中使用的小技巧

## 1. throttle 函數和 useCurWidth 客製的 hook

當我嘗試在讓這個作品的排版可以符合每種大小的裝置時，我遇到一個問題，也就是當使用者開始改變視窗大小時，我想要知道視窗的大小。我的第一個直覺就是單純的在 window 上加 event listener，同時用 `useState` 去抓住每個視窗的大小。這個方法是可行的，然而，這樣會造成程式非常的沒有效率，因為當使用者持續不斷地改變視窗大小時，會需要不斷的重新渲染整個元件函數（component function）。最壞的情況是整個元件函數可能會需要在短短的幾秒鐘裡重新渲染一千次。為了解決這個問題，我需要一個函數來幫助我確保只會在特定的時間內觸發函數。於是，我開始在上網尋找解答，然後發現有一個函數正好可以解決這個問題，那就是 `throttle` 函數。

```Javascript
function throttle(func, delay) {
  let wait = false;
  let latestArg = null;

  function timeoutFunc() {
    if (!latestArg) {
      wait = false;
    } else {
      func.call(this, ...latestArg);
      latestArg = null;
      setTimeout(timeoutFunc, delay);
    }
  }

  return function (...args) {
    if (wait) {
      latestArg = args;
      return;
    }

    func.call(this, ...args);
    wait = true;

    setTimeout(timeoutFunc, delay);
  };
}

export default throttle;
```

雖然這個函數並不是我自己寫的，但我有確實讀過程式碼，並嘗試了解此函數背後的機制。在讀過後發現這個函數包含了很多重要的觀念，像是 high order function, spread operator, rest operator, recursion, asynchronous, and closure。因為不同的元件函數都會需要視窗的大小，因此我建立一個客製化的 hook 來處理所有的運算和邏輯，只要確保這個客製化的 hook 最終能回傳正確的視窗大小即可。

```Javascript
import { useState, useEffect } from "react";
import throttle from "../Throttle/throttle";

function useCurWidth() {
  const [curWidth, setCurWidth] = useState(window.innerWidth);

  useEffect(() => {
    const detectWindowWidth = throttle(function handleResize() {
      setCurWidth(window.innerWidth);
    }, 300);

    window.addEventListener("resize", detectWindowWidth);

    return () => window.removeEventListener("resize", detectWindowWidth);
  }, []);

  return curWidth;
}

export default useCurWidth;
```

這個客製化的 hook 叫做 `useCurWidth`，它不需要任何的參數，但始終回傳正確的視窗大小。我使用 `useEffect` hook 因為在 window 上加 event listener 會造成 side effect。此外，由於 `throttle` 函數，當視窗大小不斷的改變時，`handleResize` 函數只會在 300 毫秒後被觸發。

&nbsp;

## 2. mutipleArgsHelper 函數

因為這是一個記帳軟體的作品，所以會有很多地方會需要處理到字串的運算。例如，我想要格式化價錢的表示，然而，同時有支出、收入和淨收入需要同時被格式化，而這是我一開始所寫的程式碼。

```Javascript
const income = formatMoney(props.income);
const expense = formatMoney(props.expense);
const netIncome = formatMoney(props.netIncome);
```

這個沒問題，但是程式碼有點冗長。更重要的事，這是用聲明式(imperative)的方式在寫程式，我們告示電腦「如何」做一步一步的做運算。由於我是用 React 來做這個作品，這會是一個好的時機點用命令式(declarative)的方式來寫程式碼，而這個方式正式 functional programming 的重要觀念之一。不像是告訴電腦「如何」做，而是告訴電腦我們想要「什麼」樣的結果，所以我寫了這個 mutipleArgsHelper 函數。

```Javascript
function mutipleArgsHelper(fn, ...args) {
  return args.map(fn);
}

export default mutipleArgsHelper;
```

這個函數相當簡單。第一個參數叫做 `fn`，而後面的參數叫做 `args`。用 `...args` 的原因是因為我不知道有多少的參數會被丟入這個函數，而且不提前去預設參數的數量可以讓這個函數變得可重複使用。所以我用 rest operator，讓之後所有的參數變成一個 array，然後用 `map` 函數對每個參數做 `fn` 函數的運算。由於 `fn` 是一個只接受一個參數的一元（unary）函數，所以我可以用 _point-free_ 的方式來寫程式碼。

接著我應用這個函數在我需要讓程式碼更簡潔的地方

```Javascript
const [income, expense, netIncome] = mutipleArgsHelper(
    formatMoney,
    props.income,
    props.expense,
    props.netIncome
  )
```

&nbsp;

## 3. 當新聞的圖片沒有提供時，主動去抓其他圖片來

在帳戶的頁面中，有一個小區塊來顯示近期的財經新聞。為了做到這件事，我找到了 newsdata.io API。這是其中一個可以讓我用類別和語言去尋找新聞的 API。但是它有一個缺點，也就是有些新聞沒有包含圖片。為了有更好的使用者體驗，當新聞沒有提供圖片時，我運用了 unsplash API 去抓相關的圖片。

```Javascript
async function FetchImage(title, errHandler) {
  try {
    const result = await api.search.getPhotos({ query: title });

    return getImgUrl(result.response);
  } catch (err) {
    errHandler(true);
  }
}
```

我在 Unsplash 的官方網站閱讀了文檔以及範例，接著自己寫出這個函數。這個函數相對簡單，它接收一個參數叫 title，作為搜尋圖片的關鍵字，以及 `errHandler`，用來處理錯誤。因為它回傳的結果是用複雜的資料結構包著，所以我寫了另一個幫助函數 `getImgUrl` 來幫助我處理所有的邏輯和運算，確保他最後回傳圖案的 url 即可。

&nbsp;

# 反思

## 在做這個作品時有遇到什麼主要的困難嗎？

在做作品時，有兩個主要的困難。

### 1. 資料的類型

第當程式碼的規模越來越大時，會越來越難知道一個變數到底存著什麼類型的值(value)。例如，我有一個 helper 函數在一個檔案，然後我用這個 helper 函數在另一個元件函數，接著把這個函數所產出的值再傳入不同的 child component。很快的，會變得很難輕易地瞭解一個變數到底存著什麼類型的值。因為 Javascript 是一個 untyped 或 dynamically typed 的語言，當要宣告一個變數時，Javascript 的開發者不需要事先告知變數是存著什麼類型的值。這似乎對初學者來說能夠更容易的上手這語言，但是當我這做這個作品時，這樣的方便逐漸變成痛苦。為了要提醒我自己一個變數存著什麼類型的值，我必須在變數的名稱後面加上 "str”, “num”, “arr”, or “obj”，所以我才不會忘記變數存著什麼類型的值。但這樣做會讓程式碼變得很雜亂，以及造成更多淺在的錯誤。

&nbsp;

### 2. 檢查程式碼（code review）

在完成這個作品後，我嘗試著自己檢查程式碼，因為當初一開始在寫程式碼時，並沒有把程式碼寫得非常乾淨以及沒有用一個完整的組織性架構去寫程式碼。當我說檢查程式碼時，我並不是指專業的檢查程式碼，我只是單純的指要讓程式碼更乾淨以及更有架構。由於當我一開始寫程式碼時就沒有注重維護性(maintenance)，所以檢查程式碼的過程非常痛苦。因此，當寫完作品後才開始注重維護性已經為時已晚，即使我竭盡所能的去做程式碼檢查，我仍然無法讓每行程式碼都非常乾淨。這個經驗教會了我在開發一個應用軟體前，思考維護性是一件非常重要的事。

&nbsp;

## 在這份作品中我從中學到了什麼？

在開發這個作品的過程中，我學習到了三件對我來說非常寶貴的事。

### 1. Big O notation

Big O notation 是一個基礎，卻又影響軟體業深遠的概念。在做這個作品之前，我只有在解決技術性的程式碼問題(technical coding problems)時才會用到這個概念。但我開始把這樣的觀念使用到其他地方。當我在作品中寫一些很複雜的函數時，我會開始思考這個函數的時間複雜度。

例如，當我在寫一個很複雜的函數時，我會先問自己

- 這個函數的時間複雜度是什麼？

然後開始回答這個問題，接著繼續問自己...

- 這個函數的時間複雜度是 O(n ^ 2)，我可以改進這個函數，使它變成 O(n)嗎？

接著繼續嘗試著回答這個問題...

當資料的規模很小時，思考時間複雜度似乎並不是很重要，但是其實不然，因為我們必須假設應用軟體接受的資料是很龐大的，同時也要確保我們的程式碼能夠保持一定的效率。

&nbsp;

### 2. 函數語言程式設計(functional programming)

我瞭解更多了有關函數語言程式設計的重要性。在學習 React 之前，我花了一段時間學習函數語言程式設計。然而，學習的過程中卻是非常的痛苦，因為函數語言程式設計是用一個完全不同的思維去看待程式。即使過程痛苦，我仍然學習到了基礎的概念。在完成這份作品後，我有點瞭解到為什麼函數語言程式設計注重在 pure function, side effects, and immutability 等等之類的概念。在我看來，這些概念都是為了要避免可能出現的錯誤，以及讓程式碼變得更好維護。在一開始就注重這些小細節似乎有點瑣碎而且沒有必要，但是當作品的規模越來越大時，函數語言程式設計的好處就慢慢地顯現出來。因此，在一開始就注重在函數語言程式設計的這些觀念是非常重要的，讓程式碼可以在規模變大時仍然很好的維護。

&nbsp;

### 3. 維護性(maintenance)

我開始了解到維護性的重要。在做這項作品時，我就有聽過維護性的重要，但我一直無法理解為什麼。然而，隨著在做這項作品的過程中，我開始了解到維護性的重要。當我一開始在寫程式碼時，我只注重在能否可以寫完作品的功能，卻沒有注重在功能背後的程式碼的架構。即使使用者介面看起來沒什麼問題，但背後的程式碼卻是非常的雜亂，而且還必須花很多的時間只為了找一個很簡單的錯誤。在完成作品後，我開始做檢查程式碼，我讀著每一行程式碼，然後問自己

- 這個變數的名稱有充分的解釋自己嗎？

- 這部分的程式碼好像有重複，我可以擷取這部分的程式碼然後建立另一個函數去避免重複性嗎？

- 這個元件函數好像會使用在不同的地方，我可以建立另一個元件函數來讓它可以重複使用嗎？

- 這個部分的程式碼是乾淨且好讀的嗎？

我嘗試著回答這些問題，並且重新整理程式碼。如果我沒有在一開始嘗試著讓程式碼變得更好維護，那就會變得更難找到錯誤，以及讓瞭解過去自己所寫的程式碼，更重要的是，其他開發者在第一時間看我的程式碼時，也不會瞭解我所寫的程式碼。在軟體的領域，自己獨自從頭開發一個應用軟體是很少見的。相反地，開發者是互相分工合作來做軟體開發。因此，寫出讓其他開發者也能充分瞭解的程式碼是非常重要的。

&nbsp;

## 這份作品中也哪些地方是可以改善的？

即使我想要讓這份作品變得像一個現實生活的應用軟體，作品中仍然有很多不足的地方需要被改進。由於我並沒有太充足的知識，以及時間的限制下，我並沒有讓這份作品變得很完美，但我會仍然列出四個不足的地方，可以在未來去做補足

### 1. 後端

現實生活中的應用軟體應該會打造一個屬於自己的後端系統，而不是單純的使用 firebase。然而，對於只會前端技術的我，打造一個後端系統已經遠超出我的能力範圍內。如果我未來學習到後端相關的知識，我絕對會讓這個作品有屬於自己的後端。

&nbsp;

### 2. Accessibility

在網頁的應用裡，accessibility 是非常重要的一環，一個厲害的網站卻沒有支援 accessibility 是不及格的。這在份作品中，我只有做到三件事支援基礎的 accessibility，像是使用語意性(semantic)的 HTML、在沒有內建 focus 的互動標籤上加上 tabindex 和 aria-label。即使我做了這些，仍然沒有完美的支援 accessibility。Accessibility 是一個非常廣的領域，在短時間就能學會並且實際應用是非常困難的，如果我未來有時間，並且好好深入地學習，我一定會將所學運用在這份作品上。

&nbsp;

### 3. 效率(Performance)

效率(performance)也是另一個在網頁軟體裡非常重要的課題，特別是當資料越來越多時。然而，因為時間的限制，我也沒辦法學習有關效率的知識，但當我學習後，我也會嘗試著改善這項作品的效率。

&nbsp;

### 4. 測試(Testing)

當網頁應用軟體變得越來越複雜時，測試在前端領域的重要性就顯得越來越高。然而，由於時間上的限制，我還沒學到測試的領域。但當我學習後，我會嘗試著把它加進去這個作品中。
