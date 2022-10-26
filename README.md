## Nest JS CRUD Example
A barebone Nest JS Application that implements CRUD operations. It is based on the example on [youtube video: NestJS Full CRUD Example](https://www.youtube.com/watch?v=SJkUzWme08Q).

However, I have changed the example, to create a composite primary key. The primary key combines to keys. More details on the schema is at my [DynamoDB example](https://github.com/atiq-cs/nestjs-crud-02-dynamodb).


### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


### REST API Requests
After running the app, we can perform REST API client request to the NestJS web app.

Example, http requests can be found at [`REST_requests.http`](https://github.com/atiq-cs/nestjs-crud-02-dynamodb/blob/dev/REST_requests.http). These REST commands/requests are from [VS Code Rest Client](https://github.com/Huachao/vscode-restclient).
