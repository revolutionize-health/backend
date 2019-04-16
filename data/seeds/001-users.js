exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      first_name: "Brandon",
      last_name: "Allison",
      email: "brandon@allison.com",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NTUzNDU4MzYsImV4cCI6MTU1NTM0OTQzNn0.KWCrfhSiVEqIr8copEpEpyIZdkyj522OWcpjp8KCrks"
    },
    {
      first_name: "Lola",
      last_name: "Heffernan",
      email: "lola@heffernan.com",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NTUzNDU4MzYsImV4cCI6MTU1NTM0OTQzNn0.KWCrfhSiVEqIr8copEpEpyIZdkyj522OWcpjp8KCrks"
    },
    {
      first_name: "Jared",
      last_name: "Parrish",
      email: "jared@parrish.com",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NTUzNDU4MzYsImV4cCI6MTU1NTM0OTQzNn0.KWCrfhSiVEqIr8copEpEpyIZdkyj522OWcpjp8KCrks"
    },
    {
      first_name: "Jonathan",
      last_name: "David",
      email: "jonathan@david.com",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NTUzNDU4MzYsImV4cCI6MTU1NTM0OTQzNn0.KWCrfhSiVEqIr8copEpEpyIZdkyj522OWcpjp8KCrks"
    },
    {
      first_name: "Jacob",
      last_name: "Angulo",
      email: "jacob@angulo.com",
      password:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NTUzNDU4MzYsImV4cCI6MTU1NTM0OTQzNn0.KWCrfhSiVEqIr8copEpEpyIZdkyj522OWcpjp8KCrks"
    }
  ]);
};
