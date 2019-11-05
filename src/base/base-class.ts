import { Vue, Component } from "vue-property-decorator";

// @Component
export class BaseClass extends Vue {
  created() {
    console.log("In Created Method ");
  }
}
