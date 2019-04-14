const db = require("../../../data/dbConfig");

module.exports = {
  getCoverages,
  getCoveragesBy,
  addCoverage
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
