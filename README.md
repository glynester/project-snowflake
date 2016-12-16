# Makers Final PROJECT - I'm In (i-min.co.uk )
### A.K.A Project Snowflake

## The Concept

Many people like the idea of giving back to the local community, but aren't able to commit to a long term role or don't know where to look.

"I'm In" serves as a platform to link up people who want to give back to their community with one-off opportunities to do so (think clearing up the local park, helping out at a food bank for a day, etc.).  

A user can list projects and also volunteer for projects. Projects are displayed on a map allowing a user to select accessible projects. 

The site also incorporates a crowdsourcing element, with project organisers setting a minimum number of volunteers required for the project to go ahead.

## Setup

1) Navigate to the folder where you want to store the app, and run these command line requests:

```
  git clone https://github.com/wirsindpapst/project-snowflake
  cd project-snowflake
  meteor run
```

2) Enter 'localhost:3000' into your preferred browser to load the site

###Welcome to "I'm In"
![Home page](http://i.imgur.com/HadrXnD.png)

## Accessing the site

https://imin.eu.meteorapp.com


## Using the site

### Signing up
Although it is possible to browse projects without having an account, all meaningful site useage does require you to be signed up.
  * Click the 'Sign up' link in the navigation bar at the top
  * Create a profile: enter some brief details, an optional profile picture and drop the pin in the area you'd like receive search results
  * On completion you'll receive a confirmation email to the email address you entered

### Navigating the site

The navigation bar (at the top) remains the same on every screen, and lets you quickly access :
* View Projects, search projects (see "Searching for a project" below) and sign up or withdraw from projects (see "Volunteering for a project" below)    
* Add a new project  
* View (and update) your profile
Clicking the "I'm in" icon in the top left will take you back to the home screen.

### Adding a project
Create a project by entering a few details including the number of people you need, and the specific skills required.

### Searching for a project
Projects are displayed by default in chronological order (closest to furthest away).  
There are 3 option for searching. Click the appropriate button:
 * By skills - any projects that match specialised skills that you have entered on your profile will be displayed
 * By location - a map centred around your location will be displayed so you can see projects close to your home 
 * By status -  any projects that still required volunteers to go ahead will be displayed  
 

### Volunteering for a project
Using any of the search methods above, click on the hyperlink of a project that interests you.  
Click on the "Volunteer" button to sign yourself up for the project.
If you had previously volunteered for the project, you will see a "Withdraw" button. Click this if you no longer wish to volunteer for that project.


===============================================================================

# Tech Team

Built with community spirit by:

 - Brian Patterson
 - David Anderson
 - Glenn Bemont
 - James Baker
 - Liam Taylor
 - Stephen Gregory

## Notes on the build
Built in Javascript using the Meteor framework.  
Data is stored in a Mongo DB.  
Tested using Chimp and Mocha/Chai.  
Pure CSS used in styling  

## Backlog

Features for the next sprint:

* Calendar
* Autosuggest for skills
* Broadcast function between project organiser and volunteers
* Gamification: volunteers get points and no shows get bad karma

## What went well

* Meteor is a intuitive framework that's fun to use
* Scoped an MVP to work towards in week 1, then focused on enhancements in week 2

## What didn't go so well

* Testing was a challenge (this is well noted within the Meteor community)
* The template / helpers paradigm encourages bad coding practice. It was difficult to adhere to SOLID principles within the framework.

## Supporting user stories

The following user stories apply:
```
As a community minded person
So that I can use the "I'm in" website and it's advanced functionality
I would like to sign up to the website
```
```
As a community minded person
So that I can satisfy my need to be useful in the community
I would like to be able to create community projects that people may volunteer for  
``` 
```
As a community minded person
So that I can satisfy my need to be useful in the community
I would like to be able to volunteer for community projects
```
```
As a project initiator
So that I can get people with specialised skills 
I would like to be able to specify certain skills on the project   
``` 
```
As a community minded person
So that I can find suitable projects to volunteer for
I would like to be able to search for projects that are close to me, interest me and make use of any specialised skills I might possess. 
``` 
```
As a community minded person
In case I am no longer available
I would like to be able to withdraw from projects I have volunteered for
``` 
