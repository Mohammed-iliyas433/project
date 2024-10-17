SHOW DATABASES;
CREATE database rcvonlineshop;
USE rcvonlineshop;
CREATE table customer(
id varchar(10) not null primary key,
name varchar(40),
street varchar(255),
city varchar(54),
country varchar(20) not null,
zip varchar(8),
phone varchar(20),
gmail varchar(50));
insert into customer value('433','MI','NGOS colony','IND','HYD','500070','7989556319','mi1760548@gmail.com');
insert into customer value('427','SK','Chotuppal','IND','HYD','500011','9849245682','sk@gmail.com');

insert into customer(id,city,name,street,country)value(
'413','hyd','vig','cp','india');
select * from customer;

