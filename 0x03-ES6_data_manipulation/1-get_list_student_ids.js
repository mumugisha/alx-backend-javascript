const getListStudentIds = (myStudentArray) => {
  if (!Array.isArray(myStudentArray)) {
    return [];
  }
  return myStudentArray.map((student) => student.id);
};

module.exports = getListStudentIds;
