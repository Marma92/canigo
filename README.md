
# Project Title

This Project is an attempt to answer to [this given exercise](https://github.com/S0fien/KataNodeApi/tree/alpha). 


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
  PUT /v1/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of user to record |
| `firstname` | `string` | **Required** Firstname of user to record|
| `email` | `string` | **Required** **Unique** user's email|
| `password` | `string` |**Required** user's password|

## Documentation

[To be writter](https://linktodocumentation)


## Acknowledgements

Thank you to [VStockman](https://github.com/VStockman) and [S0fien](https://github.com/S0fien) for suggesting this exercise