module.exports = ({ env }) => {
  const uri = env("MONGO_URI", null)
  return {
    defaultConnection: 'default',
    connections: !uri ? {
      default: {
        connector: 'mongoose',
        settings: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          srv: env.bool('DATABASE_SRV', false),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'backend'),
          username: env('DATABASE_USERNAME', null),
          password: env('DATABASE_PASSWORD', null),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    } : {
      default: {
        connector: 'mongoose',
        settings: {
          uri
        },
        options: {
          ssl: true
        }
      }
    },
  }
};
