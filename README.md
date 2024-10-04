## Spotify-Api PAP3

### Overview

- Welcome to my Spotify API App. This full-stack spotify app allows users to discover artist avalible on the Spotify platform. As the user you will be able to click the image for the artist and be redirected to Spotify to view and listen to albums and songs from that artist.

  ### Prerequisites

  To use this application's repository:

        nodemon >= v3.1.4,
        cors >= v2.8.5,
        dotenv >= v16.4.5,
        express >= v4.19.2,
        mongoose >= v8.4.5
        npm >= v10.2.4
        node >= v18.19.1

### Getting Started

    To use this project install the dependencies above,
    setup our .env file by using the .env.dist.
    After setting up the .env file and installing the node dependencies above run npm dev to start using the project.

    '''npm run dev'''

    The api folder holds the backend api. Use port 3000 to host our backend server.
    The spotifyApp folder holds the frontend app. Use port 3001 to host our frontend application.

### Links

    The following links are used:

    - http://localhost:3001 - Link to the frontend Application

    - http://localhost:3000 -Link to backend Express API

    - http://localhost:3000/spotify/v1 - Link to Spotify API

    - http://localhost:3000/spotify/v1/login - Returns request for a new JWT from Spotify using the authentacation workflow

    -http://localhost:3000/spotify/v1/search - Endpoint for a general/global serch to Spotify. Returns JSON results.
