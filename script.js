let sumArray = [];

let diff;
let personalArray = [];

let scienceOlympiadSum;
let mathOlympiadSum;
let NHSSum;
let knoweldgeBowlSum;
let scienceBowlSum;
let stemAcademySum;
let GSASum;
let theatreSum;
let debateSum;
let DECASum;
let FBLASum;
let fencingSum;

let scienceOlympiad = [2,4,-4,-4,0,4,1,-4,3,-4];
let mathOlympiad = [4,0,-4,-4,0,3,1,-4,0,-4];
let NHS = [-4,-4,4,-4,2,4,-4,-4,-4,0];
let knowledgeBowl = [3,3,-4,-2,1,4,4,-4,0,-4];
let scienceBowl = [3,4,-4,-4,1,4,4,-4,2,-4];
let stemAcademy = [2,4,4,-4,4,3,-4,-4,-3,-4]
let GSA = [-4,-4,-2,-4,4,-2,-4,-4,-4,4];
let theatre = [-4,-4,-4,2,4,4,-4,-4,-4,-4];
let debate = [-4,-4,-4,-4,2,2,-4,-4,-4,-4];
let DECA = [-4,-4,-4,-4,3,2,-4,-4,-4,-4];
let FBLA = [-3,-3,-4,-4,4,2,-4,-4,-4,-3];
let fencing = [-4,-4,-4,-4,2,0,-4,4,-4,-4];

let math = 0;
let science = 0;
let volunteering = 0;
let music = 0;
let social = 0;
let teamwork = 0;
let academicGeneral = 0;
let clubSports = 0;
let compsci = 0;
let diversity = 0;

let hiddenButton = document.getElementById("button1")

let q11 = {val:document.getElementById('oneone')};
let q12 = {val:document.getElementById('onetwo')};
let q13 = {val:document.getElementById('onethree')};
let q14 = {val:document.getElementById('onefour')};
let q15 = {val:document.getElementById('onefive')};
let question11 = {val: false};
let question12 = {val:false};
let question13 = {val:false};
let question14 = {val:false};
let question15 = {val:false};

let q21 = {val:document.getElementById('twoone')};
let q22 = {val:document.getElementById('twotwo')};
let q23 = {val:document.getElementById('twothree')};
let q24 = {val:document.getElementById('twofour')};
let q25 = {val:document.getElementById('twofive')};
let question21 = {val:false};
let question22 = {val:false};
let question23 = {val:false};
let question24 = {val:false};
let question25 = {val:false};

let q31 = {val:document.getElementById('threeone')};
let q32 = {val:document.getElementById('threetwo')};
let q33 = {val:document.getElementById('threethree')};
let q34 = {val:document.getElementById('threefour')};
let q35 = {val:document.getElementById('threefive')};
let question31 = {val:false};
let question32 = {val:false};
let question33 = {val:false};
let question34 = {val:false};
let question35 = {val:false};

let q41 = {val: document.getElementById('fourone')};
let q42 = {val: document.getElementById('fourtwo')};
let q43 = {val: document.getElementById('fourthree')};
let q44 = {val: document.getElementById('fourfour')};
let q45 = {val: document.getElementById('fourfive')};
let question41 = {val: false};
let question42 = {val: false};
let question43 = {val: false};
let question44 = {val: false};
let question45 = {val: false};

let q51 = {val: document.getElementById('fiveone')};
let q52 = {val: document.getElementById('fivetwo')};
let q53 = {val: document.getElementById('fivethree')};
let q54 = {val: document.getElementById('fivefour')};
let q55 = {val: document.getElementById('fivefive')};
let question51 = {val: false};
let question52 = {val:false};
let question53 = {val:false};
let question54 = {val:false};
let question55 = {val:false};

let q61 = {val: document.getElementById('sixone')};
let q62 = {val: document.getElementById('sixtwo')};
let q63 = {val: document.getElementById('sixthree')};
let q64 = {val: document.getElementById('sixfour')};
let q65 = {val: document.getElementById('sixfive')};
let question61 = {val: false};
let question62 = {val: false};
let question63 = {val: false};
let question64 = {val: false};
let question65 = {val: false};

