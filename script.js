//tangkap element absensi form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');
//master data absensi
let data_absensi = [];
//tambahkan addevenlistener
absensi_form.addEventListener('submit', (event) => {
  //hentikan reload
  event.preventDefault();

  let username = event.target.username.value;

  //push data ke dalam array data_absensi
  data_absensi.push({
    nama_lengkap: username,
    date: replaceDate(),
  });
  //reset input
  event.target.username.value = '';

  //panggil function render html
  renderToHtml();
});

//function render data array ke HTML
function renderToHtml() {
  //reset element pada div root
  root.innerHTML = '';

  //mapping data array  data_absensi ke root
  data_absensi.forEach((e, i) => {
    root.innerHTML += `
  <div class="card" draggable="true" ondragend="deleteAbsensi(${i})">
  ${e.nama_lengkap} <span> ${e.date} </span>
  </div>
  `;
  });
}

//delete absensi
function deleteAbsensi(index) {
  console.info(index);
  //delete data dalam array sesuai index
  data_absensi.splice(index, 1);

  //panggil kembali function render to HTML
  renderToHtml();
}

//function replace date
function replaceDate() {
  let d = new Date();
  let date = d.toLocaleDateString();
  let time = d.toLocaleTimeString();

  return `${date} - ${time}`;
}
