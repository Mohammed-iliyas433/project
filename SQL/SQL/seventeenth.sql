use rcvonlineshop;
select * from customer;
create table customer1(
id int not null,
name varchar(50),
street varchar(50),
city varchar(50),
country varchar(50),
zip varchar(50),
phone varchar(20),
gmail varchar(10)
);
create table customer2(
id int not null,
name varchar(50),
street varchar(50),
city varchar(50),
country varchar(50),
zip varchar(50),
phone varchar(20),
gmail varchar(10)
);
insert into customer1 values(424,"Gopi Krishna","LB nagar","Hyderabad","India","500011",null,null);
insert into customer2 select * from customer1;

select * from customer2;