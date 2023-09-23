<template>
    <div>
        <pd-row :gutter="10">
            <pd-col span="3"><div class="col-div"></div></pd-col>
            <pd-col span="2"><div class="col-div"></div></pd-col>
            <pd-col span="10"><div class="col-div"></div></pd-col>
            <pd-col span="4"><div class="col-div"></div></pd-col>
    </pd-row>
    <pd-row :gutter="10">
            <pd-col span="5"><div class="col-div"></div></pd-col>
            <pd-col span="2"><div class="col-div"></div></pd-col>
            <pd-col span="1"><div class="col-div"></div></pd-col>
    </pd-row>
    </div>
</template>

<style>
.col-div {
  background-color: rgb(97, 126, 126); 
  height: 40px; 
  border-radius: 20px;
}
</style>