export default class Team {
  constructor() {
    this.sumChar = 0;
    this.team = [];
  }

  add(character) {
    this.team.push(character);
    this.sumChar++;
  }

  // for tests
  addAll(...characters) {
    for (const character of characters) {
      this.team.push(character);
      this.sumChar++;
    }
  }

  [Symbol.iterator]() {
    return {
      current: -1,
      last: this.sumChar,
      charTeam: this.team,

      next() {
        this.current++;
        if (this.current < this.last) {
          return { value: this.charTeam[this.current], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
