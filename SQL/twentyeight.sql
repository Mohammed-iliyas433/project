create database data;
use data;
create table data1(
Employee_id int not null unique,
Employee_name varchar(50),
Employee_department varchar(50) default 'SYSTEM ENGINEER'
);
desc data1;
insert into data1 value(1,'Mohammed iliyas');
insert into data1 value(2,'IT','ASE');
select * from data1;