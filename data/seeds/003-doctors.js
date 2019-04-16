exports.seed = function(knex, Promise) {
  return knex("doctors").insert([
    {
      doctor_name: "Doctor McDoctorson",
      doctor_website: "doctormcdoctorson.com",
      hospital_id: 1
    },
    {
      doctor_name: "Surgeon McSurgeonson",
      doctor_website: "surgeonmcsurgeonson.com",
      hospital_id: 2
    },
    {
      doctor_name: "Pediatrician McPediatricianson",
      doctor_website: "pediatricianmcpediatricianson.com",
      hospital_id: 1
    },
    {
      doctor_name: "Dermatologist McDermatologistson",
      doctor_website: "dermatologistmcdermatologistson.com",
      hospital_id: 1
    },
    {
      doctor_name: "Osmosis Jones",
      doctor_website: "osmosisjones.com",
      hospital_id: 2
    },
    {
      doctor_name: "Psychiatrist HelperMan",
      doctor_website: "psychiatristhelperman.com",
      hospital_id: 3
    }
  ]);
};
