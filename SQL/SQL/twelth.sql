use job;
select * from company;
select industry, count(industry) from company group by industry having count(industry)>=2;