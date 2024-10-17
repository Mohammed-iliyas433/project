show databases;
use rcvonlineshop;
select *from customer;
use job;
select * from company;
select industry, count(*)as number_of_people_working from company group by industry;
