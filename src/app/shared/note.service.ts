import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('Test title', 'Test content'),
    new Note ('whats up', 'lets rock')
  ];

  constructor() { }

  getNotes(){
    return this.notes
  }

  getNote(id: string) {
    this.notes.find(n => {
      //return true when n.id equals the id passed into this method
      return n.id ===id
    })
  }

  addNote(note: Note) {
    this.notes.push(note)
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id)
    Object.assign(note, updatedFields)
  }

  deleteNote(id: string){
    const noteIndex = this.notes.findIndex(n =>n.id ===id)
    if (noteIndex == -1) return

    this.notes.splice(noteIndex, 1)
  }
}
