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
| POST   | /api/insurers                 | Add a insurer                                            |
| PUT    | /api/insurers/:id             | Update a insurer                                         |
| DELETE | /api/insurers/:id             | Remove a insurer                                         |
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
    "email": "string",
    "password": "string"
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
or
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
or
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
	"hospital_name": "Hospital of TestVille",
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
    "hospital_name": "Hospital of UpdateVille",
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
    "doctor_name": "Health McHealtherson",
    "doctor_website": "healthmchealtherson.com",
    "hospital_id": 1
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
    "doctor_name": "Doctor McDoctorson",
    "doctor_website": "doctormcdoctorson.com",
    "hospital_id": 2
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
