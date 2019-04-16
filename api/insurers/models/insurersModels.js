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
  const insurer = await db("insurers")
    .where({ insurer_id: id })
    .first();

  const coverages = await db("coverages").where({ insurer_id: id });

  return {
    insurer,
    coverages
  };
}

async function addInsurer(insurer) {
  const [id] = await db("insurers")
    .insert(insurer)
    .returning("insurer_id");

  const newInsurer = await getInsurersById(id);

  return newInsurer;
}

async function updateInsurer(id, changes) {
  const updatedId = await db("insurers")
    .where({ insurer_id: id })
    .update(changes);

  const changedInsurer = await getInsurersById(updatedId);

  return changedInsurer;
}

async function deleteInsurer(id) {
  const deleted = await db("insurers")
    .where({ insurer_id: id })
    .del();

  return deleted;
}
