# LEARNING MANAGAMENT SYSTEM 

## 1. Login
### 📄 HTML (`login.html`)
Halaman login menggunakan **layout dua kolom** untuk tampilan yang informatif dan seimbang:
* **Sisi Kiri**
  * Menampilkan **Logo SMK**
  * Judul **LMS**
  * Ilustrasi pendukung sebagai elemen visual
* **Sisi Kanan**
  * Kartu login (login card)
  * Form input **email** dan **password**
  * Area **credentials hint** untuk memudahkan proses testing

### 🎨 CSS (`style.css`)
Styling difokuskan pada tampilan modern dan responsif:
* **Flexbox Layout**

  * Menggunakan `display: flex`
  * Konten disejajarkan ke tengah layar dengan:

    ```css
    justify-content: center;
    align-items: center;
    ```
* **Glassmorphism Effect**
  * Efek blur dan transparansi pada kartu login
  * Menggunakan:
    ```css
    backdrop-filter: blur(...);
    background: rgba(...);
    ```
* **Modal Styling**
  * Pesan error ditampilkan dalam bentuk modal
  * Menggunakan:
    ```css
    position: fixed;
    z-index: tinggi;
    ```
  * Memastikan modal muncul di atas seluruh elemen halaman

### ⚙️ JavaScript (`script.js`)
Logika login dan validasi pengguna ditangani dengan JavaScript:
* **User Mapping**
  * Menggunakan objek JavaScript untuk mencocokkan email, password, dan halaman tujuan:
    ```js
    const users = {
      'admin@sekolah.sch.id': {
        pw: 'admin',
        target: 'dashboard-admin.html'
      },
      // user lainnya
    };
    ```
* **Event Listener**
  * Menangkap event `submit` pada form login
  * Memvalidasi input email dan password
  * Aksi yang dilakukan:
    * ✅ Data benar → redirect ke dashboard menggunakan:
      ```js
      window.location.href
      ```
    * ❌ Data salah → menampilkan modal error

## 2. dashboard admin