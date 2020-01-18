import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LocalDataSource } from '../../../../ng2-smart-table';

@Component({
  selector: 'numberselect-example-filter',
  template: `
    <ng2-smart-table
      [settings]="settings"
      [source]="source"></ng2-smart-table>
  `,
})
export class NumberselectFilterExampleComponent {
  test = [];
  settings = {
    language: 'fr',
    attr: {
      id: 'NumberselectFilterExampleComponent',
      rememberFilter: true
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        width: '20%',
        title: 'ID',
      },
      name: {
        width: '20%',
        title: 'Full Name',
      },
      username: {
        width: '20%',
        title: 'User Name',
      },
      email: {
        width: '20%',
        title: 'Email',
      },
      recAge: {
        width: '20%',
        title: 'Age',
        valuePrepareFunction: age => {
          return `${age} ans`;
        },
        filter: {
          type: 'number',
          config: {
            selectType: 'between',
            defaultValue: 29,
            defaultEndValue: 32
          }
        },
      },
    },
  };

  data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      notShownField: true,
      recAge: 27,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      notShownField: true,
      recAge: 27,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      notShownField: false,
      recAge: 28,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      notShownField: false,
      recAge: 28,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      notShownField: false,
      recAge: 29,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      notShownField: false,
      recAge: 29,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      notShownField: false,
      recAge: 29,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      notShownField: true,
      recAge: 37,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      notShownField: false,
      recAge: 47,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      notShownField: false,
      recAge: 49,
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
      notShownField: true,
      recAge: 52,
    },
  ];

  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }
}
