# Is It A Sandwich? 

## Project Description

Users of Is It A Sandwich? will be able to contrubute to the conversaton of "what is a sandwich?" on the home page and vote on if they think a hotdog is a sandwich on the vote page. Upon completing the yes/no question, users will be directed to the results page where the aggregate voting results will be displayed. All of these pages will be available in the navagation bar at the top of the web page. 

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy
[Component Hierarchy](https://imgur.com/r33Xoej)

## API and Data Sample
comments data sample: 
```json
{
    "records": [
        {
            "id": "recdSqVHIMxXzrpd3",
            "fields": {
                "comment": "If a hamburger is a sandwich, wouldn't a quesadilla also be a sandwich? ",
                "author": "deepdish312"
            },
            "createdTime": "2021-02-13T19:49:23.000Z"
        },
        {
            "id": "recPUfFTKyEIcZH78",
            "fields": {
                "comment": "a hotdog is not a sandwich!",
                "author": "chicagodog773"
            },
            "createdTime": "2021-02-13T19:49:23.000Z"
        },
        {
            "id": "recBmm9PJ8DtUC0PD",
            "fields": {
                "comment": "I don't know about all this but now I'm hungry",
                "author": "hoagie_roll"
            },
            "createdTime": "2021-02-13T19:49:23.000Z"
        }
    ],
    "offset": "recBmm9PJ8DtUC0PD"
}
```

foods data sample: 
```json
{
    "records": [
        {
            "id": "rec7IYq3xD6pnefVO",
            "fields": {
                "noVotes": "0",
                "yesVotes": "0",
                "food": "hot dog"
            },
            "createdTime": "2021-02-13T19:43:15.000Z"
        },
        {
            "id": "rec7IYq3xD6pnefVO",
            "fields": {
                "noVotes": "0",
                "yesVotes": "0",
                "food": "hot dog"
            },
            "createdTime": "2021-02-13T19:43:15.000Z"
        }
    ]
}
```
### MVP/PostMVP  

#### MVP 

- Render comments API from Airtable on the home page
- Render input from the fillable comment form onto the home page
- Render foods API from Airtable on the "Is It A Sandwich?" page
- Use history.push to redirect users to the "Is It A Sandwich?" page after they have voted 
- Use PUT/POST to store results from user voting to update the yes and no votes on the foods API 

#### PostMVP  

- add multiple items to the foods API/voting/results

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---|---|
|Feb 16| Project Pitch & Approval, React app & basic framework & Nav component set up | Incomplete
|Feb 17| Render comments API on home page & fully functioning comment form with submit button | Incomplete
|Feb 18| Render foods API on results page, voting page to modify yes/no of food | Incomplete
|Feb 19| Deployed MVP due, media queries | Incomplete
|Feb 20| Post MVPs, adding other foods to API/voting page/results page | Incomplete
|Feb 21-22 | CSS Styling - grid/flexbox/animations | Incomplete
|Feb 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| React App Setup & basic framework | H | 3hrs| 0hrs | 0hrs |
| Create components folder, create Nav component with links to "Home", "Vote", and "Is It A Sandwich?" | H | 3hrs| 0hrs | 0hrs |
| Create Comments component, make axios GET call to comments API | H | 3hrs| 0hrs | 0hrs |
| Map through comments array and render on App.js | H | 2hrs| 0hrs | 0hrs |
| Create Form component & render on App.js above rendered comments using axios GET call | H | 3hrs| 0hrs | 0hrs |
| Create Foods component, make axios GET call to foods API & render on App.js | H | 3hrs| 0hrs | 0hrs |
| Edit the yesVotes/noVotes states using axios PUT and POST | H | 6hrs| 0hrs | 0hrs |
| Once user clicks either yes or no button, direct page to results page using history.push | H | 2hrs| 0hrs | 0hrs |
| Media queries for tablet and mobile | H | 3hrs| 0hrs | 0hrs |
| CSS Styling using grid and flexbox | H | 3hrs| 0hrs | 0hrs |
| Adding multiple food items to Foods and Results components | H | 6hrs| 0hrs | 0hrs |
| Total | H | 37hrs| 0hrs | 0hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
