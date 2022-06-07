const generateTeamTemplate = require('../src/team-template.js');
const { writeFile } = require('../src/team-template');

const teamData = require('./team-responses');

writeFile(generateTeamTemplate(teamData))
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });