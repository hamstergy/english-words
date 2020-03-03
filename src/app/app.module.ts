import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { WordListComponent } from './word-list/word-list.component';

@NgModule({
	declarations: [ AppComponent, WordListComponent ],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule.enablePersistence(),
		AngularFireDatabaseModule,
		NgxPaginationModule
	],
	providers: [ AngularFirestore ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
