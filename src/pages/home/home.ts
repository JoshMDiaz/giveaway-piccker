import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rows: Array<{}>;
  winner: string;
  loading: boolean;
  showWinner: boolean;
  // giveaways: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController) {
    // constructor(public navCtrl: NavController, af: AngularFireDatabase) {
    // this.giveaways = af.list('/giveaways');
    this.winner = null;
  }

  newApplicant(rows) {
    this.rows.unshift({});
    this.checkRows(rows);
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

  checkRows(rows) {
    if (rows.length === 0) {
        return true;
    }
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].name === '' || rows[i].entries === '' || rows[i].name === null || rows[i].entries === null || rows[i].name === undefined || rows[i].entries === undefined) {
        return true;
      }
    }
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
    this.loading = true;
    this.winner = this.pickAWinner(rows);
    this.showWinner = true;
    setTimeout(()=>{ this.loading = false }, 750)
  }

  remove(i) {
    this.rows.splice(i, 1);
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

  increaseEntry(row) {
    row.entries ++;
  }

  decreaseEntry(row) {
    if (row.entries > 0) {
      row.entries --;
    }
  }


  // saveGiveaway(rows) {
  //   this.giveaways.push({
  //     name: rows.name,
  //     entries: rows.entries
  //   })
  // }

  ngOnInit() {
    this.rows = [{
      name: '',
      entries: ''
    }];
    this.showWinner = false;
  }

}
