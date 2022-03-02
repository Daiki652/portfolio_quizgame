const quiz = [
    {
     question: '第１問、福井のマスコットキャラクターは？',
     answers: [
        'ハピリン', 
        'はぴりゅう', 
        'ふくりゅう'
      ],
     correct: 'はぴりゅう'
    }, {
     question: '第2問、福井で有名な食べ物といえば？',
     answers: [
        '納豆', 
        'たこ焼き', 
        'ソースカツ丼'
      ],
     correct: 'ソースカツ丼'
    }, {
     question: '第３問、福井県鯖江市で最も高いシェア率を誇っている生産物はどれ？',
     answers: [
        'コンタクトレンズ', 
        'メガネ', 
        'ルーペ'
      ],
     correct: 'メガネ'
    }, {
     question: '第４問、次の内、福井弁はどれ？',
     answers: [
        'せやねん', 
        'ほやって', 
        'そげんやね'
      ],
     correct: 'ほやって'
    }, {
     question: '第５問、２０２１年の都道府県幸福度ランキングで福井県は何位になった？',
     answers: [
        '１８位', 
        '２３位', 
        '１位'
      ],
     correct: '１８位'
    }, {
     question: '第６問、福井県民が、冬のお正月などに好んで食べるスイーツは？',
     answers: [
        'ケーキ', 
        '水まんじゅう', 
        '水ようかん'
      ],
     correct: '水ようかん'
    }, {
     question: '第７問、福井で有名なお餅は？',
     answers: [
        '信玄餅', 
        'いちご大福', 
        '羽二重餅'
      ],
     correct: '羽二重餅'
    }, {
     question: '第８問、２０２１年現在での、福井県の推定人口は？',
     answers: [
        '約６２万人', 
        '約７６万人', 
        '約９７万人'
      ],
     correct: '約７６万人'
    }, {
     question: '第９問、福井県では他の県に比べて最も多く見つかっている化石がある、何の化石？',
     answers: [
        '恐竜', 
        'アンモナイト', 
        '植物'
      ],
     correct: '恐竜'
    }, {
     question: '第１０問、「日本一おいしい誉れ高きお米」より命名された福井のお米は？',
     answers: [
        'ハナエチゼン', 
        'あきさかり', 
        'いちほまれ'
      ],
     correct: 'いちほまれ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length


//文字列をHTMLに反映
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score += 10;
    } else {
        window.alert('不正解!');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了!あなたの点数は' + score + '点です!!');
    }

};

//ボタンをクリックしたら正解か不正解かの判定を行う
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
   $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}