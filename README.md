# Makers Final PROJECT

# (I'm In) i-min.co.uk (secret development name "PROJECT SNOWFLAKE")

## Summary

A browser-based application intended as a community for property hosts and travellers, allowing users to list their own properties and search and request stays at other members'.  
An application to allow users to collaborate on local gainful pursuits


## Setup

1. Navigate to the folder where you want to store the app, and run these command line requests:

```
  git clone https://github.com/wirsindpapst/project-snowflake
  cd project-snowflake
  meteor run
```

2. Enter 'localhost:3000' into your preferred browser to load the site

## Using the site

### Signing up

 Before getting started, it makes sense to sign up for an account, to do this:
  * Click the 'Sign up' link in the navigation bar at the top
  * Fill in the form
  * You'll receive a confirmation email to the email address you entered once everything is complete

Welcome to "I'm In"

![Imgur](http://i.imgur.com/RYFZEcQ.png)

### Navigating the site

The navigation bar (at the top) is the same on every screen, and lets you quickly access the site's main features, namely searching, listing a property, viewing your profile, and signing out. In addition, clicking the icon in the top left will take you back to this home screen.

The two buttons in the main body of the site let you:

 * Search the properties listed on Makersbnb
 * Or, for the indecisive, view all listings

### Searching Makersbnb

Searching can be done using a unique listing id for each property or a specific city. In addition, you can enter the dates you'd like, so that you only get relevant options.

### Requesting a site

For each listing, you'll see  the dates for which it's available. If you've specified dates in your search, you'll only see options within those dates.

If you see some thing you like, you can request to stay during the dates specified by clicking 'Make booking Request'. This will inform the host that you'd like to stay there, who will get back to you with a response.

Please note, currently you can only request stays based on the slots specified by the host. We're working on improving the site by allowing you to suggest your own dates.

### Listing a property

Listing a property allows you to enter the details of properties you'd like to make available for other users of the site. It's pretty straightforward, just click the option in the navigation bar and enter the required details. Once all this is done, you'll get a message confirming the listing has been successfully added.

### Adding available dates

Once you've added a property, you'll be prompted to specify when it's available so that users can request that slot. Simply click the relevant link and enter the dates. To enter further dates, just go to you profile and select the 'Add dates' option next to this listing.

### Approving a request

So your listing is live on the site, and you've entered when it's available, now you're just waiting for it to be requested by another user. Once this has happened, you will receive an email. You can now approve the request (or reject it, if you're feeling mean).

To do this, go to you profile page. In the field, 'Received Requests', you'll see all the requests for your property listings, which you can individually accept or reject. Once a request has been accepted, it will be removed from the 'avialable dates' for that listing.

### The rest of the profile

In addition to approving requests, the profile page has some more important information on it:

 * Your booking requests: requests you've made on other listings, and their status
 * Accepted bookings: any requests you've accepted and are still upcoming are visible here
 * Current listings: All of the listings attached to your profile, you can also see the dates they're available and add to these

===============================================================================

# Tech stuff

Built with community spirit by:

 - Brian Patterson
 - David Anderson
 - Glenn Bemont
 - James Baker
 - Liam Taylor
 - Stephen Gregory

## Notes on the build

Pretty standard; Ruby backend, html on the front, and CSS provided largely by [Pure](http://purecss.io/)

## Pipeline

Stuff we'd like to add if we around to it (or feel free to add it yourself and submit a pull request)

* Requesting stays different to those of the dates specified by the host
* Chat between hosts and tenants
* Uploading images of listings
* Further CSS tweaking (hence the current minimal screenshots)

### Original specification

The app was created to address the following high level specification:

* Any signed-up user can list a new space.
* Users can list multiple spaces.
* Users should be able to name their space, provide a short description of the space, and a price per night.
* Users should be able to offer a range of dates where their space is available.
* Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
* Nights for which a space has already been booked should not be available for users to book that space.
* Until a user has confirmed a booking request, that space can still be booked for that night.

### Nice-to-haves

* Users should receive an email whenever one of the following happens:
  * They sign up
  * They create a space
  * They update a space
  * A user requests to book their space
  * They confirm a request
  * They request to book a space
  * Their request to book a space is confirmed
  * Their request to book a space is denied
* Users should receive a text message to a provided number whenever one of the following happens:
  * A user requests to book their space
  * Their request to book a space is confirmed
  * Their request to book a space is denied
  * A ‘chat’ functionality once a space has been booked, allowing users whose     space-booking request has been confirmed to chat with the user that owns that space
  * Basic payment implementation though Stripe.

## Supporting user stories

Following on from the above specification, the following user stories to create
```
As a visitor
So that I can use the Makersbnb website
I would like to sign up to the website
```
```
As a visitor
So that I can book a space
I would like to view other users spaces
```
