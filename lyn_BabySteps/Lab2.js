var Sum=0;
var index=2;
while(process.argv[index])
{
    Sum+=Number(process.argv[index]);
    index++;
}

console.log(Sum);