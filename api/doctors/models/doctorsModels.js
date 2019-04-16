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
    .returning("doctor_id");

  return getDoctorsById(id);
}

async function updateDoctor(id, changes) {
  console.log(changes)
  const updatedId = await db("doctors")
    .where({ doctor_id: id })
    .update(changes);

    console.log(updatedId)

    const updatedDoctor = await getDoctorsById(updatedId)

  return updatedDoctor;
}

async function deleteDoctor(id) {
  const deleted = await db("doctors")
    .where({ doctor_id: id })
    .del();

  return deleted;
}
