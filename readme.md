# Specific quiz question state availability condition [![Build Status](https://travis-ci.org/moodleou/moodle-block_workflow.svg?branch=master)](https://travis-ci.org/moodleou/moodle-block_workflow)

Teachers can make another activity available or not depending on the state of a question
an a particular quiz.

When setting up the availability of an activity, the teacher can select
one of the quizzes in the course, and then a question in that quiz.
They must then select which attempt to consider and what qusetion states.
Access to the controlled activity will then be allowed only if that question
is in that state in the designated attempt.


## Acknowledgements

This feature was suggested during the roadmap brainstorming session at the
first MoodleMoot Global in Barcelona in 2019. It received quite a lot of
votes and Thomas Korner was enthusiastic, so I was inspired to start
implementing it on my flight home.


## Installation and set-up

### Install from the plugins database

Once finished, this plugin will presumably become available from
https://moodle.org/plugins/availability_quizquestion.

### Install using git

Or you can install using git. Type this commands in the root of your Moodle install

    git clone -o upstream https://github.com/timhunt/moodle-availability_quizquestion.git blocks/workflow
    echo '/availability/condition/quizquestion/' >> .git/info/exclude

Then run the moodle update process
Site administration > Notifications
