exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("insurers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("insurers").insert([
        {
          insurer_name: "Good Insurance Company"
        },
        {
          insurer_name: "Ok Insurance Company"
        },
        {
          insurer_name: "Bad Insurance Company"
        }
      ]);
    });
};