let q71 = {val: document.getElementById('sevenone')};
let q72 = {val: document.getElementById('seventwo')};
let q73 = {val: document.getElementById('seventhree')};
let q74 = {val: document.getElementById('sevenfour')};
let q75 = {val: document.getElementById('sevenfive')};
let question71 = {val: false};
let question72 = {val: false};
let question73 = {val: false};
let question74 = {val: false};
let question75 = {val: false};

let q81 = {val: document.getElementById('eightone')};
let q82 = {val: document.getElementById('eighttwo')};
let q83 = {val: document.getElementById('eightthree')};
let q84 = {val: document.getElementById('eightfour')};
let q85 = {val: document.getElementById('eightfive')};
let question81 = {val: false};
let question82 = {val: false};
let question83 = {val: false};
let question84 = {val: false};
let question85 = {val: false};

let q91 = {val: document.getElementById('nineone')};
let q92 = {val: document.getElementById('ninetwo')};
let q93 = {val: document.getElementById('ninethree')};
let q94 = {val: document.getElementById('ninefour')};
let q95 = {val: document.getElementById('ninefive')};
let question91 = {val: false};
let question92 = {val: false};
let question93 = {val: false};
let question94 = {val: false};
let question95 = {val: false};

let q101 = {val: document.getElementById('tenone')};
let q102 = {val: document.getElementById('tentwo')};
let q103 = {val: document.getElementById('tenthree')};
let q104 = {val: document.getElementById('tenfour')};
let q105 = {val: document.getElementById('tenfive')};
let question101 = {val: false};
let question102 = {val: false};
let question103 = {val: false};
let question104 = {val: false};
let question105 = {val: false};

