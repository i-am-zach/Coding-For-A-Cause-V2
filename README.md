# Coding for a Cause
Built using [Wagtail](https://wagtail.io/)

Contrbutors: Zach Lefkovitz

## Getting started
### Migrating the Database
```
python3 manage.py migrate
```
### Create a new Admin User
```
python3 manage.py createsuperuser
```
### Autopopulate the posts
```
python3 manage.py populate_posts
```
### Run the server
```
python3 manage.py runserver 0.0.0.0:80000
```

## Todo
* Style with CSS Framework
    * Possible options
        * Bootstrap
        * Bulma
        * Tailwind
* Create landing page
* Create staff app
    * Profile index page with profiles in a gallery
    * Profile section for each member
    * Each profile can be its own page
    * Profile model:
        * Name
        * Profile Picture
        * Biography
        * Socials (github, linkedin, twitter...)
            * Should proably be its own model
        * Linked projects
* Create projects app
    * Project index page with projects in a gallery
    * Page and writeup for each individual project
    * Project Model:
        * Title
        * Description
        * Picture gallery
            * Should be its own model similiar to the BlogPageGalleryImage in the [wagtail tutorial](https://docs.wagtail.io/en/stable/getting_started/tutorial.html)
        * Writeup
        * Developers (list of user models)