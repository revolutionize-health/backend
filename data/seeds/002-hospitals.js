exports.seed = function(knex, Promise) {
  return knex("hospitals").insert([
    {
      hospital_name: "Gotham Central",
      hospital_website: "gothamcentral.com"
    },
    {
      hospital_name: "Queen of the Valley",
      hospital_website: "thequeen.com"
    },
    {
      hospital_name: "Kaiser Permanente",
      hospital_website: "kaiserpermanente.com"
    }
  ]);
};
