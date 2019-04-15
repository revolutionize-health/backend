const db = require("../../../data/dbConfig");

module.exports = {
  getDoctors,
  getDoctorsBy,
  addDoctor,
  updateDoctor,
  deleteDoctor
};

async function getDoctors() {
  const doctors = await db("doctors");

  return doctors;
}

async function getDoctorsBy(param) {
  const doctor = await db("doctors").where(param);

  return doctor;
}

async function addDoctor(doctor) {
  const [id] = await db("doctors")
    .insert(doctor)
    .returning("id");

  return getDoctorsBy({ id: id });
}

async function updateDoctor(id, changes) {
  const changedDoctor = await db("doctors")
    .where({ id: id })
    .update(changes);

  return changedDoctor;
}

async function deleteDoctor(id) {
  const deleted = await db("doctors")
    .where({ id: id })
    .del();

  return deleted;
}
