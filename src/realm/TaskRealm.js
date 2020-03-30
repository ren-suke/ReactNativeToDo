import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {TagSchema, TaskSchema, ProjectSchema} from './RealmSchemas';

export function getTags(projectID) {
  Realm.open({
    schema: [TagSchema, TaskSchema, ProjectSchema],
    schemaVersion: SCHEMA_VERSION,
  })
    .then(realm => {
      // 変数埋め込みのところにダブルクオーテーション必要かも
      console.log(realm.path);
      const tags = realm.objects('Tag').filtered(`project.id = ${projectID}`);
      realm.close();
      return tags;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function addTask(projectId, tagId, newTask, newTagTitle) {
  Realm.open({
    schema: [ProjectSchema, TagSchema, TaskSchema],
    schemaVersion: SCHEMA_VERSION,
  })
    .then(realm => {
      console.log(realm.path);
      const latestTaskIDMaximum = getLatestTaskIdMaximum(realm);
      newTask.id = latestTaskIDMaximum;

      if (tagId) {
        const tag = realm.objectForPrimaryKey('Tag', tagId);
        newTask.tag = tag;

        realm.write(() => {
          tag.tasks.push(newTask);
          tag.project.all_tasks_count = tag.tasks.length;
        });
      } else if (newTagTitle) {
        const newTagId = addTag(realm, projectId, newTagTitle);
        const tag = realm.objectForPrimaryKey('Tag', newTagId);
        newTask.tag = tag;
        realm.write(() => {
          tag.tasks.push(newTask);
          tag.project.allTasksCount = tag.tasks.length;
        });
      }

      realm.close();
      return getTags(projectId);
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export function changeTaskStatus(taskId, projectId, isCompleted) {
  Realm.open({
    schema: [ProjectSchema, TagSchema, TaskSchema],
    schemaVersion: SCHEMA_VERSION,
  })
    .then(realm => {
      const task = realm.objectForPrimaryKey('Task', taskId);
      const project = realm.objectForPrimaryKey('Project', projectId);
      realm.write(() => {
        task.isCompleted = isCompleted;
        if (isCompleted) {
          project.completedTasksCount = project.completedTasksCount + 1;
        } else {
          project.completedTasksCount = project.completedTasksCount - 1;
        }
        realm.close();
        return task;
      });
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

function addTag(realm, projectId, newTagTitle) {
  const project = realm.objectForPrimaryKey('Project', projectId);
  const latestTaskIDMaximum = getLatestTagIdMaximum(realm);

  realm.write(() => {
    realm.create('Tag', {
      id: latestTaskIDMaximum,
      project: project,
      title: newTagTitle,
      tasks: [],
    });
    return latestTaskIDMaximum;
  });
}

function getLatestTagIdMaximum(realm) {
  let tags = realm.objects('Tag');
  let latestTag = tags.sorted('id')[tags.length - 1];
  console.log('-------------latest tag id maximum-------------');
  console.table(tags);
  console.log('--------------------------');
  if (latestTag) {
    return latestTag.id + 1;
  } else {
    return 1;
  }
}

function getLatestTaskIdMaximum(realm) {
  let tasks = realm.objects('Task');
  let latestTask = tasks.sorted('id')[tasks.length - 1];
  console.log('------------latest task id maximum--------------');
  console.table(tasks);
  console.log('--------------------------');
  if (latestTask) {
    return latestTask.id + 1;
  } else {
    return 1;
  }
}
