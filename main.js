
let pageCount;
let nextPageCount;
let page1Content = ["קפה הוא שם כולל למספר משקאות חמים וקרים, המופקים מפולי צמח הקפה.", "התמציות מופקות מן הפולים על ידי קלייתם וטחינתם של הפולים,", "וחליטה או בישול של האבקה המתקבלת במים.", "משקאות הקפה ידועים כמעוררים, בעיקר בגלל הקפאין המצוי בפולים."];
let page2Content = ["קפה הוא אחד המשקאות הפופולריים ביותר בעולם.\nמדובר במשקה שבכל שנה צורכים ממנו תושבי כדור הארץ לא פחות מ-400 מיליארד כוסות.", "המשקה אהוב במיוחד בארצות הברית- הצרכנית הגדולה ביותר בעולם של קפה. 350 מיליון כוסות קפה נלגמות בארצות הברית מדי יום."];
let page3Content = ["הסברה המרכזית היא כי מקור השם הוא במילה הערבית ״קהוה״. פירושה המקורי של המילה היה יין, אך המילה קיבלה משמעות חדשה עם השנים - קפה.", "קיימת סברה לפיה מקור המילה קפה הוא מהשורש ״כהה״ בעברית.", "מקור אפשרי נוסף לשם קפה הוא בממלכת קאפה שבאתיופיה, שהיא כנראה מקורו של צמח הקפה."];
let page3Contentall = [
    {
       "line1": "הסברה המרכזית היא כי מקור השם הוא במילה הערבית ״קהוה״. פירושה המקורי של המילה היה יין, אך המילה קיבלה משמעות חדשה עם השנים - קפה.", 
       "line2": "קיימת סברה לפיה מקור המילה קפה הוא מהשורש ״כהה״ בעברית.", 
       "line3": "מקור אפשרי נוסף לשם קפה הוא בממלכת קאפה שבאתיופיה, שהיא כנראה מקורו של צמח הקפה."
    },
    {
        "content1": "האגדה הנפוצה ביותר על גילוי הקפה מתרחשת בשנת 800 לפני הספירה ומספרת על רועה עיזים אתיופי בשם חאלדי. העיזים של חאלדי בדרך כלל רגועות ונינוחות. יום אחד, חאלדי הבחין שכשהעיזים שלו אוכלות מגרגירי יער אדומים של שיח מסוים, הן הופכות לאנרגטיות וחסרות מנוחה. חאלדי ניסה בעצמו לאכול את הגרגירים הללו, וכאשר טעם מהם הרגיש את ההשפעה בעצמו.",
        "content2": "נרגש מהתגלית המוזרה, הוא הביא כמה גרגירים לנזיר בכפר שלו והסביר לו את שהתרחש. הנזיר קבע כי הגרגירים הם ״עבודת השטן״ והשליך אותם לאש הסמוכה. כך למעשה התרחשה קליית הקפה הראשונה",
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

let page4Content = ["האגדה הנפוצה ביותר על גילוי הקפה מתרחשת בשנת 800 לפני הספירה ומספרת על רועה עיזים אתיופי בשם חאלדי. \n\nהעיזים של חאלדי בדרך כלל רגועות ונינוחות.\n יום אחד, חאלדי הבחין שכשהעיזים שלו אוכלות מגרגירי יער אדומים של שיח מסוים, הן הופכות לאנרגטיות וחסרות מנוחה.", "חאלדי ניסה בעצמו לאכול את הגרגירים הללו, וכאשר טעם מהם הרגיש את ההשפעה בעצמו.\n נרגש מהתגלית המוזרה, הוא הביא כמה גרגירים לנזיר בכפר שלו והסביר לו את שהתרחש.\n הנזיר קבע כי הגרגירים הם ״עבודת השטן״ והשליך אותם לאש הסמוכה. כך למעשה התרחשה קליית הקפה הראשונה.", "זמן קצר לאחר מכן, עלתה ארומה עוצמתית מן האש ומלאה את החדר בו נכחו חאלדי והנזיר. על מנת לשמר את הארומה, הנזיר הורה להוציא את הגרגירים מן האש ולשפוך עליהם מים, וכך נוצרה כוס הקפה הראשונה."];

let page5Content = ["חאלידי מראה את הפרי לנזיר שלו", "הנזיר מורה להוציא את הפולים מהאש ולשפוך עליהם מים", "חאלידי רועה הצאן מבחין כי הכבשים שלו אנרגטיות", "חאלידי מבין כי הכבשים אכלו מפרי אדום", "הנזיר זורק את הפולים לאש", "חאלידי טועם מהפרי וחש אנרגטי"];

let page6Content = ["התפשטות הקפה בעולם מתחילה מאתיופיה", "האתיופים מתחילים למכור את פולי הקפה לסוחרים ערביים שמפיצים את הפולים במדינות ערב של העולם העתיק.", "בתימן עודדו שתיית קפה מרובה על מנת לצמצם את תופעת לעיסת הגת.", "בארצות ערב חכמי הדת ניסו למנוע תחילה מהמאמינים לשתות קפה, אך ללא הצלחה.", "בתי הקפה הראשונים בעולם הוקמו במכה. המשקה התפשט ברחבי מדינות ערב אך היה מוכר במיוחד במקומות בהם היו נהוגים משחקי קוביות, רכילויות, ריקודים ושירה.", "בשלב מסוים בתי הקפה נהפכו במהרה למרכזים פוליטיים פעילים נגד הממשל ובשל כך חלק מהם הוצאו אל מחוץ לחוק.", "למדינות ערב הייתה מדיניות חד משמעית- איסור ייצוא פולי קפה בכדי שהקפה לא יגדל בשום מקום אחר בעולם ויישאר בלעדי לאזורם.", "צעד זה יצר כמיהה למשקה ופתח במרוץ להשגת זרעים.", "הסברה היא שאיטליה היא הארץ האירופאית הראשונה שהצליחה להשיג פולי קפה, כנראה על ידי סוחרים ונציאנים שביקרו במזרח התיכון.", "מאוחר יותר, במאה ה-16 וה-17, גם הולנד וצרפת הצליחו להשיג אותו.", "במאה ה-18 פולי הקפה הגיעו גם לאמריקה, כאשר סוחר צרפתי הביא עימו כמה שתילים לאחד מהאיים הקריביים.", "באדמה הפוריה ובאקלים הטרופי הצמחים התפתחו ושגשגו היטב, ותוך שנים אחדות השתילים הבודדים הפכו למטעים רחבים.", "כובשי אמריקה האירופאים הביאו עימם זרעים של צמח הקפה לאזורים שונים בדרום אמריקה, וכך הם החלו את חקלאות הקפה.", "במהרה הפכו ברזיל וקולומביה למעצמות קפה עולמיות"];

const quizData = [
    {
      question: "מאיפה הקפה במקור?",
      a: "איטליה",
      b: "אתיופיה",
      c: "מרוקו",
      d: "ברזיל",
      correct: "b"
    },
    {
      question: "איפה הוקמו בתי הקפה הראשונים?",
      a: "מכה",
      b: "מילאנו",
      c: "תימן",
      d: "ברזיל",
      correct: "a"
    },
    {
      question: "כמה כוסות קפה נלגמות בכל יום בארה״ב?",
      a: "350,000,000",
      b: "850,000,000",
      c: "300,500",
      d: "500,000,000",
      correct: "a"
    },
    {
      question: "לאיזו מדינה באמריקה הביאו ראשונה את הקפה?",
      a: "ברזיל",
      b: "קולומביה",
      c: "האיים הקריביים",
      d: "ניו יורק",
      correct: "c"
    },
    {
        question: "למה באירופה היתה כמיהה גדולה לקפה לפני המאה ה-16?",
        a: "מכיוון שהאירופאים העשירים שביקרו בארצות ערב הפיצו את השמועה על המשקה המסקרן",
        b: "מדינות ערב הטילו איסור על ייצוא פולי קפה על מנת לשמור את המשקה ייחודי להן",
        c: "באירופה היה אסור לשתות קפה עד המאה ה-18",
        d: "כל התשובות נכונות",
        correct: "b"
    }
];

const quizData1 = [
    {
      question: "קפה ערביקה נחשב כקפה הראשון שתורבת",
      correct: "h"
    },
    {
      question: "קפה הרובסטה נחשב כמשובח יותר מקפה הערביקה",
      correct: "i"
    },
    {
      question: "קפה הרובסטה מכיל יותר קפאין מקפה ערביקה",
      correct: "h"
    },
    {
      question: "הערביקה משמש להגברת הקרמה בקפה",
      correct: "i"
    },
    {
        question: "צורת הפולים של הרובסטה היא שטוחה וארוכה ואילו צורת הפולים של הערביקה היא עגולה ומקומרת",
        correct: "i"
    },
    {
        question: "ניתן למצוא את קפה הערביקה גדל פרא בהרי אתיופיה",
        correct: "h"
    }
];

const quizData2 = [
    {
      question: "איזה קפה מוכן על ידי שילוב של זרעי תירס או חיטה ותערובת תבלינים בשם חוויאג׳?",
      j: "קפה טורקי",
      k: "קפה תימני",
      l: "קפה פילטר (פרנץ' פרס)",
      m: "אספרסו",
      correct: "k"
    },
    {
      question: "איזה קפה מוכן על ידי הזרמת קיטור בלחץ גבוהה דרך אבקה דחוסה של קפה טחון?",
      j: "קפה טורקי",
      k: "קפה תימני",
      l: "קפה פילטר (פרנץ' פרס)",
      m: "אספרסו",
      correct: "m"
    },
    {
      question: "מהו קורטדו?",
      j: "קפה פילטר עם חלב",
      k: "אספרסו מוכתם עם קצף",
      l: "אספרסו עם הרבה חלב מורתח ומעט קצף",
      m: "אספרסו עם כמות שווה לו של חלב מוקצף ומעט קצף",
      correct: "m"
    }
];

let page8Content = ["ישנם זנים רבים של קפה, אולם בעיקר שניים משמשים למשקאות קפה:", "ואילו השאר משמשים בעיקר לתעשיות הקוסמטיקה."];
let coffeeKindsContent = [
    ["ההנחה המקובלת היא כי קפה הערביקה הוא מין הקפה הראשון שתורבת,\n והוא גודל בדרום מערב חצי האי ערב עוד לפני 1,000 שנים.", "במקור, הערביקה גדל באזורי ההרים של אתיופיה. כיום קשה למצוא שם גידולים שצמחו פרא\n ורוב הגידולים הם ערבוב של עצים שגדלו פרא ועצים שניטעו.", "הצורה הנפוצה היא שיחים צפופים.\n כמו כן, ניתן למצוא ערביקה בדרום סודאן והר מרסביט בצפון קניה."],
    ["קפה רובוסטה הוא מין בסוג קפה שמקורו ממערב אפריקה. את קפה הרובוסטה מגדלים בעיקר\n באפריקה ובברזיל בגבהים שבין 200 ל-800 מטרים, וכן בדרום מזרח אסיה במקומות אליהם הביאו\n הצרפתים את הצמח בסוף המאה ה-19.", "במהלך שנות ה-2000 הפכה וייטנאם ליצואנית הגדולה ביותר בעולם של זן הרובוסטה.\n כשליש מן הקפה המיוצר בעולם הוא מסוג רובוסטה."]
];

let page9Content = [
    ["ניתן להכין ממנו קפה משובח יותר", "מכיל פחות קפאין", "מתאפיין בטעמים מתוקים יותר,\n קרמה יחסית נמוכה, מרירות עדינה", "צורת הפולים שטוחה וארוכה וצבעם ירוק עמוק", "רגיש מאוד לכפור, דבר שמקשה מאוד על גידולו\n ועקב כך מחירו גבוה"],
    ["פחות איכותי לייצור משקה הקפה", "כמות קפאין גבוהה - בין 2 ל-4.5 אחוזים", "ניחן במרירות ובקרמה עבה, מריר, פשוט, ומשמש\n לרוב לחיזוק תערובות קפה ולהגברת הקרמה\n באספרסו.", "צורת הפולים היא קמורה ועגולה, וצבעם ירוק בהיר", "סביל לתנאי חליטה לא אופטימליים, זול יותר"]
];

let page11Content = [
    {
        content: "קפה טורקי, או בשמו האחר, קפה שחור, הוא הדרך הבסיסית ביותר והעתיקה ביותר להכנת קפה ומקורה במזרח התיכון. שיטה זו מבוססת על כתישה ידנית של הפולים באמצעות מכתש ועלי, ובישול האבקה בקנקן הנקרא ג׳זווה. שיטה זו מפיקה קפה שמתאפיין בטעם וארומה חזקים במיוחד.",
        highlight: ["הבסיסית", "והעתיקה", "ומקורה במזרח התיכון", "כתישה ידנית", "ובישול האבקה", "קפה שמתאפיין בטעם וארומה חזקים במיוחד"]
    }, 
    {
        content: "קפה תימני, או בשמו האחר, קפה לבן, הוא משקה שמקורו בתימן. כפי שניתן להסיק מהשם, צבעו של קפה זה בהיר יחסית בעקבות זמן קלייה קצר במיוחד.<br/> נהוג להוסיף לו זרעי תירס או חיטה שמחלישים את עוצמתו, ותערובת תבלינים בשם חוויאג׳ המוסיפה חריפות.",
        highlight: ["שמקורו בתימן", "צבעו", "בהיר יחסית", "זמן קלייה קצר במיוחד", "נהוג להוסיף",  "שמחלישים", "המוסיפה חריפות"]
    },
    {
        content: "באנגלית, המכשיר ידוע בצפון אמריקה כמכבש צרפתי <br/>(French Press) וזהו מכשיר להכנת קפה מסונן מהבוץ.<br/> המכשיר מורכב מכוס זכוכית ופילטר מתכתי הניתן לדחיסה מהפתח ועד לתחתית הכוס: שמים קפה טחון ומים רותחים בכוס הזכוכית, ומשאירים לחליטה של 2 דקות.<br/> לאחר מכן דוחסים את הקפה עד שהפילטר מפריד בין אבקת הקפה הטחון לקפה החלוט, מוזגים לכוס ושותים.",
        highlight: ["מכשיר להכנת קפה מסונן מהבוץ", "מורכב מכוס זכוכית ופילטר מתכתי הניתן לדחיסה מהפתח ועד לתחתית הכוס"]
    }, 
    {
        content: "הדרך המודרנית והמשוכללת ביותר להכנת קפה היא שימוש במכונת האספרסו, בשיטה שהומצאה בצרפת בשנת 1922. בשיטה זו מזרימים קיטור בלחץ גבוה דרך אבקה דחוסה של פולי קפה טחונים. התוצאה היא תמצית חזקה וארומטית של קפה המכוסה בשכבת קצף המכונה קרמה. את האספרסו ניתן לשתות ישירות או להשתמש בו על מנת ליצור משקאות קפה אחרים.",
        highlight: ["הדרך המודרנית והמשוכללת", "שהומצאה בצרפת בשנת 1922", "מזרימים קיטור בלחץ גבוה", "התוצאה היא תמצית חזקה וארומטית של קפה המכוסה בשכבת קצף"]
    }, 
    {
        content: "משקה המורכב ממנת אספרסו עם מעט חלב מוקצף.<br/> נגיעת החלב ממתנת את טעם הקפה המריר בנגיעה של מתיקות. פירוש שם המשקה הוא למעשה ״מוכתם״, מכיוון שהאספרסו מוכתם במעט קצף החלב.", 
        highlight: ["משקה המורכב ממנת אספרסו עם מעט חלב מוקצף"]
    }, 
    {
        content: "המשקה מכיל אספרסו אשר נוספו לו מים רותחים. כמות הקפאין במשקה זהה לכמות שבאספרסו, אולם טעמו שונה משל קפה שחור מבושל. מקורו של המשקה בתקופת מלחמת העולם השנייה, לאחר שחרור איטליה על ידי בעלות הברית, ובייחוד על ידי חיילי צבא ארצות הברית. החיילים האמריקאים נהגו לדלל את האספרסו, על מנת לדמות את טעמו לטעם הקפה שהם היו רגילים לו מארצות הברית.", 
        highlight: ["מכיל אספרסו אשר נוספו לו מים רותחים", "מקורו של המשקה בתקופת מלחמת העולם השנייה", " החיילים האמריקאים נהגו לדלל את האספרסו"]
    }, 
    {
        content: "משקה קפה שבבסיסו נהוג להשתמש בכוס אחת או שתיים של אספרסו, הרבה חלב מורתח ושכבה אחרונה ודקה של חלב מוקצף מעל. המשקה נחשב במקורו מאמריקה, שם הגיע לשיא הפופולריות במהלך שנות ה-80. הוא ידוע בזכות מרקם החלב העשיר שלו ואומנות קצף הלאטה מלאת היצירתיות.",
        highlight: ["משקה שבבסיסו נהוג להשתמש בכוס אחת או שתיים של אספרסו"]
    }, 
    {
        content: "משקה קפה איטלקי המוכן באמצעות עירוב של אספרסו, חלב חם, וחלב מוקצף. האספרסו נשפך לשליש התחתון של הכוס, והוא מלווה אחריו בכמות שווה של חלב חם. השליש העליון של הכוס מכיל חלב מוקצף. מקור השם במסדר הנזירים הקפוצ'ינים, אשר צבע גלימות לבושם מזכיר את צבעיו של משקה הקפוצ'ינו.",
        highlight: ["משקה קפה איטלקי המוכן באמצעות עירוב של אספרסו, חלב חם וחלב מוקצף"]
    }, 
    {
        content: "משקה המכיל מנת אספרסו וכמות זהה של חלב חם מוקצף- בכוס אמורה להיות כמות קטנה של קצף. הוא הומצא בחבל הבאסקים של ספרד, ומשם נפוץ לאזורים נוספים כמו צפון פורטוגל וקובה. פירוש השם ״קורטדו״ הוא ״לחתוך״ באיטלקית, והכוונה היא שבמשקה הזה החלב כמו ״חותך״ את האספרסו.",
        highlight: ["משקה המכיל מנת אספרסו וכמות זהה של חלב חם מוקצף", "הוא הומצא בחבל הבאסקים של ספרד"]
    }, 
    {
        content: "מוקה הוא משקה של אספרסו (שליש), חלב מורתח (שני שלישים) ומעט קקאו או סירופ שוקולד. השם מוקה נגזר מעיר הנמל מוח'א שבתימן, שהייתה מרכז סחר בקפה מהמאה ה-15 עד המאה ה-17. בשם זה מכונה זן צמח הקפה שמקורו באזור מוח'א, שטעמו דומה לקפה עם שוקולד. הגרסה המודרנית מחקה אותו באמצעות זני קפה אחרים שמוסיפים להם קקאו.",
        highlight: ["משקה של אספרסו", "חלב מורתח", "ומעט קקאו או סירופ שוקולד"]
    }
];

// let blackCoffee;


// variables
let check1 = 0;
let check2 = 0;
let coffeeTitle = ["קפה ערביקה", "קפה רובוסטה"];
let contentCheck;

// makes sure that the elements will be added to the screen once
let iconsCheck = 0;
let page5Once = 0;
let page9Once = 0;
let page11Once = 0;
let page7Once = 0;
let page10Once = 0;
let page12Once = 0;
// checks if the arrows needs to be visible
let quizCheck = 0;

// quiz variables
let quiz;
let answerEls;
let questionEl;
let a_text;
let b_text;
let c_text;
let d_text;
let submitBtn;
let loadingProgress;
let answer12;
let h_text;
let i_text;
let j_text;
let k_text;
let l_text;
let m_text;

let currentQuiz = 0;
let score = 0;

let add1;
let questions;
let quizArray = [];
let quizContentArray = [];
let reloadQuiz = 0;

// event quiz variables 
let sortingArray = ["first", "second", "third", "fourth", "fifth", "sixth"];
let mixedArray = ["fourth", "sixth", "first", "second","fifth", "third"];
let sortingArray1 = [];
// let finishQuiz;

// book page variables
let idArrayPage1 = ["1", "2", "3", "4"];
let si;
let z = 1;
let right;
let page = 0;
let addNext;
let add = 0;
let backIdArray = ["", "", "title9"];
let coverIdArray = ["title11", "title10", ""];

// scroll page variables
var items;
let cardsClass;
let once = 0;

// coffee kinds page variables
let coffee_name;
let coffee_filling;
let buttons;
let current_element;
let coffeeArray = [];

window.addEventListener("load", () => {
    pageCount = 0;
    nextPageCount = 0;
    document.addEventListener("click", changePages);

    // book variables
    right = document.getElementsByClassName("right");
    si = right.length;
});

var page0 = () => {
    document.getElementById("arrows").style.visibility = "hidden";
}

var page1 = () => {
    idArrayPage1 = ["1", "2", "3", "4"];
    document.getElementById("arrows").style.visibility = "visible";
    addContent(page1Content);
}

var page2 = () => {
    idArrayPage1 = ["5", "6"];
    addContent(page2Content);
}

var page3 = () => {
    idArrayPage1 = ["7", "8", "9"];
    if (iconsCheck === 0) {
        for (let i = 1; i <= 3; i++) {
            const icon = document.createElement("img");
            document.getElementById("icon-page3").appendChild(icon);
            icon.setAttribute("src", `assets/media/historyPage/icon${i}.png`);
            icon.setAttribute("style", `padding-bottom: 4rem;`);
        }

        // makes sure that the function won't add the icons if they are already on the screen.
        iconsCheck = 1;
    }
}

var page4 = () => {
    idArrayPage1 = ["9", "10", "11"];
   
    // adding the book elements to the screen
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "right");
        document.getElementById("container").appendChild(div);
        let figureBack = document.createElement("figure");
        figureBack.setAttribute("class", "back");
        let div1 = document.createElement("div");
        div1.setAttribute("id", `${backIdArray[i]}`);
        figureBack.appendChild(div1);
        let figureCover = document.createElement("figure");
        figureCover.setAttribute("class", "front");
        let div2 = document.createElement("div");
        div2.setAttribute("id", `${coverIdArray[i]}`);
        figureCover.appendChild(div2);
        if (i === 0) {
            figureBack.setAttribute("id", "back-cover");
        } else if (i === 2) {
            figureCover.setAttribute("id", "cover");
            let h1 = document.createElement("h1");
            h1.innerText = "כיצד מצאו את הקפה?";
            let p = document.createElement("p");
            p.innerText = "האגדה על הקפה";
            let sheep = document.createElement("img");
            sheep.setAttribute("src", "assets/media/historyPage/sheep.png");
            sheep.setAttribute("class", "sheep");
            let grass = document.createElement("img");
            grass.setAttribute("src", "assets/media/historyPage/grass.png");
            grass.setAttribute("class", "grass");
            figureCover.append(h1, p);
            figureBack.append(sheep, grass);
        }
        div.append(figureBack, figureCover);
    }
    
    // adding the content
    for (let i = 1; i <=3; i++) {
        document.getElementById(`title${idArrayPage1[i - 1]}`).innerText = page4Content[i - 1];
    }
}

