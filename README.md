# I'm Im!

### A.K.A Project Snowflake

![LandingPage](http://imgur.com/a/hoZGU)

## The concept

Many people like the idea of giving back to the local community, but aren't able to commit to a long term role or don't know where to look.

I'm In serves as a platform to link up people who want to give back to their community with one-off opportunities to do so (think clearing up the local park, helping out at a food bank for a day).

The site also incorporates a crowdsourcing element, with project organisers setting a minimum number of volunteers required for the project to go ahead.

## Accessing the site

https://imin.eu.meteorapp.com


## Using the site

* Login: it's pretty straightforward
* Create a profile: enter some brief details, an optional profile picture and drop the pin in the area you'd like receive search results
* View projects: Projects are displayed by default in chronological order (closest to furthest away). You can also sort projects by your location, its status, or filter them by your skills
* Volunteer
* Add a project: Create a project by entering a few details including the number of people you need, and the specific skills required

# Technical stuff

## Stack

Built in Javascript using the Meteor framework. Data is stored in a Mongo DB. Tested using Chimp and Mocha/Chai. Pure CSS used in styling

## Backlog

Features for the next sprint:

* Calendar
* Autosuggest for skills
* Broadcast function between project organiser and volunteers
* Gamification: volunteers get points and no shows get bard karma

## What went well

* Meteor is a intuitive framework that's fun to use
* Scoped an MVP to work towards in week 1, then focused on enhancements in week 2

## What didn't go so well

* Testing was a challenge (this is well noted within the Meteor community)
* The template / helpers paradigm encourages bad coding practice. It was difficult to adhere to SOLID principles within the framework
