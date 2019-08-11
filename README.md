# url-shortening-service
URL shortening service implemented full-stack with Vue.js and Express.js

#### Steps to start the application

In both of the following methods, ports are a following:
  1. Client-side: PORT 8080
  2. Server-side: PORT 3000
  
###### Without Docker

  1. Start mongo server locally
  2. Client-side: `cd client; yarn; yarn serve`
  3. Server-side: `cd server; yarn; yarn start-local`

###### With Docker
  * Without build: `docker-compose up`
    * **NOTE:** For the first run please run the above command with adding `--build` to its end.

#### Other scripts

###### Client
* `npm test` : Run tests (please use `cd client` before running this command)
###### Server
* `npm test` : Run tests (please use `cd server` before running this command)

#### License

[MIT licensed](./LICENSE).
