export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
      width: '4%'
    },
    {
      name: 'kelompok',
      title: 'kelompok',
      width: '12%'
    },
    {
      name: 'regional_tujuan',
      title: 'Tahun',
      width: '12%'
    },
    {
      name: 'negara_tujuan',
      title: 'Negara Tujuan',
      width: '12%'
    },
    {
      name: 'provinsi_asal',
      title: 'Provinsi Asal',
      width: '12%'
    },
    {
      name: 'tahun',
      title: 'Tahun',
      width: '12%'
    },
    {
      name: 'bulan',
      title: 'Bulan',
      width: '12%'
    },
    {
      name: 'hs-2',
      title: 'Kode HS-2',
      width: '12%'
    },
    {
      name: 'berat_bersih',
      title: 'Berat Bersih',
      width: '12%'
    },
    {
      name: 'nilai',
      title: 'Nilai',
      width: '12%'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'email': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
