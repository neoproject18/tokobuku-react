import Swal from "sweetalert2";

export function swal_alert(status_code, message, callback = null) {
  let icon = "error",
    title = "Error";
  if (status_code === 200 || status_code === 201) {
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

export function swal_confirm(message, action) {
  Swal.fire({
    icon: "question",
    title: "Konfirmasi",
    text: message,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Batal",
    cancelButtonColor: "red",
  }).then((result) => {
    console.log(result);
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      action();
    }
  });
}

export function swal_alert_action(status_code, message, action) {
  let icon = "error",
    title = "Error";
  if (status_code === 200 || status_code === 201) {
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
    action();
  });
}
