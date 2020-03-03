import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Word } from 'src/app/word.model';

@Injectable({
	providedIn: 'root'
})
export class WordService {
	constructor(private firestore: AngularFirestore) {}
	getWords() {
		return this.firestore.collection('words', (ref) => ref.limit(100)).snapshotChanges();
		// return this.firestore.collection('words', (ref) => ref.limit(500).where('group', '==', '1')).snapshotChanges();
	}
	createWord(word: Word) {
		return this.firestore.collection('words').add(word);
	}
	updateWord(word: Word) {
		delete word.id;
		this.firestore.doc('words/' + word.id).update(word);
	}
	deleteWord(wordId: string) {
		this.firestore.doc('words/' + wordId).delete();
	}
}
