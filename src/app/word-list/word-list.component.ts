import { Component, OnInit } from '@angular/core';
import { WordService } from '../word.service';
import { Word } from '../word.model';

@Component({
	selector: 'app-word-list',
	templateUrl: './word-list.component.html',
	styleUrls: [ './word-list.component.css' ]
})
export class WordListComponent implements OnInit {
	p: number = 1;
	words: Word[] = [];
	pageOfItems: Array<any>;
	count: number = 5765;
	constructor(private wordService: WordService) {}

	ngOnInit() {
		this.wordService.getWords().subscribe((data) => {
			this.count = data.length;
			this.words = data.map((e) => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data() as object
				} as Word;
			});
		});
		// this.query();
		// this.words.push({ id: 'sdfsdfvsd', rus: 'sdfsdf', eng: 'sdfsdfsf', group: 1 });
	}
	create(word: Word) {
		this.wordService.createWord(word);
		console.log('create ' + word.rus);
	}

	// query() {
	// 	SampleJson.forEach((element, i) => {
	// 		setTimeout(() => {
	// 			this.create(element);
	// 		}, i * 500);
	// 	});
	// }
	update(word: Word) {
		this.wordService.updateWord(word);
	}

	delete(id: string) {
		this.wordService.deleteWord(id);
	}
}
