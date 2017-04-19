var data=[
    {name:'x'},
    {age:99}
]
data.forEach((item)=>{
    // for in  for of
    for(var key in item){
        // console.log(value)
        console.log(key)
    }
});
