const db = require("../../../data/dbConfig");

module.exports = {
  getProcedures,
  getProceduresById,
  getProceduresCoverages,
  addProcedure,
  updateProcedure,
  deleteProcedure
};

async function getProcedures() {
  const procedures = await db("procedures");
  return procedures;
}

async function getProceduresById(id) {
  const procedure = await db("procedures")
    .where({ procedure_id: id })
    .first();

  return procedure;
}

async function getProceduresCoverages(id) {
  const procedure = await getProceduresById(id);

  const coverages = await db("coverages").where({ procedure_id: id });

  return {
    procedure,
    coverages
  };
}

async function addProcedure(procedure) {
  const [id] = await db("procedures")
    .insert(procedure)
    .returning("procedure_id");

  const newprocedure = await getProceduresById(id);

  return newprocedure;
}

async function updateProcedure(id, changes) {
  const updatedId = await db("procedures")
    .where({ procedure_id: id })
    .update(changes);

  const changedProcedure = await getProceduresById(updatedId);

  return changedProcedure;
}

async function deleteProcedure(id) {
  const deleted = await db("procedures")
    .where({ procedure_id: id })
    .del();

  return deleted;
}
