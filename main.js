
let pageCount;
let nextPageCount;
let page1Content = ["קפה הוא שם כולל למספר משקאות חמים וקרים, המופקים מפולי צמח הקפה.", "התמציות מופקות מן הפולים על ידי קלייתם וטחינתם של הפולים,", "וחליטה או בישול של האבקה המתקבלת במים.", "משקאות הקפה ידועים כמעוררים, בעיקר בגלל הקפאין המצוי בפולים."]
let page2Content = ["קפה הוא אחד המשקאות הפופולריים ביותר בעולם.\nמדובר במשקה שבכל שנה צורכים ממנו תושבי כדור הארץ לא פחות מ-400 מיליארד כוסות.", "המשקה אהוב במיוחד בארצות הברית- הצרכנית הגדולה ביותר בעולם של קפה. 350 מיליון כוסות קפה נלגמות בארצות הברית מדי יום."]
let page3Content = ["הסברה המרכזית היא כי מקור השם הוא במילה הערבית ״קהוה״. פירושה המקורי של המילה היה יין, אך המילה קיבלה משמעות חדשה עם השנים - קפה.", "קיימת סברה לפיה מקור המילה קפה הוא מהשורש ״כהה״ בעברית.", "מקור אפשרי נוסף לשם קפה הוא בממלכת קאפה שבאתיופיה, שהיא כנראה מקורו של צמח הקפה."]
let page3Contentall = [
    {
       "line1": "הסברה המרכזית היא כי מקור השם הוא במילה הערבית ״קהוה״. פירושה המקורי של המילה היה יין, אך המילה קיבלה משמעות חדשה עם השנים - קפה.", 
       "line2": "קיימת סברה לפיה מקור המילה קפה הוא מהשורש ״כהה״ בעברית.", 
       "line3": "מקור אפשרי נוסף לשם קפה הוא בממלכת קאפה שבאתיופיה, שהיא כנראה מקורו של צמח הקפה."
    },
    {
        "content1": "האגדה הנפוצה ביותר על גילוי הקפה מתרחשת בשנת 800 לפני הספירה ומספרת על רועה עיזים אתיופי בשם חאלדי. העיזים של חאלדי בדרך כלל רגועות ונינוחות. יום אחד, חאלדי הבחין שכשהעיזים שלו אוכלות מגרגירי יער אדומים של שיח מסוים, הן הופכות לאנרגטיות וחסרות מנוחה. חאלדי ניסה בעצמו לאכול את הגרגירים הללו, וכאשר טעם מהם הרגיש את ההשפעה בעצמו.",
        "content2": "נרגש מהתגלית המוזרה, הוא הביא כמה גרגירים לנזיר בכפר שלו והסביר לו את שהתרחש. הנזיר קבע כי הגרגירים הם ״עבודת השטן״ והשליך אותם לאש הסמוכה. כך למעשה התרחשה קליית הקפה הראשונה.",
        "content3": "זמן קצר לאחר מכן, עלתה ארומה עוצמתית מן האש ומלאה את החדר בו נכחו חאלדי והנזיר. על מנת לשמר את הארומה, הנזיר הורה להוציא את הגרגירים מן האש ולשפוך עליהם מים, וכך נוצרה כוס הקפה הראשונה."
    },
    {
        "answer1": "חאלידי רועה הצאן מבחין כי הכבשים שלו אנרגטיות",
        "answer2": "חאלידי מבין כי הכבשים אכלו מפרי אדום",
        "answer3": "חאלידי טועם מהפרי וחש אנרגטי",
        "answer4": "חאלידי מראה את הפרי לנזיר שלו",
        "answer5": "הנזיר זורק את הפולים לאש",
        "answer6": "הנזיר מורה להוציא את הפולים מהאש ולשפוך עליהם מים"
    }, 
    {
      "title1": "התפשטות הקפה בעולם מתחילה מאתיופיה",
      "title2": "האתיופים מתחילים למכור את פולי הקפה לסוחרים ערביים שמפיצים את הפולים במדינות ערב של העולם העתיק.",
      "title3": "בתימן עודדו שתיית קפה מרובה על מנת לצמצם את תופעת לעיסת הגת.",
      "title4": "בארצות ערב חכמי הדת ניסו למנוע תחילה מהמאמינים לשתות קפה, אך ללא הצלחה.",
      "title5": "בתי הקפה הראשונים בעולם הוקמו במכה. המשקה התפשט ברחבי מדינות ערב אך היה מוכר במיוחד במקומות בהם היו נהוגים משחקי קוביות, רכילויות, ריקודים ושירה.",
      "title6": "בשלב מסוים בתי הקפה נהפכו במהרה למרכזים פוליטיים פעילים נגד הממשל ובשל כך חלק מהם הוצאו אל מחוץ לחוק.",
      "title7": "למדינות ערב הייתה מדיניות חד משמעית- איסור ייצוא פולי קפה בכדי שהקפה לא יגדל בשום מקום אחר בעולם ויישאר בלעדי לאזורם.",
      "title8": "צעד זה יצר כמיהה למשקה ופתח במרוץ להשגת זרעים.",
      "title9": "הסברה היא שאיטליה היא הארץ האירופאית הראשונה שהצליחה להשיג פולי קפה, כנראה על ידי סוחרים ונציאנים שביקרו במזרח התיכון.",
      "title10": "מאוחר יותר, במאה ה-16 וה-17, גם הולנד וצרפת הצליחו להשיג אותו.",
      "title11": "במאה ה-18 פולי הקפה הגיעו גם לאמריקה, כאשר סוחר צרפתי הביא עימו כמה שתילים לאחד מהאיים הקריביים.",
      "title12": "באדמה הפוריה ובאקלים הטרופי הצמחים התפתחו ושגשגו היטב, ותוך שנים אחדות השתילים הבודדים הפכו למטעים רחבים.",
      "title13": "כובשי אמריקה האירופאים הביאו עימם זרעים של צמח הקפה לאזורים שונים בדרום אמריקה, וכך הם החלו את חקלאות הקפה.",
      "title14": "במהרה הפכו ברזיל וקולומביה למעצמות קפה עולמיות",
    }]

