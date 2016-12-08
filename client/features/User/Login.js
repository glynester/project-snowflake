Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go('login');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                FlowRouter.go("home");
                $('[name=email]').val("");
                $('[name=password]').val("");
            }
        });
    }
});


// Need to output errors on screen!
