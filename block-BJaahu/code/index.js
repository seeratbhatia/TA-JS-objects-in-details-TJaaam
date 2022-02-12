//prototypal pattern
let questionMethods = {
    isAnswerCorrect: function (index) {
        return index === this.isAnswerCorrect;
    },
    getCorrectAnswer: function () {
        return this.options[this.getCorrectAnswer];
    },  
};

function createQuestion(tittle, options,
    getCorrectAnswerIndex) {
        let question = Object.create(questionMethods);
        question.tittle = tittle;
        question.options = options;
        question.getCorrectAnswerIndex = CorrectAnswerIndex;
        return question;
    }

    const firstQuestion = createQuestion(
            "Where is the capital of Jordan",
            ["Tashkent", "Amaan", "Kuwait City", 'Nairobi'],
            1
          );
          let secondQuestion = createQuestion(
            "Where is the capital of Jamaica",
            ["Tashkent", "Amaan", "Kingston", "Nairobi"],
            2
          );

          // pseidocclassic pattern
    
    function CreateQuestion(tittle, options,
        getCorrectAnswerIndex) {
            this.tittle = tittle;
            this.options = options;
            this.getCorrectAnswerIndex = CorrectAnswerIndex;
        }

    createQuestion.prototype = {
            isAnswerCorrect: function (index) {
                return index === this.CorrectAnswerIndex;
            
            },
    getCorrectAnswer: function() {
        return this.options[this.CorrectAnswerIndex];
    },
};

const firstQuestion = new CreateQuestion(
    "Where is the capital of Jordan",
    ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
    1
  );
  const secondQuestion = new CreateQuestion(
    "Where is the capital of Jamaica",
    ["Tashkent", "Amaan", "Kingston", "Nairobi"],
    2
  );

  // class pattern

class CreateQuestion{
    constructor(tittle, options,
    correctAnswerIndex) {
        this.tittle = tittle;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
        
    }

    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}

const firstQuestion = new CreateQuestion(

    "Where is the capital of Jordan",
    ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
  );
const secondQuestion = new CreateQuestion(
   "Where is the capital of Jamaica",
   ["Tashkent", "Amaan", "Kingston", "Nairobi"],
   2
   );


        
    
    




    
    