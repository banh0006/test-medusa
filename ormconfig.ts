module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432:5432',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'medusa-docker',
    synchronize: false,
    logging: true,
    entities: ['src/models/*.ts'],
    migrations: ['src/migrations/*.ts'],
    // seeds: ['src/databases/seeders/*.seed.{js,ts}'],
    // factories: ['src/databases/factories/*.factory.{js,ts}'],
    cli: {
      migrationsDir: 'src/migrations',
      entitiesDir: 'src/models',
    //   seedersDir: 'src/databases/seeders',
    //   factoriesDir: 'src/databases/factories',
    },
  }