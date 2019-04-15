const db = require("../../../data/dbConfig");

module.exports = {
  getCoverages,
  getCoveragesById,
  addCoverage,
  updateCoverage,
  deleteCoverage
};

async function getCoverages() {
  const coverages = await db("coverages");

  return coverages;
}

async function getCoveragesById(id) {
  const coverage = await db("coverages")
    .where({ coverage_id: id })
    .first();

  return coverage;
}

async function addCoverage(coverage) {
  const [id] = await db("coverages")
    .insert(coverage)
    .returning("id");

  return getCoveragesById(id);
}

async function updateCoverage(id, changes) {
  const changedCoverage = await db("coverages")
    .where({ coverage_id: id })
    .update(changes);

  return changedCoverage;
}

async function deleteCoverage(id) {
  const deleted = await db("coverages")
    .where({ coverage_id: id })
    .del();

  return deleted;
}
