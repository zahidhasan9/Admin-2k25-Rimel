// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, MenuItem, SubMenu, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuItem href='/home' icon={<i className='tabler-smart-home' />}>
          Home
        </MenuItem>
        <MenuItem href='/about' icon={<i className='tabler-info-circle' />}>
          About
        </MenuItem>
      </Menu> */}
      {/* <Menu
          popoutMenuOffset={{ mainAxis: 23 }}
          menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
          renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
          renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
          menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
        >
          <GenerateVerticalMenu menuData={menuData(dictionary)} />
        </Menu> */}

      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu label={'dashboards'} icon={<i className='tabler-smart-home' />}>
          <MenuItem href={`/dashboards/crm`}>CRM</MenuItem>
          <MenuItem href={`/dashboards/analytics`}>Analytics</MenuItem>
          <MenuItem href={`/dashboards/ecommerce`}>Ecommerce</MenuItem>
          <MenuItem href={`/dashboards/academy`}>Academy</MenuItem>
          <MenuItem href={`/dashboards/logistics`}>Logistics</MenuItem>
        </SubMenu>

        <MenuSection label='Apps & Pages'>
          <SubMenu label='eCommerce' icon={<i className='tabler-shopping-cart' />}>
            <MenuItem href={`/apps/ecommerce/dashboard`}>Dashboard</MenuItem>
            <SubMenu label='Products'>
              <MenuItem href={`/apps/ecommerce/products/list`}>Products List</MenuItem>
              <MenuItem href={`/apps/ecommerce/products/add`}> Add Products </MenuItem>
              <MenuItem href={`/apps/ecommerce/products/category`}>Products Category</MenuItem>
            </SubMenu>
            <SubMenu label='Order'>
              <MenuItem href={`/apps/ecommerce/orders/list`}> Orders List</MenuItem>
              <MenuItem
                href={`/apps/ecommerce/orders/details/5434`}
                exactMatch={false}
                activeUrl='/apps/ecommerce/orders/details'
              >
                {' '}
                Error{' '}
              </MenuItem>
            </SubMenu>
            <SubMenu label={'Customer'}>
              <MenuItem href={`/apps/ecommerce/customers/list`}>Customers List </MenuItem>
              <MenuItem
                href={`/apps/ecommerce/customers/details/879861`}
                exactMatch={false}
                activeUrl='/apps/ecommerce/customers/details'
              >
                Customers Details
              </MenuItem>
            </SubMenu>
            <MenuItem href={`/apps/ecommerce/manage-reviews`}>Manage Reviews</MenuItem>
            <MenuItem href={`/apps/ecommerce/referrals`}>Referrals</MenuItem>
            <MenuItem href={`/apps/ecommerce/settings`}>Settings</MenuItem>
          </SubMenu>
          <SubMenu label={'academy'} icon={<i className='tabler-school' />}>
            <MenuItem href={`/apps/academy/dashboard`}>dashboard`</MenuItem>
            <MenuItem href={`/apps/academy/my-courses`}>my-course</MenuItem>
            <MenuItem href={`/apps/academy/course-details`}>course-details</MenuItem>
          </SubMenu>
          <SubMenu label={'logistics'} icon={<i className='tabler-truck' />}>
            <MenuItem href={`/apps/logistics/dashboard`}></MenuItem>
            <MenuItem href={`/apps/logistics/fleet`}></MenuItem>
          </SubMenu>

          <SubMenu label={'invoice'} icon={<i className='tabler-file-description' />}>
            <MenuItem href={`/apps/invoice/list`}>List</MenuItem>
            <MenuItem href={`/apps/invoice/preview/4987`} exactMatch={false} activeUrl='/apps/invoice/preview'>
              Details
            </MenuItem>
            <MenuItem href={`/apps/invoice/edit/4987`} exactMatch={false} activeUrl='/apps/invoice/edit'>
              Edit
            </MenuItem>
            <MenuItem href={`/apps/invoice/add`}>Add</MenuItem>
          </SubMenu>
          <SubMenu label={'user'} icon={<i className='tabler-user' />}>
            <MenuItem href={`/apps/user/list`}></MenuItem>
            <MenuItem href={`/apps/user/view`}></MenuItem>
          </SubMenu>
          <SubMenu label={'rolesPermissions'} icon={<i className='tabler-lock' />}>
            <MenuItem href={`/apps/roles`}></MenuItem>
            <MenuItem href={`/apps/permissions`}></MenuItem>
          </SubMenu>
          <SubMenu label={'pages'} icon={<i className='tabler-file' />}>
            <MenuItem href={`/pages/user-profile`}></MenuItem>
            <MenuItem href={`/pages/account-settings`}></MenuItem>
            <MenuItem href={`/pages/faq`}></MenuItem>
            <MenuItem href={`/pages/pricing`}></MenuItem>
            <SubMenu label={'miscellaneous'}>
              <MenuItem href={`/pages/misc/coming-soon`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/misc/under-maintenance`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/misc/404-not-found`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/misc/401-not-authorized`} target='_blank'></MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={'authPages'} icon={<i className='tabler-shield-lock' />}>
            <SubMenu label={'login'}>
              <MenuItem href={`/pages/auth/login-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/login-v2`} target='_blank'></MenuItem>
            </SubMenu>
            <SubMenu label={'register'}>
              <MenuItem href={`/pages/auth/register-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/register-v2`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/register-multi-steps`} target='_blank'></MenuItem>
            </SubMenu>
            <SubMenu label={'verifyEmail'}>
              <MenuItem href={`/pages/auth/verify-email-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/verify-email-v2`} target='_blank'></MenuItem>
            </SubMenu>
            <SubMenu label={'forgotPassword'}>
              <MenuItem href={`/pages/auth/forgot-password-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/forgot-password-v2`} target='_blank'></MenuItem>
            </SubMenu>
            <SubMenu label={'resetPassword'}>
              <MenuItem href={`/pages/auth/reset-password-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/reset-password-v2`} target='_blank'></MenuItem>
            </SubMenu>
            <SubMenu label={'twoSteps'}>
              <MenuItem href={`/pages/auth/two-steps-v1`} target='_blank'></MenuItem>
              <MenuItem href={`/pages/auth/two-steps-v2`} target='_blank'></MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={'wizardExamples'} icon={<i className='tabler-dots' />}>
            <MenuItem href={`/pages/wizard-examples/checkout`}></MenuItem>
            <MenuItem href={`/pages/wizard-examples/property-listing`}></MenuItem>
            <MenuItem href={`/pages/wizard-examples/create-deal`}></MenuItem>
          </SubMenu>
          <MenuItem href={`/pages/dialog-examples`} icon={<i className='tabler-square' />}>
            Modal
          </MenuItem>
          <SubMenu label={'widgetExamples'} icon={<i className='tabler-chart-bar' />}>
            <MenuItem href={`/pages/widget-examples/basic`}>Basic</MenuItem>
            <MenuItem href={`/pages/widget-examples/advanced`}>Advanced</MenuItem>
            <MenuItem href={`/pages/widget-examples/statistics`}>Statistics</MenuItem>
            <MenuItem href={`/pages/widget-examples/charts`}>Charts</MenuItem>
            <MenuItem href={`/pages/widget-examples/actions`}>Actions</MenuItem>
          </SubMenu>
        </MenuSection>
        <MenuSection label={'forms And Tables'}>
          <MenuItem href={`/forms/form-layouts`} icon={<i className='tabler-layout' />}>
            Form Layouts
          </MenuItem>
          <MenuItem href={`/forms/form-validation`} icon={<i className='tabler-checkup-list' />}>
            Form Validation
          </MenuItem>
          <MenuItem href={`/forms/form-wizard`} icon={<i className='tabler-git-merge' />}>
            Form Wizard
          </MenuItem>
          <MenuItem href={`/react-table`} icon={<i className='tabler-table' />}>
            React Table
          </MenuItem>
        </MenuSection>
        <MenuSection label={'charts Misc'}>
          <SubMenu label={'charts'} icon={<i className='tabler-chart-donut-2' />}>
            <MenuItem href={`/charts/apex-charts`}>Apex Charts</MenuItem>
            <MenuItem href={`/charts/recharts`}>Re Charts</MenuItem>
            <MenuItem disabled></MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
