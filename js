<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Luas dan Keliling Lingkaran</title>
  <script>
    function hitungLuasLingkaran(jariJari) {
      return Math.PI * Math.pow(jariJari, 2);
    }

    function hitungKelilingLingkaran(jariJari) {
      return 2 * Math.PI * jariJari;
    }

    function hitung() {
      var jariJari = parseFloat(document.getElementById('jariJari').value);
      var luas = hitungLuasLingkaran(jariJari);
      var keliling = hitungKelilingLingkaran(jariJari);

      document.getElementById('luas').innerHTML = "Luas Lingkaran: " + luas.toFixed(2);
      document.getElementById('keliling').innerHTML = "Keliling Lingkaran: " + keliling.toFixed(2);
    }
  </script>
</head>
<body>
  <h2>Menghitung Luas dan Keliling Lingkaran</h2>
  Jari-Jari Lingkaran: <input type="text" id="jariJari" />
  <button onclick="hitung()">Hitung</button>
  <p id="luas"></p>
  <p id="keliling"></p>
</body>
</html>
