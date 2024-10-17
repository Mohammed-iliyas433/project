use amazon;
select * from customer1;
create view first as
select cust_name
from customer1
where cust_id=2;
select * from first;