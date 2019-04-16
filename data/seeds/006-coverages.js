exports.seed = function(knex, Promise) {
  return knex("coverages").insert([
    {
      insurer_id: 1,
      procedure_id: 1,
      amount: 2000
    },
    {
      insurer_id: 2,
      procedure_id: 1,
      amount: 1500
    },
    {
      insurer_id: 3,
      procedure_id: 1,
      amount: 200
    },
    {
      insurer_id: 1,
      procedure_id: 2,
      amount: 1000
    },
    {
      insurer_id: 2,
      procedure_id: 2,
      amount: 750
    }
  ]);
};
