import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {ProjectSchema} from './RealmSchemas';

export async function createProject(newProject) {
  const realmPath = Realm.schemaVersion(Realm.defaultPath);
  console.log('--------- Realm Path ---------');
  console.log(Realm.defaultPath);

  const realm = await Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION});
  realm.write(() => {
    const id = getLatestIdMaximum(realm);
    newProject.id = id;
    realm.create('Project', newProject);
  });
  const latestObjects = realm.objects('Project');
  return Array.from(latestObjects);
}

export async function getProjects() {
  const realm = await Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION});
  const projects = realm.objects('Project');
  const _projects = Array.from(projects);
  return _projects;
}

export async function deleteProjects(deleteProjectIDs) {
  const realm = await Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION})
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
