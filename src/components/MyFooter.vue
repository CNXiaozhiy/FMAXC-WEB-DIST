<template>
  <div id="MyFooter">
    <span> Copyright © 2023-2025 FMaxCloud 晓治网络技术团队 版权所有 </span>
    <span> "庭中梨花谢又一年 立清宵月华洒空阶" </span>
  </div>
</template>

<script>
export default {
    name: 'MyFooter'
}
</script>

<style lang="css" scoped>
#MyFooter {
  background: rgba(0, 0, 0, 0.3);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;

  color: white;
  font-size: 14px;
}
</style>