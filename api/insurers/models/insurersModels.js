const db = require("../../../data/dbConfig");

module.exports = {
  getInsurers,
  getInsurersById,
  getInsurersCoverages,
  addInsurer,
  updateInsurer,
  deleteInsurer
};

async function getInsurers() {
  const insurers = await db("insurers");
  return insurers;
}

async function getInsurersById(id) {
  const insurer = await db("insurers")
    .where({ insurer_id: id })
    .first();

  return insurer;
}

async function getInsurersCoverages(id) {
  const data = await db("insurers")
    .join("coverages", "insurers.insurer_id", "coverages.insurer_id")
    .where({ "insurers.insurer_id": id });

  const { insurer_id, insurer_name } = data[0];

  const coverages = data.map(coverage => ({
    coverage_id: coverage.coverage_id,
    insurer_id: coverage.insurer_id,
    procedure_id: coverage.procedure_id,
    amount: coverage.amount
  }));

  return {
    insurer_id,
    insurer_name,
    coverages
  };
}

async function addInsurer(insurer) {
  const [id] = await db("insurers")
    .insert(insurer)
    .returning("id");

  const newInsurer = await getInsurersById({ id: id });

  return newInsurer;
}

async function updateInsurer(id, changes) {
  const changedInsurer = await db("insurers")
    .where({ id: id })
    .update(changes);

  return changedInsurer;
}

async function deleteInsurer(id) {
  const deleted = await db("insurers")
    .where({ insurer_id: id })
    .del();

  return deleted;
}
