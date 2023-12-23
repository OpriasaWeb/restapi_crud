# REST API create, read, update, and delete (CRUD)

1. Open Xampp
2. Start apache and mysql and click the admin of mysql
3. Import the "blog.sql" file to your phpmyadmin
4. Open the downloaded or cloned folder
5. Right click and open it through git bash which I recommend or cmd
6. Once on terminal (git bash or cmd)
7. Type these: npm init and npm i dotenv express nodemon mysql2
8. Open the postman app
9. On your workspace, create new collection (blank)
10. Create folder inside the created blank collection, I recommend naming it User
11. Click the triple dot and add request

Here are the lists of request that you should make:

POST - Create blog - localhost:3000/api/v1/posts
      - Body x-www-form-urlencoded 
        - Fill Key and Value

GET - Get all blogs - localhost:3000/api/v1/posts

GET - Get blog - localhost:3000/api/v1/posts/:id

PUT - Get blog - localhost:3000/api/v1/posts/:id
      - Params
        - Fill Key and Value
      - Body x-www-form-urlencoded 
              - Fill Key and Value

DELETE - Get blog - localhost:3000/api/v1/posts/:id
      - Params
        - Fill Key and Value




