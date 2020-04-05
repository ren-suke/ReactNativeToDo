import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {SCHEMAS} from './RealmSchemas';

export async function createProject(newProject) {
  console.log('SCHEMAS');
  console.log(SCHEMAS);
  console.log('--------- Realm Path ---------');
  console.log(Realm.defaultPath);

  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION});
  realm.write(() => {
    const id = getLatestIdMaximum(realm);
    newProject.id = id;
    realm.create('Project', newProject);
  });
  const latestObjects = realm.objects('Project');
  const _latastObjects = Array.from(latestObjects);
  return _latastObjects;
}

export async function getProjects() {
  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION});
  const projects = realm.objects('Project');
  const _projects = Array.from(projects);
  return _projects;
}

export async function deleteProjects(deleteProjectIDs) {
  const realm = await Realm.open({schema: SCHEMAS, schemaVersion: SCHEMA_VERSION})
  let projects = realm.objects('Project');
  for (let deleteProjectID of deleteProjectIDs) {
    let deleteProject = projects.filtered(`id = ${deleteProjectID}`);

    realm.write(() => {
      realm.delete(deleteProject[0]);
    });
  }
  return projects;
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
