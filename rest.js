var con=new XMLHttpRequest();
con.open('GET','https://restcountries.eu/rest/v2/all',true);
con.send();
con.onload=function(){
    var data=JSON.parse(this.response);
    for(i=0;i<=249;i++){
//console.log(data[i]);
console.log(data[i].name,data[i].region,data[i].subregion,data[i].flag);

    }
}
