<template>
  <UAccordion
    :items="accordionSections"
    color="black"
    size="xl"
    variant="ghost"
    :multiple="true"
  >
    <template #chipTypes>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FLinux49" />
          <FilterButton buttonFilterID="FLinux5x" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FLinux6x" />
          <FilterButton buttonFilterID="FFreeRTOS" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FRtThread" />
          <FilterButton buttonFilterID="FKeil" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FVSCode" />
          <FilterButton buttonFilterID="FOpenWrt" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FUbuntu24" />
          <FilterButton buttonFilterID="FArmbian" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FOpenVela" />
          <FilterButton buttonFilterID="FNuttX" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FZephyr" />
          <FilterButton buttonFilterID="FAndroid" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FBuildroot" />
          <FilterButton buttonFilterID="FYocto" />
        </div>
      </div>
    </template>

    <template #linuxBoards>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fhpm6e" />
          <FilterButton buttonFilterID="Fra6m5" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fr128s2" />
          <FilterButton buttonFilterID="Fimx6ull" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fstm32mp157" />
          <FilterButton buttonFilterID="Fstm32mp135" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fstm32f103" />
          <FilterButton buttonFilterID="Fstm32h5" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fstm32h7r" />
          <FilterButton buttonFilterID="Fv853" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fv851s" />
          <FilterButton buttonFilterID="Fv851se" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Ft113s3" />
          <FilterButton buttonFilterID="Ft113s4" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Ft113i" />
          <FilterButton buttonFilterID="Fd1h" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fd1s" />
          <FilterButton buttonFilterID="Ff133" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Frk3568" />
          <FilterButton buttonFilterID="Frk3576" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fssd210" />
          <FilterButton buttonFilterID="Fssd202d" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fr818" />
          <FilterButton buttonFilterID="Fa133" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fk230" />
          <FilterButton buttonFilterID="Fk510" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fv821" />
          <FilterButton buttonFilterID="Fv821b" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Fv861" />
          <FilterButton buttonFilterID="Ft153m3" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="Ft153mx" />
          <FilterButton buttonFilterID="Ft527" />
        </div>
      </div>
    </template>

    <template #chipVendors>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FAllwinner" />
          <FilterButton buttonFilterID="FRockchip" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FCanaan" />
          <FilterButton buttonFilterID="FSTM32" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FRenesas" />
          <FilterButton buttonFilterID="FEsp32" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FNXP" />
          <FilterButton buttonFilterID="FSigmastar" />
        </div>
      </div>
    </template>

    <template #specializedTech>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FAI" />
          <FilterButton buttonFilterID="FDriver" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FSystem" />
        </div>
      </div>
    </template>

    <template #availableComponents>
      <div class="ml-2">
        <FilterRange rangeFilterID="FNbComponents" />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2 flex flex-col gap-1">
        <FilterRange rangeFilterID="FNbStars" />
        <FilterRange rangeFilterID="FNbDownloads" />
      </div>
    </template>
  </UAccordion>
  <div v-if="nbTouchedFilters() > 0" class="flex justify-end">
    <UButton
      color="gray"
      variant="ghost"
      size="xs"
      icon="i-material-symbols-delete-outline-rounded"
      :label="`Clear ${nbTouchedFilters()} filter${suffix}`"
      @click="clearFiltering()"
    />
  </div>
</template>

<script setup lang="ts">
const accordionSections = [
  {
    label: "系统类型",
    defaultOpen: true,
    slot: "chipTypes",
  },
  {
    label: "芯片型号",
    defaultOpen: true,
    slot: "linuxBoards",
  },
  {
    label: "芯片厂商",
    defaultOpen: true,
    slot: "chipVendors",
  },
  {
    label: "专用技术",
    defaultOpen: true,
    slot: "specializedTech",
  },
  {
    label: "可用组件",
    defaultOpen: true,
    slot: "availableComponents",
  },
  {
    label: "热门程度",
    defaultOpen: true,
    slot: "popularity",
  },
]

const { nbTouchedFilters, clearFiltering } = useFilterStore()

const suffix = computed(() => (nbTouchedFilters() == 1 ? "" : "s"))
</script>
