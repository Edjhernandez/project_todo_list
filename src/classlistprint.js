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
}