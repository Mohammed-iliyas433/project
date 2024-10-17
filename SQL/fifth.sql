use recepie;
select * from dishes;
select * from dishes where not exists(select * from dishes where state="Telangana");