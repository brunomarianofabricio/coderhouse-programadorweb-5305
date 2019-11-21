<<<<<<< HEAD
function getLocalList (key) {
    if (typeof key === 'string') {
      var localList = localStorage.getItem(key)
      if (localList) {
        var parsedList = JSON.parse(localList)
        return parsedList
      } else {
        return []
      }
    }
  }
  
  /**
   * La función setLocalList permite guardar una lista
   * en el localStorage en formato JSON
   * @param { string } key 
   * @param { array } list 
   */
  function setLocalList (key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
      var strList = JSON.stringify(list)
      localStorage.setItem(key, strList)
    }
  }

  export { getLocalList, setLocalList }
=======
function getLocalList(key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key);
    if (localList) {
      var parsedList = JSON.parse(localList);
      return parsedList;
    } else {
      return [];
    }
  }
}

function setLocalList(key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var strList = JSON.stringify(list);
    localStorage.setItem(key, strList);
  }
}

export { getLocalList, setLocalList };
>>>>>>> upstream/master
