const EventEmitter = require("events");
let clickeditems = {};
class Logger extends EventEmitter {
  log(itemType) {
    this.emit(
      "click",
      (clickeditems["type"] = itemType),
      (clickeditems["clicked"] = true)
    );
  }
}

const logger = new Logger();

logger.on("click", (data) => console.log(data));
logger.log("Post");
console.log(clickeditems);
module.exports = clickeditems;