let questionArray = [
  {
    name: '#oneone',
    q: q11,
    question: question11,
    secq: q12,
    secquestion: question12,
    triq: q13,
    triquestion: question13,
    quadq: q14,
    quadquestion: question14,
    pentaq: q15,
    pentaquestion: question15,
  },{
  name: '#onetwo',
  q: q12,
  question: question12,
  secq: q11,
  secquestion: question11,
  triq: q13,
  triquestion: question13,
  quadq: q14,
  quadquestion: question14,
  pentaq: q15,
  pentaquestion: question15,
  },{
    name: '#onethree',
    q: q13,
    question: question13,
    secq: q11,
    secquestion: question11,
    triq: q12,
    triquestion: question12,
    quadq: q14,
    quadquestion: question14,
    pentaq: q15,
    pentaquestion: question15,
    },{
      name: '#onefour',
      q: q14,
      question: question14,
      secq: q11,
      secquestion: question11,
      triq: q12,
      triquestion: question12,
      quadq: q13,
      quadquestion: question13,
      pentaq: q15,
      pentaquestion: question15,
      },{
        name: '#onefive',
        q: q15,
        question: question15,
        secq: q11,
        secquestion: question11,
        triq: q12,
        triquestion: question12,
        quadq: q14,
        quadquestion: question14,
        pentaq: q13,
        pentaquestion: question13,
        },
    {
      name: '#twoone',
      q: q21,
      question: question21,
      secq: q22,
      secquestion: question22,
      triq: q23,
      triquestion: question23,
      quadq: q24,
      quadquestion: question24,
      pentaq: q25,
      pentaquestion: question25,
    },{
    name: '#twotwo',
    q: q22,
    question: question22,
    secq: q21,
    secquestion: question21,
    triq: q23,
    triquestion: question23,
    quadq: q24,
    quadquestion: question24,
    pentaq: q25,
    pentaquestion: question25,
    },{
      name: '#twothree',
      q: q23,
      question: question23,
      secq: q21,
      secquestion: question21,
      triq: q22,
      triquestion: question22,
      quadq: q24,
      quadquestion: question24,
      pentaq: q25,
      pentaquestion: question25,
      },{
        name: '#twofour',
        q: q24,
        question: question24,
        secq: q21,
        secquestion: question21,
        triq: q22,
        triquestion: question22,
        quadq: q23,
        quadquestion: question23,
        pentaq: q25,
        pentaquestion: question25,
        },{
          name: '#twofive',
          q: q25,
          question: question25,
          secq: q21,
          secquestion: question21,
          triq: q22,
          triquestion: question22,
          quadq: q23,
          quadquestion: question23,
          pentaq: q24,
          pentaquestion: question24,
          },
      {
        name: '#threeone',
        q: q31,
        question: question31,
        secq: q32,
        secquestion: question32,
        triq: q33,
        triquestion: question33,
        quadq: q35,
        quadquestion: question35,
        pentaq: q34,
        pentaquestion: question34,
      },{
      name: '#threetwo',
      q: q32,
      question: question32,
      secq: q31,
      secquestion: question31,
      triq: q33,
      triquestion: question33,
      quadq: q35,
      quadquestion: question35,
      pentaq: q34,
      pentaquestion: question34,
      },{
        name: '#threethree',
        q: q33,
        question: question33,
        secq: q31,
        secquestion: question31,
        triq: q32,
        triquestion: question32,
        quadq: q35,
        quadquestion: question35,
        pentaq: q34,
        pentaquestion: question34,
        },{
          name: '#threefour',
          q: q34,
          question: question34,
          secq: q31,
          secquestion: question31,
          triq: q32,
          triquestion: question32,
          quadq: q35,
          quadquestion: question35,
          pentaq: q33,
          pentaquestion: question33,
          },{
            name: '#threefive',
            q: q35,
            question: question35,
            secq: q31,
            secquestion: question31,
            triq: q32,
            triquestion: question32,
            quadq: q33,
            quadquestion: question33,
            pentaq: q34,
            pentaquestion: question34,
            },
        {
          name: '#fourone',
          q: q41,
          question: question41,
          secq: q42,
          secquestion: question42,
          triq: q43,
          triquestion: question43,
          quadq: q44,
          quadquestion: question44,
          pentaq: q45,
          pentaquestion: question45,
        },{
        name: '#fourtwo',
        q: q42,
        question: question42,
        secq: q41,
        secquestion: question41,
        triq: q43,
        triquestion: question43,
        quadq: q44,
        quadquestion: question44,
        pentaq: q45,
        pentaquestion: question45,
        },{
          name: '#fourthree',
          q: q43,
          question: question43,
          secq: q41,
          secquestion: question41,
          triq: q42,
          triquestion: question42,
          quadq: q44,
          quadquestion: question44,
          pentaq: q45,
          pentaquestion: question45,
          },{
            name: '#fourfour',
            q: q44,
            question: question44,
            secq: q41,
            secquestion: question41,
            triq: q42,
            triquestion: question42,
            quadq: q43,
            quadquestion: question43,
            pentaq: q45,
            pentaquestion: question45,
            },{
              name: '#fourfive',
              q: q45,
              question: question45,
              secq: q41,
              secquestion: question41,
              triq: q42,
              triquestion: question42,
              quadq: q44,
              quadquestion: question44,
              pentaq: q43,
              pentaquestion: question43,
              },
          {
            name: '#fiveone',
            q: q51,
            question: question51,
            secq: q52,
            secquestion: question52,
            triq: q53,
            triquestion: question53,
            quadq: q54,
            quadquestion: question54,
            pentaq: q55,
            pentaquestion: question55,
          },{
          name: '#fivetwo',
          q: q52,
          question: question52,
          secq: q51,
          secquestion: question51,
          triq: q53,
          triquestion: question53,
          quadq: q54,
          quadquestion: question54,
          pentaq: q55,
          pentaquestion: question55,
          },{
            name: '#fivethree',
            q: q53,
            question: question53,
            secq: q51,
            secquestion: question51,
            triq: q52,
            triquestion: question52,
            quadq: q54,
            quadquestion: question54,
            pentaq: q55,
            pentaquestion: question55,
            },{
              name: '#fivefour',
              q: q54,
              question: question54,
              secq: q51,
              secquestion: question51,
              triq: q52,
              triquestion: question52,
              quadq: q53,
              quadquestion: question53,
              pentaq: q55,
              pentaquestion: question55,
              },{
                name: '#fivefive',
                q: q55,
                question: question55,
                secq: q51,
                secquestion: question51,
                triq: q52,
                triquestion: question52,
                quadq: q54,
                quadquestion: question54,
                pentaq: q53,
                pentaquestion: question53,
                },
            {
              name: '#sixone',
              q: q61,
              question: question61,
              secq: q62,
              secquestion: question62,
              triq: q63,
              triquestion: question63,
              quadq: q64,
              quadquestion: question64,
              pentaq: q65,
              pentaquestion: question65,
            },{
            name: '#sixtwo',
            q: q62,
            question: question62,
            secq: q61,
            secquestion: question61,
            triq: q63,
            triquestion: question63,
            quadq: q64,
            quadquestion: question64,
            pentaq: q65,
            pentaquestion: question65,
            },{
              name: '#sixthree',
              q: q63,
              question: question63,
              secq: q61,
              secquestion: question61,
              triq: q62,
              triquestion: question62,
              quadq: q64,
              quadquestion: question64,
              pentaq: q65,
              pentaquestion: question65,
              },{
                name: '#sixfour',
                q: q64,
                question: question64,
                secq: q61,
                secquestion: question61,
                triq: q62,
                triquestion: question62,
                quadq: q63,
                quadquestion: question63,
                pentaq: q65,
                pentaquestion: question65,
                },{
                  name: '#sixfive',
                  q: q65,
                  question: question65,
                  secq: q61,
                  secquestion: question61,
                  triq: q62,
                  triquestion: question62,
                  quadq: q64,
                  quadquestion: question64,
                  pentaq: q63,
                  pentaquestion: question63,
                  },
              {
                name: '#sevenone',
                q: q71,
                question: question71,
                secq: q72,
                secquestion: question72,
                triq: q73,
                triquestion: question73,
                quadq: q74,
                quadquestion: question74,
                pentaq: q75,
                pentaquestion: question75,
              },{
              name: '#seventwo',
              q: q72,
              question: question72,
              secq: q71,
              secquestion: question71,
              triq: q73,
              triquestion: question73,
              quadq: q74,
              quadquestion: question74,
              pentaq: q75,
              pentaquestion: question75,
              },{
                name: '#seventhree',
                q: q73,
                question: question73,
                secq: q71,
                secquestion: question71,
                triq: q72,
                triquestion: question72,
                quadq: q74,
                quadquestion: question74,
                pentaq: q75,
                pentaquestion: question75,
                },{
                  name: '#sevenfour',
                  q: q74,
                  question: question74,
                  secq: q71,
                  secquestion: question71,
                  triq: q72,
                  triquestion: question72,
                  quadq: q73,
                  quadquestion: question73,
                  pentaq: q75,
                  pentaquestion: question75,
                  },{
                    name: '#sevenfive',
                    q: q75,
                    question: question75,
                    secq: q71,
                    secquestion: question71,
                    triq: q72,
                    triquestion: question72,
                    quadq: q73,
                    quadquestion: question73,
                    pentaq: q74,
                    pentaquestion: question74,
                    },
                {
                  name: '#eightone',
                  q: q81,
                  question: question81,
                  secq: q82,
                  secquestion: question82,
                  triq: q83,
                  triquestion: question83,
                  quadq: q84,
                  quadquestion: question84,
                  pentaq: q85,
                  pentaquestion: question85,
                },{
                name: '#eighttwo',
                q: q82,
                question: question82,
                secq: q81,
                secquestion: question81,
                triq: q83,
                triquestion: question83,
                quadq: q84,
                quadquestion: question84,
                pentaq: q85,
                pentaquestion: question85,
                },{
                  name: '#eightthree',
                  q: q83,
                  question: question83,
                  secq: q81,
                  secquestion: question81,
                  triq: q82,
                  triquestion: question82,
                  quadq: q84,
                  quadquestion: question84,
                  pentaq: q85,
                  pentaquestion: question85,
                  },{
                    name: '#eightfour',
                    q: q84,
                    question: question84,
                    secq: q81,
                    secquestion: question81,
                    triq: q82,
                    triquestion: question82,
                    quadq: q83,
                    quadquestion: question83,
                    pentaq: q85,
                    pentaquestion: question85,
                    },{
                      name: '#eightfive',
                      q: q85,
                      question: question85,
                      secq: q81,
                      secquestion: question81,
                      triq: q82,
                      triquestion: question82,
                      quadq: q84,
                      quadquestion: question84,
                      pentaq: q83,
                      pentaquestion: question83,
                      },
                  {
                    name: '#nineone',
                    q: q91,
                    question: question91,
                    secq: q92,
                    secquestion: question92,
                    triq: q93,
                    triquestion: question93,
                    quadq: q94,
                    quadquestion: question94,
                    pentaq: q95,
                    pentaquestion: question95,
                  },{
                  name: '#ninetwo',
                  q: q92,
                  question: question92,
                  secq: q91,
                  secquestion: question91,
                  triq: q93,
                  triquestion: question93,
                  quadq: q94,
                  quadquestion: question94,
                  pentaq: q95,
                  pentaquestion: question95,
                  },{
                    name: '#ninethree',
                    q: q93,
                    question: question93,
                    secq: q91,
                    secquestion: question91,
                    triq: q92,
                    triquestion: question92,
                    quadq: q94,
                    quadquestion: question94,
                    pentaq: q95,
                    pentaquestion: question95,
                    },{
                      name: '#ninefour',
                      q: q94,
                      question: question94,
                      secq: q91,
                      secquestion: question91,
                      triq: q92,
                      triquestion: question92,
                      quadq: q93,
                      quadquestion: question93,
                      pentaq: q95,
                      pentaquestion: question95,
                      },{
                        name: '#ninefive',
                        q: q95,
                        question: question95,
                        secq: q91,
                        secquestion: question91,
                        triq: q92,
                        triquestion: question92,
                        quadq: q94,
                        quadquestion: question94,
                        pentaq: q93,
                        pentaquestion: question93,
                        },
                    {
                      name: '#tenone',
                      q: q101,
                      question: question101,
                      secq: q102,
                      secquestion: question102,
                      triq: q103,
                      triquestion: question103,
                      quadq: q104,
                      quadquestion: question104,
                      pentaq: q105,
                      pentaquestion: question105,
                    },{
                    name: '#tentwo',
                    q: q102,
                    question: question102,
                    secq: q101,
                    secquestion: question101,
                    triq: q103,
                    triquestion: question103,
                    quadq: q104,
                    quadquestion: question104,
                    pentaq: q105,
                    pentaquestion: question105,
                    },{
                      name: '#tenthree',
                      q: q103,
                      question: question103,
                      secq: q101,
                      secquestion: question101,
                      triq: q102,
                      triquestion: question102,
                      quadq: q104,
                      quadquestion: question104,
                      pentaq: q105,
                      pentaquestion: question105,
                      },{
                        name: '#tenfour',
                        q: q104,
                        question: question104,
                        secq: q101,
                        secquestion: question101,
                        triq: q102,
                        triquestion: question102,
                        quadq: q103,
                        quadquestion: question103,
                        pentaq: q105,
                        pentaquestion: question105,
                        },{
                          name: '#tenfive',
                          q: q105,
                          question: question105,
                          secq: q101,
                          secquestion: question101,
                          triq: q102,
                          triquestion: question102,
                          quadq: q104,
                          quadquestion: question104,
                          pentaq: q103,
                          pentaquestion: question103,
                          }
]

