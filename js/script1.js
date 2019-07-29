function myFunction() {
    var name1 = prompt("Enter Name 1");
    var name2 = prompt("Enter Name 2");
    var name3 = prompt("Enter Name 3");


    if(name1.length == name2.length && name1.length == name3.length)
    {
        document.getElementById("demo").innerHTML = name1 + ', ' + name2 + ', and '+ name3 + ' are the same length.';
    }
    else if(name1.length > name2.length && name1.length > name3.length)
    {
        document.getElementById("demo").innerHTML = name1 + ' is the longest of the three names.';
    }
    else if(name2.length > name1.length && name2.length > name3.length)
    {
      document.getElementById("demo").innerHTML = name2 + ' is the longest of the three names.';
    }
    else if(name3.length > name1.length && name3.length > name2.length)
    {
      document.getElementById("demo").innerHTML = name3 + ' is the longest of the three names.';
    }
    else if(name1.length == name2.length && name1.length != name3.length)
    {
      document.getElementById("demo").innerHTML = 'There is a tie between ' + name1 + ' and ' + name2;
    }
    else if(name1.length == name3.length && name1.length != name2.length)
    {
      document.getElementById("demo").innerHTML = 'There is a tie between ' + name1 + ' and ' + name3;
    }
    else if(name2.length == name3.length && name2.length != name1.length)
    {
      document.getElementById("demo").innerHTML = 'There is a tie between ' + name2 + ' and ' + name3;
    }
    else if(name3.length == name1.length && name3.length != name2.length)
    {
      document.getElementById("demo").innerHTML = 'There is a tie between ' + name1 + ' and ' + name3;
    }
}