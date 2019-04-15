const db = require("../../../data/dbConfig");

module.exports = {
  getDoctors,
  getDoctorsById,
  addDoctor,
  updateDoctor,
  deleteDoctor
};

async function getDoctors() {
  const doctors = await db("doctors");

  return doctors;
}

async function getDoctorsById(id) {
  const doctor = await db("doctors")
    .where({ doctor_id: id })
    .first();

  return doctor;
}

async function addDoctor(doctor) {
  const [id] = await db("doctors")
    .insert(doctor)
    .returning("id");

  return getDoctorsById(id);
}

async function updateDoctor(id, changes) {
  const changedDoctor = await db("doctors")
    .where({ doctor_id: id })
    .update(changes);

  return changedDoctor;
}

async function deleteDoctor(id) {
  const deleted = await db("doctors")
    .where({ doctor_id: id })
    .del();

  return deleted;
}