for (let i = 0; i < questionArray.length; i++) {
  $(document).on('mouseenter', questionArray[i].name, function(){
    setTimeout(function() {
    if(questionArray[i].question.val===false){
      questionArray[i].q.val.style.backgroundColor = "DimGray";
      questionArray[i].q.val.onclick = () => {
        if(questionArray[i].question.val===true){
          questionArray[i].q.val.style.backgroundColor = "DarkGray";
          questionArray[i].question.val=false;
        } else if (questionArray[i].question.val===false){
          questionArray[i].q.val.style.backgroundColor = "Crimson";
          questionArray[i].secq.val.style.backgroundColor = "DarkGray";
          questionArray[i].triq.val.style.backgroundColor = "DarkGray";
          questionArray[i].quadq.val.style.backgroundColor = "DarkGray";
          questionArray[i].pentaq.val.style.backgroundColor = "DarkGray";
          questionArray[i].question.val = true;
          questionArray[i].secquestion.val = false;
          questionArray[i].triquestion.val = false;
          questionArray[i].quadquestion.val = false;
          questionArray[i].pentaquestion.val = false;
        }
        arewedoneyet();
        return;
    }
    } else if(questionArray[i].question.val===true){
      questionArray[i].q.val.style.backgroundColor = "DarkRed";
      questionArray[i].q.val.onclick = () => {
        if(questionArray[i].question.val===true){
          questionArray[i].q.val.style.backgroundColor = "DarkGray";
          questionArray[i].question.val=false;
        } else if (questionArray[i].question.val===false){
          questionArray[i].q.val.style.backgroundColor = "Crimson";
          questionArray[i].secq.val.style.backgroundColor = "DarkGray";
          questionArray[i].triq.val.style.backgroundColor = "DarkGray";
          questionArray[i].quadq.val.style.backgroundColor = "DarkGray";
          questionArray[i].pentaq.val.style.backgroundColor = "DarkGray";
          questionArray[i].question.val = true;
          questionArray[i].secquestion.val = false;
          questionArray[i].triquestion.val = false;
          questionArray[i].quadquestion.val = false;
          questionArray[i].pentaquestion.val = false;
        }
        arewedoneyet();
        return;
    }
  }
  },40);
  }).on('mouseleave',questionArray[i].name, function(){
    setTimeout(function() {
      if(questionArray[i].question.val===false) {
        questionArray[i].q.val.style.backgroundColor = "DarkGray";
      } else if (questionArray[i].question.val===true) {
        questionArray[i].q.val.style.backgroundColor = "Crimson";
      }
    },40);
  });
}

