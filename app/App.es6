import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap';

import angular from 'angular';
import 'angular-ui-router';

import './login/LoginModule';
import AppController from './AppController';

/* @ngInject */
function appConfig($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
}

const App = angular.module('App', ['ui.router', 'Login']);

App.config(appConfig);

App.controller('AppController', AppController);