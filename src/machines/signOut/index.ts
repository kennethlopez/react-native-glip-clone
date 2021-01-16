import {Machine} from "xstate";
import config from "./config";
import implementation from "./implementation";

const signOutMachine = Machine(config, implementation);

export default signOutMachine;
