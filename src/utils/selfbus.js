class Selfbus {
  constructor () {
    this.eventfuncs = {}
  }
  $on (eventnames, cbk) {
    if (!this.eventfuncs[eventnames]) {
      this.eventfuncs[eventnames] = [cbk]
    } else {
      this.eventfuncs[eventnames].push(cbk)
    }
  }
  $emit (eventnames, params) {
    this.eventfuncs[eventnames].forEach(element => {
      element(params)
    })
  }
}
export default Selfbus
