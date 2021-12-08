<template>
  <div>
    <h1>Event Listings</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>
    <router-link
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="prev"
      >Next Page</router-link
    >
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
import BaseIcon from '../components/BaseIcon.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard,
    BaseIcon,
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page,
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events']),
  },
}
</script>
