import type { MenuItemType } from './types';

export const menuData: MenuItemType[] = [
  { label: 'HOME', link: 'https://portal-ptkp.com/profil/' },
  { label: 'LOGOUT', link: 'https://portal-ptkp.com/' },
  { label: 'COMPANY PROFILE PTKP', link: 'https://kharismaprintex.com/' },
  {
    label: 'SEPUTAR PTKP',
    children: [
      {
        label: 'KEPERSONALIAAN',
        children: [
          { label: 'PM HR 06', link: 'https://portal-ptkp.com/pm-hr-06/' },
          { label: 'PM HR 09', link: 'https://portal-ptkp.com/pm-hr-09/' },
          { label: 'PM HR 10', link: 'https://portal-ptkp.com/pm-hr-10/' },
          { label: 'PENGUMUMAN', link: 'https://portal-ptkp.com/pengumuman-1/' },
          { label: 'MENU 31', link: 'https://portal-ptkp.com/menu-31/' },
          { label: 'PERATURAN PERUSAHAAN', link: 'https://portal-ptkp.com/pp-2025-2027/' },
          { label: 'KEBUTUHAN PELATIHAN', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf3Y2i_WDdMLo0aZQ2ZSMrl7YPsTov0MVITW6RwWxVGa9i3dQ/viewform' },
          { label: 'SEPUTAR COVID 19', link: 'https://portal-ptkp.com/seputar-covid-19/' },
          { label: 'GALLERY FOTO', link: 'https://portal-ptkp.com/gallery-foto/' },
        ],
      },
      { label: 'STANDAR SNI ISO 9001:2015', link: 'https://portal-ptkp.com/standard-sni-iso-90012015/' },
      { label: 'VISI DAN MISI', link: 'https://portal-ptkp.com/visi-dan-misi/' },
      { label: 'KEBIJAKAN MUTU', link: 'https://portal-ptkp.com/kebijakan-mutu/' },
      { label: 'MANUAL MUTU', link: 'https://portal-ptkp.com/manual-mutu/' },
      { label: 'STRUKTUR ORGANISASI', link: 'https://portal-ptkp.com/struktur-organisasi/' },
      { label: 'REKAMAN MUTU', link: 'https://daftar-utama-rekam-user.glide.page/' },
      { label: 'PROSEDUR PERMINTAAN DAN PEMESANAN BARANG ATAU JASA', link: 'https://portal-ptkp.com/pm-gd-01/' },
      { label: 'PROSEDUR PEMBELIAN BARANG DAN JASA SERVICE', link: 'https://portal-ptkp.com/pm-pb-01-prosedur-proses-pembelian-barang/' },
    ],
  },
  {
    label: 'KETIDAKSESUAIAN PRODUK',
    children: [
      { label: 'KLAIM PELANGGAN 2025', link: 'https://portal-ptkp.com/klaim-pelanggan-2025/' },
      { label: 'KOMPLAIN PELANGGAN 2025', link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQU2b0dJ89lC2iNoONrKRTfaJks9sUYyGNUlgmXR91l_lq-uvL7fKeUTbEmHpE5EZCqJgtZo2TPGVaX/pubhtml?gid=451085128&single=true' },
      { label: 'HASIL INSPECTING / QC 2025', link: 'https://portal-ptkp.com/temuan-cacat-produksi/' },
    ],
  },
  {
    label: 'DIREKTUR & TEAM ISO',
    children: [
      {
        label: 'JOB DESC DIR',
        children: [
          { label: 'MR DAN TQA', link: 'https://u-job-description-di-2r3f.glide.page/' }
        ]
      },
      { label: 'DIREKTUR', link: 'https://portal-ptkp.com/direktur-kp/' },
      { label: 'MR', link: 'https://portal-ptkp.com/team-fungsional-qa/' },
      { label: 'BAGIAN PDD & EDP', link: 'https://portal-ptkp.com/pengendali-dokumen-data/' },
      { label: 'BAGIAN AMI', link: 'https://portal-ptkp.com/audit-mutu-internal-pt-khari.vercel.app/' },
      { label: 'BAGIAN TRAINING', link: 'https://portal-ptkp.com/training-pelatihan/' },
      { label: 'BAGIAN KALIBRASI', link: 'https://portal-ptkp.com/kalibrasi/' },
      { label: 'LOGIN PERIJINAN', link: 'https://ijin.portal-ptkp.com/login/' },
    ],
  },
  {
    label: 'DEPT. PEMASARAN',
    children: [
      { label: 'JOB DESC DEPT. PEMASARAN', link: 'https://u-job-description-di-2r3f.glide.page/' },
      { label: 'MANAGER PEMASARAN', link: 'https://portal-ptkp.com/manager-pemasaran/' },
      {
        label: 'BAGIAN PEMASARAN',
        children: [
          { 
            label: 'DOKUMEN BAGIAN PEMASARAN', 
            link: 'https://portal-ptkp.com/bagian-pemasaran/',
            children: [
                { label: '1. Sasaran Mutu Bagian Pemasaran' },
                { label: '2. Struktur Organisasi' },
                { label: '3. Job Description' },
                { label: '4. Analisa SWOT' },
            ]
          },
          { 
            label: 'REKAMAN BAGIAN PEMASARAN', 
            link: 'https://portal-ptkp.com/rekaman-bagian-pemasaran/',
            children: [
                { label: '1. Daftar Utama Rekaman'},
                { 
                    label: '2. Target Pencapaian Sasaran Mutu',
                    children: [
                        { label: '2.1. Form Pencapaian Sasaran Mutu 2025'},
                        { label: '2.2. Report Pencapaian Sasaran Mutu 2025'},
                        { label: '2.3. Grafik Pencapaian Sasaran Mutu 2025'},
                        { label: '2.4. Form Pencapaian Sasaran Mutu 2024'},
                        { label: '2.5. Report Pencapaian Sasaran Mutu 2024'},
                        { label: '2.6. Grafik Pencapaian Sasaran Mutu 2024'},
                    ]
                },
                { label: '3. Analisa SWOT'}
            ]
          },
        ],
      },
      {
        label: 'BAGIAN DESIGN',
        children: [
          {
            label: 'DOKUMEN BAGIAN DESIGN',
            link: 'https://portal-ptkp.com/bagian-design/',
            children: [
                { label: '1. Sasaran Mutu Bagian Desain' },
                { label: '2. Struktur Organisasi' },
                {
                    label: '3. Job Description',
                    children: [
                        { label: '3.1. Job Description Ka.Bag. Desain', link: 'https://portal-ptkp.com/id-ka-bag-design-2/'},
                        { label: '3.2. Job Description Checker Desain', link: 'https://portal-ptkp.com/jd-checker-design/'},
                        { label: '3.3. Job Description Pelaksana Desain', link: 'https://portal-ptkp.com/jd-pelaksana-design/'}
                    ]
                },
                { label: '4. Analisa SWOT' }
            ]
          },
          { 
            label: 'REKAMAN BAGIAN DESIGN',
            children: [
                { label: '1. Daftar Utama Rekaman', link: 'https://portal-ptkp.com/daftar-utama-rekaman-bagian-design/'},
                {
                    label: '2. Target Pencapaian Sasaran Mutu',
                    children: [
                        { label: '2.1. Form Pencapaian Sasaran Mutu 2025', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeU2QSNscFOtYYkLOADgUnnF-g5k-f6n7cT5qXg0bfoS-1w/viewform'},
                        { label: '2.2. Report Pencapaian Sasaran Mutu 2025', link: 'https://docs.google.com/spreadsheets/d/e/1dimgsVBjPmEgRw07IngtZxBa_2MygC7yv9gWX6S2X8ufO0a54O0_lq-I75rI8Q/pubhtml?gid=1530985438&single=true'},
                        { label: '2.3. Grafik Pencapaian Sasaran Mutu 2025', link: 'https://docs.google.com/presentation/d/e/2PACX-1vRA4o2ebhSHhqolxOAY-8WkIQRo0KPaxp1qEx-OQRhV0p-Qv2N2-Jt9Fq2N-2OaN-aOaO/pub?start=false&loop=false&delayms=3000'},
                        { label: '2.4. Form Pencapaian Sasaran Mutu 2024', link: 'https://forms.gle/AkVWpC8KXqBeLpzv9' },
                        { label: '2.5. Report Pencapaian Sasaran Mutu 2024', link: 'https://portal-ptkp.com/report-sasaran-mutu-bagian-design-2023/' },
                        { label: '2.6. Grafik Pencapaian Sasaran Mutu 2024', link: 'https://docs.google.com/presentation/d/e/2PACX-1vTzIAF5VzVyFoXTk8rR4n3V9gYt0oP9wG2-3Z8c6N9x2bO1b-Z1oH_7kY8o/pub?start=false&loop=false&delayms=3000' }
                    ]
                },
                { label: '3. Analisa SWOT', link: 'https://docs.google.com/spreadsheets/d/1QZ_VlQZQ5zf4BlFgvNKG4IARt-2u-VzB_k4sO4N8sA/edit#gid=0' }
            ]
          },
        ],
      },
      {
        label: 'BAGIAN QC & DELIVERY',
        children: [
          {
            label: 'DOKUMEN BAGIAN QC & DELIVERY', 
            link: 'https://portal-ptkp.com/bagian-qc-delivery/',
            children: [
              { label: '1. Sasaran Mutu Bagian QC & Delivery' },
              { label: '2. Struktur Organisasi' },
              { label: '3. Job Description' }
            ]
          },
          {
            label: 'REKAMAN BAGIAN QC & DELIVERY', 
            link: 'https://portal-ptkp.com/rekaman-bagian-qc-delivery/',
            children: [
              { label: '1. Daftar Utama Rekaman' },
              { label: '2. Target Pencapaian Sasaran Mutu' },
              { label: '3. Analisa SWOT' }
            ]
          },
        ],
      },
    ],
  },
  { label: 'RAPAT MANAJEMEN', link: 'https://portal-ptkp.com/laporan-dan-keputusan-rapat/' },
  { label: 'PROGRAM SMM ISO 9001:2015', link: 'https://portal-ptkp.com/program-sistem-manajemen-mutu/' },
  {
    label: 'DEPT. PRODUKSI',
    children: [
      { label: 'MSDS', link: 'https://portal-ptkp.com/msds/' },
      { label: 'MANAGER PRODUKSI', link: 'https://portal-ptkp.com/manager-produksi/' },
      { label: 'JOB DESC DEPARTEMEN PRODUKSI', link: 'https://user-of-job-desc-dep-59zu.glide.page/' },
      {
        label: 'BAGIAN LABORATORIUM',
        children: [
          { 
            label: 'DOKUMEN BAGIAN LABORATORIUM', 
            link: 'https://portal-ptkp.com/bagian-laboratorium/',
            children: [
              { label: '1. Sasaran Mutu Bagian Lab' },
              { label: '2. Struktur Organisasi' },
              { label: '3. Job Description' }
            ]
          },
          { 
            label: 'REKAMAN BAGIAN LABORATORIUM', 
            link: 'https://portal-ptkp.com/rekaman-bagian-laboratorium/',
            children: [
                { label: '1. Daftar Utama Rekaman'},
                { label: '2. Target Pencapaian Sasaran Mutu'},
                { label: '3. Analisa SWOT'}
            ]
          },
        ],
      },
      {
        label: 'BAGIAN PPC',
        children: [
          { 
            label: 'DOKUMEN BAGIAN PPC', 
            link: 'https://portal-ptkp.com/bagian-ppc/',
            children: [
                { label: '1. Sasaran Mutu Bagian PPC' },
                { label: '2. Struktur Organisasi' },
                { label: '3. Job Description' }
            ]
          },
          { 
            label: 'REKAMAN BAGIAN PPC', 
            link: 'https://portal-ptkp.com/rekaman-bagian-ppc/',
            children: [
                { label: '1. Daftar Utama Rekaman' },
                { label: '2. Target Pencapaian Sasaran Mutu' },
                { label: '3. Analisa SWOT'}
            ]
          },
        ],
      },
      {
        label: 'BAGIAN PERSIAPAN KAIN',
        children: [
          { label: 'DOKUMEN BAGIAN PERSIAPAN KAIN', link: 'https://portal-ptkp.com/bagian-persiapan-kain/' },
          { label: 'REKAMAN BAGIAN PERSIAPAN KAIN', link: 'https://portal-ptkp.com/rekaman-bagian-persiapan-kain/' },
        ],
      },
      {
        label: 'BAGIAN PRINTING',
        children: [
          { label: 'DOKUMEN BAGIAN PRINTING', link: 'https://portal-ptkp.com/bagian-printing/' },
          { label: 'REKAMAN BAGIAN PRINTING', link: 'https://portal-ptkp.com/rekaman-bagian-printing/' },
        ],
      },
      {
        label: 'BAGIAN DYEING & FINISHING',
        children: [
          { label: 'DOKUMEN BAGIAN DYEING & FINISHING', link: 'https://portal-ptkp.com/bagian-dyeing-finishing/' },
          { label: 'REKAMAN BAGIAN DYEING & FINISHING', link: 'https://portal-ptkp.com/rekaman-bagian-dyeing-finishing/' },
        ],
      },
    ],
  },
  {
    label: 'DEPT. SARANA',
    children: [
      { label: 'JOB DESC DEPT. SARANA & PEMBELIAN', link: 'https://user-of-job-descript-9mcs.glide.page/' },
      { label: 'MANAGER SARANA', link: 'https://portal-ptkp.com/manager-sarana/' },
      {
        label: 'BAGIAN PEMBELIAN & R&D',
        children: [
          { label: 'DOKUMEN BAGIAN PEMBELIAN & R&D', link: 'https://portal-ptkp.com/bagian-pembelian-dan-rd/' },
          { label: 'REKAMAN BAGIAN PEMBELIAN & R&D', link: 'https://portal-ptkp.com/rekaman-bagian-pembelian-dan-rd/' },
        ],
      },
      {
        label: 'BAGIAN GUDANG',
        children: [
          { label: 'DOKUMEN BAGIAN GUDANG', link: 'https://portal-ptkp.com/bagian-gudang/' },
          { label: 'REKAMAN BAGIAN GUDANG', link: 'https://portal-ptkp.com/rekaman-bagian-gudang/' },
        ],
      },
      {
        label: 'BAGIAN TEKNIK',
        children: [
          { label: 'DOKUMEN BAGIAN TEKNIK', link: 'https://portal-ptkp.com/bagian-teknik/' },
          { label: 'REKAMAN BAGIAN TEKNIK', link: 'https://portal-ptkp.com/rekaman-bagian-teknik/' },
        ],
      },
      {
        label: 'BAGIAN IPAL & LIMBAH B3',
        children: [
          { label: 'DOKUMEN BAGIAN IPAL & LIMBAH B3', link: 'https://portal-ptkp.com/bagian-ipal-dan-limbah-b3/' },
          { label: 'REKAMAN BAGIAN IPAL & LIMBAH B3', link: 'https://portal-ptkp.com/rekaman-bagian-ipal-limbah-b3/' },
        ],
      },
      {
        label: 'BAGIAN PERSONALIA & UMUM',
        children: [
          { label: 'DOKUMEN PERSONALIA & UMUM', link: 'https://portal-ptkp.com/bagian-personalia-umum/' },
          { label: 'REKAMAN PERSONALIA & UMUM', link: 'https://portal-ptkp.com/rekaman-bagian-personalia-umum/' },
          { label: 'TRAINING', link: 'https://portal-ptkp.com/training-pelatihan/' },
        ],
      },
      { label: 'RAPAT MANAJEMEN', link: 'https://portal-ptkp.com/laporan-dan-keputusan-rapat/' },
      { label: 'PROGRAM SMM ISO 9001:2015', link: 'https://portal-ptkp.com/program-sistem-manajemen-mutu/' },
    ],
  },
  {
    label: 'PERPUSTAKAAN',
    children: [
      { label: 'SKKNI', link: 'https://portal-ptkp.com/skkni-standar-kompetensi-kerja-nasional-indonesia/' },
      { label: 'STANDAR NASIONAL INDONESIA', link: 'https://portal-ptkp.com/standar-nasional-indonesia/' },
      { label: 'VIDEO INSPIRASI & EDUKASI', link: 'https://portal-ptkp.com/video-inspirasi/' },
    ],
  },
  {
    label: 'DEPT. PENDUKUNG',
    children: [
        { label: 'MANAJER KEUANGAN & AKUNTING', link: 'https://portal-ptkp.com/manager-keuangan-akunting/' },
        { label: 'JOB DESC DEPT. KEUANGAN & AKUNTING', link: 'https://u-job-description-di-2r3f.glide.page/' },
        {
            label: 'KEUANGAN',
            children: [
                { label: 'DOKUMEN KEUANGAN & AKUNTING', link: 'https://portal-ptkp.com/dept-keuangan-akunting/' },
                { label: 'REKAMAN KEUANGAN & AKUNTING', link: 'https://portal-ptkp.com/rekaman-bagian-keuangan-akunting/' },
            ]
        },
        { label: 'UNIT TRADING', link: 'https://portal-ptkp.com/trading-garmen/' },
        { label: 'GARMEN TATIANA MAJU TERUS', link: 'https://portal-ptkp.com/garmen/' },
        { label: 'PROGRAM SISTEM MANAJEMEN MUTU', link: 'https://portal-ptkp.com/program-sistem-manajemen-mutu/' },
        { label: 'RAPAT MANAJEMEN', link: 'https://portal-ptkp.com/laporan-dan-keputusan-rapat/' },
    ]
  },
  {
    label: 'SETUP ERP SIVENSYS',
    children: [
        { label: 'TIMELINE PROJECT', link: 'https://docs.google.com/spreadsheets/d/1ew1wTNj4Gsl5insLAHtyxGM-qoqyBOA8VbkCqVg34ok/edit#gid=1874897194' },
        { label: 'PRINT OUT PROGRESS', link: 'https://sivensys-printout-v3sj.glide.page/' },
        { label: 'BLUEPRINT', link: 'https://portal-ptkp.com/blueprint-sivensys-erp/' },
        { label: 'MANUAL BOOK', link: 'https://portal-ptkp.com/manual-book-sivensys/' },
        { label: 'MOU', link: 'https://portal-ptkp.com/kontrak-mou/' },
        { label: 'MANUAL TARGET 5K', link: 'https://portal-ptkp.com/user-manual-target-5000/' },
    ]
  },
  {
    label: 'PRAKTEK KERJA INDUSTRI',
    children: [
        { label: 'MONITORING PRAKTEK KERJA INDUSTRI', link: 'https://monitoring-pkl-siswa-n1sc.glide.page/dl/17171d' }
    ]
  }
];
