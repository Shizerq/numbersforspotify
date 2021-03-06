<div align="center">
 <h1>Numbers for Spotify</h1>
 <img src="https://github.com/Shizerq/numbersforspotify/blob/master/resources/mockup_three_screens.png?raw=true" />
</div>

**Spotify statistics app** that provides a crossplatform, aesthetic way to check your top listened artists, songs and genres in different periods.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## To do
- [ ] Add top artists/songs collage generator
- [ ] Fix left TypeScript errors/warnings
- [x] Add i18n and Polish language support
- [x] Create a splashart and an icon

## Bug reporting, contributing
If you have found any bug, or would like to contribute to the project, feel free to open an issue or create a PR.

## Development

### Prerequisites

Create an app in Spotify's Web API dashboard and add your redirect URI (You can check out the Expo documentation <a href="https://docs.expo.io/guides/authentication/#spotify">here</a>).

Run the ```/api/spotify-credentials``` endpoint. To do this, you have to install the dependencies ```yarn install```, put your Spotify ClientId and ClientSecret in a ```.env``` file, and then deploy it or run locally (```yarn start```).
You can find the necessary files in the ```./server``` folder. 

### Install project dependencies

```bash 
yarn install
```

### Run the project
```bash
yarn start
```

For more information check the official <a href="https://docs.expo.io/workflow/expo-cli/">Expo documentation</a>.

## License

The code of the project is published under MIT license. <br />
