# 📜 backend 📜

## Summary Table of API Endpoints

| Type   | Endpoints                     | Description                                              |
| ------ | ----------------------------- | -------------------------------------------------------- |
| POST   | /api/auth/registration        | Register user                                            |
| POST   | /api/auth/login               | Login                                                    |
| GET    | /api/hospitals                | Get a list of hospitals                                  |
| GET    | /api/hospitals/:id            | Get a specific hospital                                  |
| GET    | /api/hospitals/:id/doctors    | Get a list of doctors that work at a specific hospital   |
| POST   | /api/hospitals                | Add a hospital                                           |
| PUT    | /api/hospitals/:id            | Update a hospital                                        |
| DELETE | /api/hospitals/:id            | Remove a hospital                                        |
| GET    | /api/doctors                  | Get a list of doctors                                    |
| GET    | /api/doctors/:id              | Get a specific doctor                                    |
| POST   | /api/doctors                  | Add a doctor                                             |
| PUT    | /api/doctors/:id              | Update a doctor                                          |
| DELETE | /api/doctors/:id              | Remove a doctor                                          |
| GET    | /api/insurers                 | Get a list of insurers                                   |
| GET    | /api/insurers/:id             | Get a specific insurer                                   |
| GET    | /api/insurers/:id/coverages   | Get a list of coverages that a specific insurer provides |
| POST   | /api/insurers                 | Add an insurer                                           |
| PUT    | /api/insurers/:id             | Update an insurer                                        |
| DELETE | /api/insurers/:id             | Remove an insurer                                        |
| GET    | /api/procedures               | Get a list of procedures                                 |
| GET    | /api/procedures/:id           | Get a specific procedure                                 |
| GET    | /api/procedures/:id/coverages | Get a list of coverages for a specific procedure         |
| POST   | /api/procedures               | Add a procedure                                          |
| PUT    | /api/procedures/:id           | Update a procedure                                       |
| DELETE | /api/procedures/:id           | Remove a procedure                                       |
| GET    | /api/coverages                | Get a list of coverages                                  |
| GET    | /api/coverages/:id            | Get a specific coverage                                  |
| POST   | /api/coverages                | Add a coverage                                           |
| PUT    | /api/coverages/:id            | Update a coverage                                        |
| DELETE | /api/coverages/:id            | Remove a coverage                                        |

## endpoints

### POST /api/auth/registration

```
{
    "first_name": "string",
    "last_name": "string",
    "email": "string", // unique, notNullable
    "password": "string" // notNullable
}
```

`201 ✔️`

```
{
    "token": "jsonwebtoken"
}
```

`403 📛`

