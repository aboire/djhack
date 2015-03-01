UI.body.helpers({
  gapi: function() {
    $('body').append('<script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>');
    return "";
  }
});

Template.home.events({
	"click .create" : function(e) {
		e.preventDefault();
		
		Session.set("page", "createParty");
	},
	"submit #join" : function(e, t) {
		e.preventDefault();

		Meteor.call("joinParty", t.find("#partyName").value, function(error,result){
			if(error)
				console.log("error to join to the party: ",error);
			else {
				Session.set("page", "client");
				Session.set("partyId", result);

			}
		});
	}
});
