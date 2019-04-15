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
  const data = await db("hospitals")
    .join("doctors", "hospitals.hospital_id", "doctors.hospital_id")
    .where({ "hospitals.hospital_id": id });

  const { hospital_name, hospital_id, hospital_website } = data[0];

  const doctors = data.map(doctor => ({
    doctor_id: doctor.doctor_id,
    doctor_name: doctor.doctor_name,
    doctor_website: doctor.doctor_website
  }));

  return {
    hospital_id,
    hospital_name,
    hospital_website,
    doctors
  };
}

async function addHospital(hospital) {
  const [id] = await db("hosptals")
    .insert(hospital)
    .returning("id");

  const newHospital = await getHospitalsById(id);

  return newHospital;
}

async function updateHospital(id, changes) {
  const changedHospital = await db("hospitals")
    .where({ hospital_id: id })
    .update(changes);

  return changedHospital;
}

async function deleteHospital(id) {
  const deleted = await db("hospitals")
    .where({ hospital_id: id })
    .del();

  return deleted;
}
