export default function setListCarsSaves(cars: object) {
  let local = localStorage.getItem("saves-cars");
  let list: Array<object> = [];
  if (local == null) {
    list.push(cars)
  } else {
    let listLocal = JSON.parse(local);
    for (let index = 0; index < listLocal.length; index++) {
      list.push(listLocal[index])
    }
    list.push(cars)
  }
  localStorage.setItem("saves-cars", JSON.stringify(list))
}