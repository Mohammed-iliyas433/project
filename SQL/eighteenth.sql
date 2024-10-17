create database orders;
show databases;
create table ore(
cust_id int not null,
cust_name varchar(50),
street varchar(50),
order_date varchar(50),
amount int not null
);
insert into ore value(1,"MR.GUPTA","Batla House New Delhi","03-04-2003",50000);
insert into ore value(2,"MR.ROSHAN","Juhu Mumbai","02-06-2021",250000);
insert into ore value(3,"MR.ROY","Howrah West Bengal","03-12-2013",5000000);
select * from ore ;
select max(amount) from ore;
select min(amount) from ore;
select count(*) from ore;
select sum(amount) from ore;
select avg(amount) from ore;