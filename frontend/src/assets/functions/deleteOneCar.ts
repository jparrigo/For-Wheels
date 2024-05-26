export default function deleteOneCar(num: number) {
  console.log(num);
  let local = localStorage.getItem("saves-cars");
  let list: Array<object> = [];

  if (local != null) {
    let listLocal = JSON.parse(local);
    for (let index = 0; index < listLocal.length; index++) {
      if (index != num) {
        list.push(listLocal[index])
      }
    }
    localStorage.setItem("saves-cars", JSON.stringify(list))
  }

  return list;
}