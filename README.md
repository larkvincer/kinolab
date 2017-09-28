# How to run application
To run this application you need VirtualBox and Vagrant to be installed on your machine. If you already have this tools, follow steps:
1. Clone repo and navigate to the root directory;
2. Run `vagrant up`;
3. Enable mongodb authentication:
   - `sudo service mongod start` - start mongodb;
   - `mongo` - login to the mongodb shell;
   - create admin user
     ```
      use admin
      db.createUser(
        {
          user: "admin",
          pwd: "abc123",
          roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
        }
      )
     ```
   - create kinolab-client user
     ```
     use kinolab
     db.createUser(
       {
         user: "kinolab-client",
         pwd: "dvorak",
         roles: [ { role: "readWrite", db: "kinolab" }]
       }
     )
     exit;
     ```
   - enable authentication in config file
     `sudo vim /etc/mongod.conf`
     and add this lines:
     ```
     security:
      authorization: "enabled"
     ```
   - restart mongodb `sudo service mongod restart`
4. Run node.js api
   - navigate in backend folder
   - type `npm run dev`
5. Run server for front end part
   - navigate to frontend folder
   - type `npm start`

#### Now You have application running

# Structure of app
* Repository contains both front end and back end part;
* ### Front end:
  - use `create-react-app` package for project configuration
  - folder `components` contains presentational compoents
  - folder `containers` contains container components
  - folder `css` holds some css
  - `App.js` - main component
* ### Back end:
  - `app.js` - main file
  - `db.js` - module which connects application with mongodb
  - folder `routes` - holds routing pathes
  - folder `models` - contains movie schema for mongoose
  - folder `controllers` - contains movie_controller module which provide methods to manipulate with db