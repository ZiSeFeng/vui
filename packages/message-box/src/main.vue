<template>
  <transition name="zg-msgbox-fade">
    <div v-show="visible"
         class="zg-msgbox-wrapper">
      <div class="zg-message-box">
        <div class="zg-msgbox-header">
          <div class="zg-msgbox-title">
            <span>{{ title }}</span>
          </div>
          <button class="zg-msgbox-headerbtn">
            <i class="zg-msgbox-close"
               @click="close">x</i>
          </button>
        </div>
        <div class="zg-msgbox-content">
          <p>{{ text }}</p>
        </div>
        <div class="zg-msgbox-btns">
          <button class="zg-btn zg-btn-small"
                  @click="close">
            取消
          </button>
          <button class="zg-btn zg-btn-primary zg-btn-small">
            确定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ModalBox",
  data() {
    return {
      visible: true,
      closed: false
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.parentNode.removeChild(this.$el);
        setTimeout(() => {
          this.closeds();
        });
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
    }
  }
};
</script>

<style lang="scss">
html {
  color: #212529;
}
/* input, textarea */
.zg-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.zg-textarea {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
input:focus,
textarea:focus {
  outline: none;
  border: 1px solid #51b7ff;
}

/* modal */
.zg-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  z-index: 10;
}

/* button */
.zg-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.zg-btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
.zg-btn:focus,
.zg-btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.zg-btn.block {
  display: block;
  width: 100%;
}
.zg-btn-small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.zg-btn-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.zg-btn-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.zg-btn-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.zg-btn-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.zg-btn-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.zg-btn-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}
.zg-btn-success.is-plain {
  olor: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}
.zg-btn-info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.zg-btn-warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}
.zg-btn-danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}
.zg-btn.is-plain:active {
  background: #fff;
  outline: none;
}
.zg-btn.is-plain:focus,
.zg-btn.is-plain:hover {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.zg-btn-primary.is-plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: none;
}
.zg-btn-primary.is-plain:focus,
.zg-btn-primary.is-plain:hover {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}
.zg-btn-success.is-plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: none;
}
.zg-btn-success.is-plain:focus,
.zg-btn-success.is-plain:hover {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}
.zg-btn-info.is-plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: none;
}
.zg-btn-info.is-plain:focus,
.zg-btn-info.is-plain:hover {
  background: #909399;
  border-color: #909399;
  color: #fff;
}
.zg-btn-warning.is-plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: none;
}
.zg-btn-warning.is-plain:focus,
.zg-btn-warning.is-plain:hover {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}
.zg-btn-danger.is-plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: none;
}
.zg-btn-danger.is-plain:focus,
.zg-btn-danger.is-plain:hover {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}
.zg-btn.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
/* message */
.zg-message {
  min-width: 380px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #edf2fc;
  -webkit-transition: opacity 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, -webkit-transform 0.4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.zg-message-icon {
  color: #909399;
  font-size: 24px;
}
.zg-message-content {
  padding: 0;
  font-size: 14px;
  line-height: 1;
  color: #909399;
}
.zg-message-closeBtn:focus,
.zg-message-content:focus {
  outline-width: 0;
}
.zg-message p {
  margin: 0;
}
.zg-message-closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px;
}
.zg-message-fade-enter,
.zg-message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
.zg-message.is-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.zg-message-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.zg-message-success .zg-message-content {
  color: #67c23a;
}
.zg-message-warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.zg-message-warning .zg-message-content {
  color: #e6a23c;
}
.zg-message-error {
  background-color: #fef0f0;
  border-color: #fde2e2;
}
.zg-message-error .zg-message-content {
  color: #f56c6c;
}
.zg-message-icon {
  margin-right: 10px;
}
.zg-message-closeBtn:hover {
  color: #909399;
}
.zg-message .zg-icon-success {
  color: #67c23a;
}
.zg-message .zg-icon-error {
  color: #f56c6c;
}
.zg-message .zg-icon-info {
  color: #909399;
}
.zg-message .zg-icon-warning {
  color: #e6a23c;
}

/* mwssage-box */
.zg-msgbox-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 11;
}
.zg-msgbox-wrapper::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.zg-message-box {
  display: inline-block;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.zg-msgbox-header {
  position: relative;
  padding: 15px 15px 10px;
}
.zg-msgbox-headerbtn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  border: none;
  outline: 0;
  background: 0 0;
  font-size: 16px;
  cursor: pointer;
}
.zg-msgbox-headerbtn .zg-msgbox-close {
  color: #909399;
}
.zg-msgbox-headerbtn:focus .zg-mesgbox-close,
.zg-msgbox-headerbtn:hover .zg-msgbox-close {
  color: #409eff;
}
.zg-msgbox-content {
  position: relative;
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}
.zg-msgbox-message {
  margin: 0;
}
.zg-msgbox-message p {
  margin: 0;
  line-height: 24px;
}
.zg-msgbox-btns {
  padding: 5px 15px 0;
  text-align: right;
}
.zg-msgbox-btns button:nth-child(2) {
  margin-left: 10px;
}

.zg-msgbox-fade-enter-active {
  -webkit-animation: msgbox-fade-in 0.3s;
  animation: msgbox-fade-in 0.3s;
}
.zg-msgbox-fade-leave-active {
  -webkit-animation: msgbox-fade-out 0.3s;
  animation: msgbox-fade-out 0.3s;
}
@-webkit-keyframes msgbox-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes msgbox-fade-in {
  0% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes msgbox-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
@keyframes msgbox-fade-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
