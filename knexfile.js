// Update with your config settings.
module.exports = {

  development: {
    // our DBMS driver
    client: 'sqlite3',
    // the location of our db & will create the cars database
    connection: {
      filename: './data/cars.db3',
    },
    // necessary when using sqlite3
    useNullAsDefault: true,
    migrations: {
      //Will create your migrations in the data folder automaticlly 
      directory: './data/migrations'
    },
    //Will create your seeds in the data folder automaticlly 
    seeds: {
      directory: './data/seeds'
    }
  }
}


