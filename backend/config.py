# db and JWT config (app specific setting)


DB_CONFIG = {
    'username': 'root',
    'password': 'abcd1234',
    'host': 'localhost',
    'port': 3306,
    'database': 'medigen_db'
}

SQLALCHEMY_DATABASE_URI = f"mysql+mysqlconnector://{DB_CONFIG['username']}:{DB_CONFIG['password']}@{DB_CONFIG['host']}:{DB_CONFIG['port']}/{DB_CONFIG['database']}"
