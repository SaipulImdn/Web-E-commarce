<script>
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh saat submit form
    
    // Mendapatkan nilai input username dan password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Validasi username dan password (contoh sederhana)
    if (username === 'admin' && password === 'password') {
      // Redirect ke halaman index.html jika login berhasil
      window.location.href = 'index.html';
    } else {
      alert('Username atau password salah'); // Menampilkan pesan kesalahan
    }
  });
</script>
