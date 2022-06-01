import Swal from "sweetalert2";

export function swal_alert(status_code, message, callback = null) {
  let icon = 500,
    title = "Error";
  if (status_code === 201) {
    icon = "success";
    title = "Berhasil";
  } else if (status_code === 403) {
    icon = "warning";
    title = "Peringatan";
  }

  Swal.fire({
    icon: icon,
    title: title,
    text: message,
    showConfirmButton: false,
    timer: 1500,
  }).then(function () {
    if (callback === true) window.history.back();
    else if (callback === false) window.location.reload();
  });
}
