'use strict';

module.exports.Plugin = ArtilleryLambdaPlugin;
const path = require('path');
const fs = require("fs");

function ArtilleryLambdaPlugin(script, events, context) {
  // Prints out "🧑 New load phase started".
  for(let [sc_id, scenario] of Object.entries(script.scenarios)){
    for(let [fl_id, flow] of Object.entries(scenario.flow)){
      for(let [ac_id, action] of Object.entries(flow)){
        if(typeof action.json === 'string'){
          const match = action.json.match(/^!include\(([^)]+)\)$/);
          if(match){
            const baseDir = path.dirname(context.scriptPath);
            script.scenarios[sc_id].flow[fl_id][ac_id].json  = JSON.parse(fs.readFileSync(path.join(baseDir, match[1])).toString());
          }
        }
      }
    }
  }
}
