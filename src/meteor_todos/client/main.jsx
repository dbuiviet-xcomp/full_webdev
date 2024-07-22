import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';
import { Template } from "meteor/templating";


const todos = [
  {task: 'Pickup kids from school'},
  {task: 'Go food shopping'},
  {task: 'Meeting with boss'},
];


Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<App />);
});

Template.main.helpers({
  todos(){
      return (
      <div>
      <ul>
          {{#each todos}}
            {{> task}}
          {{/each}}
      </ul>
      </div>
      
  )}
});

<template name='task'>
    <li>{{task}}</li>
</template>