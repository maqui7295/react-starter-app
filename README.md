# React starter template bootstrapped with create-react-app

- routed pages
- auth templates
- prebuilt form
- form validation
- uses react hooks
- has a redux branch

- run-p uses npm run-all

# SECURING API WITH AUTH0

- click APi on the dashboard
- click new APi

# for QA and prod?

use a separate Auth0 tenant for each environment and set the api identifier to the url in that environment

e.g. identifiers: 

QA: https://qa.myapi.com
prod: https://myapi.com


# Scopes

give permissions without sharing credentials
each permission you grant to an app is called  a scope  e.g. 
you can grant linkedin a read contact scope to your gmail contacts

create scope on dashboard

click api
click  the demo api
click on scopes tab
give it a name e.g. read:courses
add a description
click add

# Rules 

(auth0.com/docs/rules/current)

click rules on the auth dashboard
click "create your first rule"
pick a rule template
 - on access control. click set roles to a user 
 - make sure the email has been verified (users -> actions -> send verification email)
 - change the email domain as well as the site domain (e.g. blabla@gmail.com and localhost:3000)
 -testing the rule - click try this rule

 adding roles to access token

 - click empty rule

 function(user, context, callback){
    
    if(user.app_metadata && user.app_metadata.roles) {
        context.accessToken['http://localhost:3000/roles'] = user.app_metadata.roles
    }

    callback(null, user, context);
 }

then save

# CHOOSINGN AN AUTHORIZATION APPROACH

- Session cookie
  + simple, 
  + secure (used with httpOnly), 
  - No authorization data included
  - performance

- JWT with scopes
  + performance
  - bloated JWTs

- Role
  + simple
  + scalable
  + fast
  
Use scopes for their original purpose - interacting with third parties
Use roles for handling your app's permissions


# Enhancements to the app

- redirect to the previous page after login
- create PrivateRoute Component
- Share auth object via react's context
- store tokens in memory
- silent auth and token renewal to keep the user logged in

### silent renewal

on auth0 dashboard

applications -> allow web origins -> enter http://localhost:3000

as a performance teak: you could write a value to localStorage when the user logs in so that this check does not occur when
someone is visiting for the first time and then clear it when the log out to avoid needlessly making this call
i.e. the silentRenewal call in the app component

Caveat: 

1. some browsers like safari blocks 3rd party cookies. To avoid 3rd party issues, set up a custom Auth0 domain
2. Silent auth doesnt work with identity providers (e.g. google) by default. You need to configure your own keys with each provider. In a real app replace the dev key provided by Auth0 before publishing to production.


# tips

you can use jwt-decode (on npm) to read the user's data out of the ID Token JWT