exports.seed = function(knex, Promise) {
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
};
