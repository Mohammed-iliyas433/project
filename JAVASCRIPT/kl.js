let arr=[8,6,5];
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        for(let j=i;j<n;j++)
        {
            let s=0;
            c=0
            for(let k=i;k<=j;k++)
            {   
                s=s+arr[k]
                
            }
            console.log(s);
        }
    }