let page4Content = ["האגדה הנפוצה ביותר על גילוי הקפה מתרחשת בשנת 800 לפני הספירה ומספרת על רועה עיזים אתיופי בשם חאלדי.\n\n\n\n\n\n\n\n\n העיזים של חאלדי בדרך כלל רגועות ונינוחות.\n יום אחד, חאלדי הבחין שכשהעיזים שלו אוכלות מגרגירי יער אדומים של שיח מסוים, הן הופכות לאנרגטיות וחסרות מנוחה.", ".חאלדי ניסה בעצמו לאכול את הגרגירים הללו, וכאשר טעם מהם הרגיש את ההשפעה בעצמו. נרגש מהתגלית המוזרה, הוא הביא כמה גרגירים לנזיר בכפר שלו והסביר לו את שהתרחש. הנזיר קבע כי הגרגירים הם ״עבודת השטן״ והשליך אותם לאש הסמוכה. כך למעשה התרחשה קליית הקפה הראשונה", "זמן קצר לאחר מכן, עלתה ארומה עוצמתית מן האש ומלאה את החדר בו נכחו חאלדי והנזיר. על מנת לשמר את הארומה, הנזיר הורה להוציא את הגרגירים מן האש ולשפוך עליהם מים, וכך נוצרה כוס הקפה הראשונה."]

let page6Content = ["התפשטות הקפה בעולם מתחילה מאתיופיה", "האתיופים מתחילים למכור את פולי הקפה לסוחרים ערביים שמפיצים את הפולים במדינות ערב של העולם העתיק.", "בתימן עודדו שתיית קפה מרובה על מנת לצמצם את תופעת לעיסת הגת.", "בארצות ערב חכמי הדת ניסו למנוע תחילה מהמאמינים לשתות קפה, אך ללא הצלחה.", "בתי הקפה הראשונים בעולם הוקמו במכה. המשקה התפשט ברחבי מדינות ערב אך היה מוכר במיוחד במקומות בהם היו נהוגים משחקי קוביות, רכילויות, ריקודים ושירה.", "בשלב מסוים בתי הקפה נהפכו במהרה למרכזים פוליטיים פעילים נגד הממשל ובשל כך חלק מהם הוצאו אל מחוץ לחוק.", "למדינות ערב הייתה מדיניות חד משמעית- איסור ייצוא פולי קפה בכדי שהקפה לא יגדל בשום מקום אחר בעולם ויישאר בלעדי לאזורם.", "צעד זה יצר כמיהה למשקה ופתח במרוץ להשגת זרעים.", "הסברה היא שאיטליה היא הארץ האירופאית הראשונה שהצליחה להשיג פולי קפה, כנראה על ידי סוחרים ונציאנים שביקרו במזרח התיכון.", "מאוחר יותר, במאה ה-16 וה-17, גם הולנד וצרפת הצליחו להשיג אותו.", "במאה ה-18 פולי הקפה הגיעו גם לאמריקה, כאשר סוחר צרפתי הביא עימו כמה שתילים לאחד מהאיים הקריביים.", "באדמה הפוריה ובאקלים הטרופי הצמחים התפתחו ושגשגו היטב, ותוך שנים אחדות השתילים הבודדים הפכו למטעים רחבים.", "כובשי אמריקה האירופאים הביאו עימם זרעים של צמח הקפה לאזורים שונים בדרום אמריקה, וכך הם החלו את חקלאות הקפה.", "במהרה הפכו ברזיל וקולומביה למעצמות קפה עולמיות"]

