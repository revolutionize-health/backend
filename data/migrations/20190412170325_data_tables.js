exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", users => {
      users.increments();

      users
        .string("email")
        .notNullable()
        .unique();

      users.string("password").notNullable();
    })
    .createTable("hospitals", hospitals => {
      hospitals.increments();

      hospitals
        .string("name")
        .unique()
        .notNullable();

      hospitals.string("website").unique();
    })
    .createTable("doctors", doctors => {
      doctors.increments();
      doctors.string("name");
      doctors
        .integer("hospital_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("hospitals")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("insurers", insurers => {
      insurers.increments();

      insurers.string("name").unique();
    })
    .createTable("procedures", procedures => {
      procedures.increments();
      procedures
        .string("name")
        .notNullable()
        .unique();
      procedures.integer("cost");
    })
    .createTable("coverages", coverages => {
      coverages.increments();
      coverages
        .integer("insurer_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("insurers")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      coverages
        .integer("procedure_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("procedures")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      coverages.integer("amount");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("hospitals")
    .dropTableIfExists("doctors")
    .dropTableIfExists("insurers")
    .dropTableIfExists("procedures")
    .dropTableIfExists("coverages");
};
