<template>
  <div id="XzMusicPlay">
    <audio
    :src="src"
    controls
    ></audio>
  </div>
</template>

<script>
export default {
    name: 'XzMusicPlay',
    props: ['src']
}
</script>

<style lang="css" scoped>
#XzMusicPlay {
    position: fixed;
    right: -225px;
    bottom: 70px;
    opacity: 0.6;
    transition: all 0.3s linear;
}

#XzMusicPlay:hover {
    opacity: 1;
    right: -40px;
}
</style>