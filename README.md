
# Can I Go ? 🙄

This Project is an attempt to answer to [this given exercise](https://github.com/S0fien/KataNodeApi).


## Requirements

This project need a docker install to be launched.

## Deployment

To deploy this project run

```bash
  docker-compose up
```


## API Reference

#### TEST

```http
  GET /v1/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `` |just a test to make sure everything run smoothly |

#### Get user

```http
  GET /v1/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |



#### Add a user

```http
  PUT /v1/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of user to record |
| `firstname` | `string` | **Required** Firstname of user to record|
| `age`      | `string` | **Required**. Age of user to record |
| `email` | `string` | **Required** **Unique** User's email|
| `phone` | `string` | **Required** User's phone number|
| `address` | `string` | **Required** User's postal address|
| `passId ` | `string` | Id of the user's pass|
| `password` | `string` |**Required** User's password|


#### Delete a user

```http
  DELETE /v1/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Name of user to delete |

## Documentation

[To be written](https://linktodocumentation)


## Acknowledgements

Thank you to [VStockman](https://github.com/VStockman) and [S0fien](https://github.com/S0fien) for suggesting this exercise
