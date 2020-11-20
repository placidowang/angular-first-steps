// import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   constructor(private _httpService: Http) { }
//   // title = 'angular-simpletalk';
//   accessPointUrl: string = 'https://localhost:44345/api/values';
//   apiValues: string[] = [];
//   ngOnInit() {
//     this._httpService.get(this.accessPointUrl).subscribe(values => {
//       this.apiValues = values.json() as string[];
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public notes: Array<any>;
  public currentNote: any;
  constructor(private notesService: NotesService) {
    notesService.get().subscribe((data: any) => this.notes = data);
    this.currentNote = this.getDefaultNote();
  }
  private getDefaultNote() {
    return {
      id: undefined,
      title: '',
      description: ''
    }
  }
  public createUpdateNote = function (note: any) {
    let noteWithId = _.find(this.notes, (el => el.id === note.id));
    if (noteWithId) {
      const updateIndex = _.findIndex(this.notes, { id: noteWithId.id });
      this.notesService.update(note).subscribe(
        this.notes.splice(updateIndex, 1, note)
      );
    } else {
      this.notesService.add(note).subscribe(
        noteRecord => {
          note.id = noteRecord.id;
          this.notes.push(note)
        }
      );
    }
    this.currentNote = this.getDefaultNote();
  };
  public editNote = function(record: any) {
    this.currentNote = record;
  };
  public newNote = function () {
    this.currentNote = this.getDefaultNote();
  };
  public deleteNote(record) {
    const deleteIndex = _.findIndex(this.notes, { id: record.id });
    this.notesService.remove(record).subscribe(
      result => this.notes.splice(deleteIndex, 1)
    );
  }
  ngOnInit() {
  }
}