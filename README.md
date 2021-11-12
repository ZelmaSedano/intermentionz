# InterMention - Change How You Think

## Capstone Project for Techtonica

InterMention is a an application that utilizes the Cognitive Restructuring Repetition and Reminding technique to Reinforce and Redirect the user's thought process by having positive affirmations available at their fingertips. Users can add quotes and affirmations to their table, remove quotes, and text them to themselves using SMS. In addition, InterMention will display a Quote of the Day from the Affirmations API.

## Upcoming Additions:

Sending users their favorite Mention on a schedule so that they are reminded of something positive throughout their day, which can slowly over time counteract negative thought patterns.

<h3><a href='https://intermentionz.herokuapp.com/'  target='_blank'>View InterMention on Heroku</a><h3>

<img src="./serene.png">

## Technologies

- React.js
- PostgreSQL
- Express.js
- Raw CSS ('cuz I :heart: CSS)
- Twilio SMS API
- Auth0 API

## Running Locally

1. Install & run <a href='https://www.docker.com/'>Docker</a>
2. Fork & clone this repo
3. Create a `.env` file in the `app/` directory & add these lines:

```
REACT_APP_AUTH0_DOMAIN=<copy/paste your api key here>
REACT_APP_AUTH0_CLIENT_ID=<copy/paste your api key here>
REACT_APP_AUTH0_AUDIENCE=<copy/paste your api key here>
REACT_APP_TWILIO_ACCOUNT_SID=<copy/paste your api key here>
REACT_APP_TWILIO_AUTH_TOKEN=<copy/paste your api key here>
```

4. In your CLI, from the root directory, run `npm install`
5. Navigate into /app with `cd app` & run `npm install`
6. Navigate back to the root directory & run `npm run db:init`
7. Also from the root directory, run `npm start`
8. InterMention will be running on <a href='https://www.localhost:3000'>localhost:3000</a>

## Receing Mention as SMS Text

- If you would like to receive a Mention via text:
  - Add a new Mention to your table
  - Enter your phone number (click 'Enter Phone')
  - Click 'Get SMS' button - et voila!

## MVP (Minimal Viable Product)

- The user can log in with their Google account
- The user can add affirmations to their list and view them at any given time
- Applications uses an Affirmations API to consume a Quote of the Day
- User can delete affirmations from table

## Stretch Goal

- Send their favorite Mention/Affirmation to the user via text (Twilio SMS API) - ACHIEVED!

## Mockup/Wireframe

Landing Page
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/landing.png" width="300px">

Dream Dashboard
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/dashboard.png" width="300px">
