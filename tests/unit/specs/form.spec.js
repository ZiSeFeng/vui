import { createVue, destroyVM } from "../util";

const DELAY = 50;

describe("MForm", () => {
  let vm;
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require("es6-promise").Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    destroyVM(vm);
  });

  it("label width", done => {
    vm = createVue({
      template: `
        <m-form ref="form" :model="form" labelWidth="80">
          <m-form-item label="活动名称">
            <m-input v-model="form.name"/>
          </m-form-item>
        </m-form>
      `,
      data() {
        return {
          form: {
            name: ""
          }
        };
      }
    }, true);
    expect(vm.$el.querySelector(".m-form-item--label").style.width).to.equal("80px");
    expect(vm.$el.querySelector(".m-form-item--content").style.marginLeft).to.equal("80px");
    done();
  });
});
