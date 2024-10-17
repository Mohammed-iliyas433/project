use amazon;
select * from customer1 left join order1 on customer1.cust_id=order1.cust_id
union
select * from customer1 right join order1 on customer1.cust_id=order1.cust_id;