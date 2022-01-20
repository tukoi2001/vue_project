/* eslint-disable */
<template>
 <div class="container feature-block">
      <div class="row">
          <div
            class=" h-100 col-xl-3 col-md-6 mt--30"
            v-for="(item, index) in HomeFeaturesSection"
            :key="index"
          >
            <home-features-section-item
              :icon="item.icon"
              :title="item.title"
              :text="item.text"
            />
          </div>
      </div>
    </div>
</template>
<script>
import HomeFeaturesSectionItem from "../feature/HomeFeaturesSectionItem.vue";
export default {
  components: { HomeFeaturesSectionItem },
  name: "HomeFeaturesSection",
  data() {
    return {
      HomeFeaturesSection: [
        {
          icon: "truck",
          title: "Free Shipping Item",
          text: " Orders over $500",
        },
        {
          icon: "arrow-counterclockwise",
          title: "Money Back Guarantee",
          text: " 100% money back",
        },
        {
          icon: "Cash",
          title: "Cash On Delivery",
          text: " Lorem ipsum dolor amet",
        },
        {
          icon: "info-circle",
          title: "Help & Support",
          text: " Call us : + 0123.4567.99",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/feature/HomeFeaturesSection.css">
</style>