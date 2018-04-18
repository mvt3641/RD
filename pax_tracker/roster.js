function NewPersonnal (first, last,position,site,company){
  this.firstName = first;
  this.lastName = last;
  this.position= position;
  this.site = site;
  this.company = company;
}


var mThompson = new NewPersonnal("Matthew","Thompson","Site Lead","Dweyer","Novo AS");


console.log(mThompson.firstName+" "+mThompson.lastName);
console.log(mThompson.position);
console.log("Site: "+mThompson.site);
console.log("Employer: "+mThompson.company);
