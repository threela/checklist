const rules = require('../config/rules');

function evaluate(data) {
  return rules.map(rule => {
    const passed = rule.evaluate(data);
    return { name: rule.name, status: passed ? "Passed" : "Failed" };
  });
}

module.exports = evaluate;