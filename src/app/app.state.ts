import { State } from 'ngxs';

export interface AppStateModel {
  people: Object[];
  search: string;
}

export class SetPeople {
  constructor(public payload) { }
}

export class FilterPeople {
  constructor(public payload) { }
}


@State<AppStateModel> ({
  name: 'people',
  defaults: {
    people: [],
    search: ''
  }
})
export class AppState {

}
