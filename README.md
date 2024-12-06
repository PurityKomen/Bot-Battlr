# React Code Challenge: Bot Battlr

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

(https://camo.githubusercontent.com/e4ac6e33e7ae2cff9fef2bcdc18560068ac97a2875016a0f5ac459725f3dd1fd/68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d322f70686173652d322d686f6f6b732d636f64652d6368616c6c656e67652d626f742d626174746c722f636865636b706f696e745f64656d6f2e676966)

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

## Instructions

For this project, you’ll be building out a React application that displays a list of available bots, among other features. Try your best to find the right places to insert code into the established code base.

### Project Setup

Once you have the plan in place for the application you want to build take the following steps:

1. Create a new project folder.
2. Create a new GitHub repository. 
3. Please make sure you regularly commit to the repository.
4. In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
5. Run this command to get the backend started: json-server --watch db.json
6. Test your server by visiting this route in the browser: http://localhost:8001/bots

## Core Deliverables

As a user,I should be able to:

1. See profiles of all bots rendered in BotCollection.
2. Add an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
3. Release a bot from my army by clicking on it. The bot disappears from the YourBotArmy component.
4. Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.

## Endpoints for Core Deliverables

### GET /bots
Example Response:

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
### DELETE /bots/:id
Example Response:

{}

## Advanced Deliverables

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot. Your app could look like the following:

(https://camo.githubusercontent.com/79355ccd75ef91e3503f493cc98acf262ecc0c55d4b7d82fa0045afddb3d3bc1/68747470733a2f2f637572726963756c756d2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f70686173652d322f70686173652d322d686f6f6b732d636f64652d6368616c6c656e67652d626f742d626174746c722f66756c6c5f64656d6f2e676966)

- Sort bots by their health, damage or armor. For this, create a new component, SortBar.
- When I enlist a bot it will be removed from the BotCollection and added to YourBotArmy.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component, SortBar.
- Only enlist one bot from each bot_class. The classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].
