// Generate DB for Foxy Organizer Project
DROP DATABASE IF EXISTS foxy_db;
CREATE DATABASE foxy_db;

// Define each table for Foxy Organizer Project

-- CREATE TABLE users_fx(
--     id INT AUTO_INCREMENT PRIMARY_KEY,
--     Name varchar(255) not null,
--     Pasw varchar(255) not null
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE tasks_fx(
--  id INT AUTO_INCREMENT PRIMARY KEY,
--  userId int not null,
--  taskDate date not null,
--  taskInfo text not null,
--  taskChkd boolean DEFAULT false,
--  constraint userId
-- 	FOREIGN KEY (userId) REFERENCES users_fx(id)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE quotes_fx(
--     id INT AUTO_INCREMENT PRIMARY_KEY,
--     userId int not null,
--     quote_txt text not null,
--     constraint userId
--     FOREIGN KEY(userId) REFERENCES users_fx(id)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
