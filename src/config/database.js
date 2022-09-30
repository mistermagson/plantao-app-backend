module.exports = {
    dialect: 'sqlite',
    dialectOptions: { autoJsonMap: false },
    storage: 'plantao.db',
    username: 'admin',
    password: 'cpd',
    define: {
        timestamp: true,
        underscored: false,
        underscoredAll: true
    }
}