// book page variables
let idArrayPage1 = ["1", "2", "3", "4"]
let si;
let z;
let right;
let page;
let addNext;

// scroll page variables
var items;
let cardsClass; 

window.addEventListener("load", () => {
    pageCount = 0;
    nextPageCount = 0;
    // document.getElementById("start-button").addEventListener("click", page1);
    document.addEventListener("click", changePages);
    console.log(pageCount);

    // book variables
    right = document.getElementsByClassName("right");
    si = right.length;
    z=1;
    page = 0;
    add = 0;
});

var page1 = () => {
    console.log("g")
    idArrayPage1 = ["1", "2", "3", "4"]
    document.getElementById("arrows").style.visibility = "visible";
    console.log("g")
    addContent(page1Content);
}

var page2 = () => {
    idArrayPage1 = ["5", "6"]
    addContent(page2Content);
}

var page3 = () => {
    idArrayPage1 = ["7", "8", "9"]
    for (let i = 1; i <= 3; i++) {
        const icon = document.createElement("img");
        document.getElementById("icon-page3").appendChild(icon);
        icon.setAttribute("src", `assets/media/historyPage/icon${i}.png`);
        icon.setAttribute("style", `padding-bottom: 4rem;`)
        console.log(document.getElementById("icon-page3"))
    }
    // addContent(page3Content);
}

var page4 = () => {
    // turnRight();
    // turnLeft();
    idArrayPage1 = ["9", "10", "11"]
    if (page !== 3 && add === 0) {
        document.getElementById("next-page").style.visibility = "hidden";
    } else {
        document.getElementById("next-page").style.visibility = "visible";
        add = 1;
    }
    
    // addContent(page4Content)
    for (let i = 1; i <=3; i++) {
        document.getElementById(`title${idArrayPage1[i - 1]}`).innerText = page4Content[i - 1];
    }
    if (page !== 0) {
        document.getElementById("previous").style.display = "block";
    } else {
        document.getElementById("previous").style.display = "none";
    }
    
    if (page !== 3) {
        document.getElementById("next").style.display = "block";
    } else {
        document.getElementById("next").style.display = "none";
    }

}

var page5 = () => {
    console.log("g");
}

var page6 = () => {
    for (let i = 0; i < 14; i++) {
       
        if (cardsClass === undefined || cardsClass === "side-left") {
            cardsClass = "side-right"
        } else {
            cardsClass = "side-left"
        }
        // let time = document.createElement("time");
        // time.innerText = objects[0].time;
        // let div = document.createElement("div");
        // div.classList.add("discovery");
        // document.getElementById(`${i + 1}`).classList.add(`${cardsClass}`);
        let listItem = document.createElement("li");
        document.getElementById("item").appendChild(listItem);
        let div = document.createElement("div");
        div.setAttribute("id", `${i + 1}`);
        listItem.appendChild(div);
        let icon = document.createElement("img");
        icon.setAttribute("src", `assets/media/historyPage/icons/${i + 1}.png`)
        icon.classList.add("icon1");
        let h1 = document.createElement("h1");
        h1.innerText = page6Content[i];
        let p = document.createElement("p");
        document.getElementById(`${i + 1}`).classList.add(`${cardsClass}`);
        document.getElementById(`${i + 1}`).append(h1, p, icon);
        // p.innerText = objects[0].p;
        // div.append(h1, p);
    }

    console.log(document.getElementById("scroll"))

    items = document.querySelectorAll(".timeline li");
    window.addEventListener("scroll", callbackFunc);
    callbackFunc();
}