var page5 = () => {
    window.scrollTo(0,0); 
    document.body.style.overflow = "hidden";

    if (page5Once === 0) {
        for (let i = 0; i < sortingArray.length; i++) {
            let li = document.createElement("li");
            li.setAttribute("id", `${mixedArray[i]}`);
            li.innerText = `${page5Content[i]}`;
            document.getElementById("sortlist").appendChild(li);
        }
        document.getElementById("arrows").style.visibility = "hidden";
        page5Once = 1;
    }
    
    slist(document.getElementById("sortlist"));
}

function slist (target) {
  // (A) SET CSS + GET ALL LIST ITEMS
  target.classList.add("slist");
  let items = target.getElementsByTagName("li"), current = null;

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;
    
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.ondragstart = (ev) => {
      current = i;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    };
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.ondragenter = (ev) => {
      if (i != current) { i.classList.add("active"); }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.ondragleave = () => {
      i.classList.remove("active");
    };

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.ondragend = () => { for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
    }};
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = (evt) => { evt.preventDefault(); };
 
    // (B7) ON DROP - DO SOMETHING
    i.ondrop = (evt) => {
      evt.preventDefault();
      if (i != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (i == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }

       for (let l = 0; l < items.length; l++) {
        sortingArray1.push(items[l].id);
      }

      // checks if the user sorted the events in the correct order
      if (sortingArray1.toString() === sortingArray.toString()) {
        for (let i = 0; i < sortingArray.length; i++) {
            document.getElementById(`${sortingArray[i]}`).draggable = false;
            document.getElementById(`${sortingArray[i]}`).style.border = "none";
            document.getElementById(`${sortingArray[i]}`).style.backgroundColor = "green";
        }
        document.getElementById("arrows").style.visibility = "visible";
      } else {
        // resets the user array
        sortingArray1 = [];
      }
    };
  }
}

