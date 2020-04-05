import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {SCHEMAS} from './RealmSchemas';

export async function createProject(newProject) {
  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION});
  realm.write(() => {
    const id = getLatestIdMaximum(realm);
    newProject.id = id;
    realm.create('Project', newProject);
  });
  return getProjects();
}

export async function getProjects() {
  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION});
  const projects = realm.objects('Project');
  const _projects = Array.from(projects);
  return _projects;
}

export async function deleteProjects(deleteProjectIds) {
  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION})
  const projects = realm.objects('Project');
  const tags = realm.objects('Tag')
  for (let deleteProjectId of deleteProjectIds) {
    const deleteProject = projects.filtered(`id = ${deleteProjectId}`);
    const deleteTags = tags.filtered(`project.id = "${deleteProjectId}"`);
    try {
      realm.write(() => {
        realm.delete(deleteProject);
        realm.delete(deleteTags);
        return getProjects();
      });
    } catch (error) {
      throw error
    }
  }
}

// private function

function getLatestIdMaximum(realm) {
  let projects = realm.objects('Project');
  let latestProject = projects.sorted('id')[projects.length - 1];
  if (latestProject) {
    return latestProject.id + 1;
  } else {
    return 1;
  }
}
