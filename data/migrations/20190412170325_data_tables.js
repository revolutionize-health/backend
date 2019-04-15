exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", users => {
      users.increments("user_id");

      users.string("first_name");

      users.string("last_name");

      users
        .string("email")
        .notNullable()
        .unique();

      users.string("password").notNullable();
    })
    .createTable("hospitals", hospitals => {
      hospitals.increments("hospital_id");

      hospitals.string("hospital_name").unique();

      hospitals.string("hospital_website").unique();
    })
    .createTable("doctors", doctors => {
      doctors.increments("doctor_id");

      doctors.string("doctor_name").notNullable();

      doctors.string("doctor_website").unique();

      doctors
        .integer("hospital_id")
        .unsigned()
        .notNullable()
        .references("hospital_id")
        .inTable("hospitals")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("insurers", insurers => {
      insurers.increments("insurer_id");

      insurers
        .string("insurer_name")
        .unique()
        .notNullable();
    })
    .createTable("procedures", procedures => {
      procedures.increments("procedure_id");

      procedures
        .string("procedure_name")
        .notNullable()
        .unique();

      procedures.integer("cost").notNullable();
    })
    .createTable("coverages", coverages => {
      coverages.increments("coverage_id");

      coverages
        .integer("insurer_id")
        .unsigned()
        .notNullable()
        .references("insurer_id")
        .inTable("insurers")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      coverages
        .integer("procedure_id")
        .unsigned()
        .notNullable()
        .references("procedure_id")
        .inTable("procedures")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      coverages.integer("amount").notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("coverages")
    .dropTableIfExists("procedures")
    .dropTableIfExists("insurers")
    .dropTableIfExists("doctors")
    .dropTableIfExists("hospitals")
    .dropTableIfExists("users");
};
