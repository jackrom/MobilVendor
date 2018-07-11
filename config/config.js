require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'db746005426.db.1and1.com';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'db746005426';
CONFIG.db_user      = process.env.DB_USER       || 'dbo746005426';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'JcRc_66*_';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'MobilVendor';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;
