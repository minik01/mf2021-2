import {Component, OnInit} from '@angular/core';
import 'firebase/storage';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';


@Component({
  selector: 'dol-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  profileUrl: Observable<any>;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    const ref = this.storage.ref('Gosia.mp4');
    this.profileUrl = ref.getDownloadURL();
  }

}
