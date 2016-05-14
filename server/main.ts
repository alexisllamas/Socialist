import 'collections/parties';

import {loadParties} from './load-parties';
 
Meteor.startup(loadParties);