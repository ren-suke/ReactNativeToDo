import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {SCHEMAS} from './RealmSchemas';

export async function getTags(projectId) {
  const realm = await Realm.open({
    schema: SCHEMAS,
    schemaVersion: SCHEMA_VERSION,
  })
  const tags = realm.objects('Tag').filtered(`project.id = "${projectId}"`);
  const _tags = tags.map(tag => ({...tag, tasks: Array.from(tag.tasks)}))
  return Array.from(_tags);
}

export async function addTask(projectId, tagId, newTask, newTagTitle) {
  const realm = await Realm.open({
    schema: SCHEMAS,
    schemaVersion: SCHEMA_VERSION,
  })

  const latestTaskIDMaximum = getLatestTaskIdMaximum(realm);
  newTask.id = latestTaskIDMaximum;
  if (tagId) {
    const tag = realm.objectForPrimaryKey('Tag', tagId);
    newTask.tag = tag;
    try {
      realm.write(() => {
        tag.tasks.push(newTask);
        tag.project.all_tasks_count = tag.tasks.length;
      });
    } catch (error) {
      throw error;
    }
  } else if (newTagTitle) {
    const tag = addTag(realm, projectId, newTagTitle);
    newTask.tag = tag;
    try {
      realm.write(() => {
        tag.tasks.push(newTask);
        tag.project.allTasksCount = tag.tasks.length;
      });
    } catch (error) {
      throw error
    }
  }
  return getTags(projectId);
}

export async function changeTaskStatus(taskId, projectId, isCompleted) {
  const realm = await Realm.open({
    schema: SCHEMAS,
    schemaVersion: SCHEMA_VERSION,
  })
  const task = realm.objectForPrimaryKey('Task', taskId);
  const project = realm.objectForPrimaryKey('Project', projectId);
  realm.write(() => {
    task.isCompleted = isCompleted;
    if (isCompleted) {
      project.completedTasksCount = project.completedTasksCount + 1;
    } else {
      project.completedTasksCount = project.completedTasksCount - 1;
    }
  });
  return getTags(projectId);
}

function addTag(realm, projectId, newTagTitle) {
  const project = realm.objectForPrimaryKey('Project', projectId);
  const latestTaskIDMaximum = getLatestTagIdMaximum(realm);
  const newTag = {
    id: latestTaskIDMaximum,
    project: project,
    title: newTagTitle,
    tasks: []
  }
  try {
    let tag = null;
    realm.write(() => {
      tag = realm.create('Tag', newTag);
    });
    return tag;
  } catch (error) {
    console.log(error);
    throw error
  }
}

function getLatestTagIdMaximum(realm) {
  let tags = realm.objects('Tag');
  let latestTag = tags.sorted('id')[tags.length - 1];
  if (latestTag) {
    return latestTag.id + 1;
  } else {
    return 1;
  }
}

function getLatestTaskIdMaximum(realm) {
  let tasks = realm.objects('Task');
  let latestTask = tasks.sorted('id')[tasks.length - 1];
  if (latestTask) {
    return latestTask.id + 1;
  } else {
    return 1;
  }
}
