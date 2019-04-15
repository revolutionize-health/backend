exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("hospitals")
    .del()
    .then(function() {
      // Inserts seed entries
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
    });
};
