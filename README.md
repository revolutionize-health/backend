# backend

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
    first_name: 'string', 
    last_name: 'string',
    email: 'string', // unique, notNullable
    password: 'string' // notNullable
}
```

`201 ✔️`

```
{
    token: "jsonwebtoken"
}
```

`403 📛`

```
{
    message: "required fields were not provided"
}
```

`500 :fire_engine:`

```
{
    error: "error message"
}
```

### POST /api/auth/login 
