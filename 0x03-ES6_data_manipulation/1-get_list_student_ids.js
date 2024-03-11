// 1-get_list_student_ids.js

export default function getListStudentIds(arrayOfObjects) {
  // Check if the argument is an array
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }

  // Use the map function to extract ids from the array of objects
  return arrayOfObjects.map((student) => student.id);
}
