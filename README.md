# m-blog-2024


Model-View-Controller (MVC) Challenge: Tech Blog
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts



# Tech Blog - Model-View-Controller (MVC) Challenge

## Overview

This project is about creating a website where people who work with technology can share their thoughts and experiences. It's similar to a blog, where users can write articles and comment on other people's posts. We're building it from scratch following a specific structure called Model-View-Controller (MVC). For making the website look good and function well, we're using technologies like Handlebars.js for creating pages, Sequelize for working with the database, and a tool called express-session to handle user logins.

## What You Can Do

### As a Developer Who Writes About Tech, You Can:

- Share your ideas and opinions by writing articles and blog posts.
- Read and comment on other developers' posts.

## What the Website Can Do

### Homepage:

When you first go to the site, you'll see the homepage. It shows any existing blog posts and has links for going back to the homepage or to your personal dashboard. You'll also see a button to log in if you're not already logged in.

### Navigation:

You can move around the website by clicking on links. If you try to go to a page and you're not logged in, you'll be asked to sign up or log in.

### User Authentication:

If you're new to the site, you can sign up by creating a username and password. After signing up, you can log in and out whenever you want.

### Dashboard:

Once you're logged in, you'll see your personal dashboard. From here, you can manage your blog posts. You can create new ones, edit existing ones, or even delete them.

### Blog Posts:

You can read blog posts written by others. Each post shows the title, content, who wrote it, and when it was published. You can also leave comments on posts.

### Session Management:

If you're inactive on the site for too long, you'll be asked to log in again for security reasons.

## Technologies We're Using

- **Express.js**: Backend framework for Node.js.
- **Handlebars.js**: Templating engine for generating HTML content.
- **Sequelize**: Object-Relational Mapping (ORM) library for interacting with databases.
- **express-session**: npm package for handling user authentication and session management.

