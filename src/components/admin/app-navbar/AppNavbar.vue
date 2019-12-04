<template>
  <vuestic-navbar>
    <span slot="logo">
      <img class="logo" src="../../../assets/icons/viter.png"/>

    </span>

    <menu-dropdown
      v-for="(page, id) in pages"
      :key="id"
      :options="page.options"
      :name="page.name"
      :logo="page.logo"
      :link="page.link"
      class="col-xs-1"
    ></menu-dropdown>

  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import MenuDropdown from './components/dropdowns/MenuDropdown'
import SidebarLink from '../app-sidebar/components/SidebarLink'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    ProfileDropdown,
    MenuDropdown,
    SidebarLink
  },
  data () {
    return {
      pages: [
        {
          name: 'Tabel Data',
          logo: 'vuestic-icon-tables',
          link: 'tables',
          options: []
        },
        {
          name: 'Charts',
          logo: 'vuestic-icon-statistics',
          link: 'charts',
          options: []
        },
        {
          name: 'Maps',
          logo: 'vuestic-icon-ui-elements',
          link: 'progress-bars',
          options: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    display: inline-block;
    width: 50%;
    padding: 8px;
  }

</style>
