export default function getAllCollections(success, errors){
  $.ajax({
      method: "GET",
      url: "/api/collections",
      data: { collections },
      success,
      error
    });
}
