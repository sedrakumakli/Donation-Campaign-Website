import config from "../constants/enviroment";
import { getAll } from "./common";

import { getById } from "./common";
export const getProjects = () => getAll(config.projects.all);

export const getProjectDetail = (id) => getById("project/detail", id);