```
{
    "message": "required fields were not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/auth/login

```
{
    "email": "string", // required
    "password": "string" // requiured
}
```

`201 ✔️`

```
{
    "token": "jsonwebtoken"
}
```

`403 📛`

```
{
    "message": "required fields were not provided"
}
```

`or`

```
{
    "message": "invalid credentials"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/hospitals

`200 ✔️`

```
[
    {
        "hospital_id": 1,
        "hospital_name": "Gotham Central",
        "hospital_website": "gothamcentral.com"
    },
    {
        "hospital_id": 2,
        "hospital_name": "Queen of the Valley",
        "hospital_website": "thequeen.com"
    },
    {
        "hospital_id": 3,
        "hospital_name": "Kaiser Permanente",
        "hospital_website": "kaiserpermanente.com"
    }
]
```

`404 😕`

```
{
    "message": "no hospitals in the database"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/hospitals/:id

`200 ✔️`

```
{
    "hospital_id": 1,
    "hospital_name": "Gotham Central",
    "hospital_website": "gothamcentral.com"
}
```

`404 😕`

```
{
    "message": "no hospital with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/hospitals/:id/doctors

`200 ✔️`

```
{
    "hospital": {
        "hospital_id": 1,
        "hospital_name": "Gotham Central",
        "hospital_website": "gothamcentral.com"
    },
    "doctors": [
        {
            "doctor_id": 1,
            "doctor_name": "Doctor McDoctorson",
            "doctor_website": "doctormcdoctorson.com",
            "hospital_id": 1
        },
        {
            "doctor_id": 3,
            "doctor_name": "Pediatrician McPediatricianson",
            "doctor_website": "pediatricianmcpediatricianson.com",
            "hospital_id": 1
        },
        {
            "doctor_id": 4,
            "doctor_name": "Dermatologist McDermatologistson",
            "doctor_website": "dermatologistmcdermatologistson.com",
            "hospital_id": 1
        }
    ]
}
```

`404 😕`

```
{
    "message": "no hospital with that id"
}
```

`or`

```
{
    "message": "no doctors on record for this hospital"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/hospitals

```
{
	"hospital_name": "Hospital of TestVille", // unique, notNullable
	"hospital_website": "testpital.com"
}
```

`201 ✔️`

```
{
    "hospital_id": 4,
    "hospital_name": "Hospital of TestVille",
    "hospital_website": "testpital.com"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### PUT /api/hospitals/:id

```
{
    "hospital_name": "Hospital of UpdateVille", // unique, notNullable
    "hospital_website": "updatepital.com"
}
```

`200 ✔️`

```
{
    "hospital_id": 1,
    "hospital_name": "Hospital of UpdateVille",
    "hospital_website": "updatepital.com"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### DELETE /api/hospitals/:id

`200 ✔️`

```
{
    "message": "hospital successfully deleted"
}
```

`404 😕`

```
{
    "message": "no hospital with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/doctors

`200 ✔️`

```
[
    {
        "doctor_id": 1,
        "doctor_name": "Doctor McDoctorson",
        "doctor_website": "doctormcdoctorson.com",
        "hospital_id": 1
    },
    {
        "doctor_id": 2,
        "doctor_name": "Surgeon McSurgeonson",
        "doctor_website": "surgeonmcsurgeonson.com",
        "hospital_id": 2
    },
    {
        "doctor_id": 3,
        "doctor_name": "Pediatrician McPediatricianson",
        "doctor_website": "pediatricianmcpediatricianson.com",
        "hospital_id": 1
    },
    {
        "doctor_id": 4,
        "doctor_name": "Dermatologist McDermatologistson",
        "doctor_website": "dermatologistmcdermatologistson.com",
        "hospital_id": 1
    },
    {
        "doctor_id": 5,
        "doctor_name": "Osmosis Jones",
        "doctor_website": "osmosisjones.com",
        "hospital_id": 2
    },
    {
        "doctor_id": 6,
        "doctor_name": "Psychiatrist HelperMan",
        "doctor_website": "psychiatristhelperman.com",
        "hospital_id": 3
    }
]
```

`404 😕`

```
{
    "message": "no doctors in the database"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/doctors/:id

`200 ✔️`

```
{
    "doctor_id": 1,
    "doctor_name": "Doctor McDoctorson",
    "doctor_website": "doctormcdoctorson.com",
    "hospital_id": 1
}
```

`404 😕`

```
{
    "message": "no doctor with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/doctors

```
{
    "doctor_name": "Health McHealtherson", // unique, notNullable
    "doctor_website": "healthmchealtherson.com", // unique
    "hospital_id": 1 // notNullable
}
```

`201 ✔️`

```
{
    "doctor_id": 7,
    "doctor_name": "Health McHealtherson",
    "doctor_website": "healthmchealtherson.com",
    "hospital_id": 1
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### PUT /api/doctors/:id

```
{
    "doctor_name": "Doctor McDoctorson", // unique, notNullable
    "doctor_website": "doctormcdoctorson.com", // unique
    "hospital_id": 2 // notNullable
}
```

`200 ✔️`

```
{
    "doctor_id": 1,
    "doctor_name": "Doctor McDoctorson",
    "doctor_website": "doctormcdoctorson.com",
    "hospital_id": 2
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`404 😕`

```
{
    "message": "no doctor with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### DELETE /api/doctors/:id

`200 ✔️`

```
{
    "message": "doctor successfully deleted"
}
```

`404 😕`

```
{
    "message": "no doctor with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/insurers

`200 ✔️`

```
[
    {
        "insurer_id": 1,
        "insurer_name": "Good Insurance Company"
    },
    {
        "insurer_id": 2,
        "insurer_name": "Ok Insurance Company"
    },
    {
        "insurer_id": 3,
        "insurer_name": "Bad Insurance Company"
    }
]
```

`404 😕`

```
{
    "message": "no insurers in the database"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/insurers/:id

`200 ✔️`

```
{
    "insurer_id": 1,
    "insurer_name": "Good Insurance Company"
}
```

`404 😕`

```
{
    "message": "no insurer with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/insurer/:id/coverages

`200 ✔️`

```
{
    "insurer": {
        "insurer_id": 1,
        "insurer_name": "Good Insurance Company"
    },
    "coverages": [
        {
            "coverage_id": 1,
            "insurer_id": 1,
            "procedure_id": 1,
            "amount": 2000
        },
        {
            "coverage_id": 4,
            "insurer_id": 1,
            "procedure_id": 2,
            "amount": 1000
        }
    ]
}
```

`404 😕`

```
{
    "message": "no insurer with that id"
}
```

`or`

```
{
    "message": "no coverages on record for this insurer"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/insurers

```
{
    "insurer_name": "Another Insurance Company" // unique, notNullable
}
```

`201 ✔️`

```
{
    "insurer_id": 4,
    "insurer_name": "Another Insurance Company"
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### PUT /api/insurers/:id

```
{
    "insurer_name": "Good and Updated Insurance Company" // unique, notNullable
}
```

`200 ✔️`

```
{
    "insurer_id": 1,
    "insurer_name": "Good and Updated Insurance Company"
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`404 😕`

```
{
    "message": "no insurer with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### DELETE /api/insurers/:id

`200 ✔️`

```
{
    "message": "insurer successfully deleted"
}
```

`404 😕`

```
{
    "message": "no insurer with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/procedures

`200 ✔️`

```
[
    {
        "procedure_id": 1,
        "procedure_name": "Big Toe Removal",
        "cost": 2000
    },
    {
        "procedure_id": 2,
        "procedure_name": "Pinky Toe Removal",
        "cost": 1000
    },
    {
        "procedure_id": 3,
        "procedure_name": "Heart Transplant",
        "cost": 200000
    },
    {
        "procedure_id": 4,
        "procedure_name": "Spinal Fusion",
        "cost": 500000
    },
    {
        "procedure_id": 5,
        "procedure_name": "Eye Check",
        "cost": 50
    },
    {
        "procedure_id": 6,
        "procedure_name": "Cast Removal",
        "cost": 20
    }
]
```

`404 😕`

```
{
    "message": "no procedures in the database"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/procedures/:id

`200 ✔️`

```
{
    "procedure_id": 1,
    "procedure_name": "Big Toe Removal",
    "cost": 2000
}
```

`404 😕`

```
{
    "message": "no procedure with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/procedures/:id/coverages

`200 ✔️`

```
{
    "procedure": {
        "procedure_id": 1,
        "procedure_name": "Big Toe Removal",
        "cost": 2000
    },
    "coverages": [
        {
            "coverage_id": 1,
            "insurer_id": 1,
            "procedure_id": 1,
            "amount": 2000
        },
        {
            "coverage_id": 2,
            "insurer_id": 2,
            "procedure_id": 1,
            "amount": 1500
        },
        {
            "coverage_id": 3,
            "insurer_id": 3,
            "procedure_id": 1,
            "amount": 200
        }
    ]
}
```

`404 😕`

```
{
    "message": "no procedure with that id"
}
```

`or`

```
{
    "message": "no coverages on record for this prcedure"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/procedures

```
{
    "procedure_name": "Kidney Removal", // unique, notNullable
    "cost": 45000 // notNullable
}
```

`201 ✔️`

```
{
    "procedure_id": 7,
    "procedure_name": "Kidney Removal",
    "cost": 45000
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### PUT /api/procedures/:id

```
    {
        "procedure_name": "Big Toe Removal Via Blowtorch", //unique, notNullable
        "cost": 2000 // notNullable
    }

```

`200 ✔️`

```
{
    "procedure_id": 1,
    "procedure_name": "Big Toe Removal Via Blowtorch",
    "cost": 2000
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### DELETE /api/procedure/:id

`200 ✔️`

```
{
    "message": "procedure successfully deleted"
}
```

`404 😕`

```
{
    "message": "no procedure with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/coverages

`200 ✔️`

```
[
    {
        "coverage_id": 1,
        "insurer_id": 1,
        "procedure_id": 1,
        "amount": 2000
    },
    {
        "coverage_id": 2,
        "insurer_id": 2,
        "procedure_id": 1,
        "amount": 1500
    },
    {
        "coverage_id": 3,
        "insurer_id": 3,
        "procedure_id": 1,
        "amount": 200
    },
    {
        "coverage_id": 4,
        "insurer_id": 1,
        "procedure_id": 2,
        "amount": 1000
    },
    {
        "coverage_id": 5,
        "insurer_id": 2,
        "procedure_id": 2,
        "amount": 750
    }
]
```

`404 😕`

```
{
    "message": "no coverages in the database"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### GET /api/coverages/:id

`200 ✔️`

```
{
    "coverage_id": 1,
    "insurer_id": 1,
    "procedure_id": 1,
    "amount": 2000
}
```

`404 😕`

```
{
    "message": "no coverage with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### POST /api/coverages

```
{
    "insurer_id": 1, // notNullable
    "procedure_id": 7, // notNullable
    "amount": 200000 // notNullable
}
```

`201 ✔️`

```
{
    "coverage_id": 6,
    "insurer_id": 1,
    "procedure_id": 7,
    "amount": 200000
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### PUT /api/coverages/:id

```
{
    "insurer_id": 1, // notNullable
    "procedure_id": 1, // notNullable
    "amount": 1999 // notNullable
}
```

`200 ✔️`

```
{
    "coverage_id": 1,
    "insurer_id": 1,
    "procedure_id": 1,
    "amount": 1999
}
```

`403 📛`

```
{
    "message": "required info was not provided"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```

### DELETE /api/coverage/:id

`200 ✔️`

```
{
    "message": "coverage successfully deleted"
}
```

`404 😕`

```
{
    "message": "no coverage with that id"
}
```

`500 🔥`

```
{
    "error": "error message"
}
```
