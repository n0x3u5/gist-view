// @flow
class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah! I'm ${this.name}!`
  }
}

export default Dog