var page6 = () => {
    document.body.style.overflow = "visible";

    if (once === 0) {
        for (let i = 0; i < 14; i++) {
            // moving the cards to their left or right position 
            if (cardsClass === undefined || cardsClass === "side-left") {
                cardsClass = "side-right";
            } else {
                cardsClass = "side-left";
            }

            // adding the cards to the screen
            let listItem = document.createElement("li");
            document.getElementById("item").appendChild(listItem);
            let div = document.createElement("div");
            div.setAttribute("id", `${i + 1}`);
            listItem.appendChild(div);
            let icon = document.createElement("img");
            icon.setAttribute("src", `assets/media/historyPage/icons/${i + 1}.png`);
            icon.classList.add("icon1");
            let h1 = document.createElement("h1");
            h1.innerText = page6Content[i];
            let p = document.createElement("p");
            document.getElementById(`${i + 1}`).classList.add(`${cardsClass}`);
            document.getElementById(`${i + 1}`).append(h1, p, icon);
        }
        document.getElementById("arrows").style.visibility = "hidden";
    }

    items = document.querySelectorAll(".timeline li");
    window.addEventListener("scroll", callbackFunc);
    callbackFunc();
}

var page7 = () => {
    window.scrollTo(0,0); 
    document.body.style.overflow = "hidden";
    if (page7Once === 0 || reloadQuiz !== 0) {
        quizArray = ["a", "b", "c", "d"];
        quizContentArray = ["Answer", "Answer", "Answer", "Answer"];
        addQuizElements("");

        a_text = document.getElementById("a_text");
        b_text = document.getElementById("b_text");
        c_text = document.getElementById("c_text");
        d_text = document.getElementById("d_text");
    
        quizQuestions(1);
        page7Once = 1;
    }
}