// scroll page functions
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    console.log("hello")
    for (var i = 0; i < items.length; i++) {
        console.log("entered for condition")
      if (isElementInViewport(items[i])) {
        console.log("entered first if condition")
        if(!items[i].classList.contains("in-view")){
            console.log("entered second if condition")
          items[i].classList.add("in-view");
        }
      } else if(items[i].classList.contains("in-view")) {
        console.log("entered else if condition")
          items[i].classList.remove("in-view");
      }
    }
}


//book page functions
function turnRight()
    {
       
        if(si>=1){
            si--;
        }
        else{
            si=right.length-1;
            function sttmot(i){
                setTimeout(function(){right[i].style.zIndex="auto";},300);
            }
            for(var i=0;i<right.length;i++){
                right[i].className="right";
                sttmot(i);
                z=1;
            }
        }
        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex=z;
        page++;
    }
    function turnLeft()
    {
        if(si<right.length){
            si++;
        }
        else{
            si=1;
            for(var i=right.length-1;i>0;i--){
                right[i].classList.add("flip");
                right[i].style.zIndex=right.length+1-i;
            }
        }
        right[si-1].className="right";
        setTimeout(function(){right[si-1].style.zIndex="auto";},350);
        page--;
    }

let changePages = (event) => {
    document.getElementById(`page${pageCount}`).style.display = "none";
    if (event.target.id === "next-page" || event.target.id === "start-button") {
        pageCount++;
    } else if (event.target.id === "previous-page") {
        pageCount--;
    }
    document.getElementById(`page${pageCount}`).style.display = "block";
    window[`page${pageCount}`]();
}

let addContent = (array) => {
    for (let i = 1; i <= array.length; i++) {
        const content = document.createElement("div");
        document.getElementById(`content-page${pageCount}`).appendChild(content);
        console.log(document.getElementById(`content-page${pageCount}`));
        content.innerText = array[i - 1];
        content.setAttribute("id", `title${idArrayPage1[i - 1]}`);
    }
}

// let pages = () => {
//     document.getElementById("arrows").style.visibility = "visible";
//     document.getElementById(`page${pageCount}`).style.display = "none";
//     pageCount++;
//     document.getElementById(`page${pageCount}`).style.display = "block"; 
//     page1();
//     document.getElementById("previous-page").addEventListener("click", nextPage );
//     document.getElementById("next-page").addEventListener("click", nextPage);
// }

// let nextPage = (event) => {
//     console.log(event.currentTarget)
//     let changeCount;
//     if (nextPageCount > 2 || nextPageCount === 0) {
//         changeCount = [pageCount, "subject"] ;
//     } else {
//         changeCount = [nextPageCount, "page"];
//     }

//     console.log(changeCount[0]);
    
//     document.getElementById(`${changeCount[1]}${changeCount[0]}`).style.display = "none";
//     if (event.target.id === "next-page") {
//         changeCount[0]++;
//     } else if (event.target.id === "previous-page") {
//         changeCount[0]--;
//         if (pageCount === 1) {
//             document.getElementById("arrows").style.visibility = "hidden";
//         }
//     }
//     document.getElementById(`${changeCount[1]}${changeCount[0]}`).style.display = "block";  
//     page1();
// }

// let page1 = () => {

// }

// let addsTitle = () => {
//     let array;
//     if (pageCount === 1) {
//         array = page1Content; 
//     } else if (pageCount === 2) {
//         array = page2Content;
//     }

//     for (let i = 1; i <= array.length; i++) {
//         const content = document.createElement("div");
//         document.getElementById(`content-page${pageCount}`).appendChild(content);
//         console.log(document.getElementById(`content-page${pageCount}`));
//         content.innerText = array[i - 1];
//         content.setAttribute("id", `title${i}`);
//     }

    
    // else {
    //     array = 
    //     for (let i = 1; i <= 4; i++) {
    //         const content = document.createElement("div");
    //         document.getElementById("content-page1").appendChild(content);
    //         console.log(document.getElementById("content-page1"));
    //         content.innerText = page1Content[i - 1];
    //         content.setAttribute("id", `title${i}`);
    //         // document.getElementById(`title${i}`).innerText = page2Content[i - 1];
    //     }
    //     for (let i = 1; i <= 2; i++) {
    //         const content = document.createElement("div")
    //         document.getElementById|("page2").appendChild(content)
    //     }
    // }
// }
