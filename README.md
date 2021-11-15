# InterMention

### Stop Negative Thoughts in Their Tracks

<p>InterMention is a an application that utilizes Psychology's Repetition & Reminding technique (Cognitive Restructuring) to Reinforce & Redirect the user's thought process. Users can use affirmations (Mentions) to counteract the effects of negative thoughts throughout their day by viewing their Mentions, adding new ones, and even having them sent to their phone as an SMS.</p>

<p>In addition, InterMention has a Quote of the Day to inspire the user with insightful and uplifting quotes.</p>

<h3><a href=''https://intermentionz.herokuapp.com/' target='_blank''>💫 See InterMention in Action</a><h3>

<img src="./serene.png">

### ✨ See Zelma's Other Projects <a href='https://portfolio-zvs.herokuapp.com/'>Here!</a>

## Test User Login

Here is a designated test user. Feel free to log in with their credentials to try out InterMention!

<!-- <img src="./stuart-smalley.jpg" > -->
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/stuart_2.jpeg" width="200px" >

Stuart Smalley

<b>Email: </b>stuartisvalid@gmail.com

<p><b>Password: </b>Celery123!!</p>
<p><b>Bio: </b>Stuart is a someone who occassionally struggles with negative thoughts and he's been looking for something to help.  He's a trained Psychologist, so he knows that counteracting these thoughts when they occur can be very beneficial, so he uses InterMention to keep a list of his favorite affirmations ("Mentions") to use.

Stuart can view his Mentions at any time, add new ones, and even have them texted to his phone. Let's hope that slowly over time Stuart starts to believe these positive alternatives, because he's a great guy who is "entitled to his share of happines".</p>

## Running Locally

1. Install & run <a href='https://www.docker.com/'>Docker</a>
2. Fork & clone this repo
3. Create a `.env` file in the source directory & add these lines:

```
AUTH0_DOMAIN=<copy/paste your domain here>
AUTH0_AUDIENCE=<copy/paste your audience here>
TWILIO_ACCOUNT_SID=<copy/paste your sid here>
TWILIO_AUTH_TOKEN=<copy/paste your token here>
```

4. Create a `.env` file in the `app/` directory & add these lines:

```
REACT_APP_AUTH0_DOMAIN=<copy/paste your domain here>
REACT_APP_AUTH0_CLIENT_ID=<copy/paste your client id here>
REACT_APP_AUTH0_AUDIENCE=<copy/paste your audience here>
```

5. In your CLI, from the root directory, run `npm install`
6. Navigate back to the root directory using `cd ..` & run `npm run db:init`
7. While still in root directory, run `npm start`
8. InterMention will be running on <a href='https://www.localhost:3000'>localhost:3000</a>

## Receiving A Mention as SMS Text

If you would like to receive a Mention via text:

1. Add a new Mention to your table
2. Select that Mention with its Radio Button
3. Enter your phone number (click 'Enter Phone') - MAKE SURE TO ADD A +1 IN FRONT
4. Click 'Get SMS' button - _et voila_!

## Technologies

InterMention utilizes the MVC Model, View, Control design pattern using 3 main technologies:
Model = PostgreSQL, View = React.js, Control = Express.js

- PostgreSQL
- React.js
- Express.js
- Raw CSS ('cuz I :heart: CSS)
- Auth0 API
- Twilio SMS API
- They Said So API

## MVP (Minimal Viable Product)

- The user can login using Auth0 (additions: Google Login Feature)
- The user can add affirmations to their list and view them at any given time
- User can delete affirmations from table
- Consumes a Quote of the Day API

## Stretch Goals

- Send their favorite Mention/Affirmation to the user via text (Twilio SMS API) - ACHIEVED!
- Send the user's SMS on a schedule (added as an OpenSource Issue)

## Mockups & WireFrames

Landing Page
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/landing.png" width="300px">

Dashboard
<br>
<img src="https://raw.githubusercontent.com/ZelmaSedano/intermentionz/main/dashboard.png" width="300px">

## ✨ Contributors

Special thanks to these folks ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://github.com/gsong"><img src="https://avatars.githubusercontent.com/u/607420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Song</b></sub></a><br /></a>💻📖🚇🚧</td>
    <td align="center"><a href="https://github.com/brenthaas"><img src="https://avatars.githubusercontent.com/u/1712361?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brent Haas</b></sub><br /></a>🧑‍🏫💬💻</td>
    <td align="center"><a href="https://github.com/margaretgeary"><img src="https://avatars.githubusercontent.com/u/68314320?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Margaret Geary</b></sub><br /><a href="https://github.com/gsong/express-react-project-example/commits?author=gsong" title="Mentor"></a>🧑‍🏫🎨🤔⚠️</td>
    <td align="center"><a href="https://github.com/nbrengle"><img src="https://avatars.githubusercontent.com/u/3836628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nate Mooney</b></sub></br></a>🧑‍🏫💻🔬</td>
    </tr>
    <tr>
    <td align="center"><a href="https://github.com/tabbykatz"><img src="https://avatars.githubusercontent.com/u/55110763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabitha O'Melay</b></br></sub></a>👀💬</td>
    <td align="center"><a href="https://github.com/jenhuynh"><img src="https://avatars.githubusercontent.com/u/15962197?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jen Huynh</b></br></sub></a>👀📢💬</td>
    <td align="center"><a href="https://github.com/NatalieMonique111"><img src="https://avatars.githubusercontent.com/u/82853021?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Natalie Monique</b></br></sub>📢💬</td>
    <td align="center"><a href="https://github.com/xiaozhong21"><img src="https://avatars.githubusercontent.com/u/11522217?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xiao Zhong</b></br></sub></a>👀</td>
    </tr>
  </tr>
<table>
