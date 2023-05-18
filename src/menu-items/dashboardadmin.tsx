// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconBasket, IconLayoutKanban, IconNfc } from '@tabler/icons';
import { OverrideIcon } from 'types';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconBasket,
    IconLayoutKanban,
    IconNfc
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

interface DashboardMenuProps {
    id: string;
    title: React.ReactNode | string;
    type: string;
    children: {
        id: string;
        title: React.ReactNode | string;
        type: string;
        url: string;
        icon: OverrideIcon;
        breadcrumbs: boolean;
    }[];
}

const dashboardAdmin: DashboardMenuProps = {
    id: 'dashboard-admin',
    title: '',
    type: 'group',
    children: [
        {
            id: 'detail-user',
            title: <FormattedMessage id="Hồ sơ cá nhân" />,
            type: 'item',
            url: '/detail-user',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'all-users',
            title: <FormattedMessage id="Tất cả hồ sơ" />,
            type: 'item',
            url: '/all-users',
            icon: icons.IconNfc,
            breadcrumbs: false
        },
        {
            id: 'manage-articles',
            title: <FormattedMessage id="Quản lý bài viết" />,
            type: 'item',
            url: '/manage-articles',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
    ]
};

export default dashboardAdmin;
