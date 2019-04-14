const db = require("../../../data/dbConfig");

module.exports = {
  getInsurers,
  getInsurersBy,
  getInsurersCoverages,
  addInsurer
};

async function getInsurers() {
  const insurers = await db("insurers");
  return insurers;
}

async function getInsurersBy(param) {
  const insurer = await db("insurers").where(param);
  // .first();

  return insurer;
}

async function getInsurersCoverages(id) {
  const coverages = await db("insurers")
    .join("coverages", "insurers.id", "coverages.insurer_id")
    .where({ "insurers.id": id });

  return coverages;
}

async function addInsurer(insurer) {
  const [id] = await db("insurers")
    .insert(insurer)
    .returning("id");

  const newInsurer = await getInsurersBy({ id: id });

  return newInsurer;
}
