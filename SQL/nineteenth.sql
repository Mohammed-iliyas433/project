use orders;
select * from ore;
select cust_id,cust_name,street,order_date,amount,amount+50 as Final_Amount from ore;
select upper(street) from ore;
select lower(cust_name) from ore;
select length(street) from ore;
select reverse(cust_name) from ore;
select replace(street,'a','B') from ore;
select curdate();
select current_date();
select current_time();
select curtime()