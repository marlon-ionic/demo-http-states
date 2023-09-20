import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ApiPipe } from '../pipes/api.pipe';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, ApiPipe, AsyncPipe, NgForOf]
})
export class Tab2Page {
  private readonly userService = inject(UsersService);
  user$ = this.userService.users$();

  constructor() {}

  reload() {
    this.user$ = this.userService.users$();
  }

  showWithDelay() {
    this.user$ = this.userService.users$(false, 5000);
  }

  showErrorState() {
    this.user$ = this.userService.users$(true);
  }

}
