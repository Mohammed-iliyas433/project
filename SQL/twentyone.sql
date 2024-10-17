create database amazon;
use amazon;
create table customer1(
cust_id varchar(50),
cust_name varchar(50),
country varchar(40)
);
create table order1(
ord_id int not null,
cust_id varchar(50),
order_amt int not null);
insert into customer1 value('1',"Mohammed","India");
insert into customer1 value('2',"Mark","America");
insert into customer1 value('3',"Steve","Australia");
insert into customer1 value('4',"Anthony","India");
insert into customer1 value('5',"David","India");
insert into customer1 value('6',"Khabib","Russia");
insert into customer1 value('7',"Lee","China");
select * from customer1;
insert into order1 value('10',"1",500000);
insert into order1 value('11',"3",150000);
insert into order1 value('10',"4",500);
insert into order1 value('10',"6",55000);
insert into order1 value('10',"2",50500);
select * from order1;
select * from customer1 JOIN order1 on customer1.cust_id=order1.cust_id;