let arewedoneyet = () => {
  let question1=false
  let question2=false
  let question3=false
  let question4=false
  let question5=false
  let question6=false
  let question7=false
  let question8=false
  let question9=false
  let question10=false
  let arewedone=false
  if(question11.val===true || question12.val===true || question13.val===true || question14.val===true || question15.val===true){
    question1=true;}
  if(question21.val===true || question22.val===true || question23.val===true || question24.val===true || question25.val===true){
    question2=true;}
  if(question31.val===true || question32.val===true || question33.val===true || question34.val===true || question35.val===true){
    question3=true;}
  if(question41.val===true || question42.val===true || question43.val===true || question44.val===true || question45.val===true){
    question4=true;}
  if(question51.val===true || question52.val===true || question53.val===true || question54.val===true || question55.val===true){
    question5=true;}
  if(question61.val===true || question62.val===true || question63.val===true || question64.val===true || question65.val===true){
    question6=true;}
  if(question71.val===true || question72.val===true || question73.val===true || question74.val===true || question75.val===true){
    question7=true;}
  if(question81.val===true || question82.val===true || question83.val===true || question84.val===true || question85.val===true){
    question8=true;}
  if(question91.val===true || question92.val===true || question93.val===true || question94.val===true || question95.val===true){
    question9=true;}
  if(question101.val===true || question102.val===true || question103.val===true || question104.val===true || question105.val===true){
    question10=true;}
  if(question1===true && question2===true && question3===true && question4===true && question5===true && question6===true && question7===true && question8===true && question9===true && question10===true) {
    arewedone = true;
  }
  if(arewedone===true) {
    hiddenButton.style.display = "block";
  }
}


