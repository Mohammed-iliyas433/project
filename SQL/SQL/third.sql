CREATE DATABASE recepie;
use recepie;
create table dishes(
id INT not null primary key,
name varchar(50),
state varchar(50));
insert into dishes value('1','Biryani','Telangana');
insert into dishes value('2','Haleem','Telangana');
insert into dishes value('3','Pav Bhaji','Maharashtra');
insert into dishes value('4','Vada Pav','Maharashtra');
insert into dishes value('5','Fish curry','West Bengal');
insert into dishes value('6','Chole Bature','Delhi');
insert into dishes value('7','Chole kulche','Delhi');
insert into dishes value('8','Dhokla','Gujarat');
insert into dishes value('9','Fafda','Gujarat');
insert into dishes value('10','Aalo Posto','West Bengal');
select * from dishes where state="Telangana";
select * from dishes where state="Telangana" and id="1";
select * from dishes where state="Delhi" or id="11";