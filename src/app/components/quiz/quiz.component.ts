import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Question } from 'src/app/models/question';
import { HighscoreService } from 'src/app/services/highscore/highscore.service';
import { HighScore } from 'src/app/models/highscore';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  totalCorrect = 0;

  questionOne: Question[] = [
    {question: 'In your armpit', value: true},
    {question: 'In your hands', value: false},
    {question: 'Down towards your belly', value: false},
    {question: 'In a direction without people', value: false},
  ];

  questionTwo: Question[] = [
    {question: 'The amount of time you need to be isolated from other people ', value: false},
    {question: 'The amount of time it takes from getting infected to getting the disease', value: true},
    {question: 'The amount of time you are sick', value: false},
    {question: 'The amount of time a virus is in a country', value: false},
  ]


  questionThree: Question[] = [
    {question: '10 - 20 seconds', value: false},
    {question: '20 - 30 seconds', value: false},
    {question: '30 - 40 seconds', value: false},
    {question: '45 - 60 seconds', value: true},
  ];


  answersOne: Question[] = [];
  answersTwo: Question[] = [];
  answersThree: Question[] = [];

  playerName: string;
  highscores: any = [];
  displayedColumns: string[] = ['score', 'name', 'created'];
  constructor(private highScoreSvc: HighscoreService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  checkAnswer(answer: Question) {
    if (answer.value) {
      this.totalCorrect++;
    }
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  async getHighScore() {

    this.spinner.show();  
    const highscore: HighScore = {
      score: this.totalCorrect,
      created: new Date(),
      name: this.playerName
    }

    await this.highScoreSvc.addHighScore(highscore);

    await this.highScoreSvc.getHighScores().subscribe(data => {
      this.highscores = data;

      this.highscores.sort((a, b) => b.score - a.score);
      this.spinner.hide();
    });
  }
}

