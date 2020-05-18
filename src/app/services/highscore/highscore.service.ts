import { Injectable } from '@angular/core';
import { HighScore } from 'src/app/models/highscore';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getHighScores() {
    return this.http.get<HighScore>(environment.API_URL + 'quiz');
  }

  async addHighScore(highscore: HighScore) {
    await this.http
      .post<HighScore>(environment.API_URL + 'quiz', highscore)
      .toPromise()
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  playHighScore(){
      let audio = new Audio();
      audio.src = './assets/icons/theme.mp3';
      audio.load();
      audio.play();
  }
}
