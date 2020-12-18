# StandardJJ 
> A video app for members of my Jiu Jitsu gym. This will create a simple place for students to log in, select a topic, and watch instructional materials related to it.

## Tech Stack
> React front end and an express/firebase combo using cloud functions for endpoints and firestore for the db.
### Other Technologies Used:
- Axios
- react-burger-menu
- react-router-dom
- react-player

## Installation
> cd into the root directory and run 'npm install'. You will need to create your own .env environment file and add the configuration/api keys from your own firebase project, as well as provide the link to your own back end in the same file.

## User stories
- [x] As a user, I would like to be able to log in and access my school's content.
- [x] As a user, I would like to be presented with links to the topics covered in class, so that I can see just the videos related to those topics
- [ ] As a user, when I'm watching a video I would like to have immediate links to other videos in the same series so that I don't have to go back to the series page.
- [x] As a user, I would like to have a table of contents that will take me to specific sections of the instructional videos so that I don't have to tap through the video myself.

stretch:
- [ ] As a user, if I have administrative privileges I would like to be able to add more videos after they have been uploaded to youtube
- [ ] As a user, if I have administrative privileges I would like to be able to create new series to add videos to, so that I can upload videos for new topics and still keep things organized.
- [ ] As a user, if I am an admin I would like to be able to edit and delete videos, so that I can fix mistakes.

## Major hurdles:
- Auth still feels clunky, as does response time from the api
- Front end very incomplete, need to rework layouts/page content.
- Need an admin page for owners.
