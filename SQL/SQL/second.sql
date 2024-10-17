SHOW DATABASES;
CREATE DATABASE JOB;
USE JOB;
CREATE table company(
name varchar(50),
industry varchar(150));
insert into company value('Wipro','IT');
insert into company value('Amazon','Product');
insert into company value('Google','Product');
insert into company value('Microsoft','Product');
insert into company value('AMD','Semiconductor');

select industry from company;
select distinct industry from company;
select * from company where industry="IT";
select * from company;