var addQuizElements = (quizPage) => {
    document.getElementById(`class${quizPage}`).innerHTML = "";
    reloadQuiz = 0;
    let quizContainer = document.createElement("div");
    quizContainer.setAttribute("id", `quiz${quizPage}`);
    quizContainer.setAttribute("class", "quiz-container");
    let h2 = document.createElement("h2");
    h2.setAttribute("id", `question${quizPage}`);
    h2.setAttribute("class", "question");
    h2.innerText = "Question";
    let loadingBar = document.createElement("div");
    loadingBar.setAttribute("class", "loading-bar");
    let loadingBarProgress = document.createElement("div");
    loadingBarProgress.setAttribute("id", `loading-bar-progress${quizPage}`);
    loadingBarProgress.setAttribute("class", "loading-bar-progress");
    loadingBar.appendChild(loadingBarProgress);
    let ul = document.createElement("ul");
    ul.setAttribute("class", "icon12");
    for (let i = 0; i < quizArray.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "icon14");
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        // input.type = "radio"
        input.setAttribute("name", `answer${quizPage}`);
        input.setAttribute("id", `${quizArray[i]}`);
        input.setAttribute("class", `answer${quizPage}`);
        let label = document.createElement("label");
        label.setAttribute("for", `${quizArray[i]}`);
        label.setAttribute("id", `${quizArray[i]}_text`);
        label.innerText = `${quizContentArray[i]}`
        li.append(input, label);
        ul.appendChild(li);
    }
    let button = document.createElement("button");
    button.setAttribute("id", `submit${quizPage}`);
    button.setAttribute("class", "submit");
    button.innerText = "צדקתי?";
    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-chevron-right");
    button.appendChild(i);
    quizContainer.append(h2, loadingBar, ul, button);
    document.getElementById(`class${quizPage}`).appendChild(quizContainer);
    console.log(document.getElementById(`class${quizPage}`));
}

