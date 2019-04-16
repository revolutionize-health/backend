exports.seed = function(knex, Promise) {
  return knex("procedures").insert([
    {
      procedure_name: "Big Toe Removal",
      cost: 2000
    },
    {
      procedure_name: "Pinky Toe Removal",
      cost: 1000
    },
    {
      procedure_name: "Heart Transplant",
      cost: 200000
    },
    {
      procedure_name: "Spinal Fusion",
      cost: 500000
    },
    {
      procedure_name: "Eye Check",
      cost: 50
    },
    {
      procedure_name: "Cast Removal",
      cost: 20
    }
  ]);
};
