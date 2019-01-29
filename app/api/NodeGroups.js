//import request from 'utils/request';
import nodegroup from './node-group.json';
import nodegroupdetails from './node-group-details.json';

const getUrl = "";
function getList(){
  return Promise.resolve(nodegroup);
}

function getDetails(groupName){
  return Promise.resolve(nodegroupdetails);
}

export {
  getList,
  getDetails
};
