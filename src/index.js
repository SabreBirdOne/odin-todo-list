import {newDefaultProjectHandler} from "./buttonHandlers.js"
import loadHomePage from "./home.js"
import allProjects from "./allProjects.js";

import "./cards.css";

loadHomePage();
newDefaultProjectHandler();

console.log(allProjects);