// Populate users tables
insert into users_fx (name, pasw) values('Alex', MD5('Wolf170'));
insert into users_fx (name, pasw) values('Dafne', MD5('Powr95'));
insert into users_fx (name, pasw) values('Luis', MD5('De51ng10'));
insert into users_fx (name, pasw) values('Mike', MD5('Eng1n397'));

// Populate tasks_table
insert into  tasks_fx(userId, taskDate, taskInfo, taskChkd) values(1, sysdate, 'Dummy Task', true);