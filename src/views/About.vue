<template>
  <div class="ma-6">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Total Order", value: "calories", align: 'center' },
        { text: "Cancel Before Shipment", value: "fat", align: 'center' },
        { text: "Delivered", value: "carbs", align: 'center' },
        { text: "RTO", value: "protein", align: 'center' },
        { text: "Order Shipped", value: "iron", align: 'center' },
        { text: "Total Sales", value: "iron", align: 'center' },
        { text: "Primary Account", value: "iron", align: 'center' },
        { text: "Aggency Account", value: "iron", align: 'center' },
        { text: "Total Spent", value: "iron", align: 'center' },
        { text: "Cash Inflow", value: "iron", align: 'center' },
      ],
      desserts: [
        {
          name: "April Total",
          calories: 10,
          fat: 0,
          carbs: 24,
          protein: 4.0,
          iron: "5",
        },
        {
          name: "May Total",
          calories: 30,
          fat: 5,
          carbs: 37,
          protein: 4.3,
          iron: "13",
        },
        {
          name: "June Total",
          calories: 90,
          fat: 10,
          carbs: 23,
          protein: 6.0,
          iron: "260",
        },
        {
          name: "July Total",
          calories: 500,
          fat: 6,
          carbs: 67,
          protein: 4.3,
          iron: "570",
        },
        {
          name: "Aug Total",
          calories: 1000,
          fat: 15,
          carbs: 49,
          protein: 3.9,
          iron: "728",
        },
       
      ],
    };
  },
};
</script>
