<template>
  <button @click="clickLogin">Login</button>
  <el-dialog v-model="loginDialogVisible">
    <canvas id="QRCode" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import * as QRCode from 'qrcode';
import { getLoginQRCode, getLoginStatus } from '/@/api/user';
import { sleep } from '/@/utils/utils';

let stop = false;

const loopGetLoginStatus = async (oauthKey: string) => {
  let r = await getLoginStatus(oauthKey);
  while (r.code !== 0 && !stop) {
    await sleep();
    r = await getLoginStatus(oauthKey);
  }
};

const loginDialogVisible = ref(false);
const clickLogin = () => {
  loginDialogVisible.value = true;
};

watch(loginDialogVisible, async (val) => {
  if (val) {
    stop = false;
    const result = await getLoginQRCode();
    const { url, oauthKey } = result.data;
    QRCode.toCanvas(document.querySelector('#QRCode'), url);
    loopGetLoginStatus(oauthKey);
  } else {
    stop = true;
  }
});
</script>