var quizQuestions = (quizPage) => {

    if (quizCheck !== quizPage) {
        document.getElementById("arrows").style.visibility = "hidden";
        quizCheck = quizPage;
    }

    // makes sure that the variables match the page
    if (quizPage === 1) {
        add1 = "";
        questions = quizData;  
    } else if (quizPage === 2) {
        add1 = 1;
        questions = quizData1
    } else if (quizPage === 3) {
        add1 = 2;
        questions = quizData2;
    }

    quiz = document.getElementById(`quiz${add1}`);
    answerEls = document.querySelectorAll(`.answer${add1}`);
   
    submitBtn = document.getElementById(`submit${add1}`);
    loadingProgress = document.getElementById(`loading-bar-progress${add1}`);
    
    currentQuiz = 0;
    score = 0;

    loadQuiz(quizPage);

    submitBtn.addEventListener("click", () => {
        
        if (submitBtn.innerText === "צדקתי?") {
            answerEls.forEach((answerEl) => {
                if (answerEl.checked) {
                    submitBtn.disabled = true;
                    answer12 = answerEl.id;
                    const answer = answer12;
    
                    if (answer) {
                        if (answer === questions[currentQuiz].correct) {
                            document.getElementById(`${answer}_text`).style.cssText = "border: 2px solid green; background-color: rgb(0, 128, 0, 0.4)";
                            score++;
                        } 
                        else {
                            document.getElementById(`${answer}_text`).style.cssText = "border: 2px solid red; background-color: rgb(255, 0, 0, 0.4)";
                            document.getElementById(`${questions[currentQuiz].correct}_text`).style.cssText = "border: 2px solid green; background-color: rgb(0, 128, 0, 0.4)";
                        }
                    }
                    submitBtn.disabled = false;
                    submitBtn.innerText = "הבא";
                    answerEls.forEach((answerEl) => (answerEl.checked = false));
                }
            });
        } else if (submitBtn.innerText === "הבא") {
            // cleans style
            document.getElementById(`${answer12}_text`).style.cssText = "border: none; background-color: white;";
            document.getElementById(`${answer12}_text`).style.cssText = "border: none; background-color: white;";
            document.getElementById(`${questions[currentQuiz].correct}_text`).style.cssText = "border: none; background-color: white;";

            currentQuiz++;
            loadingProgress.style.width = `${(currentQuiz * 100) / questions.length}%`;
            if (currentQuiz < questions.length) {
                loadQuiz(quizPage);
            } else {
                document.getElementById("arrows").style.visibility = "visible";
                quiz.innerHTML = `
                        <h2 class="question"> ענית נכון על  ${score}/${questions.length} שאלות</h2>
                        <button id="realoding">Reload <i class="fa-solid fa-arrows-rotate"></i></button>
                        `;
                document.getElementById("realoding").addEventListener("click", () => {
                    reloadQuiz = 1;
                    window[`page${pageCount}`]();
                });
            }
            submitBtn.innerText = "צדקתי?";
        }
    });
}


