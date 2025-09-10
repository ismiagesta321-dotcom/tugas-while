function cekNilai() {
      let nilai = parseInt(document.getElementById("nilai").value);
      let hasil = "";

      if (nilai >= 1 && nilai <= 10) {
        if (nilai >= 6) {
          // menggunakan while
          let i = 0;
          while (i < 1) {
            hasil = "Lulus 🎉";
            i++;
          }
        } else {
          // menggunakan for
          for (let j = 0; j < 1; j++) {
            hasil = "Tidak Lulus ❌";
          }
        }
      } else {
        hasil = "Nilai harus antara 1 sampai 10!";
      }

      document.getElementById("hasil").innerText = hasil;
    }