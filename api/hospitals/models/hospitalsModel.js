const db = require("../../../data/dbConfig");

module.exports = {
  getHospitals,
  getHospitalsById,
  getHospitalsDoctors,
  addHospital,
  updateHospital,
  deleteHospital
};

async function getHospitals() {
  const hospitals = await db("hospitals");

  return hospitals;
}

async function getHospitalsById(id) {
  const hospital = await db("hospitals")
    .where({ hospital_id: id })
    .first();

  return hospital;
}

async function getHospitalsDoctors(id) {
  const hospital = await db("hospitals")
    .where({ hospital_id: id })
    .first();

  const doctors = await db("doctors").where({ hospital_id: id });

  return { hospital, doctors };
}

async function addHospital(hospital) {
  console.log(hospital);
  const [id] = await db("hospitals")
    .insert(hospital)
    .returning("hospital_id");

  console.log(id);

  const newHospital = await getHospitalsById(id);

  return newHospital;
}

async function updateHospital(id, changes) {
  const updatedId = await db("hospitals")
    .where({ hospital_id: id })
    .update(changes)

    const changedHospital = await getHospitalsById(updatedId);

  return changedHospital;
}

async function deleteHospital(id) {
  const deleted = await db("hospitals")
    .where({ hospital_id: id })
    .del();

  return deleted;
}
