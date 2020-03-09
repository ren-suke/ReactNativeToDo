import Realm from 'realm';
import {SCHEMA_VERSION} from './RealmConfig';
import {ProjectSchema} from './RealmSchemas';

export async function createProject(newProject) {
  const currentVersion = Realm.schemaVersion(Realm.defaultPath);
  console.log('---------current version');
  console.log(currentVersion);

  Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION})
    .then(realm => {
      console.log(realm.path);
      realm.write(() => {
        const id = getLatestIdMaximum(realm);
        newProject.id = id;
        realm.create('Project', newProject);
      });
      const latestObjects = realm.objects('Project');
      // realm.close();
      return Array.from(latestObjects);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export async function getProjects() {
  Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION})
    .then(realm => {
      const projects = realm.objects('Project');
      const _projects = Array.from(projects);
      return _projects;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export async function deleteProjects(deleteProjectIDs) {
  Realm.open({schema: [ProjectSchema], schemaVersion: SCHEMA_VERSION})
    .then(realm => {
      let projects = realm.objects('Project');
      for (let deleteProjectID of deleteProjectIDs) {
        let deleteProject = projects.filtered(`id = ${deleteProjectID}`);

        realm.write(() => {
          realm.delete(deleteProject[0]);
        });
      }
      // realm.close();
      return projects;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function getLatestIdMaximum(realm) {
  let projects = realm.objects('Project');
  let latestProject = projects.sorted('id')[projects.length - 1];
  console.log('-------------latest project id maximum-------------');
  console.table(projects);
  console.log('--------------------------');
  if (latestProject) {
    return latestProject.id + 1;
  } else {
    return 1;
  }
}