var page8 = () => {
    idArrayPage1 = ["12", "14"];
    addContent(page8Content);
    console.log(document.getElementById("page8"));
    document.body.classList.remove("coffee-background");
    document.getElementById("page8").style.display = "block";
    document.getElementById("coffee-kinds").style.display = "none";
    document.getElementById("arabica").addEventListener("click", coffeeKinds);
    document.getElementById("robosta").addEventListener("click", coffeeKinds);

    if (check1 >= 1 && check2 >= 1) {
        document.getElementById("arrows").style.visibility = "visible";
    } else {
        document.getElementById("arrows").style.visibility = "hidden";
    }
}

let coffeeKinds = (event) => {
    let coffeeName;
    // matches the elements to the page
    if (event.target.id === "robosta") {
        coffeeName = 1;
        check1++;
    } else {
        coffeeName = 0;
        check2++;
    }
    document.getElementById("arrows").style.visibility = "hidden";
    document.body.classList.add("coffee-background");

    document.getElementById("page8").style.display = "none";
    document.getElementById("coffee-kinds").style.display = "block";
   
    document.getElementById("coffee-title").innerText = `${coffeeTitle[coffeeName]}`;
    for (let i = 0; i < coffeeKindsContent[coffeeName].length; i++) {
        let div = document.createElement("div");
        div.innerText = `${coffeeKindsContent[coffeeName][i]}`;
        div.setAttribute("class", `content-${event.target.id}${i + 1}`);
        let img = document.createElement("img");
        img.setAttribute("src", `assets/media/coffeKinds/${event.target.id}/icon${i+1}.png`);
        img.setAttribute("class", `icon-${event.target.id}${i + 1}`);
        document.getElementById("coffee-content").append(div, img);
    }

    document.getElementById("back").addEventListener("click", () => {
        document.getElementById("coffee-content").innerHTML = "";
        page8();
    })
}