hiddenButton.onclick = () => {
  hiddenButton.style.display = "none";
  document.getElementById("table1").style.display = "none";
  document.getElementsByClassName("title-row")[0].style.display = "none";
  document.getElementsByClassName("title-row")[1].style.display = "none";
  qualityChecks();
  scienceOlympiadSum = Comparison(scienceOlympiad);
  console.log(scienceOlympiadSum);
  mathOlympiadSum = Comparison(mathOlympiad);
  console.log(mathOlympiadSum);
  NHSSum = Comparison(NHS);
  console.log(NHSSum);
  knoweldgeBowlSum = Comparison(knowledgeBowl);
  console.log(knoweldgeBowlSum);
  scienceBowlSum = Comparison(scienceBowl);
  console.log(scienceBowlSum);
  stemAcademySum = Comparison(stemAcademy);
  console.log(stemAcademySum);
  GSASum = Comparison(GSA);
  console.log(GSASum);
  theatreSum = Comparison(theatre);
  console.log(theatreSum);
  debateSum = Comparison(debate);
  console.log(debateSum);
  DECASum = Comparison(GSA);
  console.log(DECASum);
  FBLASum = Comparison(FBLA);
  console.log(FBLASum);
  fencingSum =Comparison(fencing);
  console.log(fencingSum)
  sumArray = [
    {
      name: 'Science Olympiad',
      description: 'this club is super cool they do science and stuff',
      image: './scienceOlympiad.jpg',
      sum: scienceOlympiadSum,
    },
    {
      name: 'Math Olympiad',
      description: 'this club is really awesome, good math',
      image: './mathOlympiad.jpg',
      sum: mathOlympiadSum,
    },
    {
      name: 'Nation Honors Society',
      description: 'volunteering go vroooom',
      image: './no_current_image.png',
      sum: NHSSum,
    },
    {
      name: 'Knowledge Bowl',
      description: 'Knowledge Bowl is an academic club in which your team competes against other area teams in subjects like science, history, literature, and mathematics. Think "Jeopardy" but with teammates. They are always looking for new members to build the program and continue the legacy.',
      image: './knowledgeBowl.jpg',
      sum: knoweldgeBowlSum,
    },
    {
      name: 'Science Bowl',
      description: 'Competative team-based scientific trivia.',
      image: './no_current_image.png',
      sum: scienceBowlSum,
    },
    {
      name: 'STEM Academy',
      description: 'Community volunteering through elementary and middle school tutoring. The goal is to get kids in our community excited about science!',
      image: './no_current_image.png',
      sum: stemAcademySum,
    },
    {
      name: 'Gay Straight Alliance',
      description: 'In GSA we will: make friends, share peace & stop hate, play games & create. This is a safe space for all.',
      image: './GSA.png',
      sum: GSASum,
    },
    {
      name: 'Theatre',
      description: 'A club for all past, present and future Union theatre students! Whether you are in classes, interested in classes or wanting to join the after-school productions as a performer or technician, this club is open to you.',
      image: './no_current_image.png',
      sum: theatreSum,
    },
    {
      name: 'Debate',
      description: 'Bro they be debating so hard rn',
      image: './no_current_image.png',
      sum: debateSum,
    },
    {
      name: 'DECA',
      description: 'Interested in business, marketing, or want to improve your interview and people skills? Join Union DECA and compete with your friends in any business related event of your choice!',
      image: './no_current_image.png',
      sum: DECASum,
    },
    {
      name: 'FBLA',
      description: 'Students gain critical business skills, complete community service projects, network with businesses, and learn the leadership skills that are in high demand in the workplace.',
      image: './no_current_image.png',
      sum: FBLASum,
    },
    {
      name: 'Fencing',
      description: 'try not to get poked, that\'d look bad on a resume',
      image: './no_current_image.png',
      sum: fencingSum,
    }
  ]
  sumArray.sort((a, b) => {
    return a.sum - b.sum;
  }); /*not sure if this will work, who knows*/ 
  document.getElementById('title-row2').style.display = "block";
  document.getElementById('table2').style.display = "block";
  document.getElementById('paragraph1').innerHTML = (`1. ${sumArray[0].name}`);
  document.getElementById('paragraph12').innerHTML = (`${sumArray[0].description}`);
  document.getElementById('image1').src = sumArray[0].image;
  
  document.getElementById('paragraph2').innerHTML = (`2. ${sumArray[1].name}`);
  document.getElementById('paragraph22').innerHTML = (`${sumArray[1].description}`);
  document.getElementById('image2').src = sumArray[1].image;
  
  document.getElementById('paragraph3').innerHTML = (`3. ${sumArray[2].name}`);
  document.getElementById('paragraph32').innerHTML = (`${sumArray[2].description}`);
  document.getElementById('image3').src = sumArray[2].image;
    
  document.getElementById('paragraph4').innerHTML = (`4. ${sumArray[3].name}`);
  document.getElementById('paragraph42').innerHTML = (`${sumArray[3].description}`);
  document.getElementById('image4').src = sumArray[3].image;
    
  document.getElementById('paragraph5').innerHTML = (`5. ${sumArray[4].name}`);
  document.getElementById('paragraph52').innerHTML = (`${sumArray[4].description}`);
  document.getElementById('image5').src = sumArray[4].image;
    
  document.getElementById('paragraph6').innerHTML = (`6. ${sumArray[5].name}`);
  document.getElementById('paragraph62').innerHTML = (`${sumArray[5].description}`);
  document.getElementById('image6').src = sumArray[5].image;
    
  document.getElementById('paragraph7').innerHTML = (`7. ${sumArray[6].name}`);
  document.getElementById('paragraph72').innerHTML = (`${sumArray[6].description}`);
  document.getElementById('image7').src = sumArray[6].image;
    
  document.getElementById('paragraph8').innerHTML = (`8. ${sumArray[7].name}`);
  document.getElementById('paragraph82').innerHTML = (`${sumArray[7].description}`);
  document.getElementById('image8').src = sumArray[7].image;
    
  document.getElementById('paragraph9').innerHTML = (`9. ${sumArray[8].name}`);
  document.getElementById('paragraph92').innerHTML = (`${sumArray[8].description}`);
  document.getElementById('image9').src = sumArray[8].image;
    
  document.getElementById('paragraph10').innerHTML = (`10. ${sumArray[9].name}`);
  document.getElementById('paragraph102').innerHTML = (`${sumArray[9].description}`);
  document.getElementById('image10').src = sumArray[9].image;
    
  document.getElementById('paragraph11').innerHTML = (`11. ${sumArray[10].name}`);
  document.getElementById('paragraph112').innerHTML = (`${sumArray[10].description}`);
  document.getElementById('image11').src = sumArray[10].image;
    
  document.getElementById('paragraphtwelve').innerHTML = (`12. ${sumArray[11].name}`);
  document.getElementById('paragraph122').innerHTML = (`${sumArray[11].description}`);
  document.getElementById('image12').src = sumArray[11].image;
  
  
  document.getElementById('showMoreButton').style.display = "block";
}
let qualityChecks = () => {
  if(question11.val===true) {
    math -= 4;
  } else if (question12.val===true) {
    math -= 2;
  } else if (question14.val===true) {
    math += 2;
  } else if (question15.val===true) {
    math +=4;
  }
  console.log(math)
  if(question21.val===true) {
    science -= 4;
  } else if (question22.val===true) {
    science -= 2;
  } else if (question24.val===true) {
    science += 2;
  } else if (question25.val===true) {
    science +=4;
  }
  if(question31.val===true) {
    compsci -= 4;
  } else if (question32.val===true) {
    compsci -= 2;
  } else if (question34.val===true) {
    compsci += 2;
  } else if (question35.val===true) {
    compsci +=4;
  }
  if(question41.val===true) {
    volunteering -= 4;
  } else if (question42.val===true) {
    volunteering -= 2;
  } else if (question44.val===true) {
    volunteering += 2;
  } else if (question45.val===true) {
    volunteering +=4;
  }
  if(question51.val===true) {
    clubSports -= 4;
  } else if (question52.val===true) {
    clubSports -= 2;
  } else if (question54.val===true) {
    clubSports += 2;
  } else if (question55.val===true) {
    clubSports +=4;
  }
  if(question61.val===true) {
    academicGeneral -= 4;
  } else if (question62.val===true) {
    academicGeneral -= 2;
  } else if (question64.val===true) {
    academicGeneral += 2;
  } else if (question65.val===true) {
    academicGeneral +=4;
  }
  if(question71.val===true) {
    social -= 4;
  } else if (question72.val===true) {
    social -= 2;
  } else if (question74.val===true) {
    social += 2;
  } else if (question75.val===true) {
    social +=4;
  }
  if(question81.val===true) {
    teamwork -= 4;
  } else if (question82.val===true) {
    teamwork -= 2;
  } else if (question84.val===true) {
    teamwork += 2;
  } else if (question85.val===true) {
    teamwork +=4;
  }
  if(question91.val===true) {
    music -= 4;
  } else if (question92.val===true) {
    music -= 2;
  } else if (question94.val===true) {
    music += 2;
  } else if (question95.val===true) {
    music +=4;
  }
  if(question101.val===true) {
    diversity -= 4;
  } else if (question102.val===true) {
    diversity -= 2;
  } else if (question104.val===true) {
    diversity += 2;
  } else if (question105.val===true) {
    diversity += 4;
  }
}
Comparison = (clubArray) => {
  personalArray = [math, science, volunteering, music, social, teamwork, academicGeneral, clubSports, compsci, diversity];
  diff = personalArray.map(function(item, index) {
    return item - clubArray[index];
  })
  const absoluteValue = (x) => {
    return x.map(Math.abs);
  } /*not sure if this is actually running this function, i guess we'll see */
  absoluteValueDiff = absoluteValue(diff);
  console.log(absoluteValueDiff);
  let personalArraySum = 0;
  for (let i = 0; i < absoluteValueDiff.length; i++) {
    personalArraySum += absoluteValueDiff[i];
  }
  return (personalArraySum);
}

showMoreButton.onclick = () => {
  if(showMoreButton.innerHTML==="Load More"){
    showMoreButton.innerHTML = "Hide";
    document.getElementById("table3").style.display = "block";
  }else if(showMoreButton.innerHTML==="Hide"){
    showMoreButton.innerHTML = "Load More";
    document.getElementById("table3").style.display = "none";
  }
}