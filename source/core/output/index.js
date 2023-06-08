const chalk = require("./chalk")
const { hexCodes } = require("./systemConfig.json")
const { systemName, doDebug } = require("../config.json")

module.exports = {
    // prints an output log to the console
    async output(type, output, colour) {
        if (doDebug == false) return;
        if (!type) return;
        if (!output) return;

        let hexColour = hexCodes[colour]
        if (!hexCodes[colour]) {
            hexColour = hexCodes["white"]
        }

        try {
            console.log(chalk.hex(hexColour) (`[${systemName}] (${type}) > ${output}`))
        } catch (err) {
            console.log(`[${systemName}] {system-backup} (${type}) > ${output}`)
        }
    }
}