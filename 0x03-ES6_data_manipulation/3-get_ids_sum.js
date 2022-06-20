export default function getStudentIdsSum () {
    return array.reduce((accumulator, i) => accumulator + i.id, 0);
}
