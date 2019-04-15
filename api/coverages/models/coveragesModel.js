const db = require("../../../data/dbConfig");

module.exports = {
  getCoverages,
  getCoveragesBy,
  addCoverage,
  updateCoverage,
  deleteCoverage
};

async function getCoverages() {
  const coverages = await db("coverages");

  return coverages;
}

async function getCoveragesBy(param) {
  const coverage = await db("coverages").where(param);

  return coverage;
}

async function addCoverage(coverage) {
  const [id] = await db("coverages")
    .insert(coverage)
    .returning("id");

  return getCoveragesBy({ id: id });
}

async function updateCoverage(id, changes) {
  const changedCoverage = await db("coverages")
    .where({ id: id })
    .update(changes);

  return changedCoverage;
}

async function deleteCoverage(id) {
  const deleted = await db("coverages")
    .where({ id: id })
    .del();

  return deleted;
}
