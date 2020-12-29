
class PromiseQuene {
  concurrency = 5;
  _current = 0;
  _quene = [];

  constructor(option = {}) {
    if (option.concurrency) {
      this.concurrency = option.concurrency;
    }
  }

  add(promiseFn) {
    this._quene.push(promiseFn);
    this.loadNext();
  }

  loadNext() {
    if (this._quene.length === 0 || this.concurrency === this._current) {
      return;
    }
    this._current++;
    const fn = this._quene.shift();
    const promise = fn();
    promise.then(this.onLoad.bind(this)).catch(this.onLoad.bind(this));
  }

  onLoad() {
    this._current--;
    this.loadNext();
  }
}

module.exports = PromiseQuene;