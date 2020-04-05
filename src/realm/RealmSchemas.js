const ProjectSchema = {
  name: 'Project',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    allTasksCount: {type: 'int', default: 0},
    completedTasksCount: {type: 'int', default: 0},
    imageData: 'string',
  },
};

const TagSchema = {
  name: 'Tag',
  primaryKey: 'id',
  properties: {
    id: 'int',
    project: 'Project',
    title: 'string',
    tasks: 'Task[]',
  },
};

const TaskSchema = {
  name: 'Task',
  primaryKey: 'id',
  properties: {
    id: 'int',
    tag: 'Tag',
    title: 'string',
    deadline: 'date?',
    isCompleted: {type: 'bool', default: false},
  },
};

export const SCHEMAS = [ProjectSchema, TagSchema, TaskSchema];