var page9 = () => {
    // adding the elements to the screen
    if (page9Once === 0) {
        for (let i = 0; i < 5; i++) {
            let div1 = document.createElement("div");
            div1.setAttribute("class", "col1");
            div1.innerText = `${page9Content[0][i]}`;
            document.getElementById("arabica-col").appendChild(div1);
            let div2 = document.createElement("div");
            div2.setAttribute("class", "col2");
            div2.innerText = `${page9Content[1][i]}`;
            document.getElementById("robosta-col").appendChild(div2);
            console.log(document.getElementById("arabica-col"));
            console.log(document.getElementById("robosta-col"));
        }
        page9Once = 1;
    }
}

var page10 = () => {
    if (page10Once === 0 || reloadQuiz !== 0) {
        quizArray = ["h", "i"];
        quizContentArray = ["נכון", "לא נכון"];
        addQuizElements("1");

        h_text = document.getElementById("h_text");
        i_text = document.getElementById("i_text");

        quizQuestions(2);
        page10Once = 1;
    }
}

var page11 = () => {
    if (page11Once === 0) {
        document.getElementById("arrows").style.visibility = "hidden";
    }

    coffee_name = document.querySelector(".coffee_name");
    coffee_filling = document.querySelector(".filling");
    buttons = document.querySelectorAll("button");
    current_element = null;
    
    [...buttons].forEach((button) => {
        button.addEventListener("click", function buttonClick() {
            changeCoffeeType(button);
        });
    });
}

// coffee types page functions
let checkItems = (item) => {
    if (page11Content[0].highlight.includes(item)) {
        item.classList.add("add-color");
    }
}

