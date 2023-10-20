## StartList API

Welcome to my super simple startlist API

## Install & running

Run this `yarn install && yarn start``

# Endpoints:

1. http://localhost:3000/startlist - GET - Returns a list of the entire startlist from a file
2. http://localhost:3000/create - POST - Create a new entry in the StartList
3. http://localhost:3000/startlist /query - GET - Given a query Parameter, parse the StartList

## StartList

This returns all available events

## Create

To create a new event, you can use the below oneliner:

``` bash
curl -X POST -H "Content-Type: application/json" -d '{
  "id": "000",
  "eventId": "e000",
  "raceId": "r001",
  "ticketId": "t010",
  "eventTitle": "Run For Your Life",
  "raceTitle": "10k",
  "ticketTitle": "Standard Ticket",
  "createdAt": "2022-11-27T01:20:57.371Z",
  "updatedAt": "2023-01-21T11:15:51.236Z",
  "fields": [
    {
      "id": "firstName",
      "name": "First Name",
      "value": "Tristan"
    },
    {
      "id": "lastName",
      "name": "Last Name",
      "value": "Watson"
    },
    {
      "id": "emailAddress",
      "name": "Email Address",
      "value": "tristan@triwats.com"
    },
    {
      "id": "gender",
      "name": "Gender",
      "value": "male"
    },
    {
      "id": "dateOfBirth",
      "name": "Date of Birth",
      "value": "1999-09-9"
    },
    {
      "id": "addressLine1",
      "name": "Address (Line 1)",
      "value": "168 Down the Road"
    },
    {
      "id": "addressLine2",
      "name": "Address (Line 2)",
      "value": "Apt 87B"
    },
    {
      "id": "addressCity",
      "name": "Address (City)",
      "value": "London"
    },
    {
      "id": "addressPostcode",
      "name": "Address (Postcode)",
      "value": "NW2 8EE"
    },
    {
      "id": "addressCountry",
      "name": "Address (Country)",
      "value": "United Kingdom"
    },
    {
      "id": "phone",
      "name": "Phone Number",
      "value": "+447708192027"
    },
    {
      "id": "emergencyContactName",
      "name": "Emergency Contact",
      "value": "Alice Miller"
    },
    {
      "id": "emergencyContactPhone",
      "name": "Emergency Phone",
      "value": "+447531101769"
    }
  ]
}'http://localhost:3000/create
```

Alternatively, use a file:

```bash
curl -X POST -H "Content-Type: application/json" -d '@./data/tristan-watson.json' http://localhost:3000/create
```

## Query

You can use query parameters to filter what we want to get back:

For example:

``` bash
curl "http://localhost:3000/query?eventTitle=Great%20Scottish%20Run"
```

Or simply visit: http://localhost:3000/query?eventTitle=Great%20Scottish%20Run

## Pagination

We wanted to return a limited amount of entries to allow for doom scrolling - easiest way to do this will be allow the client to specify the amount they want in a query parameter.

## Schemas

A single entry was used to create a very loose schema. An online schema generator was used to infer this.

## Pagination

We wanted to return a limited amount of entries to allow for death scrolling

*With 10 responses*:

```
http://localhost:3000/startlist?limit=10&page=1
```

*With 1000 responses*:
http://localhost:3000/startlist?limit=1000&page=1

# Huge Improvements

1. Use Typescript to achieve typing 🙏
2. Add pagination to the query page
3. Fix search so that we can search on any term
4. Fix pagnination
5. Add tests to ensure that the mocked responses are correct
6. Ensure consistent function declarations (arrow functions only)
7. Implement horizontally scalable Database to store the startlist
8.  Deploy somewhere simple (Cloudflare Workers, Vercel) to host this full experience
9. Create a simple form to input new entries
