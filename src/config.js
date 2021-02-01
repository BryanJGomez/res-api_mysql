module.exports = {
    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST ||'captain.servicios.saynets.com',
        user: process.env.DATABASE_USER || 'desarrollo',
        password: process.env.DATABASE_PASSWORD || 'bryangomez2021',
        database: process.env.DATABASE_NAME || 'company',
        port : process.env.DATABASE_PORT || 6969
    },
    port: process.env.PORT || 3000
};