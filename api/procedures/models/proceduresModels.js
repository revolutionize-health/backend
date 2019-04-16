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
  const data = await db("procedures")
    .join("coverages", "procedures.procedure_id", "coverages.procedure_id")
    .where({ "procedures.procedure_id": id });

  const { procedure_id, procedure_name, cost } = data[0];

  const coverages = data.map(coverage => ({
    coverage_id: coverage.coverage_id,
    insurer_id: coverage.insurer_id,
    amount: coverage.amount
  }));

  return {
    procedure_id,
    procedure_name,
    cost,
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
  const changedProcedure = await db("procedures")
    .where({ procedure_id: id })
    .update(changes);

  return changedProcedure;
}

async function deleteProcedure(id) {
  const deleted = await db("procedures")
    .where({ procedure_: id })
    .del();

  return deleted;
}
