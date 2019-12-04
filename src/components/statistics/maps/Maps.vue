<template>
  <div class="dashboard">
    <div class="auth-wallpaper col-12">
      <div class="auth-wallpaper__logo">
        <div class="title"> Visualisasi Data Interaktif </div>
        <div class="desc"> Ekspor Indonesia</div>
      </div>
      <div class = 'particle'>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'maps'
}
</script>

<style lang="scss" scoped>
  .dashboard {
    height: calc(100vh - #{$top-nav-height});
    .auth-wallpaper {
      height: 100%;
      background-color: $vue-darkest-blue;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &__logo {
        z-index: 2;
        width: 100%;
      }
      .auth-wallpaper__logo {
        text-align: center;
        .title {
          font-size: 64px;
          font-weight: bold;
          letter-spacing: 3px;
          color: $vue-blue;
        }
        .desc {
          font-size: 32px;
          color: $light-gray;
        }
        .credit{
          position: absolute;
          bottom: 10px;
          font-size: 28px;
          color: $light-gray;
        }
      }
      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 15%/2);
        transform: rotate(15deg);
        width: 15%;
        height: 115vh;
      }
      .oblique2 {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 15%/2);
        transform: rotate(-15deg);
        width: 15%;
        height: 115vh;
      }
      .particle{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
  }

    }
  }

</style>
