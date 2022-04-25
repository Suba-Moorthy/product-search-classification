var dataFetched;
fetch('products.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    dataFetched=data;
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].name  +'<br>Id: ' + data[i].id + '<br>Category Level 1:' +data[i].category_level1+ '<br>Category Level 2' +data[i].category_level2 +'<br>Category Level 3' +data[i].category_level3;
    mainContainer.appendChild(div);
}
}

function searchByName()
{
    alert(document.getElementById("name").value);
    var mainContainer = document.getElementById("content1");
    //alert(1);
    document.getElementById('content1').innerHTML=' ';
    for (var i = 0; i < dataFetched.length; i++) 
    {
    var div = document.createElement("div");
    var name=dataFetched[i].name;
    var formName=document.getElementById("name").value;
    console.log(name+' '+formName);
    if(name==formName)
    {
        alert(name+" form name"+formName);
        div.innerHTML = 'Name: ' + dataFetched[i].name + '<br>Id: ' + dataFetched[i].id + '<br>Category Level 1:' +dataFetched[i].category_level1+ 'Category Level 2' +dataFetched[i].category_level2 +'Category Level 3' +dataFetched[i].category_level3;
        mainContainer.appendChild(div);
        return;
    }
}
}

function category1()
{
    alert(document.getElementById("CategoryLevel1").value);
    var mainContainer = document.getElementById("content1");
    document.getElementById('content1').innerHTML=' ';
    for (var i = 0; i < dataFetched.length; i++) 
    {
    var div1 = document.createElement("div");
    var cat1=dataFetched[i].category_level1;
    var formcat1=document.getElementById("CategoryLevel1").value;
    console.log(cat1+" "+formcat1);
    if(cat1==formcat1)
    {
        //alert(cat1+" form name"+formcat1);
        div1.innerHTML = 'Name: ' + dataFetched[i].name + '<br>Id: ' + dataFetched[i].id + '<br>Category Level 1:' +dataFetched[i].category_level1;
        mainContainer.appendChild(div1);
       // return;
    }
}
}

function category2()
{
    alert(document.getElementById("CategoryLevel2").value);
    var mainContainer = document.getElementById("content1");
    document.getElementById('content1').innerHTML=' ';
    for (var i = 0; i < dataFetched.length; i++) 
    {
    var div2 = document.createElement("div");
    var cat2=dataFetched[i].category_level2;
    var formcat2=document.getElementById("CategoryLevel2").value;
    console.log(cat2+" "+formcat2);
    if(cat2==formcat2)
    {
        //alert(cat2+" form name"+formcat2);
        div2.innerHTML = 'Name: ' + dataFetched[i].name + '<br>Id: ' + dataFetched[i].id + '<br>Category Level 1:' +dataFetched[i].category_level1+ 'Category Level 2' +dataFetched[i].category_level2 +'Category Level 3' +dataFetched[i].category_level3;
        mainContainer.appendChild(div2);
        //return;
    }
}
}

function category3()
{
    alert(document.getElementById("CategoryLevel3").value);
    var mainContainer = document.getElementById("content1");
    document.getElementById('content1').innerHTML=' ';
    for (var i = 0; i < dataFetched.length; i++) 
    {
    var div3 = document.createElement("div");
    var cat3=dataFetched[i].category_level3;
    var formcat3=document.getElementById("CategoryLevel3").value;
    console.log(cat3+" "+formcat3);
    if(cat3==formcat3)
    {
        //alert(cat3+" form name"+formcat3);
        div3.innerHTML = 'Name: ' + dataFetched[i].name + ' Id: ' + dataFetched[i].id + 'Category Level 1:' +dataFetched[i].category_level1+ 'Category Level 2' +dataFetched[i].category_level2 +'Category Level 3' +dataFetched[i].category_level3;
        mainContainer.appendChild(div3);
       //return;
    }
}
}

