const db = require("../../../data/dbConfig");

module.exports = {
  getHospitals,
  getHospitalsBy,
  getHospitalsDoctors,
  addHospital
};

async function getHospitals() {
  const hospitals = await db("hospitals");
  return hospitals;
}

async function getHospitalsBy(param) {
  const hospital = await db("hospitals")
    .where(param)
    // .first();

  return hospital;
}

async function getHospitalsDoctors(id) {
  const doctors = await db("hospitals")
    .join("doctors", "hospitals.id", "doctors.hospital_id")
    .where({ "hospitals.id": id });

  return doctors;
}

async function addHospital(hospital) {
  const [id] = await db("hosptals")
    .insert(hospital)
    .returning("id");

  const newHospital = await getHospitalsBy({ id: id });

  return newHospital;
}
