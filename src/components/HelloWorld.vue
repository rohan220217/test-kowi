<template>
  <div class="mx-6">
    <h3 class="grey--text my-2 mb-0">MY DASHBOARD</h3>
    <div class="d-flex justify-space-between my-2">
      <p class="blue--text mb-0">Order Details</p>
      <p class="blue--text mb-0">Last 30 days</p>
    </div>
    <!-- second row -->
    <v-row>
      <v-col
        cols="12"
        sm="2"
        v-for="(detail, key) in orderDetails"
        :key="`${key}--key`"
      >
        <v-card color="rgb(131 197 245 / 19%)">
          <div class="d-flex justify-space-between mx-2 pt-2">
            <p class="mb-0 font-weight-medium">{{ detail.name }}</p>
            <p class="mb-0">></p>
          </div>
          <h2 class="text-center pb-2 blue--text">{{ detail.value }}</h2>
        </v-card>
      </v-col>
    </v-row>

    <!-- third row -->
    <v-row>
      <v-col cols="12" sm="7">
        <v-row v-masonry transition-duration="0.3s" item-selector=".item">
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card outlined class="">
              <p class="font-weight-bold mb-0 pa-2">Order Details</p>

              <div
                class="
                  d-flex
                  justify-space-between
                  blue
                  lighten-5
                  px-2
                  py-2
                  my-1
                "
                v-for="(data, key) in codData"
                :key="`${key}--data`"
              >
                <p class="mb-0 font-weight-medium">{{ data.name }}</p>
                <p class="mb-0 font-weight-bold blue--text">{{ data.value }}</p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card outlined class="">
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="font-weight-bold mb-0">Overall Shipment Status</p>
                <p class="mb-0 caption">Last 30 Days</p>
              </div>
              <vc-donut v-bind="props">
                <h1>%</h1>
              </vc-donut>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card outlined class="">
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="font-weight-bold mb-0">NDR Details</p>
                <p class="mb-0 caption">Last 30 Days</p>
              </div>

              <div
                class="d-flex justify-space-between px-2 py-2 my-1"
                v-for="(data, key) in ndrData"
                :key="`${key}--data`"
              >
                <p class="mb-0 font-weight-medium status-name">
                  {{ data.name }}
                </p>
                <p class="mb-0 font-weight-bold blue--text">{{ data.value }}</p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card
              outlined
              class="d-flex flex-column justify-space-between"
            >
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="font-weight-bold mb-0">Orders over time</p>
                <p class="mb-0 caption">Oct 20- Oct 21</p>
              </div>

             <line-chart :height="250"></line-chart>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card outlined class="d-flex flex-column justify-space-between">
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="font-weight-bold mb-0">Regional Sales</p>
                <p class="mb-0 caption">Oct 20- Oct 21</p>
              </div>

              <pie-chart :height="250"></pie-chart>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" v-masonry-tile class="item">
            <v-card outlined class="d-flex flex-column justify-space-between">
              <div class="d-flex justify-space-between align-center pa-2">
                <p class="font-weight-bold mb-0">Highest Product Sales</p>
                <p class="mb-0 caption">Oct 20- Oct 21</p>
              </div>

              <bar-chart :height="250"></bar-chart>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            v-for="(data, key) in secondCol"
            :key="`${key}--lead`"
          >
            <v-card
              color="rgb(131 197 245 / 19%)"
              @click="$router.push('/about')"
            >
              <div class="d-flex justify-space-between mx-2 pt-2">
                <p class="mb-0 font-weight-medium">{{ data.name }}</p>
                <p class="mb-0">></p>
              </div>
              <h2 class="text-right pb-2 pr-2 blue--text">{{ data.value }}</h2>
            </v-card>
          </v-col>
        </v-row>

        <div class="d-flex justify-space-between my-4 align-center">
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  <v-icon left> mdi-calendar </v-icon>
                  Selected Period
                </v-btn>
              </template>
              <v-date-picker></v-date-picker>
            </v-menu>
          </div>

          <p class="mb-0 caption blue--text font-weight-medium">
            01 sep 2021-30 sep 2021
          </p>
        </div>

        <v-card outlined class="d-flex flex-column justify-space-between pa-2">
          <div>
            <p class="font-weight-bold mb-0">Net Sales</p>

            <div class="d-flex justify-space-between align-center">
              <h3 class="blue--text font-weight-bold">₹ 1,00,000</h3>
              <h3 class="mb-0 green--text font-weight-medium">↑ 21%</h3>
            </div>
          </div>

          <area-chart :height="250"></area-chart>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

import Masonry from "masonry-layout";
import AreaChart from "@/components/AreaChart.vue";
import PieChart from "@/components/PieChart.vue";
import LineChart from "@/components/LineChart.vue";
import BarChart from "@/components/BarChart.vue";
export default {
  name: "HelloWorld",

  data: () => ({
    orderDetails: [
      {
        name: "Total Shipments",
        value: "09",
      },
      {
        name: "Pending",
        value: "23",
      },
      {
        name: "In-Transit",
        value: "09",
      },
      {
        name: "Delivered",
        value: "56",
      },
      {
        name: "RTO",
        value: "04",
      },
      {
        name: "NDR",
        value: "09",
      },
    ],
    codData: [
      {
        name: "Total Order",
        value: "₹ 1,000",
      },
      {
        name: "No of Ordres shipped",
        value: "₹ 800",
      },
      {
        name: "Total Pending Orders",
        value: "₹ 300",
      },
    ],
    ndrData: [
      {
        name: "Total NDR",
        value: "418",
      },
      {
        name: "Your reattempt req.",
        value: "195",
      },
      {
        name: "Buyer reattempt req.",
        value: "132",
      },
      {
        name: "NDR delivered",
        value: "68",
      },
    ],
    props: {
      size: 150,
      sections: [
        { label: "Delivered", value: 20, color: "#171D51" },
        { label: "In-Transit", value: 30, color: "#64C2F1" },
        { label: "Undelivered", value: 35, color: "#C1E2F3" },
        { label: "Damaged", value: 15, color: "#4752B0" },
      ],
      thickness: 45, // set this to 100 to render it as a pie chart instead
      hasLegend: true,
    },
    fill: true,
    selectedGradient: gradients[4],
    gradients,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,

    secondCol: [
      {
        name: "Updated Lead",
        value: "56",
      },
      {
        name: "Follow Ups",
        value: "65",
      },
      {
        name: "Conversion into sales",
        value: "05",
      },
      {
        name: "Marketing Cost",
        value: "₹ 2,00,000",
      },
    ],
  }),
  mounted: function () {
    var msnry = new Masonry(".masonry", {
      // options
      itemSelector: "[class*='col-']",
    });
  },
  components: {
    AreaChart,
    BarChart,
    LineChart,
    PieChart,
  },
};
</script>
<style >
.cdc-legend-item-color {
  height: 0.5em !important;
  width: 0.5em !important;
}
.cdc-legend-item span {
  font-size: 12px !important;
}

.status-name {
  position: relative;
  margin-left: 15px;
}
.status-name::before {
  position: absolute;
  top: 50%;
  left: -15px;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #2196f3;
  border-radius: 50%;
  transform: translateY(-50%);
}
</style>