const changeCoffeeType = (selected) => {
    if (current_element) {
        current_element.classList.remove("selected");
        coffee_filling.classList.remove(current_element.id);
    }
  
    current_element = selected;
    // highlights the words in different color
    var samplestring = page11Content[current_element.dataset.indexNumber].content;
    const samplearray = page11Content[current_element.dataset.indexNumber].highlight;

    samplearray.forEach(str => {
        samplestring = samplestring.replaceAll(str, `<span>${str}</span>`);
    })
    document.getElementById("content-page11").innerHTML = samplestring;

    if (!coffeeArray.includes(current_element.id)) {
        coffeeArray.push(current_element.id);
        if (coffeeArray.length === 10 && page11Once === 0) {
            document.getElementById("arrows").style.visibility = "visible";
            page11Once = 1;
        }
    }
    
    coffee_filling.classList.add(current_element.id);
    current_element.classList.add("selected");
    coffee_name.innerText = selected.innerText;
};

const setActiveType = (element) => {
    element.toggleClass("selected");
};

var page12 = () => {
    if (page12Once === 0 || reloadQuiz !== 0) {
        quizArray = ["j", "k", "l", "m"];
        quizContentArray = ["Answer", "Answer", "Answer", "Answer"];
        addQuizElements("2");

        j_text = document.getElementById("j_text");
        k_text = document.getElementById("k_text");
        l_text = document.getElementById("l_text");
        m_text = document.getElementById("m_text");

        quizQuestions(3);
        page12Once = 1;
    }
}

// loads the quiz questions
function loadQuiz(quizPage) {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
    if (quizPage === 1) { 
        const currentQuizData = quizData[currentQuiz];

        document.getElementById("question").innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    } else if (quizPage === 2) {
        // answerEls.forEach((answerEl) => (answerEl.checked = false));
        const currentQuizData = quizData1[currentQuiz];
        
        document.getElementById("question1").innerText = currentQuizData.question;
    } else if (quizPage === 3) {
        // answerEls.forEach((answerEl) => (answerEl.checked = false));
        const currentQuizData = quizData2[currentQuiz];

        document.getElementById("question2").innerText = currentQuizData.question;
        j_text.innerText = currentQuizData.j;
        k_text.innerText = currentQuizData.k;
        l_text.innerText = currentQuizData.l;
        m_text.innerText = currentQuizData.m;
    }
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
    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) {
        document.getElementById("arrows").style.visibility = "visible";
    }
    once = 1;
    for (var i = 0; i < items.length; i++) {   
      if (isElementInViewport(items[i])) {
        if(!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
        }
      } else if (items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
      }
    }
}

// book page functions
function turnRight() {
        page++;
        if (page === 1) {
            document.getElementById("previous").style.visibility = "visible";
        } else if (page === 3) {
            document.getElementById("next").style.visibility = "hidden";
        }

        if (si >= 1) {
            si--;
        } else {
            si = right.length - 1;
            function sttmot(i) {
                setTimeout(function(){right[i].style.zIndex="auto";},300);
            }
            for (var i = 0; i < right.length; i++) {
                right[i].className = "right";
                sttmot(i);
                z = 1;
            }
        }

        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex = z;

        // makes sure that the button is disabled until the page finishes flip animation
        document.getElementById("next").disabled = true;
        setTimeout(() => {
            document.getElementById("next").disabled = false;
        }, 350);
    }

    function turnLeft() {
        page--;
        if (page === 0) {
            document.getElementById("previous").style.visibility = "hidden";
        } else if (page === 2) {
            document.getElementById("next").style.visibility = "visible";
        }

        if (si<right.length) {
            si++;
        } else {
            si = 1;
            for (var i = right.length - 1; i > 0; i--) {
                right[i].classList.add("flip");
                right[i].style.zIndex=right.length+1-i;
            }
        }

        right[si-1].className = "right";
        setTimeout(function(){right[si-1].style.zIndex="auto";},350);

        // makes sure that the button is disabled until the page finishes flip animation
        document.getElementById("previous").disabled = true;
        setTimeout(() => {
            document.getElementById("previous").disabled = false;
        }, 350);
    }

let changePages = (event) => {
    if (event.target.id === "next-page" || event.target.id === "start-button" || event.target.id === "previous-page") {
        document.getElementById(`page${pageCount}`).style.display = "none";
        if (event.target.id === "next-page" || event.target.id === "start-button") {
            pageCount++;
        } else if (event.target.id === "previous-page") {
            pageCount--;
        }
        document.getElementById(`page${pageCount}`).style.display = "block";
        window[`page${pageCount}`]();
    }
}

let addContent = (array) => {
    if (contentCheck !== array) {
        for (let i = 1; i <= array.length; i++) {
            const content = document.createElement("div");
            document.getElementById(`content-page${pageCount}`).appendChild(content);
            content.innerText = array[i - 1];
            content.setAttribute("id", `title${idArrayPage1[i - 1]}`);
        }
    }

    //checks if the function should add the content, if contentCheck === array, it means that the function doeasn't need to add the content again.
    contentCheck = array;
}

