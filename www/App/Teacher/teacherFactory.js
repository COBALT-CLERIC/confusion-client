'use strict';

angular
  .module('teacherFactory', [])
  .factory('teacherFactory', teacherFactory);

teacherFactory.$inject = ['SOCKET_URL'];

function teacherFactory (SOCKET_URL){

	var socket = io(SOCKET_URL);

	var confusedStudents = [];

	//listens for any updates and will call a function in the teacher.js
	//will also console.log the name from the student object that was submitted
	socket.on('teacher:update', function(data){
	    confusedStudents.push(data);
	    calculateConfusion(confusedStudents);
	    console.log(data.studentID);
	});
	console.log(confusedStudents);

	return {
		confusedStudents: confusedStudents
	};

}
