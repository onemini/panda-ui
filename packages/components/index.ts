import { App } from 'vue'
import PdButton from './button'
import PdInput from './input'
import PdIcon from './icon'
import PdCheckbox from './checkbox'
import PdCheckboxGroup from './checkbox-group'

import PdBacktop from './backtop'
import PdSelect from './select'
import PdAvatar from './avatar'
import PdModal from './modal'
import PdSwitch from './switch'
import PdTooltip from './tooltip'
import PdSpace from './space'
import PdCard from './card'
import PdDrawer from './drawer'
import PdTab from './tab'
import PdMenu from './menu'
import PdTag from './tag'
import PdLockScreen from './lock-screen'
import PdCollapseTransition from './collapse-transition'
import PdCollapse from './collapse'
import { PdTabItem } from './tab'
import { PdContainer, PdAside, PdMain, PdHeader } from './layout'
import { message } from './message'
import { PdLoading, loadingService } from './loading'

export {
  PdButton,
  PdInput,
  PdLoading,
  loadingService,
  PdIcon,
  message,
  PdCheckbox,
  PdCheckboxGroup,
  PdBacktop,
  PdModal,
  PdContainer,
  PdAside,
  PdMain,
  PdHeader,
  PdAvatar,
  PdSelect,
  PdSwitch,
  PdSpace,
  PdCard,
  PdDrawer,
  PdTab,
  PdMenu,
  PdLockScreen,
  PdTag,
  PdCollapseTransition,
  PdCollapse,
}

export * from './button'

export default {
  install(app: App): void {
    app.component(PdButton.name, PdButton)
    app.component(PdInput.name, PdInput)
    app.component(PdIcon.name, PdIcon)
    app.component(PdCheckbox.name, PdCheckbox)
    app.component(PdCheckboxGroup.name, PdCheckboxGroup)
    app.component(PdBacktop.name, PdBacktop)
    app.component(PdModal.name, PdModal)
    app.component(PdContainer.name, PdContainer)
    app.component(PdAside.name, PdAside)
    app.component(PdMain.name, PdMain)
    app.component(PdHeader.name, PdHeader)
    app.component(PdAvatar.name, PdAvatar)
    app.component(PdSelect.name, PdSelect)
    app.component(PdSwitch.name, PdSwitch)
    app.component(PdTooltip.name, PdTooltip)
    app.component(PdCard.name, PdCard)
    app.component(PdSpace.name, PdSpace)
    app.component(PdDrawer.name, PdDrawer)
    app.component(PdMenu.name, PdMenu)
    app.component(PdTab.name, PdTab)
    app.component(PdTabItem.name, PdTabItem)
    app.component(PdLockScreen.name, PdLockScreen)
    app.component(PdTag.name, PdTag)
    app.component(PdCollapse.name, PdCollapse)
    app.component(PdCollapseTransition.name, PdCollapseTransition)
    app.directive('loading', PdLoading)
    app.config.globalProperties.PdLoading = loadingService
    app.config.globalProperties.$message = message
  },
}
