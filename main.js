$(document).on('ready', function() {
  
 var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


//exercise # 1
// for(var i=0; i<students.length; i++) {
// 	console.log(students[i].age)
// }

		
//exercise # 2

// for (var i=0;i<students.length; i++){
// 	console.log(students[i].name + "," + students[i].city);
// }		
		
// exercise # 3

// for (var i =0; i<students.length; i++){

// 	console.log(students[i].name + " is from " + students[i].city);
// }

// exercise # 4

for (var i=0; i<students.length; i++ ){
	if (students[i].age > 25)
	console.log(students[i].name + " Is older than 25");
}
	

	
}); //jquery end 