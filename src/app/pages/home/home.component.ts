import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import * as faker from 'faker'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = []

  constructor() {
    faker.setLocale('en_US')
    this.users = this.generateFakeData()
  }

  generateFakeData() {
    let quantityOfData = faker.datatype.number(50)
    let users: User[] = []

    let i = 0
    while (i < quantityOfData) {
      users.push({ username: faker.internet.userName().toLowerCase(), userImageSource: `https://i.pravatar.cc/${faker.datatype.number(1000)}`})
      console.log(faker.internet.userName().toLowerCase())
      i++
    }

    users.push({
      username: 'Abhi1289',
      userImageSource: '../assets/img/me.jpg'
    })

    return users
  }

  ngOnInit(): void {
  }
}
