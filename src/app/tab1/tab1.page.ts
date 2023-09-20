import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, NgForOf, AsyncPipe],
})
export class Tab1Page {
  private readonly userService = inject(UsersService);

  usersResponse$ = this.userService.userApiResponse$();
  constructor() {}

  reload() {
    this.usersResponse$ = this.userService.userApiResponse$();
  }

  showWithDelay() {
    this.usersResponse$ = this.userService.userApiResponse$(false, 5000);
  }

  showErrorState() {
    this.usersResponse$ = this.userService.userApiResponse$(true);
  }
}
