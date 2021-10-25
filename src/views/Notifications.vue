<template>
  <div>
    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4"> <v-icon left> mdi-bell-ring </v-icon>All </v-tab>
      <v-tab> <v-icon left> mdi-email </v-icon>Read </v-tab>
      <v-tab>
        <v-icon left> mdi-email-minus </v-icon>

        Unread
      </v-tab>
      <v-tab>
        <v-icon left> mdi-star-circle </v-icon>
        Starred
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1">
        <v-list-item v-for="i in 3" :key="i">
          <v-list-item-avatar size="55">
            <img
              src="https://avatars.githubusercontent.com/u/51409281?v=4"
              alt="User"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <!-- Order Received confirmed from the customer, caller ID 717372 @kumar  -->

            <v-list-item-title>
              Order received from <strong> Mr. XYZ </strong> of product
              <strong>XZY</strong> dated on <strong>21/10/X3 </strong> via
              shopify
            </v-list-item-title>

            <v-list-item-subtitle
              >Please contact other member...</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <p class="caption">
              {{
                new Date().toJSON().slice(0, 10).split("-").reverse().join("/")
              }}
              <v-btn x-small icon color="gray">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </p>
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-for="i in 3" :key="i">
          <v-list-item-avatar size="55">
            <img
              src="https://avatars.githubusercontent.com/u/51409281?v=4"
              alt="User"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <!-- Order Received    -->

            <v-list-item-title>
              Order received confirmed from the customer, caller ID
              <strong> 717372 @kumar</strong>
            </v-list-item-title>

            <v-list-item-subtitle
              >Please contact other member...</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <p class="caption">
              {{
                new Date().toJSON().slice(0, 10).split("-").reverse().join("/")
              }}
              <v-btn x-small icon color="gray">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </p>
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-for="i in 3" :key="i">
          <v-list-item-avatar size="55">
            <img
              src="https://avatars.githubusercontent.com/u/51409281?v=4"
              alt="User"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <!-- Order Received    -->

            <v-list-item-title>
                Order ID 62127 shipped through <strong> Shiprocket</strong>. Payment received in advance.
              
            </v-list-item-title>

            <v-list-item-subtitle
              >Please contact other member...</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <p class="caption">
              {{
                new Date().toJSON().slice(0, 10).split("-").reverse().join("/")
              }}
              <v-btn x-small icon color="gray">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </p>
          </v-list-item-action>
        </v-list-item>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <p>dsljfslkdfsd</p>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh"
        ><p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae natus
          saepe explicabo! Nisi delectus totam unde a fugiat dolores iste,
          voluptatum exercitationem culpa eligendi ducimus voluptatem quo.
          Molestiae, ut provident?
        </p>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ea
          magni ipsam repellendus adipisci sed iusto numquam fugit modi
          veritatis eligendi laborum minima aperiam, asperiores facere saepe
          aspernatur repellat inventore.
        </p>
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions([""]),
  },
  computed: {
    ...mapGetters([]),
  },
  async created() {},
};
</script>
<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>