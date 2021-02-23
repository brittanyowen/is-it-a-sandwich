# Is It A Sandwich? 

https://is-it-a-sandwich.netlify.app/

## Project Description

Users of Is It A Sandwich? will be able to contrubute to the conversaton of "what is a sandwich?" on the home page and vote on if they think a hotdog is a sandwich on the vote page. Upon completing the yes/no question, users will be directed to the results page where the aggregate voting results will be displayed. All of these pages will be available in the navagation bar at the top of the web page. 

## Wireframes

Desktop:

![alt text](https://i.imgur.com/3GxMai1.png "Desktop Home Page Wireframe")
![alt text](https://i.imgur.com/EimpwDZ.png "Desktop Vote Page Wireframe")
![alt text](https://i.imgur.com/HAeBC3s.png "Desktop Is It A Sandwich Page Wireframe")

Tablet: 

![alt text](https://i.imgur.com/BoJFq71.png "Tablet Home Page Wireframe")

Mobile:

![alt text](https://i.imgur.com/Rhgl6An.png "Mobile Home Page and hamburger menu Wireframe")

## Component Hierarchy
![alt text](https://i.imgur.com/TWQLDA4.png "Component Hierarchy")

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
- use https://www.npmjs.com/package/react-minimal-pie-chart to implement a pie chart of the data 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---|---|
|Feb 16| Project Pitch & Approval, React app & basic framework & Nav component set up | Complete
|Feb 17| Render comments API on home page & fully functioning comment form with submit button | Complete
|Feb 18| Render foods API on results page, voting page to modify yes/no of food | Complete
|Feb 19| Deployed MVP due, media queries | Complete
|Feb 20| Post MVPs, adding other foods to API/voting page/results page | Complete
|Feb 21-22 | CSS Styling - grid/flexbox/animations | Complete
|Feb 23| Presentations | 

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| React App Setup & basic framework | H | 3hrs| 2hrs | 2hrs |
| Create components folder, create Nav component with links to "Home", "Vote", and "Is It A Sandwich?" | H | 3hrs| 2hrs | 2hrs |
| Create Comments component, make axios GET call to comments API | H | 3hrs| 2hrs | 2hrs |
| Map through comments array and render on App.js | H | 2hrs| 1hrs | 1hrs |
| Create Form component & render on App.js above rendered comments using axios GET call | H | 3hrs| 1hrs | 1hrs |
| Create Foods and Results component, make axios GET call to foods API & render on App.js | H | 3hrs| 2hrs | 2hrs |
| Edit the yesVotes/noVotes states using axios PUT and POST | H | 6hrs| 6hrs | 6hrs |
| Once user clicks either yes or no button, direct page to results page using history.push | H | 2hrs| 6hrs | 6hrs |
| Media queries for tablet and mobile | H | 3hrs| 3hrs | 3hrs |
| CSS Styling using grid and flexbox | H | 3hrs| 5hrs | 5hrs |
| Adding multiple food items to Foods and Results components | H | 6hrs| 5hrs | 5hrs |
| Total | H | 37hrs| 35hrs | 35hrs |

## SWOT Analysis

### Strengths:
- Organization and planning with the help of this readme to keep me on task
- Knowledge and resources through code alongs and homework
### Weaknesses:
- CSS and styling individual components
- Mobile queries using grid 
- Being able to successfully render componenents to my web page
### Opportunities:
- Learning new react plug in with react-minimal-pie-chart and being able to make a more visually appealing web app 
- Learn how to make and style a hamburger menu on mobile 
### Threats:
- Last project I struggled with getting stuck on small problems and I ended up wasting a lot of time, there is a threat of that happening again with the addition of two API tables and a new react plug in. 

## Changelog
- added description of website purpose on home page
- omitted hamburger menu
- added Ballot and Vote components 
