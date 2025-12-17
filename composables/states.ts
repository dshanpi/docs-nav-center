let initialButtonFiltering: { [K in ButtonFilterID]: { selected: boolean } } = {
  FLinux49: { selected: false },
  FLinux5x: { selected: false },
  FLinux6x: { selected: false },
  FFreeRTOS: { selected: false },
  FRtThread: { selected: false },
  FKeil: { selected: false },
  FVSCode: { selected: false },
  FOpenWrt: { selected: false },
  FUbuntu24: { selected: false },
  FArmbian: { selected: false },
  FOpenVela: { selected: false },
  FNuttX: { selected: false },
  FZephyr: { selected: false },
  FAndroid: { selected: false },
  FBuildroot: { selected: false },
  FYocto: { selected: false },
  // 保留其他现有的过滤器
  FSOC: { selected: false },
  FSTM32: { selected: false },
  FRenesas: { selected: false },
  FEsp32: { selected: false },
  FAllwinner: { selected: false },
  FRockchip: { selected: false },
  FCanaan: { selected: false },
  FGUI: { selected: false },
  FAI: { selected: false },
  FDriver: { selected: false },
  FDevelopment: { selected: false },
  FHardware: { selected: false },
  FSystem: { selected: false },
  FNXP: { selected: false },
  FSigmastar: { selected: false },
  // 移除旧的开发板型号
  // F100ASK_V853_PRO: { selected: false },
  // FSTM32MP157_PRO: { selected: false },
  // FSTM32F103_PRO: { selected: false },
  // FIMX6ULL_PRO: { selected: false },
  // FIMX6ULL_MINI: { selected: false },
  // FDshanPI_One: { selected: false },
  // FDshanPI_PicoW: { selected: false },
  // FDshanPIxCanMV: { selected: false },
  // FDshanPI_Vision: { selected: false },
  // 新开发板型号
  Fhpm6e: { selected: false },
  Fra6m5: { selected: false },
  Fr128s2: { selected: false },
  Fimx6ull: { selected: false },
  Fstm32mp157: { selected: false },
  Fstm32mp135: { selected: false },
  Fstm32f103: { selected: false },
  Fstm32h5: { selected: false },
  Fstm32h7r: { selected: false },
  Fv853: { selected: false },
  Fv851s: { selected: false },
  Fv851se: { selected: false },
  Ft113s3: { selected: false },
  Ft113s4: { selected: false },
  Ft113i: { selected: false },
  Fd1h: { selected: false },
  Fd1s: { selected: false },
  Ff133: { selected: false },
  Frk3568: { selected: false },
  Frk3576: { selected: false },
  Fssd210: { selected: false },
  Fssd202d: { selected: false },
  Fr818: { selected: false },
  Fa133: { selected: false },
  Fk230: { selected: false },
  Fk510: { selected: false },
  Fv821: { selected: false },
  Fv821b: { selected: false },
  Fv861: { selected: false },
  Ft153m3: { selected: false },
  Ft153mx: { selected: false },
  Ft527: { selected: false },
}

let initialRangeFiltering: { [K in RangeFilterID]: { qty: number } } = {
  FNbStars: { qty: 0 },
  FNbDownloads: { qty: 0 },
  FNbComponents: { qty: 0 },
}

import { type ButtonFilterID, type RangeFilterID } from "@/types/filters.types"
import { buttonFilters } from "@/data/filters"

export const useFilterStore = () => {
  const buttonFiltering = useState("buttonFilterStore", () => initialButtonFiltering)
  const rangeFiltering = useState("rangeFilterStore", () => initialRangeFiltering)

  // run when a filter button is clicked
  const invertButtonFiltering = (filterID: ButtonFilterID) => {
    // 1 - invert the filter selected state
    const oldSelected = buttonFiltering.value[filterID].selected
    buttonFiltering.value[filterID].selected = !oldSelected

    // 2 - some filters can auto-disable already selected filters
    // (eg. selected `Styled` will auto disable `Unstyled`)
    const autoDisable = <ButtonFilterID>findBy("id", filterID, buttonFilters)!.autoDisable
    if (oldSelected === false && !!autoDisable) {
      buttonFiltering.value[autoDisable].selected = false
    }
  }

  // run when a range is changed
  const changeRangeFiltering = (rangeFilterID: RangeFilterID, qty: number) => {
    rangeFiltering.value[rangeFilterID].qty = qty
  }

  const touchedButtonFilterIDs = () => <ButtonFilterID[]>Object.entries(
      buttonFiltering.value
    )
      // NOTE: <FilterID[]> allows a more accurate type inference
      .filter(([_, value]) => value.selected === true)
      .map(([key, _]) => key)

  const touchedRangeFilterIDs = () => <RangeFilterID[]>Object.entries(
      rangeFiltering.value
    )
      .filter(([_, value]) => value.qty > 0)
      .map(([key, _]) => key)

  const nbTouchedFilters = () =>
    touchedButtonFilterIDs().length + touchedRangeFilterIDs().length

  const clearFiltering = () => {
    // NOTE: <ButtonFilterID[]> allows a more accurate type inference
    for (let filterID of <ButtonFilterID[]>Object.keys(buttonFiltering.value)) {
      buttonFiltering.value[filterID].selected = false
    }

    for (let rangeFilterID of <RangeFilterID[]>Object.keys(rangeFiltering.value)) {
      rangeFiltering.value[rangeFilterID].qty = 0
    }
  }

  return {
    buttonFiltering,
    rangeFiltering,
    invertButtonFiltering,
    changeRangeFiltering,
    touchedButtonFilterIDs,
    nbTouchedFilters,
    clearFiltering,
  }
}

// ---------------------------------------------------------------------------------------

import { sections } from "@/data/sections"
export const useNbComponentsStore = () => {
  /* Return the number of potential existing components. useful to compute the availability score  */
  let componentCount = sections.reduce((count, section) => {
    return count + section.components.length
  }, 0)
  return useState("nbComponentsStore", () => componentCount)
}

// ---------------------------------------------------------------------------------------

export const useShowMissingStore = () => {
  /* Show all components, even the missing ones, on a library detail */
  const showMissing = useState("showMissingStore", () => true)

  /* Toggle */
  const invertMissing = () => {
    showMissing.value = !showMissing.value
  }

  return {
    showMissing,
    invertMissing,
  }
}
