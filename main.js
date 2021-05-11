// 1A
function printName() {
    console.log(this.name);
  }
  
  var name = 'Sam Codes';
  
  printName();



  // 1B
function printName() {
    'use strict';
    console.log(this.name);
  }
  
  var name = 'Sam Codes';
  
  printName();




  var company = {
    name: 'Google',
    printName: function printName() {
      console.log(this.name);
    }
  };
  
  var name = 'Sam Codes';
  
  company.printName();





  var company = {
    name: 'Google',
    printName: function printName() {
      console.log(this.name);
    }
  }
  
  var name = 'Sam Codes';
  
  company.printName();  // Google
  
  // print name call site
  // won't be the object
  // but global
  var printNameAgain = company.printName;
  
  printNameAgain(); // Scotch





  var company = {
    name: 'Google',
    printName: function printName() {
      console.log(this.name);
    }
  }
  
  var name = 'Sam Codes';
  
  var printNameAgain = company.printName;
  
  printNameAgain.call(company);





  var company = {
    name: 'Google',
    printName: function printName(prefix, suffix) {
      console.log(prefix + this.name + suffix);
    }
  }
  
  var name = 'Sam Codes';
  
  var printNameAgain = company.printName;
  
  // hard bind company to printNameAgain
  printNameAgain.call(company, 'Hi ', '!!');





  printNameAgain.call(company, ['Hi ', '!!']);




  var printFunc = printNameAgain.bind(company);





  var printFunc('Hi ', '!!');




  function Company() {
    this.name = 'Sam Codes'
  }




  new Company();







  function Company() {
    // var this = {};
    this.name = 'Sam Codes'
    // return this;
  }




  var companyInstance = new Company();

console.log(companyInstance.name) // prints Scotch




function Company() {
    this.name = 'Sam Codes'
  }
  
  Company.prototype.getName = function() {
    return this.name;
  }
  
  var companyInstance = new Company();
  console.log(companyInstance.getName()); // Scotch




  button.addEventListener('click', function() {
    console.log('clicked')
  });




  button.addEventListener('click', function() {
    console.log(this)
  });




  var company = {
    name: 'Sam Codes',
    getName: function() {
      console.log(this.name)
    }
  }
  
  // This event's handler will throw an error
  button.addEventListener('click', company.getName)





  var company = {
    name: 'Sam Codes',
    getName: function() {
      console.log(this.name)
    }
  }
  
  // bind getName's context as 'company'
  button.addEventListener('click', company.getName.bind(company))


  