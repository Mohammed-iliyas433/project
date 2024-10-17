use amazon;
select * from order1;
select * from order1 where order_amt>(select avg(order_amt) from order1)