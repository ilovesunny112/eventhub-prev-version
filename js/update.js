var freshDate = new Date();

var dateProtocal = {
	now: {
			 getYear: function ( date ) {
						  return date.getFullYear();
					  },
			 getMonth: function ( date ) {
						   return date.getMonth() + 1;
					   },
			 getDay: function ( date ) {
					  return date.getDate();
				  }
		 },

	getYear: function ( dateStr ) {
				 return dateStr.match( /[0-9]{4}/g );
			 },

	getMonth: function( dateStr ) {
				  var months = dateStr.match( /\/[0-9]{1,2}\//g );
				  var temp = [];
				  for ( var i = 0; i < months.length; i++ ) {
					  temp.push( months[i].match( /[0-9]{1,2}/g ).valueOf() );
				  }
				  return temp;
			  },

	getDay: function( dateStr ) {
				var days = dateStr.match( /(\/[0-9]{1,2}[，, ])|(\/[0-9]{1,2}$)/g );
				var temp = [];
				for ( var i = 0; i < days.length; i++ ) {
					temp.push( days[i].match( /[0-9]{1,2}/g ).valueOf() ); 
				}
				return temp;
			},

	dateCompare: function( dateStr ) {
					 var length = this.getYear( dateStr ).length; 
					 for ( var i = 0; i < length; i++ ) {
						 var year = this.getYear( dateStr )[i], thisYear = this.now.getYear( freshDate );
						 var month = this.getMonth( dateStr )[i], thisMonth = this.now.getMonth( freshDate );
						 var day = this.getDay( dateStr )[i], thisDay = this.now.getDay( freshDate );

						 if ( year > thisYear ) {
							 return 1;
						 } else if ( year == thisYear ) {
							 if ( month > thisMonth ) {
								 return 1;
							 } else if ( month == thisMonth ) {
								 if ( day > thisDay ) {
									 return 1;
								 } else if ( day == thisDay ) {
									 return 1;
								 }
							 }
						 }
					 }
					 return 0;
				 }
};


// For Debug
//var str = "2012/2/25， 2011/3/20, 2010/2/21";

//console.log( "this Year: " + dateProtocal.now.getYear( freshDate ) );
//console.log( "this Month: " + dateProtocal.now.getMonth( freshDate ) );
//console.log( "this Day: " + dateProtocal.now.getDay( freshDate ) );
//console.log( "" );
//console.log( "Years: " + dateProtocal.getYear( str ) );
//console.log( "Months: " + dateProtocal.getMonth( str ) );
//console.log( "Days: " + dateProtocal.getDay( str ) );
//console.log( dateProtocal.dateCompare( str ) );
