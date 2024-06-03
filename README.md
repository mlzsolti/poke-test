# Nuant FE Test

This project uses vite react-ts template which provides a minimal setup to get React working in Vite with ESLint rules.

## Running the project

```bash
yarn install
yarn dev
```

## Questions

_What part of building the project was the most difficult? Why?_

The most time-consuming part was getting around the limitations of the API. The API does not provide a way to filter the data based on the user's input. I had to fetch all the data and then filter it on the client-side. This is not ideal as it can slow down the application if the data is too large. In the end I chose note to fetch every single item in the list individually, because realistically it's not something that would happen in a real-world scenario. If needed, I can provide an example of how I would fetch the data individually.

_How long did it take to have this test completed ? Which part of the test took you longer? Could you specify roughly the amount of time it took you to do the following:_

- Set up environment - 1 hour
- Search feature - 30 minutes
- Filter feature - 30 minutes
- Result display - 30 minutes
- Other (please specify) - 1 hour (planning on how to get around the API issues)
  In total I've spent around 3-3,5 hours on this test.
