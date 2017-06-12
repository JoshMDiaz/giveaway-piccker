import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rows: Array<{}>;
  winner: string;
  showWinner: boolean;

  constructor(public navCtrl: NavController) {
    this.winner = null;
  }

  newApplicant() {
    this.rows.push({});
  }

  getAllEntries(arr) {
    let allEntries = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].entries; j++) {
        allEntries.push(arr[i].name);
      }
    }
    return allEntries;
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  pickAWinner (arr) {
    let entries: any = this.shuffleArray(this.getAllEntries(arr));
    let todaysWinner = entries[Math.floor(Math.random() * entries.length)];
    return todaysWinner;
  }

  submit(rows) {
    this.showWinner = true;
    this.winner = this.pickAWinner (rows);
  }

  newGiveaway() {
    this.showWinner = false;
    this.rows = [{
      name: '',
      entries: ''
    }];
  }

  retry() {
    this.showWinner = false;
  }

  ngOnInit() {
    this.rows = [{
      name: '',
      entries: ''
    }];
    this.showWinner = false;
  }

}
