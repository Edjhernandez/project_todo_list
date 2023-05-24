export default class Listprint {
    arr;

    constructor() {
      this.arr = [];
    }

    addtask(e) {
      this.arr.push(e);
    }

    remove1task(e) {
      this.arr.splice(e, 1);
    }

    removesometasks() {
      return this.arr.filter((e) => !e.state);
    }
}