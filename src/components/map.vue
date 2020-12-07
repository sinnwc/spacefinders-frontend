<script>
import { gmapsMap, gmapsHeatmap } from 'x5-gmaps'
export default {
  components: { gmapsMap, gmapsHeatmap },
  data: () => ({
    mapOptions: {
      center: { lat: 38.435644, lng: -78.871366 },
      zoom: 16
    },
    items: [
      { lat: 38.440490002482264, lng: -78.87755097235978, weight: 10 },
      { lat: 38.44268580092568, lng: -78.87718949260079, weight: 30 },
      { lat: 38.441251333287255, lng: -78.87193227299488, weight: 35 }
    ]
  })
}

</script>

<template>
    <gmaps-map :options="mapOptions">
      <gmaps-heatmap
      :items="items"
      :dissipating="false"
      weightProp="weight"
      :radius="0.01"
      maxIntensity="100" />
    </gmaps-map>
</template>
