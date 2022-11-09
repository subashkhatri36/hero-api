# Super Hero GraphQl API

Its a test api for super heros.

## Setup

##### 1.First download this project from main branch.

##### 2. Download mysql for linux , mac or windows and run in your system.

For Linux User:
To start mysql server:

```bash
sudo /opt/lampp/lampp start
```

After your mysql server run Go to project folder.

## Project Installation

### Open project in Vs code and open terminal and type.

```bash
npm install
```

### To run project in dev environment.

```bash
npm run dev
```

# Default Api Gateway is

```bash
localhost:5000/graphql
```

### To run project in prod environment.

```bash
npm start
```

Now you are Good to go to test Graphql Api.

To display all List
Query

```bash
query GetHerosList {
  getHerosList {
    name,image,powerstat,description,id
  }
}
```

To search by Name:
Query

```bash
query GetHerosList($name: String!) {
  getHerosList {
    name,image,powerstat,description,id
  }
  getHerosByName(name: $name) {
    name,image
  }
}
```

Pass following variable to search name

```bash
{
  "name": "jhg"
}
```

## To Insert Update and Delete

# Insert

Query

```bash
mutation AddHero($name: String!, $powerstat: String!, $image: String!, $description: String!, $file: Upload!) {
  addHero(name: $name, powerstat: $powerstat, image: $image, description: $description, file: $file) {
    filename
  }
}
```

Variable

```bash
// variables for adding
{
  "name": "Subash",
  "powerstat": "This is sound",
  "image": "",
  "description": "This is the most effect"
}

```

# update

Query

```bash
mutation UpdateHero($updateHeroId: ID!, $name: String!, $powerstat: String!, $image: String!, $description: String!, $file: Upload!) {
  updateHero(id: $updateHeroId, name: $name, powerstat: $powerstat, image: $image, description: $description, file: $file) {
    filename
  }
}
```

Varaible

```bash
{
  "updateHeroId":1,
  "name": "subash",
  "powerstat": "This is updated sound",
  "image": "",
  "description": "This is the let check effect"
}

```

# delete

Query

```bash
mutation DeleteHero($deleteHeroId: ID!) {
  deleteHero(id: $deleteHeroId)
}
```

variable

```bash
{
  "deleteHeroId": 1
}
```

# Enjoy Testing

## Happy Coding.
