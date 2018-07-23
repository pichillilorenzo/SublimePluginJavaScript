// @flow

const util = require('./util.js'),
      config = require('./config.js'),
      windowCommands = require('./windowCommandList.js'),
      Window = require('./Window.js')

class WindowCommand {

  /*::
  self: MappedVariable
  */

  constructor () {
    windowCommands[this.constructor.name] = this
  }

  _init (s /*: MappedVariable*/) /*: void*/ {
    this.self = s
  }

  async run(args /*: Object*/, step /*: StepObject*/) /*: Promise<any>*/ {

  }

  async is_enabled (args /*: Object*/, step /*: StepObject*/) /*: Promise<boolean>*/ {
    return true
  }

  async is_visible (args /*: Object*/, step /*: StepObject*/) /*: Promise<boolean>*/ {
    return true
  }

  window (step /*: StepObject*/) /*: Promise<Window>*/ {
    return util.simpleEval(`${config.variableMappingName}["${this.self.mapTo}"].window`, true, step, ((result, resultObject) => {
      return new Window(resultObject)
    }) )
  }

}

module.exports = WindowCommand