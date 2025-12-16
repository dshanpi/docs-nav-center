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
          <FilterButton buttonFilterID="FMPU" />
          <FilterButton buttonFilterID="FMCU" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FLinux" />
          <FilterButton buttonFilterID="FDriver" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FGUI" />
          <FilterButton buttonFilterID="FSystem" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FDevelopment" />
          <FilterButton buttonFilterID="FHardware" />
        </div>
      </div>
    </template>

    <template #linuxBoards>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="F100ASK_V853_PRO" />
          <FilterButton buttonFilterID="FSTM32MP157_PRO" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FSTM32F103_PRO" />
          <FilterButton buttonFilterID="FIMX6ULL_PRO" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FIMX6ULL_MINI" />
          <FilterButton buttonFilterID="FDshanPI_One" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FDshanPI_PicoW" />
          <FilterButton buttonFilterID="FDshanPIxCanMV" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FDshanPI_Vision" />
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
    label: "Linux开发板",
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
