/**
 * Created by Ben on 6/2/16.
 */
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// This is where we load our modules
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';
import ChatsCtrl from '../controllers/chats.controller';

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angular-meteor',
    'ionic'
]);


new Loader(App)
    .load(ChatsCtrl)
    .load(CalendarFilter)
    .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}
